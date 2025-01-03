import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import WorkoutLayout from "../components/workout/WorkoutLayout";
import styles from "../styles/Workout.module.css";
import { sumExercises, sumBreaks, formatTime } from "../helpers/convertTime";

import beginnerPresets from "../data/workouts/beginner";
import hiitPresets from "../data/workouts/hiit";
import fullbodyPresets from "../data/workouts/full_body";

const presets = [...beginnerPresets, ...hiitPresets, ...fullbodyPresets];

const Workout = () => {
  const router = useRouter();

  // Workout configuration state
  const [roundCount, setRoundCount] = useState(0);
  const [breakLength, setBreakLength] = useState(0);
  const [roundBreak, setRoundBreak] = useState(0);
  const [timeIntervals, setTimeIntervals] = useState([]);
  const [exerciseNames, setExerciseNames] = useState([]);
  const [exerciseDescriptions, setExerciseDescriptions] = useState([]);

  // Workout progress state
  const [currentInterval, setCurrentInterval] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isCooldown, setIsCooldown] = useState(false);
  const [cooldownTimer, setCooldownTimer] = useState(0);
  const [isRoundComplete, setIsRoundComplete] = useState(false);
  const [isWorkoutComplete, setIsWorkoutComplete] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Audio state
  const [countAudio, setCountAudio] = useState(null);
  const [startAudio, setStartAudio] = useState(null);
  const [completeAudio, setCompleteAudio] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCountAudio(new Audio("/audio/count5.wav"));
      setStartAudio(new Audio("/audio/done4.wav"));
      setCompleteAudio(new Audio("/audio/done3.wav"));
    }
  }, []);

  useEffect(() => {
    if (router.query.preset) {
      const index = router.query.preset;
      let preset = presets.find(
        (preset) => Number(preset.id) === Number(index)
      );

      if (!preset && router.query.isCustom) {
        const custom = sessionStorage.getItem("customPreset");
        if (custom) {
          preset = JSON.parse(custom);
        } else {
          console.error("Preset not found");
          return;
        }
      }

      if (!preset) {
        console.error("Preset not found");
        return;
      }

      const rounds = preset.rounds;
      const exerciseBreaks = preset.exerciseBreaks;
      const roundBreaks = preset.roundBreaks;

      setRoundCount(rounds);
      setBreakLength(exerciseBreaks);
      setRoundBreak(roundBreaks);

      // Original arrays
      const originalTimeIntervals = preset.workout.map(
        (exercise) => exercise.time
      );
      const originalExerciseNames = preset.workout.map(
        (exercise) => exercise.name
      );
      const originalExerciseDescriptions = preset.workout.map(
        (exercise) => exercise.description
      );

      // Repeat the arrays based on the number of rounds
      const repeatArray = (arr, rounds) => Array(rounds).fill(arr).flat();

      const repeatedTimeIntervals = repeatArray(originalTimeIntervals, rounds);
      const repeatedExerciseNames = repeatArray(originalExerciseNames, rounds);
      const repeatedExerciseDescriptions = repeatArray(
        originalExerciseDescriptions,
        rounds
      );

      setTimeIntervals(repeatedTimeIntervals);
      setExerciseNames(repeatedExerciseNames);
      setExerciseDescriptions(repeatedExerciseDescriptions);

      // Set initial values
      setTimer(repeatedTimeIntervals[0]);
      setCurrentInterval(0);
      setCooldownTimer(exerciseBreaks);
    }
  }, [router.query]);

  // Handle exercise timer
  useEffect(() => {
    let interval;
    const handleKeydown = (event) => {
      if (event.code === "Space") {
        setIsPaused((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeydown);

    if (isPaused) {
      return () => window.removeEventListener("keydown", handleKeydown);
    }

    if (isWorkoutComplete) {
      window.removeEventListener("keydown", handleKeydown);
      return;
    }

    if (isCooldown) {
      interval = setInterval(() => {
        setCooldownTimer((prev) => {
          if (prev === 1) {
            setIsCooldown(false);
            setIsRoundComplete(false);
            setCooldownTimer(breakLength);
            setTimer(timeIntervals[currentInterval]);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (currentInterval < timeIntervals.length) {
        interval = setInterval(() => {
          setTimer((prev) => {
            if (prev === 1) {
              const nextInterval = currentInterval + 1;
              const exercisesPerRound = timeIntervals.length / roundCount;
              const isNewRound = nextInterval % exercisesPerRound === 0;

              if (nextInterval < timeIntervals.length) {
                setIsCooldown(true);
                if (isNewRound) {
                  setIsRoundComplete(true);
                  setCooldownTimer(roundBreak);
                }
                setCurrentInterval(nextInterval);
              } else {
                setIsWorkoutComplete(true);
              }
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [
    currentInterval,
    isCooldown,
    isPaused,
    isRoundComplete,
    isWorkoutComplete,
    timeIntervals,
    breakLength,
    roundBreak,
    roundCount,
  ]);

  // Handle audio cues
  useEffect(() => {
    if (timer === 3 || timer === 2 || timer === 1) {
      countAudio?.play();
    }

    if (timer === 1) {
      setTimeout(() => {
        completeAudio?.play();
      }, 1000);
    }
  }, [timer, countAudio, completeAudio]);

  useEffect(() => {
    if (cooldownTimer === 3 || cooldownTimer === 2 || cooldownTimer === 1) {
      countAudio?.play();
    }

    if (cooldownTimer === 1) {
      setTimeout(() => {
        startAudio?.play();
      }, 1000);
    }
  }, [cooldownTimer, countAudio, startAudio]);

  const handlePauseToggle = (e) => {
    e.preventDefault();
    setIsPaused(!isPaused);
  };

  const handleExerciseClick = (index) => {
    if (index === currentInterval) return;

    setCurrentInterval(index);
    setTimer(timeIntervals[index]);
    setIsCooldown(false);
    setIsRoundComplete(false);
    setIsWorkoutComplete(false);
    setCooldownTimer(breakLength);
    setIsPaused(true);
  };

  const getExercisesList = () => {
    if (!exerciseNames.length) return [];

    return exerciseNames.map((name, index) => ({
      name,
      time: timeIntervals[index],
      description: exerciseDescriptions[index],
    }));
  };

  const exercisesPerRound = timeIntervals.length / roundCount;
  const currentRound = Math.floor(currentInterval / exercisesPerRound) + 1;

  return (
    <div className={styles.wrapper}>
      <WorkoutLayout
        title={
          isWorkoutComplete
            ? "Workout complete!"
            : isCooldown
            ? "Rest"
            : exerciseNames[currentInterval]
        }
        round={
          isWorkoutComplete
            ? `You did ${timeIntervals.length} exercises`
            : isCooldown
            ? `Next: ${exerciseNames[currentInterval]}`
            : `Round ${currentRound} of ${roundCount}`
        }
        timer={isWorkoutComplete ? "🎉" : isCooldown ? cooldownTimer : timer}
        description={
          isWorkoutComplete
            ? `Total time: ${formatTime(
                sumExercises(timeIntervals) +
                  sumBreaks(
                    timeIntervals.length,
                    roundCount,
                    breakLength,
                    roundBreak
                  )
              )}`
            : isCooldown
            ? "Get ready for the next exercise"
            : exerciseDescriptions[currentInterval]
        }
        isPaused={isPaused}
        onPauseClick={handlePauseToggle}
        totalTime={isCooldown ? breakLength : timeIntervals[currentInterval]}
        isCooldown={isCooldown}
        isWorkoutComplete={isWorkoutComplete}
        exercises={getExercisesList()}
        currentInterval={currentInterval}
        onExerciseClick={handleExerciseClick}
      />
    </div>
  );
};

export default Workout;
