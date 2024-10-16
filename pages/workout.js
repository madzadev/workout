import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import WorkoutTimeline from "../components/WorkoutTimeline";
import WorkoutDisplay from "../components/WorkoutDisplay";
import WorkoutProgress from "../components/WorkoutProgress";
import styles from "../styles/Workout.module.css";
import presets from "../data/workouts";

const Workout = () => {
  const router = useRouter();

  // Set presetIndex to a default value to avoid conditional hooks
  const [presetIndex, setPresetIndex] = useState(null);
  const [roundCount, setRoundCount] = useState(0);
  const [breakLength, setBreakLength] = useState(0);
  const [roundBreak, setRoundBreak] = useState(0);
  const [timeIntervals, setTimeIntervals] = useState([]);
  const [exerciseNames, setExerciseNames] = useState([]);
  const [exerciseDescriptions, setExerciseDescriptions] = useState([]);

  // State for the workout logic
  const [timer, setTimer] = useState(0);
  const [currentInterval, setCurrentInterval] = useState(null);
  const [isCooldown, setIsCooldown] = useState(false);
  const [cooldownTimer, setCooldownTimer] = useState(0);
  const [isRoundComplete, setIsRoundComplete] = useState(false);
  const [isWorkoutComplete, setIsWorkoutComplete] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Fetch the preset data based on query params
  useEffect(() => {
    if (router.query.preset) {
      const index = router.query.preset;
      setPresetIndex(index);

      const preset = presets[index];
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

      // Set initial values for timer and cooldown based on the fetched data
      setTimer(repeatedTimeIntervals[0]);
      setCurrentInterval(0);
      setCooldownTimer(exerciseBreaks);
    }
  }, [router.query.preset]);

  // The exercise logic for the workout will stay the same as before
  const exercisesPerRound = exerciseNames.length / roundCount;
  const currentRound = Math.floor(currentInterval / exercisesPerRound) + 1;

  useEffect(() => {
    let interval;
    const handleKeydown = (event) => {
      if (event.code === "Space") {
        setIsPaused((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeydown);

    if (isPaused)
      return () => window.removeEventListener("keydown", handleKeydown);

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
              const isNewRound = nextInterval % exercisesPerRound === 0;

              if (nextInterval < timeIntervals.length) {
                setIsCooldown(true);
                if (isNewRound) {
                  setIsRoundComplete(true);
                  setCooldownTimer(roundBreak);
                }
                setCurrentInterval(nextInterval);
              } else {
                clearInterval(interval);
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
  ]);

  const handleDivClick = (index) => {
    setCurrentInterval(index);
    setTimer(timeIntervals[index]);
    setIsPaused(false);
    setIsCooldown(false);
    setIsRoundComplete(false);
    setIsWorkoutComplete(false);
    setCooldownTimer(breakLength);
  };

  // if (presetIndex === null) return null; // Avoid rendering until presetIndex is available

  const colors = ["aquamarine", "grey", "yellow"];

  return (
    <div className={styles.wrapper}>
      <WorkoutProgress
        countdown={isCooldown ? cooldownTimer : timer}
        color={isCooldown ? colors[2] : colors[0]}
        isCooldown={isCooldown}
        cooldownTimer={isRoundComplete ? roundBreak : breakLength}
        totalWorkoutTime={timeIntervals[currentInterval]}
      />
      <WorkoutDisplay
        round={currentRound}
        title={
          isWorkoutComplete
            ? "Workout completed!"
            : isCooldown
            ? "Next up:"
            : `${exerciseNames[currentInterval]} (R${currentRound})`
        }
        timer={isWorkoutComplete ? "🏆" : isCooldown ? cooldownTimer : timer}
        description={
          isWorkoutComplete
            ? "Keep up the great work!"
            : isCooldown
            ? `${exerciseNames[currentInterval]} (R${currentRound})`
            : exerciseDescriptions[currentInterval]
        }
      />
      <WorkoutTimeline
        onClick={handleDivClick}
        timeIntervals={timeIntervals}
        colors={colors}
        currentInterval={currentInterval}
        timer={isCooldown ? cooldownTimer : timer}
        isCooldown={isCooldown}
      />
    </div>
  );
};

export default Workout;
