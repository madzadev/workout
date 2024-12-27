import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Wrapper from "../components/Wrapper";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PreviewHeader from "../components/preview/PreviewHeader";
import PreviewStats from "../components/preview/PreviewStats";
import ExerciseList from "../components/preview/ExerciseList";
import ActionButtons from "../components/preview/ActionButtons";

import beginnerPresets from "../data/workouts/beginner";
import hiitPresets from "../data/workouts/hiit";
import fullbodyPresets from "../data/workouts/full_body";

import { sumExercises, sumBreaks, formatTime } from "../helpers/convertTime";
import styles from "../styles/Preview.module.css";

const presets = [...beginnerPresets, ...hiitPresets, ...fullbodyPresets];

const Preview = () => {
  const router = useRouter();
  const [preset, setPreset] = useState(null);

  useEffect(() => {
    if (router.query.preset) {
      const workout = presets.find(
        (preset) => Number(preset.id) === Number(router.query.preset)
      );
      setPreset(workout);
    }
  }, [router.query.preset]);

  const handleStartWorkout = () => {
    router.push({
      pathname: "/workout",
      query: { preset: preset.id },
    });
  };

  const handleCustomizeWorkout = () => {
    router.push({
      pathname: "/custom",
      query: { preset: preset.id },
    });
  };

  if (!preset) return null;

  const totalTime = formatTime(
    sumExercises(preset.workout.map((ex) => ex.time)) +
      sumBreaks(
        preset.workout.length,
        preset.rounds,
        preset.exerciseBreaks,
        preset.roundBreaks
      )
  );

  return (
    <Wrapper>
      <Navigation />
      <div className={styles.container}>
        <div className={styles.content}>
          <PreviewHeader
            title={preset.title}
            description={preset.description}
            targets={preset.targets}
            equipment={preset.equipment}
          />

          <PreviewStats
            totalTime={totalTime}
            exerciseInterval="20s"
            exerciseRest={formatTime(preset.exerciseBreaks)}
            rounds={preset.rounds}
            roundRest={formatTime(preset.roundBreaks)}
          />

          <ExerciseList exercises={preset.workout} />

          <ActionButtons
            onStart={handleStartWorkout}
            onCustomize={handleCustomizeWorkout}
          />
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Preview;
