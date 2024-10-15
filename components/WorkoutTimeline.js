// WorkoutTimeline.js
import styles from "./WorkoutTimeline.module.css";

const WorkoutTimeline = ({
  timeIntervals,
  colors,
  currentInterval,
  timer,
  onClick,
}) => {
  const total = timeIntervals.reduce((acc, curr) => acc + curr, 0);

  return (
    <div>
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
              onClick={() => onClick(index)} // Call onClick prop
              style={{
                width: `${(interval / total) * 100}%`,
                backgroundColor: progressPercentage > 0 ? colors[0] : colors[1],
                opacity: isCurrent ? 1 : 0.7, // Make completed intervals semi-transparent
              }}
            >
              {/* Show the progress percentage in each block (optional) */}
              {/* {isCurrent && <span>{Math.round(progressPercentage)}%</span>} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkoutTimeline;
