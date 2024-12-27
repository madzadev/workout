import { useState } from "react";
import styles from "./ExerciseForm.module.css";

const ExerciseForm = ({ onAddExercise }) => {
  const [exercise, setExercise] = useState({
    name: "",
    description: "",
    time: 30,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (exercise.name && exercise.description) {
      onAddExercise(exercise);
      setExercise({ name: "", description: "", time: 30 });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Add Exercise</h2>
      <div className={styles.fields}>
        <div className={styles.field}>
          <label>Exercise Name</label>
          <input
            type="text"
            value={exercise.name}
            onChange={(e) =>
              setExercise((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder="e.g., Push-ups"
          />
        </div>

        <div className={styles.field}>
          <label>Description</label>
          <input
            type="text"
            value={exercise.description}
            onChange={(e) =>
              setExercise((prev) => ({ ...prev, description: e.target.value }))
            }
            placeholder="Describe the exercise"
          />
        </div>

        <div className={styles.field}>
          <label>Duration (seconds)</label>
          <div className={styles.numberControl}>
            <button
              type="button"
              onClick={() =>
                setExercise((prev) => ({
                  ...prev,
                  time: Math.max(5, prev.time - 5),
                }))
              }
            >
              -
            </button>
            <span>{exercise.time}</span>
            <button
              type="button"
              onClick={() =>
                setExercise((prev) => ({ ...prev, time: prev.time + 5 }))
              }
            >
              +
            </button>
          </div>
        </div>
      </div>

      <button type="submit" className={styles.addButton}>
        Add Exercise
      </button>
    </form>
  );
};

export default ExerciseForm;
