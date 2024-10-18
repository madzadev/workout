import styles from "./WorkoutPresetCard.module.css";

const WorkoutPresetCard = ({
  backgroundColor,
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
        backgroundColor: isActive ? "yellow" : backgroundColor, //#1F2129
      }}
    >
      <h2
        style={{
          color: isActive ? "black" : "black",
          fontSize: "22px",
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
      <p
        style={{
          color: isActive ? "black" : "grey",
        }}
      >
        Total time: 23 mins
      </p>
      {/* <p>Difficulty: ⭐⭐⭐</p> */}
    </div>
  );
};

export default WorkoutPresetCard;
