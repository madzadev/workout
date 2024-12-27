import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import Navigation from "../components/Navigation";
import Header from "../components/SEO/Header";
import WorkoutPresetCard from "../components/WorkoutPresetCard";
import Footer from "../components/Footer";

import styles from "../styles/Home.module.css";
import beginnerPresets from "../data/workouts/beginner";
import hiitPresets from "../data/workouts/hiit";
import fullbodyPresets from "../data/workouts/full_body";
import { sumExercises, sumBreaks, formatTime } from "../helpers/convertTime";

const presets = [...beginnerPresets, ...hiitPresets, ...fullbodyPresets];

const colors = ["#2ecc71", "#e74c3c", "#3498db"];

export default function Home() {
  const router = useRouter();

  const handlePreviewWorkout = (presetId) => {
    router.push({
      pathname: "/preview",
      query: { preset: presetId },
    });
  };

  const timeIntervals = (preset, rounds) => {
    const originalTimeIntervals = preset.workout.map(
      (exercise) => exercise.time
    );
    const repeatArray = (arr, rounds) => Array(rounds).fill(arr).flat();
    return repeatArray(originalTimeIntervals, rounds);
  };

  return (
    <Wrapper>
      <Header />
      <Navigation />

      <section className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <div>
            <h1 className={styles.heroTitle}>
              Transform Your Body, Elevate Your Life
            </h1>
            <p className={styles.heroDescription}>
              Take control of your health with personalized workouts tailored to
              your goals. Whether you're a beginner or a fitness enthusiast, our
              app adapts to your needs, guiding you every step of the way.
            </p>
            <Link href="/custom" className={styles.customWorkoutWrapper}>
              <span className={styles.customWorkoutWrapperStart}>
                Create My Workout
              </span>
            </Link>
          </div>
          <div className={styles.heroImage}>
            {/* Add hero image or animation here if needed */}
          </div>
        </div>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Beginner Workouts</h2>
        <div className={styles.presetsWrapper}>
          {beginnerPresets.map((preset, index) => (
            <WorkoutPresetCard
              key={preset.id}
              backgroundColor={colors[0]}
              workoutPresetName={preset.title}
              roundsCount={preset.rounds}
              exercisesCount={preset.workout.length}
              totalDuration={formatTime(
                sumExercises(timeIntervals(preset, preset.rounds)) +
                  sumBreaks(
                    preset.workout.length,
                    preset.rounds,
                    preset.exerciseBreaks,
                    preset.roundBreaks
                  )
              )}
              onClick={() => handlePreviewWorkout(preset.id)}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>HIIT Workouts</h2>
        <div className={styles.presetsWrapper}>
          {hiitPresets.map((preset, index) => (
            <WorkoutPresetCard
              key={preset.id}
              backgroundColor={colors[1]}
              workoutPresetName={preset.title}
              roundsCount={preset.rounds}
              exercisesCount={preset.workout.length}
              totalDuration={formatTime(
                sumExercises(timeIntervals(preset, preset.rounds)) +
                  sumBreaks(
                    preset.workout.length,
                    preset.rounds,
                    preset.exerciseBreaks,
                    preset.roundBreaks
                  )
              )}
              onClick={() => handlePreviewWorkout(preset.id)}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Full Body Workouts</h2>
        <div className={styles.presetsWrapper}>
          {fullbodyPresets.map((preset, index) => (
            <WorkoutPresetCard
              key={preset.id}
              backgroundColor={colors[2]}
              workoutPresetName={preset.title}
              roundsCount={preset.rounds}
              exercisesCount={preset.workout.length}
              totalDuration={formatTime(
                sumExercises(timeIntervals(preset, preset.rounds)) +
                  sumBreaks(
                    preset.workout.length,
                    preset.rounds,
                    preset.exerciseBreaks,
                    preset.roundBreaks
                  )
              )}
              onClick={() => handlePreviewWorkout(preset.id)}
            />
          ))}
        </div>
      </section>

      <Footer />
    </Wrapper>
  );
}
