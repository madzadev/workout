import styles from "./WorkoutPresetCard.module.css";

const WorkoutPresetCard = ({ workoutPresetName, onClick }) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <h2>{workoutPresetName}</h2>
      <p>Rounds: X4</p>
      <p>Difficulty: ⭐⭐⭐</p>
    </div>
  );
};

export default WorkoutPresetCard;
