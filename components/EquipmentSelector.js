import React from "react";
import styles from "./EquipmentSelector.module.css"; // Importing CSS Module

const equipmentList = [
  { id: 1, name: "Home", icon: "💪" },
  // { id: 2, name: "Yoga", icon: "🧘" },
  { id: 3, name: "Gym", icon: "🏋️" },
  { id: 4, name: "Running", icon: "🏃" },
  // { id: 5, name: "Jump Rope", icon: "🎗️" },
  // { id: 6, name: "Treadmill", icon: "🏃" },
  // { id: 7, name: "Weights", icon: "🏋️" },
  // { id: 8, name: "Yoga Mat", icon: "🧘" },
  // { id: 9, name: "Dumbbells", icon: "💪" },
  // { id: 10, name: "Running", icon: "🏃" },
];

const EquipmentSelector = ({ selectedEquipment, handleSelect }) => {
  const isSelected = (id) => selectedEquipment.includes(id); // Check if item is selected

  return (
    <div className={styles.equipmentContainer}>
      {equipmentList.map((equipment) => (
        <div
          key={equipment.id}
          className={`${styles.equipmentItem} ${
            isSelected(equipment.id) ? styles.selected : ""
          }`}
          onClick={() => handleSelect(equipment.id)}
        >
          <div className={styles.equipmentIcon}>{equipment.icon}</div>
          <div className={styles.equipmentName}>{equipment.name}</div>
        </div>
      ))}
    </div>
  );
};

export default EquipmentSelector;
