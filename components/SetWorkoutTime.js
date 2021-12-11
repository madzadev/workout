import styles from "./SetWorkoutTime.module.css";

const SetWorkoutTime = ({ decreaseWorkoutTime, workoutTime, increaseWorkoutTime }) => {
  return (
    <div className={styles.wrapper}>
      <h1 onClick={decreaseWorkoutTime}>-</h1>
      <h1>{workoutTime} mins</h1>
      <h1 onClick={increaseWorkoutTime}>+</h1>
    </div>
  );
};

export default SetWorkoutTime;
