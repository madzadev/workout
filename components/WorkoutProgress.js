import React, { useState, useEffect } from "react";
import styles from "./WorkoutProgress.module.css";

const WorkoutProgress = ({ countdown, color }) => {
  const [progress, setProgress] = useState(0);
  const [totalTime, setTotalTime] = useState(countdown);

  useEffect(() => {
    // Set totalTime only when countdown starts
    if (countdown > 0 && totalTime === 0) {
      setTotalTime(countdown);
    }
  }, [countdown, totalTime]);

  useEffect(() => {
    if (countdown > 0 && totalTime > 0) {
      const progressPercentage = ((totalTime - countdown) / totalTime) * 100;
      setProgress(progressPercentage);
    }
  }, [countdown, totalTime]);

  const remainingTime = countdown > 0 ? 1 : 0; // Last second adjustment

  return (
    <div className={styles.wrapper}>
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: color,
          height: "80px",
          transition: `width ${remainingTime}s linear`, // Dynamically set transition
        }}
      ></div>
    </div>
  );
};

export default WorkoutProgress;
