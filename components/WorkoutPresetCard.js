import styles from "./WorkoutPresetCard.module.css";

const WorkoutPresetCard = ({ workoutPresetName }) => {
  return (
    <div className={styles.wrapper}>
      <h1>{workoutPresetName}</h1>
    </div>
  );
};

export default WorkoutPresetCard;
