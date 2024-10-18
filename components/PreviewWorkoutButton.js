import styles from "./PreviewWorkoutButton.module.css";

const PreviewWorkoutButton = ({ onClick }) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <p>Preview</p>
    </div>
  );
};

export default PreviewWorkoutButton;
