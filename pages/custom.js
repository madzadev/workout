import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Wrapper from "../components/layout/Wrapper";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import CustomHeader from "../components/custom/CustomHeader";
import WorkoutSettings from "../components/custom/WorkoutSettings";
import ExerciseForm from "../components/custom/ExerciseForm";
import ExerciseList from "../components/custom/ExerciseList";
import ActionButtons from "../components/preview/ActionButtons";

import beginnerPresets from "../data/workouts/beginner";
import hiitPresets from "../data/workouts/hiit";
import fullbodyPresets from "../data/workouts/full_body";

import styles from "../styles/Custom.module.css";

const presets = [...beginnerPresets, ...hiitPresets, ...fullbodyPresets];

const CustomWorkout = () => {
  const router = useRouter();
  const [customWorkout, setCustomWorkout] = useState({
    title: "",
    description: "",
    rounds: 3,
    exerciseBreaks: 15,
    roundBreaks: 60,
    workout: [],
  });

  useEffect(() => {
    if (router.query.preset) {
      const preset = presets.find(
        (p) => Number(p.id) === Number(router.query.preset)
      );
      if (preset) {
        setCustomWorkout({
          title: preset.title,
          description: preset.description,
          rounds: preset.rounds,
          exerciseBreaks: preset.exerciseBreaks,
          roundBreaks: preset.roundBreaks,
          workout: preset.workout,
        });
      }
    }
  }, [router.query.preset]);

  const handleSettingsChange = (setting, value) => {
    setCustomWorkout((prev) => ({ ...prev, [setting]: value }));
  };

  const handleAddExercise = (exercise) => {
    setCustomWorkout((prev) => ({
      ...prev,
      workout: [...prev.workout, exercise],
    }));
  };

  const handleRemoveExercise = (index) => {
    setCustomWorkout((prev) => ({
      ...prev,
      workout: prev.workout.filter((_, i) => i !== index),
    }));
  };

  const handleMoveExercise = (index, direction) => {
    const newExercises = [...customWorkout.workout];
    const [movedExercise] = newExercises.splice(index, 1);
    newExercises.splice(index + direction, 0, movedExercise);
    setCustomWorkout((prev) => ({ ...prev, workout: newExercises }));
  };

  const handleStartWorkout = () => {
    if (customWorkout.workout.length === 0) {
      alert("Please add at least one exercise");
      return;
    }

    const workoutPreset = {
      id: Date.now(),
      ...customWorkout,
    };

    sessionStorage.setItem("customPreset", JSON.stringify(workoutPreset));
    router.push({
      pathname: "/workout",
      query: { preset: workoutPreset.id, isCustom: true },
    });
  };

  return (
    <Wrapper>
      <Navigation />
      <div className={styles.container}>
        <div className={styles.content}>
          <CustomHeader
            title={customWorkout.title}
            onTitleChange={(e) => handleSettingsChange("title", e.target.value)}
            description={customWorkout.description}
            onDescriptionChange={(e) =>
              handleSettingsChange("description", e.target.value)
            }
          />

          <WorkoutSettings
            rounds={customWorkout.rounds}
            exerciseBreaks={customWorkout.exerciseBreaks}
            roundBreaks={customWorkout.roundBreaks}
            onSettingsChange={handleSettingsChange}
          />

          <ExerciseForm onAddExercise={handleAddExercise} />

          <ExerciseList
            exercises={customWorkout.workout}
            onRemove={handleRemoveExercise}
            onMove={handleMoveExercise}
          />

          {customWorkout.workout.length > 0 && (
            <ActionButtons
              onStart={handleStartWorkout}
              onCustomize={() => {}}
              showCustomize={false}
            />
          )}
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default CustomWorkout;
