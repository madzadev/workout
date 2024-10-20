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
// import { presets, presets2, presets3 } from "../data/workouts";
import beginnerPresets from "../data/workouts/beginner";
import hiitPresets from "../data/workouts/hiit";
import fullbodyPresets from "../data/workouts/full_body";

const presets = [...beginnerPresets, ...hiitPresets, ...fullbodyPresets];

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

  const handlePreviewWorkout = (presetId) => {
    router.push({
      pathname: "/preview",
      query: { preset: presetId },
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
          <h1 className={styles.sectionTitle}>
            Transform Your Fitness Journey Today
          </h1>
          <p className={styles.heroDescription}>
            Take control of your health with personalized workouts tailored to
            your goals. Whether you’re a beginner or a fitness enthusiast, our
            app adapts to your needs, guiding you every step of the way with
            expert routines and progress tracking.
          </p>
          <p className={styles.heroDescription}>
            Stay motivated with real-time feedback, goal-setting tools, and a
            supportive community to keep you on track. It’s time to elevate your
            fitness and unlock your full potential — all from the palm of your
            hand.
          </p>
        </div>
        <Link href="/custom">
          <div className={styles.customWorkoutWrapper}>
            <h1 style={{ color: "white" }}>Create my workout</h1>
          </div>
        </Link>
      </div>

      <h1 className={styles.sectionTitle}>Beginner workouts:</h1>
      <div className={styles.presetsWrapper}>
        {beginnerPresets.map((preset, index) => (
          <WorkoutPresetCard
            key={index}
            backgroundColor={colors[0]}
            workoutPresetName={preset.title}
            roundsCount={preset.rounds}
            exercisesCount={preset.workout.length}
            // isActive={activeWorkoutPreset === index}
            onClick={() => handlePreviewWorkout(preset.id)}
          />
        ))}
      </div>

      <h1 className={styles.sectionTitle}>HIIT workouts:</h1>
      <div className={styles.presetsWrapper}>
        {hiitPresets.map((preset, index) => (
          <WorkoutPresetCard
            key={index}
            backgroundColor={colors[1]}
            workoutPresetName={preset.title}
            roundsCount={preset.rounds}
            exercisesCount={preset.workout.length}
            isActive={activeWorkoutPreset === index}
            onClick={() => handlePreviewWorkout(preset.id)}
          />
        ))}
      </div>

      <h1 className={styles.sectionTitle}>Full body workouts:</h1>
      <div className={styles.presetsWrapper}>
        {fullbodyPresets.map((preset, index) => (
          <WorkoutPresetCard
            key={index}
            backgroundColor={colors[2]}
            workoutPresetName={preset.title}
            roundsCount={preset.rounds}
            exercisesCount={preset.workout.length}
            isActive={activeWorkoutPreset === index}
            onClick={() => handlePreviewWorkout(preset.id)}
          />
        ))}
      </div>

      <div className={styles.buttonWrapper}>
        {/* {activeWorkoutPreset !== null && (
          <PreviewWorkoutButton onClick={handlePreviewWorkout} />
        )} */}
        {/* {activeWorkoutPreset !== null && (
          <StartWorkoutButton onClick={handleStartWorkout} />
        )} */}
      </div>

      <Footer />
    </Wrapper>
  );
}
