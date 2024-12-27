import styles from "./ExerciseList.module.css";

const ExerciseList = ({ exercises }) => {
  return (
    <div className={styles.exercises}>
      <h2 className={styles.title}>Workout Structure</h2>
      <div className={styles.list}>
        {exercises?.map((exercise, index) => (
          <div key={`exercise-${index}`} className={styles.exercise}>
            <div className={styles.exerciseNumber}>{index + 1}</div>
            <div className={styles.exerciseContent}>
              <h3>{exercise.name}</h3>
              <p>{exercise.description}</p>
              <span className={styles.duration}>{exercise.time}s</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseList;
