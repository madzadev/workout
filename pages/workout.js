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

    // Start the timer if currentInterval is valid
    if (currentInterval < timeIntervals.length) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 1) {
            const nextInterval = currentInterval + 1;
            // Update interval safely and set timer
            if (nextInterval < timeIntervals.length) {
              setCurrentInterval(nextInterval);
              setTimer(timeIntervals[nextInterval]); // Reset to next interval's time
            } else {
              clearInterval(interval); // Stop when we've completed all intervals
            }
            return 0; // Reset the timer to avoid negative countdown
          }
          return prevTimer - 1; // Decrement the timer
        });
      }, 1000); // Run every second
    }

    // Cleanup interval when component unmounts or dependencies change
    return () => clearInterval(interval);
  }, [currentInterval]); // Depend only on currentInterval, no need to track timer

  const handleDivClick = (index) => {
    setCurrentInterval(index);
    setTimer(timeIntervals[index]); // Reset timer to the clicked interval's time
  };

  return (
    <div className={styles.wrapper}>
      <WorkoutProgress countdown={timer} />
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
