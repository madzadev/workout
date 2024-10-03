import styles from "./StartWorkoutButton.module.css";

const StartWorkoutButton = () => {
  return (
    <a href="/workout" className={styles.link}>
      <div className={styles.wrapper}>
        <p>Start</p>
      </div>
    </a>
  );
};

export default StartWorkoutButton;
