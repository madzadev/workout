import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Link from "next/link";
import styles from "./WorkoutDisplay.module.css";

const WorkoutDisplay = ({
  title,
  round,
  timer,
  description,
  isPaused,
  onClick,
  totalTime,
  isCooldown,
  isWorkoutComplete,
}) => {
  const percentage = (timer / totalTime) * 100;

  const progressColor = isCooldown ? "#ffd700" : "#2ecc71";

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <h3 className={styles.round}>{round}</h3>
      </div>

      <div className={styles.timerSection}>
        <div className={styles.progressWrapper}>
          <CircularProgressbar
            value={isWorkoutComplete ? 100 : percentage}
            text={timer}
            styles={buildStyles({
              textSize: "30px",
              pathColor: progressColor,
              textColor: "#ffffff",
              trailColor: "#1a1a1a",
              pathTransition: isCooldown
                ? "none"
                : "stroke-dashoffset 0.5s ease 0s",
            })}
          />
        </div>
      </div>

      <div className={styles.description}>
        <p>{description}</p>
      </div>

      <div className={styles.controls}>
        <button
          className={`${styles.controlButton} ${styles.pauseButton}`}
          onClick={onClick}
        >
          {isPaused ? "Resume" : "Pause"}
        </button>

        <Link href="/" className={styles.exitLink}>
          <button className={`${styles.controlButton} ${styles.exitButton}`}>
            Exit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WorkoutDisplay;
