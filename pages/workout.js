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
    if (currentInterval < timeIntervals.length) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 1) {
            // Move to the next interval if we aren't at the last one
            setCurrentInterval((prevInterval) => {
              const nextInterval = prevInterval + 1;
              if (nextInterval < timeIntervals.length) {
                // Reset timer for the next interval
                setTimer(timeIntervals[nextInterval]);
                return nextInterval;
              }
              return prevInterval;
            });
            return 0; // Timer reaches 0 for the current interval
          } else {
            return prevTimer - 1; // Decrement timer
          }
        });
      }, 1000);

      // Clear interval on component unmount
      return () => clearInterval(interval);
    }
  }, [currentInterval]);

  const handleDivClick = (index) => {
    setCurrentInterval(index);
    setTimer(timeIntervals[index]);
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
