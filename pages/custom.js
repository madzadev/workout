import React, { useState } from "react";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import Navigation from "../components/Navigation";
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
    <Wrapper>
      <Navigation />
      <h1>Create a custom workout</h1>
      <h2>1. Select Your Equipment:</h2>
      <EquipmentSelector
        selectedEquipment={selectedEquipment}
        handleSelect={handleSelect}
      />
      {selectedEquipment.length > 0 && (
        <p>Selected Equipment IDs: {selectedEquipment.join(", ")}</p>
      )}

      <h2>Body parts to focus on:</h2>

      <p>Legs</p>
      <p>Core</p>

      <h2>Available exercises:</h2>

      <p>Burpees</p>
      <p>Jumps</p>

      <h2>Add your first round</h2>
      <input type="text" placeholder="round name" />
      <input type="text" placeholder="action description (optional)" />
      <input type="text" placeholder="5 mins" />

      <h1>Exercise settings:</h1>
      <h2>Warmup: 05:00</h2>
      <h2>Exercise interval: 00:20</h2>
      <h2>Exercise rest interval: 00:15</h2>
      <h2>Rounds: 5</h2>
      <h2>Rest between rounds: 01:00</h2>
      <h2>Total time: 15 minutes 23 seconds</h2>
      <h3>Save workout</h3>
      <StartWorkoutButton />
      <Link href="/">Back</Link>
    </Wrapper>
  );
};

export default Custom;
