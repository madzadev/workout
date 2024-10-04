import WorkoutTimeline from "../components/WorkoutTimeline";
import WorkoutDisplay from "../components/WorkoutDisplay";
import WorkoutProgress from "../components/WorkoutProgress";

import styles from "../styles/Workout.module.css";

const Workout = () => {
  return (
    <div className={styles.wrapper}>
      <WorkoutTimeline />
      <WorkoutDisplay />
      <WorkoutProgress />
    </div>
  );
};

export default Workout;
