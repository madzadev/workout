import styles from "./WorkoutPresetCard.module.css";

const WorkoutPresetCard = ({
  workoutPresetName,
  roundsCount,
  exercisesCount,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={styles.wrapper}
      onClick={onClick}
      style={{
        backgroundColor: isActive ? "yellow" : "#070F17",
        color: isActive ? "black" : "white",
      }}
    >
      <h2>{workoutPresetName}</h2>
      <p>Exercises: {exercisesCount}</p>
      <p>Rounds: {roundsCount}</p>
      <p>Difficulty: ⭐⭐⭐</p>
    </div>
  );
};

export default WorkoutPresetCard;
