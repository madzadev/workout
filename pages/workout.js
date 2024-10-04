import WorkoutTimeline from "../components/WorkoutTimeline";
import WorkoutDisplay from "../components/WorkoutDisplay";

import styles from "../styles/Workout.module.css";

const Workout = () => {
  return (
    <div className={styles.wrapper}>
      <WorkoutTimeline />
      <WorkoutDisplay />
      <div>
        <h1>Current progress</h1>
      </div>
    </div>
  );
};

export default Workout;
