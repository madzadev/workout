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
const breakLength = presets[0].breaks;
const colors = ["aquamarine", "grey"];
const cooldownColor = "yellow";

const Workout = () => {
  const [currentInterval, setCurrentInterval] = useState(0);
  const [timer, setTimer] = useState(timeIntervals[0]);
  const [isCooldown, setIsCooldown] = useState(false);
  const [cooldownTimer, setCooldownTimer] = useState(breakLength); // 5-second cooldown

  useEffect(() => {
    let interval;

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
                clearInterval(interval); // Stop when all intervals are done
              }
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }
    }

    return () => clearInterval(interval); // Cleanup interval
  }, [currentInterval, isCooldown]);

  const handleDivClick = (index) => {
    setCurrentInterval(index);
    setTimer(timeIntervals[index]);
    setIsCooldown(false);
  };

  return (
    <div className={styles.wrapper}>
      {/* Pass down cooldownTimer and workout timer to WorkoutProgress */}
      <WorkoutProgress
        countdown={isCooldown ? cooldownTimer : timer}
        color={isCooldown ? cooldownColor : colors[0]}
        isCooldown={isCooldown}
        cooldownTimer={breakLength}
        totalWorkoutTime={timeIntervals[currentInterval]}
      />

      <WorkoutDisplay
        title={isCooldown ? "Next up:" : exerciseNames[currentInterval]}
        timer={isCooldown ? cooldownTimer : timer}
        description={
          isCooldown
            ? exerciseNames[currentInterval]
            : exerciseDescriptions[currentInterval]
        }
      />

      <WorkoutTimeline
        onClick={handleDivClick}
        timeIntervals={timeIntervals}
        colors={isCooldown ? cooldownColor : colors}
        currentInterval={currentInterval}
        timer={isCooldown ? cooldownTimer : timer}
      />
    </div>
  );
};

export default Workout;
