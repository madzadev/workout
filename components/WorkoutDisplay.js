import Link from "next/link";
import styles from "./WorkoutDisplay.module.css";

const WorkoutDisplay = ({
  round,
  title,
  timer,
  description,
  isPaused,
  onClick,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.round}>{round}</h3>
      <h1 className={styles.timer}>{timer}</h1>
      <h3 className={styles.description}>{description}</h3>
      <h3 className={styles.progressToggle} onClick={onClick}>
        {isPaused ? "Resume" : "Pause"}
      </h3>
      <Link href="/">Exit</Link>
    </div>
  );
};

export default WorkoutDisplay;
