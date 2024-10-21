import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import Navigation from "../components/Navigation";
import StartWorkoutButton from "../components/StartWorkoutButton";
import EquipmentSelector from "../components/EquipmentSelector";
import Footer from "../components/Footer";

import beginnerPresets from "../data/workouts/beginner";
import hiitPresets from "../data/workouts/hiit";
import fullbodyPresets from "../data/workouts/full_body";

import { sumExercises, sumBreaks, formatTime } from "../helpers/convertTime";

const presets = [...beginnerPresets, ...hiitPresets, ...fullbodyPresets];

import styles from "../styles/Custom.module.css";

const Custom = () => {
  // const [selectedEquipment, setSelectedEquipment] = useState([]);

  const router = useRouter();

  // const [exerciseBreaks, setExerciseBreaks] = useState(30);
  const [exerciseBreaks, setExerciseBreaks] = useState(15);
  const [rounds, setRounds] = useState(3);
  const [roundBreaks, setRoundBreaks] = useState(60);

  const [isMusicEnabled, setIsMusicEnabled] = useState(false);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);
  const [isEffectsEnabled, setIsEffectsEnabled] = useState(true);

  const [presetIndex, setPresetIndex] = useState("");
  const [preset, setPreset] = useState("");
  const [customInputExercise, setCustomInputExercise] = useState({
    name: "Exercise title",
    description: "Exercise description",
    duration: 20,
  });

  useEffect(() => {
    if (router.query.preset) {
      const index = router.query.preset;
      setPresetIndex(index);
      const workout = presets.find(
        (preset) => Number(preset.id) === Number(index)
      );
      setPreset(workout);
      console.log(presets);
    }
  }, [router.query.preset]);

  // const handleSelect = (id) => {
  //   setSelectedEquipment((prevSelected) => {
  //     if (prevSelected.includes(id)) {
  //       return prevSelected.filter((item) => item !== id);
  //     } else {
  //       return [...prevSelected, id];
  //     }
  //   });
  // };

  const increaseExerciseBreak = () => {
    setExerciseBreaks((prev) => Math.min(prev + 5, 120)); // Max limit is 120
  };

  // Function to decrease the rest interval
  const decreaseExerciseBreak = () => {
    setExerciseBreaks((prev) => Math.max(prev - 5, 5)); // Min limit is 5
  };
  return (
    <Wrapper>
      <Navigation />
      <h1 className={styles.title}>Create your workout:</h1>

      <div className={styles.settingsWrapper}>
        <div>
          <h1 className={styles.title}>Instructions:</h1>
          <h3>First open</h3>
          <h3>First open</h3>
          <h3>Total time: 15 minutes 23 seconds</h3>
        </div>
        <div>
          <h1 className={styles.title}>Exercise settings:</h1>
          {/* <h3>Warmup: 05:00</h3> */}
          {/* <h3>Exercise interval: {formatTime(exerciseDuration)}</h3> */}
          <h3>
            Exercise rest interval:
            <span onClick={decreaseExerciseBreak}>➖</span>{" "}
            {preset
              ? formatTime(preset.exerciseBreaks)
              : formatTime(exerciseBreaks)}
            <span onClick={increaseExerciseBreak}>➕</span>
          </h3>
          <h3>
            Rounds: <span>➖</span> {preset ? preset.rounds : rounds}{" "}
            <span>➕</span>
          </h3>
          <h3>
            Rest between rounds:<span>➖</span>{" "}
            {preset ? formatTime(preset.roundBreaks) : formatTime(roundBreaks)}
            <span>➕</span>
          </h3>
        </div>
        <div>
          <h1 className={styles.title}>Audio Settings:</h1>
          <h3>Music: {!isMusicEnabled ? "Off" : "On"}</h3>
          <h3>Voiceover: {!isVoiceEnabled ? "Off" : "On"}</h3>
          <h3>Effects: {!isEffectsEnabled ? "Off" : "On"}</h3>
        </div>
      </div>
      {/* <h3>1. Select Your Equipment:</h3>
      <EquipmentSelector
        selectedEquipment={selectedEquipment}
        handleSelect={handleSelect}
      />
      {selectedEquipment.length > 0 && (
        <p>Selected Equipment IDs: {selectedEquipment.join(", ")}</p>
      )}

      <h3>Body parts to focus on:</h3>

      <p>Legs</p>
      <p>Core</p> */}

      <h1 className={styles.title}>Add a custom exercise</h1>
      <input
        required
        type="text"
        placeholder="Exercise title"
        className={styles.input}
      />
      <input
        required
        type="text"
        placeholder="Exercise description"
        className={styles.input}
      />
      <input
        required
        type="text"
        placeholder="Exercise duration (in seconds)"
        className={styles.input}
      />

      <h1 className={styles.title}>Available exercises:</h1>
      <div className={styles.availableExercisesWrapper}>
        <div>
          <h3>➕</h3>
          <h3>➕</h3>
          <h3>➕</h3>
          <h3>➕</h3>
        </div>
        <div>
          <h3>None</h3>
          <h3>None</h3>
          <h3>Yoga mat</h3>
          <h3>Barbells</h3>
        </div>
        <div>
          <h3>Lunges</h3>
          <h3>Lunges</h3>
          <h3>Lunges</h3>
          <h3>Lunges</h3>
        </div>

        <div>
          <h3>Do a pushup on the floor and jump up.</h3>
          <h3>Do a pushup on the floor and jump up.</h3>
          <h3>Do a pushup on the floor and jump up.</h3>
          <h3>Do a pushup on the floor and jump up.</h3>
        </div>
      </div>

      <h1 className={styles.title}>Exercise timeline:</h1>
      <div className={styles.exerciseTimelineWrapper}>
        <div>
          <h3>➖</h3>
          <h3>➖</h3>
          <h3>➖</h3>
          <h3>➖</h3>
        </div>
        <div>
          <h3>Lunges</h3>
          <h3>Lunges</h3>
          <h3>Lunges</h3>
          <h3>Lunges</h3>
        </div>

        <div>
          <h3>Do a pushup on the floor and jump up.</h3>
          <h3>Do a pushup on the floor and jump up.</h3>
          <h3>Do a pushup on the floor and jump up.</h3>
          <h3>Do a pushup on the floor and jump up.</h3>
        </div>
        <div>
          <h3>⬆️⬇️</h3>
          <h3>⬆️⬇️</h3>
          <h3>⬆️⬇️</h3>
          <h3>⬆️⬇️</h3>
        </div>
        <StartWorkoutButton />
      </div>

      {/* <Link href="/">Back</Link> */}
      <Footer />
    </Wrapper>
  );
};

export default Custom;
