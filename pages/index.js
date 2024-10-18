import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import Navigation from "../components/Navigation";
import Header from "../components/SEO/Header";
import WorkoutTimeSelector from "../components/WorkoutTimeSelector";
import WorkoutPresetCard from "../components/WorkoutPresetCard";
import PreviewWorkoutButton from "../components/PreviewWorkoutButton";
import StartWorkoutButton from "../components/StartWorkoutButton";

import styles from "../styles/Home.module.css";
import { presets, presets2, presets3 } from "../data/workouts";

export default function Home() {
  const [workoutTime, setWorkoutTime] = useState(15);
  const [activeWorkoutPreset, setActiveWorkoutPreset] = useState(null);
  const router = useRouter();

  const handleStartWorkout = () => {
    router.push({
      pathname: "/workout",
      query: { preset: activeWorkoutPreset },
    });
  };

  const handlePreviewWorkout = () => {
    router.push({
      pathname: "/preview",
      query: { preset: activeWorkoutPreset },
    });
  };

  return (
    <Wrapper>
      <Header />
      <Navigation />
      {/* <h1 className={styles.title}>Select time:</h1>
      <WorkoutTimeSelector
        workoutTime={workoutTime}
        increaseWorkoutTime={() => {
          if (workoutTime !== 120) {
            setWorkoutTime(workoutTime + 5);
          }
        }}
        decreaseWorkoutTime={() => {
          if (workoutTime !== 5) {
            setWorkoutTime(workoutTime - 5);
          }
        }}
      /> */}

      <h1 className={styles.title}>Beginner workouts:</h1>
      <div className={styles.presetsWrapper}>
        {presets.map((preset, index) => (
          <WorkoutPresetCard
            key={index}
            workoutPresetName={preset.title}
            roundsCount={preset.rounds}
            exercisesCount={preset.workout.length}
            isActive={activeWorkoutPreset === index}
            onClick={() => setActiveWorkoutPreset(index)}
          />
        ))}
      </div>

      <h1 className={styles.title}>HIIT workouts:</h1>
      <div className={styles.presetsWrapper}>
        {presets2.map((preset, index) => (
          <WorkoutPresetCard
            key={index}
            workoutPresetName={preset.title}
            roundsCount={preset.rounds}
            exercisesCount={preset.workout.length}
            isActive={activeWorkoutPreset === index}
            onClick={() => setActiveWorkoutPreset(index)}
          />
        ))}
      </div>

      <h1 className={styles.title}>Full body workouts:</h1>
      <div className={styles.presetsWrapper}>
        {presets3.map((preset, index) => (
          <WorkoutPresetCard
            key={index}
            workoutPresetName={preset.title}
            roundsCount={preset.rounds}
            exercisesCount={preset.workout.length}
            isActive={activeWorkoutPreset === index}
            onClick={() => setActiveWorkoutPreset(index)}
          />
        ))}
      </div>

      <div className={styles.buttonWrapper}>
        {activeWorkoutPreset !== null && (
          <PreviewWorkoutButton onClick={handlePreviewWorkout} />
        )}
        {activeWorkoutPreset !== null && (
          <StartWorkoutButton onClick={handleStartWorkout} />
        )}
      </div>

      <Link href="/custom" style={{ color: "white" }}>
        Create a custom workout
      </Link>
    </Wrapper>
  );
}
