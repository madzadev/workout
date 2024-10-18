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
import Footer from "../components/Footer";

import styles from "../styles/Home.module.css";
import { presets, presets2, presets3 } from "../data/workouts";

const colors = ["yellow", "tomato", "aquamarine"];

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
      <div className={styles.heroWrapper}>
        <div>
          <h1>This is developers</h1>
          <p>This is a description</p>
          <p>This is a description</p>
          <p>This is a description</p>
          <p>This is a description</p>
          <p>This is a description</p>
          <p>This is a description</p>
        </div>
        <div className={styles.customWorkoutWrapper}>
          <Link href="/custom" style={{ color: "white" }}>
            Create a custom workout
          </Link>
        </div>
      </div>

      <h1 className={styles.sectionTitle}>Beginner workouts:</h1>
      <div className={styles.presetsWrapper}>
        {presets.map((preset, index) => (
          <WorkoutPresetCard
            key={index}
            backgroundColor={colors[0]}
            workoutPresetName={preset.title}
            roundsCount={preset.rounds}
            exercisesCount={preset.workout.length}
            isActive={activeWorkoutPreset === index}
            onClick={() => setActiveWorkoutPreset(index)}
          />
        ))}
      </div>

      <h1 className={styles.sectionTitle}>HIIT workouts:</h1>
      <div className={styles.presetsWrapper}>
        {presets2.map((preset, index) => (
          <WorkoutPresetCard
            key={index}
            backgroundColor={colors[1]}
            workoutPresetName={preset.title}
            roundsCount={preset.rounds}
            exercisesCount={preset.workout.length}
            isActive={activeWorkoutPreset === index}
            onClick={() => setActiveWorkoutPreset(index)}
          />
        ))}
      </div>

      <h1 className={styles.sectionTitle}>Full body workouts:</h1>
      <div className={styles.presetsWrapper}>
        {presets3.map((preset, index) => (
          <WorkoutPresetCard
            key={index}
            backgroundColor={colors[2]}
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

      <Footer />
    </Wrapper>
  );
}
