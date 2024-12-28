import styles from "./CustomHeader.module.css";

const CustomHeader = ({
  title,
  onTitleChange,
  description,
  onDescriptionChange,
}) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Create Custom Workout</h1>
      {/* <div className={styles.form}>
        <div className={styles.field}>
          <label>Workout Title</label>
          <input
            type="text"
            value={title}
            onChange={onTitleChange}
            placeholder="Enter workout title"
          />
        </div>
        <div className={styles.field}>
          <label>Description</label>
          <textarea
            value={description}
            onChange={onDescriptionChange}
            placeholder="Describe your workout"
            rows={4}
          />
        </div>
      </div> */}
    </div>
  );
};

export default CustomHeader;
