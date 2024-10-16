import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import WorkoutTimeline from "../components/WorkoutTimeline";
import WorkoutDisplay from "../components/WorkoutDisplay";
import WorkoutProgress from "../components/WorkoutProgress";

import styles from "../styles/Workout.module.css";
import presets from "../data/workouts";

// const [presetIndex, setPresetIndex] = useState(1);
const presetIndex = 1;

const roundCount = presets[presetIndex].rounds;
const breakLength = presets[presetIndex].exerciseBreaks;
const roundBreak = presets[presetIndex].roundBreaks; // Break time in seconds between rounds
const colors = ["aquamarine", "grey", "yellow"];

// Function to repeat the array based on the number of rounds
const repeatArray = (arr, rounds) => {
  return Array(rounds).fill(arr).flat();
};

// Get original time intervals, exercise names, and descriptions
const originalTimeIntervals = presets[presetIndex].workout.map(
  (exercise) => exercise.time
);
const originalExerciseNames = presets[presetIndex].workout.map(
  (exercise) => exercise.name
);
const originalExerciseDescriptions = presets[presetIndex].workout.map(
  (exercise) => exercise.description
);

// Repeat the arrays based on the number of rounds
const timeIntervals = repeatArray(originalTimeIntervals, roundCount);
const exerciseNames = repeatArray(originalExerciseNames, roundCount);
const exerciseDescriptions = repeatArray(
  originalExerciseDescriptions,
  roundCount
);

const Workout = () => {
  const router = useRouter();
  const { preset } = router.query; // Access the preset from the query parameter

  const [currentInterval, setCurrentInterval] = useState(0);
  const [timer, setTimer] = useState(timeIntervals[0]);
  const [isCooldown, setIsCooldown] = useState(false);
  const [cooldownTimer, setCooldownTimer] = useState(breakLength);
  const [isRoundComplete, setIsRoundComplete] = useState(false);
  const [isWorkoutComplete, setIsWorkoutComplete] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // New state for pausing the timer

  // Calculate the current round based on the currentInterval
  const exercisesPerRound = originalExerciseNames.length;
  const currentRound = Math.floor(currentInterval / exercisesPerRound) + 1;

  // useEffect(() => {
  //   // Check if `preset` is available, then update state
  //   if (preset) {
  //     setPresetIndex(preset || 0); // Ensure preset exists in `presets`
  //   }
  // }, [preset]);

  useEffect(() => {
    let interval;

    // Handle pausing functionality
    const handleKeydown = (event) => {
      if (event.code === "Space") {
        setIsPaused((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    if (isPaused) {
      return () => window.removeEventListener("keydown", handleKeydown); // Stop the timer when paused
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
            setCooldownTimer(breakLength); // Reset to regular break length
            setTimer(timeIntervals[currentInterval]); // Start the next exercise interval
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
              const isNewRound = nextInterval % exercisesPerRound === 0; // Check if a new round starts

              if (nextInterval < timeIntervals.length) {
                setIsCooldown(true);
                if (isNewRound) {
                  setIsRoundComplete(true);
                  setCooldownTimer(roundBreak); // Use roundBreak after a full round
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

    // if (!preset) {
    //   return <p>Loading...</p>; // Render a loading state until the query is available
    // }

    return () => {
      clearInterval(interval); // Clear any existing interval
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
    setIsCooldown(false); // Reset cooldown
    setIsRoundComplete(false); // Reset round completion
    setIsWorkoutComplete(false); // Reset workout completion
    setCooldownTimer(breakLength); // Reset cooldown timer to initial break length
  };

  return (
    <div className={styles.wrapper}>
      {/* Pass down cooldownTimer and workout timer to WorkoutProgress */}
      <WorkoutProgress
        countdown={isCooldown ? cooldownTimer : timer}
        color={isCooldown ? colors[2] : colors[0]}
        isCooldown={isCooldown}
        cooldownTimer={isRoundComplete ? roundBreak : breakLength}
        totalWorkoutTime={timeIntervals[currentInterval]}
      />
      {/* Adjust WorkoutDisplay based on workout completion */}
      <WorkoutDisplay
        round={currentRound}
        title={
          isWorkoutComplete
            ? "Great work"
            : isCooldown
            ? "Next up:"
            : `${exerciseNames[currentInterval]} (R${currentRound})`
        }
        timer={
          isWorkoutComplete ? "Awesome" : isCooldown ? cooldownTimer : timer
        }
        description={
          isWorkoutComplete
            ? "You have made it"
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
