import styles from "./WorkoutPresetCard.module.css";

const WorkoutPresetCard = ({
  backgroundColor,
  workoutPresetName,
  roundsCount,
  exercisesCount,
  totalDuration,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={styles.wrapper}
      onClick={onClick}
      style={{
        backgroundColor: isActive ? "yellow" : backgroundColor, //#1F2129
      }}
    >
      <h2>{workoutPresetName}</h2>
      <p
        style={{
          color: "black",
        }}
      >
        {exercisesCount} exercises
      </p>
      <p
        style={{
          color: "black",
        }}
      >
        {roundsCount} rounds
      </p>
      <p
        style={{
          color: isActive ? "black" : "grey",
        }}
      >
        Duration: {totalDuration}
      </p>
      {/* <p>Difficulty: ⭐⭐⭐</p> */}
    </div>
  );
};

export default WorkoutPresetCard;
