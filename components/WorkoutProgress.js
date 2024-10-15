import React, { useState, useEffect } from "react";
import styles from "./WorkoutProgress.module.css";

const WorkoutProgress = ({ countdown }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    console.log(progress);
    if (countdown > 0) {
      const totalTime = 30;

      const interval = setInterval(() => {
        const progressPercentage = ((totalTime - countdown) / totalTime) * 100;
        setProgress(progressPercentage);

        if (countdown <= 0) {
          clearInterval(interval);
        }
      }, 1000); // Updates every second

      return () => clearInterval(interval);
    }
  }, [countdown]);

  return (
    <div className={styles.wrapper}>
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: "aquamarine",
          height: "80px",
          transition: "width 1s linear",
        }}
      ></div>
    </div>
  );
};

export default WorkoutProgress;
