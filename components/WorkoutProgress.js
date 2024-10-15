import React, { useState, useEffect } from "react";
import styles from "./WorkoutProgress.module.css";

const WorkoutProgress = ({ countdown, color }) => {
  const [progress, setProgress] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    setTotalTime(countdown);
    setProgress(0);
  }, [totalTime]);

  useEffect(() => {
    if (totalTime > 0) {
      // ((100-50)/100)*100
      const progressPercentage =
        ((totalTime + 1 - countdown) / totalTime) * 100;
      setProgress(progressPercentage);
    }
  }, [countdown]);

  return (
    <div className={styles.wrapper}>
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: color,
          height: "80px",
          // transition: `width ${countdown < 1 ? 0 : 1}s linear`, // Fixed transition duration
        }}
      ></div>
    </div>
  );
};

export default WorkoutProgress;
