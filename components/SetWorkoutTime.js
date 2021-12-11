import styles from "./SetWorkoutTime.module.css";

const SetWorkoutTime = ({ minutes }) => {
  return (
    <div className={styles.wrapper}>
      <h1>-</h1>
      <h1>{minutes} mins</h1>
      <h1>+</h1>
    </div>
  );
};

export default SetWorkoutTime;
