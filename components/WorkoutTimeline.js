import React, { useState, useEffect } from "react";
import styles from "./WorkoutTimeline.module.css";

const timeIntervals = [20, 10, 15, 30, 15]; // Time intervals in seconds
const colors = ["aquamarine", "grey"]; // Colors for active and inactive divs

const WorkoutTimeline = () => {
  const [currentInterval, setCurrentInterval] = useState(0);
  const [timer, setTimer] = useState(timeIntervals[0]);

  useEffect(() => {
    let interval;

    if (currentInterval < timeIntervals.length) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 1) {
            setCurrentInterval((prevInterval) => prevInterval + 1);
            return timeIntervals[prevInterval + 1] || 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [currentInterval]);

  const total = timeIntervals.reduce((acc, curr) => acc + curr, 0);

  const handleDivClick = (index) => {
    setCurrentInterval(index);
    setTimer(timeIntervals[index]);
  };

  return (
    <div>
      <h1>{timer}</h1>
      <div className={styles.progressBarContainer}>
        {timeIntervals.map((interval, index) => {
          const isCurrent = index === currentInterval;
          const isCompleted = index < currentInterval;

          // Calculate progress for the current interval
          const progressPercentage = isCurrent
            ? ((interval - timer) / interval) * 100
            : isCompleted
            ? 100
            : 0;

          return (
            <div
              key={index}
              className={styles.wrapper}
              onClick={() => handleDivClick(index)} // Make div clickable
              style={{
                width: `${(interval / total) * 100}%`,
                backgroundColor: progressPercentage > 0 ? colors[0] : colors[1],
                opacity: isCurrent ? 1 : 0.5, // Make completed intervals semi-transparent
                cursor: "pointer", // Change cursor to pointer
              }}
            >
              {/* Show the progress percentage in each block (optional) */}
              {isCurrent && <span>{Math.round(progressPercentage)}%</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkoutTimeline;
