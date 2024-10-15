import { useState } from "react";

import Head from "next/head";
import styles from "../styles/Home.module.css";

import WorkoutTimeSelector from "../components/WorkoutTimeSelector";
import WorkoutPresetCard from "../components/WorkoutPresetCard";
import StartWorkoutButton from "../components/StartWorkoutButton";

import presets from "../data/workouts";

export default function Home() {
  const [workoutTime, setWorkoutTime] = useState(15);
  const [activeWorkoutPreset, setActiveWorkoutPreset] = useState("");

  return (
    <div className={styles.container}>
      <Head>
        <title>Workout app</title>
        <meta name="description" content="Workout app for developers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Select time:</h1>
      <WorkoutTimeSelector
        workoutTime={workoutTime}
        increaseWorkoutTime={() => {
          if (workoutTime != 120) {
            setWorkoutTime(workoutTime + 5);
          }
        }}
        decreaseWorkoutTime={() => {
          if (workoutTime !== 5) {
            setWorkoutTime(workoutTime - 5);
          }
        }}
      />

      <h1 className={styles.title}>Pick a preset:</h1>
      <div className={styles.presetsWrapper}>
        {presets.map((index, preset) => {
          return (
            <WorkoutPresetCard
              key={index}
              workoutPresetName={preset.title}
              isActive={activeWorkoutPreset === index}
              onClick={() => setActiveWorkoutPreset(index)}
            />
          );
        })}
      </div>

      <StartWorkoutButton />

      <a href="/custom">
        <p style={{ color: "white" }}>Create a custom workout</p>
      </a>
    </div>
  );
}
