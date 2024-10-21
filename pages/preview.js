import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Wrapper from "../components/Wrapper";
import Navigation from "../components/Navigation";
import StartWorkoutButton from "../components/StartWorkoutButton";
import Footer from "../components/Footer";

import beginnerPresets from "../data/workouts/beginner";
import hiitPresets from "../data/workouts/hiit";
import fullbodyPresets from "../data/workouts/full_body";

import { sumExercises, sumBreaks, formatTime } from "../helpers/convertTime";

const presets = [...beginnerPresets, ...hiitPresets, ...fullbodyPresets];

import styles from "../styles/Preview.module.css";

const Preview = () => {
  const router = useRouter();

  const [presetIndex, setPresetIndex] = useState("");
  const [preset, setPreset] = useState("");

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

  const handleStartWorkout = (index) => {
    router.push({
      pathname: "/workout",
      query: { preset: index },
    });
  };

  const handleCustomizeWorkout = (index) => {
    router.push({
      pathname: "/custom",
      query: { preset: index },
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
      <Navigation />
      <div className={styles.columnWrapper}>
        <div>
          <h1 className={styles.title}>{preset.title}</h1>
          <h3>{preset.description}</h3>
          <h3>
            Targeted body parts:{" "}
            {preset && preset.targets.map((item) => item).join(", ")}
          </h3>
          <h3>
            Equipment needed:{" "}
            {preset && preset.equipment.map((item) => item).join(", ")}
          </h3>
          <h3>
            Total time:{" "}
            {`${
              preset &&
              formatTime(
                sumExercises(timeIntervals(preset, preset.rounds)) +
                  sumBreaks(
                    preset.workout.length,
                    preset.rounds,
                    preset.exerciseBreaks,
                    preset.roundBreaks
                  )
              )
            }`}
          </h3>
        </div>
        <div>
          <h1 className={styles.title}>Timer Settings:</h1>
          {/* <h3>Warmup: 05:00</h3> */}
          <h3>Exercise interval: 00:20</h3>
          <h3>Exercise rest interval: {formatTime(preset.exerciseBreaks)}</h3>
          <h3>Rounds: {preset.rounds}</h3>
          <h3>Rest between rounds: {formatTime(preset.roundBreaks)}</h3>
        </div>
        <div>
          <h1 className={styles.title}>Audio Settings:</h1>
          <h3>Music: on</h3>
          <h3>Voiceover: on</h3>
          <h3>Effects: on</h3>
        </div>
      </div>
      <h1 className={styles.title}>Workout structure:</h1>
      <div className={styles.columnWrapper}>
        <div>
          {preset &&
            preset.workout.map((exercise, index) => {
              return <h3 key={index}>{exercise.name}</h3>;
            })}
        </div>
        <div>
          {preset &&
            preset.workout.map((exercise, index) => {
              return <h3 key={index}>{exercise.description}</h3>;
            })}
        </div>
        <div className={styles.buttonWrapper}>
          <div
            className={styles.startButton}
            onClick={() => {
              handleStartWorkout(presetIndex);
            }}
          >
            <h3>Start</h3>
          </div>
          <div
            className={styles.customizeButton}
            onClick={() => {
              handleCustomizeWorkout(presetIndex);
            }}
          >
            <h3> Configure</h3>
          </div>
          {/* <StartWorkoutButton
            onClick={() => {
              handleStartWorkout(presetIndex);
            }}
          /> */}
          {/* <StartWorkoutButton
            onClick={() => {
              handleCustomizeWorkout(presetIndex);
            }}
          /> */}
        </div>
      </div>

      <Footer />
    </Wrapper>
  );
};

export default Preview;
