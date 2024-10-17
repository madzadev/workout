import styles from "./WorkoutTimeline.module.css";

const WorkoutTimeline = ({
  timeIntervals,
  colors,
  currentInterval,
  timer,
  isCooldown,
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
              onClick={() => onClick(index)}
              style={{
                width: `${(interval / total) * 100}%`,
                backgroundColor: isCurrent
                  ? isCooldown
                    ? colors[2] // When isCooldown is true and isCurrent is true, use colors[2]
                    : colors[0] // When isCooldown is false and isCurrent is true, use colors[0]
                  : isCompleted
                  ? colors[0] // Previous intervals in colors[0]
                  : colors[1], // Incomplete intervals in colors[1]
                opacity: isCurrent ? 1 : 0.7,
                transition: "background-color 0.5s ease-in-out",
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
