import styles from "./PreviewHeader.module.css";

const PreviewHeader = ({ title, description, targets, equipment }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.tags}>
        {targets?.map((target, index) => (
          <span key={`target-${index}`} className={styles.tag}>
            {target}
          </span>
        ))}
      </div>
      <div className={styles.equipment}>
        <h3>Equipment needed:</h3>
        <div className={styles.equipmentList}>
          {equipment?.map((item, index) => (
            <span key={`equipment-${index}`} className={styles.equipmentItem}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviewHeader;
