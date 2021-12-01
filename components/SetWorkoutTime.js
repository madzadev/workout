import styles from "./SetWorkoutTime.module.css";

export default SetWorkoutTime = ({ mins }) => {
  return (
    <div className={styles.wrapper}>
      <h1>-</h1>
      <h1>{minutes} mins</h1>
      <h1>+</h1>
    </div>
  );
};
