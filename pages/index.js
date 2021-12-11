import { useState } from "react";

import Head from "next/head";
import styles from "../styles/Home.module.css";

import WorkoutTimeSelector from "../components/WorkoutTimeSelector";
import WorkoutPresetCard from "../components/WorkoutPresetCard";
import StartWorkoutButton from "../components/StartWorkoutButton";

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

      <h1 className={styles.title}>Select available time:</h1>
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

      <h1 className={styles.title}>Pick a present:</h1>
      <div className={styles.presetsWrapper}>
        <WorkoutPresetCard
          workoutPresetName="My preset 1"
          onClick={() => {
            setActiveWorkoutPreset(0);
          }}
        />
        <WorkoutPresetCard workoutPresetName="My preset 1" />
        <WorkoutPresetCard workoutPresetName="My preset 1" />
        <WorkoutPresetCard workoutPresetName="My preset 1" />
        <WorkoutPresetCard workoutPresetName="My preset 1" />
        <WorkoutPresetCard workoutPresetName="My preset 1" />
        <WorkoutPresetCard workoutPresetName="My preset 1" />
        <WorkoutPresetCard workoutPresetName="My preset 1" />
        <WorkoutPresetCard workoutPresetName="My preset 1" />
      </div>

      <StartWorkoutButton />

      <p style={{ color: "purple" }}>Create a custom workout</p>
    </div>
  );
}
