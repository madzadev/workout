import React, { useState, useEffect } from "react";
import styles from "./WorkoutProgress.module.css";

const WorkoutProgress = ({
  countdown,
  color,
  isCooldown,
  cooldownTimer,
  totalWorkoutTime,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Calculate total time based on whether it's cooldown or workout
    const totalTime = isCooldown ? cooldownTimer : totalWorkoutTime;
    console.log(cooldownTimer);

    // Make sure totalTime and countdown are valid before calculating progress
    if (totalTime > 0) {
      const progressPercentage = ((totalTime - countdown) / totalTime) * 100;
      setProgress(progressPercentage);
    }
  }, [countdown, isCooldown, cooldownTimer, totalWorkoutTime]);

  return (
    <div className={styles.wrapper}>
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: color,
          height: "80px",
          // transition: "width 1s linear", // Smooth transition effect
        }}
      ></div>
    </div>
  );
};

export default WorkoutProgress;
