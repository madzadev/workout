// Workout.js
import React, { useState, useEffect } from "react";
import WorkoutTimeline from "../components/WorkoutTimeline";
import WorkoutDisplay from "../components/WorkoutDisplay";
import WorkoutProgress from "../components/WorkoutProgress";

import styles from "../styles/Workout.module.css";
import presets from "../data/workouts";

const timeIntervals = presets[0].workout.map((exercise) => exercise.time);
const exerciseNames = presets[0].workout.map((exercise) => exercise.name);
const exerciseDescriptions = presets[0].workout.map(
  (exercise) => exercise.description
);
const colors = ["aquamarine", "grey"]; // Colors for active and inactive divs

const Workout = () => {
  const [currentInterval, setCurrentInterval] = useState(0);
  const [timer, setTimer] = useState(timeIntervals[0]);

  useEffect(() => {
    let interval;

    // Only start timer if currentInterval is valid
    if (currentInterval < timeIntervals.length) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 1) {
            // Move to the next interval
            setCurrentInterval((prevInterval) => {
              // Prevent going out of bounds
              const nextInterval = prevInterval + 1;
              return nextInterval < timeIntervals.length
                ? nextInterval
                : prevInterval;
            });
            return timeIntervals[currentInterval + 1] || 0; // Reset to the next interval
          }
          return prevTimer - 1; // Decrement timer
        });
      }, 1000);
    }

    return () => clearInterval(interval); // Clear interval on unmount
  }, [currentInterval, timer]); // Depend on currentInterval and timer

  const handleDivClick = (index) => {
    setCurrentInterval(index);
    setTimer(timeIntervals[index]);
  };

  return (
    <div className={styles.wrapper}>
      <WorkoutProgress />
      <WorkoutDisplay
        title={exerciseNames[currentInterval]}
        timer={timer}
        description={exerciseDescriptions[currentInterval]}
      />
      <WorkoutTimeline
        onClick={handleDivClick}
        timeIntervals={timeIntervals}
        colors={colors}
        currentInterval={currentInterval}
        timer={timer}
      />
    </div>
  );
};

export default Workout;
