import React, { useState } from "react";
import StartWorkoutButton from "../components/StartWorkoutButton";
import EquipmentSelector from "../components/EquipmentSelector";

const Custom = () => {
  const [selectedEquipment, setSelectedEquipment] = useState([]);

  const handleSelect = (id) => {
    setSelectedEquipment((prevSelected) => {
      // Toggle selection: if it's already selected, remove it; otherwise, add it
      if (prevSelected.includes(id)) {
        return prevSelected.filter((item) => item !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };
  return (
    <div>
      <h1> Create your own workout</h1>
      <h1>Select Your Equipment</h1>
      <EquipmentSelector
        selectedEquipment={selectedEquipment}
        handleSelect={handleSelect}
      />
      {selectedEquipment.length > 0 && (
        <p>Selected Equipment IDs: {selectedEquipment.join(", ")}</p>
      )}

      <h2>Add your first round</h2>
      <input type="text" placeholder="round name" />
      <input type="text" placeholder="action description (optional)" />
      <input type="text" placeholder="5 mins" />
      <h4>Or select a preset</h4>
      <h2>Add your round</h2>
      <input type="text" placeholder="round name" />
      <h2>Add your round</h2>
      <input type="text" placeholder="round name" />
      <h2>Add your round</h2>
      <input type="text" placeholder="round name" />
      <h2>➕ Add more rounds</h2>
      <h2>Time left: 15 mins</h2>
      <h3>Save workout</h3>
      <StartWorkoutButton />
      <a href="/">Back</a>
    </div>
  );
};

export default Custom;
