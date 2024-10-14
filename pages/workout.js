import WorkoutTimeline from "../components/WorkoutTimeline";
import WorkoutDisplay from "../components/WorkoutDisplay";
import WorkoutProgress from "../components/WorkoutProgress";

import styles from "../styles/Workout.module.css";

const Workout = () => {
  return (
    <div className={styles.wrapper}>
      <WorkoutProgress />
      <WorkoutDisplay />
      <WorkoutTimeline />
    </div>
  );
};

export default Workout;
