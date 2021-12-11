import styles from "./WorkoutPresetCard.module.css";

const WorkoutPresetCard = ({ workoutPresetName, onClick }) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <h1>{workoutPresetName}</h1>
    </div>
  );
};

export default WorkoutPresetCard;
