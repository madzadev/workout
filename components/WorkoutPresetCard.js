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
      }}
    >
      <h2
        style={{
          color: isActive ? "black" : "white",
        }}
      >
        {workoutPresetName}
      </h2>
      <p
        style={{
          color: isActive ? "black" : "grey",
        }}
      >
        {exercisesCount} exercises
      </p>
      <p
        style={{
          color: isActive ? "black" : "grey",
        }}
      >
        {roundsCount} rounds
      </p>
      {/* <p>Total time: 23 mins</p> */}
      <p>Difficulty: ⭐⭐⭐</p>
    </div>
  );
};

export default WorkoutPresetCard;
