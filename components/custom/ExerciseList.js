import styles from "./ExerciseList.module.css";

const ExerciseList = ({ exercises, onRemove, onMove }) => {
  return (
    <div className={styles.container}>
      <h2>Workout Exercises</h2>
      <div className={styles.list}>
        {exercises.map((exercise, index) => (
          <div key={index} className={styles.exercise}>
            <div className={styles.exerciseNumber}>{index + 1}</div>
            <div className={styles.exerciseContent}>
              <h3>{exercise.name}</h3>
              <p>{exercise.description}</p>
              <span className={styles.duration}>{exercise.time}s</span>
            </div>
            <div className={styles.actions}>
              <button
                onClick={() => onMove(index, -1)}
                disabled={index === 0}
                className={styles.moveButton}
              >
                ↑
              </button>
              <button
                onClick={() => onMove(index, 1)}
                disabled={index === exercises.length - 1}
                className={styles.moveButton}
              >
                ↓
              </button>
              <button
                onClick={() => onRemove(index)}
                className={styles.removeButton}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseList;
