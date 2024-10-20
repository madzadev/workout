import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Wrapper from "../components/Wrapper";
import Navigation from "../components/Navigation";
import StartWorkoutButton from "../components/StartWorkoutButton";
import Footer from "../components/Footer";

import beginnerPresets from "../data/workouts/beginner";
import hiitPresets from "../data/workouts/hiit";
import fullbodyPresets from "../data/workouts/full_body";

import { formatTime } from "../helpers/convertTime";

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

  return (
    <Wrapper>
      <Navigation />
      <div className={styles.columnWrapper}>
        <div>
          <h1 className={styles.title}>{preset.title}</h1>
          <h3>{preset.description}</h3>
          <h3>Targeted body parts: AAA, BBB, CCC</h3>
          <h3>Equipment needed: none</h3>
          <h3>Total time: 15 minutes 23 seconds</h3>
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
          <h3>Lunges</h3>
          <h3>Lunges</h3>
          <h3>Lunges</h3>
          <h3>Lunges</h3>
          <br />
          <br />
          <h3>Lunges</h3>
          <h3>Lunges</h3>
          <h3>Lunges</h3>
          <h3>Lunges</h3>
          <br />
          <br />
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
          <br />
          <br />
          <h3>Do a pushup on the floor and jump up.</h3>
          <h3>Do a pushup on the floor and jump up.</h3>
          <h3>Do a pushup on the floor and jump up.</h3>
          <h3>Do a pushup on the floor and jump up.</h3>
          <br />
          <br />
          <h3>Do a pushup on the floor and jump up.</h3>
          <h3>Do a pushup on the floor and jump up.</h3>
          <h3>Do a pushup on the floor and jump up.</h3>
          <h3>Do a pushup on the floor and jump up.</h3>
        </div>
      </div>
      <StartWorkoutButton />
      <Footer />
    </Wrapper>
  );
};

export default Preview;
