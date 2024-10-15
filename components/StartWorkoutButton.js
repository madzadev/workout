import styles from "./StartWorkoutButton.module.css";

const StartWorkoutButton = ({ onClick }) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <p>Start</p>
    </div>
  );
};

export default StartWorkoutButton;
