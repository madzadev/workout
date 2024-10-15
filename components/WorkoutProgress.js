import React, { useState, useEffect } from "react";
import styles from "./WorkoutProgress.module.css";

const WorkoutProgress = ({ countdown, color }) => {
  const [progress, setProgress] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    setTotalTime(countdown);
  }, []);

  useEffect(() => {
    if (countdown > 0 && totalTime > 0) {
      const progressPercentage = ((totalTime - countdown) / totalTime) * 100;
      setProgress(progressPercentage);
    }

    // Set progress to 100% when countdown finishes
    if (countdown === 0) {
      const timeout = setTimeout(() => {
        setProgress(100);
      }, 1000); // Wait for 1 second before reaching 100%

      return () => clearTimeout(timeout); // Cleanup on unmount
    }
  }, [countdown, totalTime]);

  return (
    <div className={styles.wrapper}>
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: color,
          height: "80px",
          transition: "width 1s linear", // Fixed transition duration
        }}
      ></div>
    </div>
  );
};

export default WorkoutProgress;
