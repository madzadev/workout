import styles from "./WorkoutTimeline.module.css";

const WorkoutTimeline = () => {
  const proportions = [20, 20, 15, 30, 15]; // Example proportions (can be dynamic)
  const colors = ["aquamarine", "grey", "grey"]; // Colors for each div

  const total = proportions.reduce((acc, curr) => acc + curr, 0);
  return (
    <div className="wrapper">
      {proportions.map((proportion, index) => (
        <div
          key={index}
          className={styles.wrapper}
          style={{
            width: `${(proportion / total) * 100}%`,
            backgroundColor: colors[index],
          }}
        ></div>
      ))}
    </div>
  );
};

export default WorkoutTimeline;
