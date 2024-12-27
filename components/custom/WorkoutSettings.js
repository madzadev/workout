import styles from "./WorkoutSettings.module.css";

const WorkoutSettings = ({
  rounds,
  exerciseBreaks,
  roundBreaks,
  onSettingsChange,
}) => {
  return (
    <div className={styles.settings}>
      <h2>Workout Settings</h2>
      <div className={styles.settingsGrid}>
        <div className={styles.setting}>
          <label>Number of Rounds</label>
          <div className={styles.numberControl}>
            <button
              onClick={() =>
                onSettingsChange("rounds", Math.max(1, rounds - 1))
              }
            >
              -
            </button>
            <span>{rounds}</span>
            <button onClick={() => onSettingsChange("rounds", rounds + 1)}>
              +
            </button>
          </div>
        </div>

        <div className={styles.setting}>
          <label>Exercise Break Duration (seconds)</label>
          <div className={styles.numberControl}>
            <button
              onClick={() =>
                onSettingsChange(
                  "exerciseBreaks",
                  Math.max(5, exerciseBreaks - 5)
                )
              }
            >
              -
            </button>
            <span>{exerciseBreaks}</span>
            <button
              onClick={() =>
                onSettingsChange("exerciseBreaks", exerciseBreaks + 5)
              }
            >
              +
            </button>
          </div>
        </div>

        <div className={styles.setting}>
          <label>Round Break Duration (seconds)</label>
          <div className={styles.numberControl}>
            <button
              onClick={() =>
                onSettingsChange("roundBreaks", Math.max(5, roundBreaks - 5))
              }
            >
              -
            </button>
            <span>{roundBreaks}</span>
            <button
              onClick={() => onSettingsChange("roundBreaks", roundBreaks + 5)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutSettings;
