import React, { useState } from "react";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import Navigation from "../components/Navigation";
import StartWorkoutButton from "../components/StartWorkoutButton";
import EquipmentSelector from "../components/EquipmentSelector";
import Footer from "../components/Footer";

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
      <h3>1. Select Your Equipment:</h3>
      <EquipmentSelector
        selectedEquipment={selectedEquipment}
        handleSelect={handleSelect}
      />
      {selectedEquipment.length > 0 && (
        <p>Selected Equipment IDs: {selectedEquipment.join(", ")}</p>
      )}

      <h3>Body parts to focus on:</h3>

      <p>Legs</p>
      <p>Core</p>

      <h3>Available exercises:</h3>

      <p>Burpees</p>
      <p>Jumps</p>

      <h3>Add your first round</h3>
      <input type="text" placeholder="round name" />
      <input type="text" placeholder="action description (optional)" />
      <input type="text" placeholder="5 mins" />

      <h1>Exercise settings:</h1>
      <h3>Warmup: 05:00</h3>
      <h3>Exercise interval: 00:20</h3>
      <h3>Exercise rest interval: 00:15</h3>
      <h3>Rounds: 5</h3>
      <h3>Rest between rounds: 01:00</h3>
      <h3>Total time: 15 minutes 23 seconds</h3>
      <h3>Save workout</h3>

      <h1>Exercise timeline:</h1>
      <StartWorkoutButton />
      <Link href="/">Back</Link>
      <Footer />
    </Wrapper>
  );
};

export default Custom;
