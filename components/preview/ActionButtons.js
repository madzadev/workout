import styles from "./ActionButtons.module.css";

const ActionButtons = ({ onStart, onCustomize }) => {
  return (
    <div className={styles.actions}>
      <button onClick={onStart} className={styles.startButton}>
        <span>Start Workout</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM10.622 8.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.879 3.252a.4.4 0 0 1-.622-.332V8.747a.4.4 0 0 1 .622-.332z" />
        </svg>
      </button>
      <button onClick={onCustomize} className={styles.customizeButton}>
        <span>Customize Workout</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7h2v6h-2v-6zm0-4h2v2h-2V9z" />
        </svg>
      </button>
    </div>
  );
};

export default ActionButtons;
