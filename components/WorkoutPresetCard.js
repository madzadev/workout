import styles from "./WorkoutPresetCard.module.css";

const WorkoutPresetCard = ({ workoutPresetName, onClick }) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <h1>{workoutPresetName}</h1>
      <p>Equipment needed: none</p>
      <p>Difficulty: none</p>
    </div>
  );
};

export default WorkoutPresetCard;
