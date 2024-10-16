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
        backgroundColor: isActive ? "yellow" : "#1F2129",
        color: isActive ? "black" : "white",
      }}
    >
      <h2>{workoutPresetName}</h2>
      <p>{exercisesCount} exercises</p>
      <p>{roundsCount} rounds</p>
      {/* <p>Total time: 23 mins</p> */}
      <p>Difficulty: ⭐⭐⭐</p>
    </div>
  );
};

export default WorkoutPresetCard;
