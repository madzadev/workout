import React, { useState, useEffect } from "react";

import WorkoutTimeline from "../components/WorkoutTimeline";
import WorkoutDisplay from "../components/WorkoutDisplay";
import WorkoutProgress from "../components/WorkoutProgress";

import styles from "../styles/Workout.module.css";
import presets from "../data/workouts";

const roundCount = presets[0].rounds;
const breakLength = presets[0].breaks;
const colors = ["aquamarine", "grey", "yellow"];

// Function to repeat the array based on the number of rounds
const repeatArray = (arr, rounds) => {
  return Array(rounds).fill(arr).flat();
};

// Get original time intervals, exercise names, and descriptions
const originalTimeIntervals = presets[0].workout.map(
  (exercise) => exercise.time
);
const originalExerciseNames = presets[0].workout.map(
  (exercise) => exercise.name
);
const originalExerciseDescriptions = presets[0].workout.map(
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
  const [currentInterval, setCurrentInterval] = useState(0);
  const [timer, setTimer] = useState(timeIntervals[0]);
  const [isCooldown, setIsCooldown] = useState(false);
  const [cooldownTimer, setCooldownTimer] = useState(breakLength); // 5-second cooldown
  const [isWorkoutComplete, setIsWorkoutComplete] = useState(false);

  // Calculate the current round based on the currentInterval
  const exercisesPerRound = originalExerciseNames.length;
  const currentRound = Math.floor(currentInterval / exercisesPerRound) + 1;

  useEffect(() => {
    let interval;

    if (isWorkoutComplete) {
      return; // Stop all timers if the workout is complete
    }

    if (isCooldown) {
      interval = setInterval(() => {
        setCooldownTimer((prev) => {
          if (prev === 1) {
            setIsCooldown(false); // End cooldown
            setCooldownTimer(breakLength); // Reset cooldown for next phase
            setTimer(timeIntervals[currentInterval]); // Start the next interval timer
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
              if (nextInterval < timeIntervals.length) {
                setIsCooldown(true); // Enter cooldown phase
                setCurrentInterval(nextInterval);
              } else {
                // When all intervals are done, complete the workout
                clearInterval(interval);
                setIsWorkoutComplete(true); // Set workout as complete
              }
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }
    }

    return () => clearInterval(interval); // Cleanup interval
  }, [currentInterval, isCooldown, isWorkoutComplete]);

  const handleDivClick = (index) => {
    setCurrentInterval(index);
    setTimer(timeIntervals[index]);
    setIsCooldown(false);
    setIsWorkoutComplete(false); // Reset completion if user clicks on a specific interval
  };

  return (
    <div className={styles.wrapper}>
      {/* Pass down cooldownTimer and workout timer to WorkoutProgress */}
      <WorkoutProgress
        countdown={isCooldown ? cooldownTimer : timer}
        color={isCooldown ? colors[2] : colors[0]}
        isCooldown={isCooldown}
        cooldownTimer={breakLength}
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
            : exerciseNames[currentInterval]
        }
        timer={
          isWorkoutComplete ? "Awesome" : isCooldown ? cooldownTimer : timer
        }
        description={
          isWorkoutComplete
            ? "You have made it"
            : isCooldown
            ? exerciseNames[currentInterval]
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
