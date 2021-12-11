import styles from "./WorkoutTimeSelector.module.css";

const WorkoutTimeSelector = ({
  decreaseWorkoutTime,
  workoutTime,
  increaseWorkoutTime,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.button}>
        <h1 onClick={decreaseWorkoutTime}>-</h1>
      </div>
      <h1>{workoutTime} mins</h1>
      <div className={styles.button}>
        <h1 onClick={increaseWorkoutTime}>+</h1>
      </div>
    </div>
  );
};

export default WorkoutTimeSelector;
