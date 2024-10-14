import styles from "./WorkoutDisplay.module.css";

const WorkoutDisplay = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Mountain climbers</h1>
      <h1 className={styles.time}>41</h1>
      <h3 className={styles.description}>
        Start in plank, alternate knees towards chest.
      </h3>
    </div>
  );
};

export default WorkoutDisplay;
