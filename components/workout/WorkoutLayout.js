import { useState } from "react";
import WorkoutDisplay from "./WorkoutDisplay";
import WorkoutTimeline from "./WorkoutTimeline";
import styles from "./WorkoutLayout.module.css";

const WorkoutLayout = ({
  title,
  round,
  timer,
  description,
  isPaused,
  onPauseClick,
  totalTime,
  isCooldown,
  isWorkoutComplete,
  exercises,
  currentInterval,
  onExerciseClick,
}) => {
  const [showTimeline, setShowTimeline] = useState(false);

  return (
    <div className={styles.layout}>
      <button
        className={styles.toggleButton}
        onClick={() => setShowTimeline(!showTimeline)}
      >
        {showTimeline ? "Hide Timeline" : "Show Timeline"}
      </button>

      <div className={styles.content}>
        <WorkoutDisplay
          title={title}
          round={round}
          timer={timer}
          description={description}
          isPaused={isPaused}
          onClick={onPauseClick}
          totalTime={totalTime}
          isCooldown={isCooldown}
          isWorkoutComplete={isWorkoutComplete}
        />

        {showTimeline && (
          <div className={styles.timelineWrapper}>
            <WorkoutTimeline
              exercises={exercises}
              currentIndex={currentInterval}
              onExerciseClick={onExerciseClick}
              isCooldown={isCooldown}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutLayout;
