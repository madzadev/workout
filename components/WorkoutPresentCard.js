import styles from "./WorkoutPresetCard.module.css";

const WorkoutPresetCard = ({ presetName }) => {
  return (
    <div className={styles.wrapper}>
      <h1>{presetName}</h1>
    </div>
  );
};

export default WorkoutPresetCard;
