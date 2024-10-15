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
  const [isCooldown, setIsCooldown] = useState(false);
  const [cooldownTimer, setCooldownTimer] = useState(5); // 5-second cooldown
  const cooldownColor = "yellow"; // Color during cooldown

  useEffect(() => {
    let interval;

    if (isCooldown) {
      // Cooldown phase
      interval = setInterval(() => {
        setCooldownTimer((prevCooldownTimer) => {
          if (prevCooldownTimer === 1) {
            setIsCooldown(false); // End cooldown
            setCooldownTimer(5); // Reset cooldown for next phase
            setTimer(timeIntervals[currentInterval]); // Start the next interval timer
            return 0;
          }
          return prevCooldownTimer - 1; // Decrement cooldown timer
        });
      }, 1000);
    } else {
      // Normal workout phase
      if (currentInterval < timeIntervals.length) {
        interval = setInterval(() => {
          setTimer((prevTimer) => {
            if (prevTimer === 1) {
              const nextInterval = currentInterval + 1;
              if (nextInterval < timeIntervals.length) {
                setIsCooldown(true); // Enter cooldown phase
                setCurrentInterval(nextInterval); // Prepare for the next interval
              } else {
                clearInterval(interval); // Stop when all intervals are done
              }
              return 0; // Reset the timer
            }
            return prevTimer - 1; // Decrement workout timer
          });
        }, 1000);
      }
    }

    // Cleanup interval when component unmounts or dependencies change
    return () => clearInterval(interval);
  }, [currentInterval, isCooldown]);

  const handleDivClick = (index) => {
    setCurrentInterval(index);
    setTimer(timeIntervals[index]); // Reset timer to the clicked interval's time
    setIsCooldown(false); // Reset cooldown if user skips
  };

  return (
    <div className={styles.wrapper}>
      {/* WorkoutProgress changes color during cooldown */}
      <WorkoutProgress
        countdown={isCooldown ? cooldownTimer : timer}
        color={isCooldown ? cooldownColor : colors[0]}
      />
      {/* WorkoutDisplay shows next exercise during cooldown */}
      <WorkoutDisplay
        title={isCooldown ? "Next up:" : exerciseNames[currentInterval]}
        timer={isCooldown ? cooldownTimer : timer}
        description={
          isCooldown
            ? exerciseNames[currentInterval]
            : exerciseDescriptions[currentInterval]
        }
      />
      {/* WorkoutTimeline changes color during cooldown */}
      <WorkoutTimeline
        onClick={handleDivClick}
        timeIntervals={timeIntervals}
        colors={colors}
        currentInterval={currentInterval}
        timer={isCooldown ? cooldownTimer : timer}
      />
    </div>
  );
};

export default Workout;
