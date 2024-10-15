import styles from "./WorkoutPresetCard.module.css";

const WorkoutPresetCard = ({ workoutPresetName, isActive, onClick }) => {
  return (
    <div
      className={styles.wrapper}
      onClick={onClick}
      style={{
        backgroundColor: isActive ? "yellow" : "#070F17",
        color: isActive ? "black" : "gray",
      }}
    >
      <h2>{workoutPresetName}</h2>
      <p>Rounds: X4</p>
      <p>Difficulty: ⭐⭐⭐</p>
    </div>
  );
};

export default WorkoutPresetCard;
