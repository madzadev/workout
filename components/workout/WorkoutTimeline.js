import styles from "./WorkoutTimeline.module.css";

const WorkoutTimeline = ({
  exercises,
  currentIndex,
  onExerciseClick,
  isCooldown,
}) => {
  return (
    <div className={styles.timeline}>
      {exercises.map((exercise, index) => (
        <div
          key={index}
          className={`${styles.exercise} ${
            index === currentIndex ? styles.current : ""
          } ${index < currentIndex ? styles.completed : ""}`}
          onClick={() => onExerciseClick(index)}
        >
          <div className={styles.exerciseContent}>
            <span className={styles.number}>{index + 1}</span>
            <div className={styles.details}>
              <span className={styles.name}>{exercise.name}</span>
              <span className={styles.duration}>{exercise.time}s</span>
            </div>
          </div>
          {index < exercises.length - 1 && (
            <div className={styles.break}>
              <span>Rest</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkoutTimeline;
