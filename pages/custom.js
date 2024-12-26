import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Wrapper from "../components/Wrapper";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import styles from "../styles/Custom.module.css";

import beginnerPresets from "../data/workouts/beginner";
import hiitPresets from "../data/workouts/hiit";
import fullbodyPresets from "../data/workouts/full_body";

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

  const [newExercise, setNewExercise] = useState({
    name: "",
    description: "",
    time: 30,
  });

  // Load preset if provided
  useEffect(() => {
    if (router.query.preset) {
      const index = router.query.preset;
      let preset = presets.find(
        (preset) => Number(preset.id) === Number(index)
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

  const handleWorkoutParamChange = (param, value) => {
    setCustomWorkout((prev) => ({
      ...prev,
      [param]: value,
    }));
  };

  const handleAddExercise = (e) => {
    e.preventDefault();
    if (newExercise.name && newExercise.description && newExercise.time > 0) {
      setCustomWorkout((prev) => ({
        ...prev,
        workout: [...prev.workout, { ...newExercise }],
      }));
      setNewExercise({
        name: "",
        description: "",
        time: 30,
      });
    }
  };

  const handleRemoveExercise = (index) => {
    setCustomWorkout((prev) => ({
      ...prev,
      workout: prev.workout.filter((_, i) => i !== index),
    }));
  };

  const moveExercise = (index, direction) => {
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

    // Create a workout preset in the format expected by the workout page
    const workoutPreset = {
      id: Date.now(), // Generate temporary ID
      title: customWorkout.title,
      description: customWorkout.description,
      rounds: customWorkout.rounds,
      exerciseBreaks: customWorkout.exerciseBreaks,
      roundBreaks: customWorkout.roundBreaks,
      workout: customWorkout.workout.map((exercise, index) => ({
        id: index + 1,
        name: exercise.name,
        description: exercise.description,
        time: exercise.time,
      })),
    };

    // Store workout in session storage for the workout page to access
    sessionStorage.setItem("customPreset", JSON.stringify(workoutPreset));

    // Navigate to workout page with the custom workout
    router.push({
      pathname: "/workout",
      query: { preset: workoutPreset.id, isCustom: true },
    });
  };

  return (
    <Wrapper>
      <Navigation />
      <div className={styles.customWorkoutContainer}>
        <h1 className={styles.title}>Create Custom Workout</h1>

        {/* Basic Settings */}
        <div className={styles.settingsSection}>
          {/* <h2>Workout Settings</h2>
          <div className={styles.settingField}>
            <label>Title:</label>
            <input
              type="text"
              value={customWorkout.title}
              onChange={(e) =>
                handleWorkoutParamChange("title", e.target.value)
              }
              placeholder="Workout Title"
              className={styles.input}
            />
          </div>

          <div className={styles.settingField}>
            <label>Description:</label>
            <textarea
              value={customWorkout.description}
              onChange={(e) =>
                handleWorkoutParamChange("description", e.target.value)
              }
              placeholder="Workout Description"
              className={styles.textarea}
            />
          </div> */}

          <div className={styles.settingField}>
            <label>Number of Rounds:</label>
            <div className={styles.numberControl}>
              <button
                onClick={() =>
                  handleWorkoutParamChange(
                    "rounds",
                    Math.max(1, customWorkout.rounds - 1)
                  )
                }
              >
                -
              </button>
              <span>{customWorkout.rounds}</span>
              <button
                onClick={() =>
                  handleWorkoutParamChange("rounds", customWorkout.rounds + 1)
                }
              >
                +
              </button>
            </div>
          </div>

          <div className={styles.settingField}>
            <label>Exercise Break Duration (seconds):</label>
            <div className={styles.numberControl}>
              <button
                onClick={() =>
                  handleWorkoutParamChange(
                    "exerciseBreaks",
                    Math.max(5, customWorkout.exerciseBreaks - 5)
                  )
                }
              >
                -
              </button>
              <span>{customWorkout.exerciseBreaks}</span>
              <button
                onClick={() =>
                  handleWorkoutParamChange(
                    "exerciseBreaks",
                    customWorkout.exerciseBreaks + 5
                  )
                }
              >
                +
              </button>
            </div>
          </div>

          <div className={styles.settingField}>
            <label>Round Break Duration (seconds):</label>
            <div className={styles.numberControl}>
              <button
                onClick={() =>
                  handleWorkoutParamChange(
                    "roundBreaks",
                    Math.max(5, customWorkout.roundBreaks - 5)
                  )
                }
              >
                -
              </button>
              <span>{customWorkout.roundBreaks}</span>
              <button
                onClick={() =>
                  handleWorkoutParamChange(
                    "roundBreaks",
                    customWorkout.roundBreaks + 5
                  )
                }
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Exercise Addition Form */}
        <div className={styles.exerciseSection}>
          <h2>Add Exercise</h2>
          <form onSubmit={handleAddExercise} className={styles.exerciseForm}>
            <input
              type="text"
              value={newExercise.name}
              onChange={(e) =>
                setNewExercise((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Exercise Name"
              className={styles.input}
            />
            <input
              type="text"
              value={newExercise.description}
              onChange={(e) =>
                setNewExercise((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              placeholder="Exercise Description"
              className={styles.input}
            />
            <div className={styles.numberControl}>
              <label>Duration (seconds):</label>
              <button
                type="button"
                onClick={() =>
                  setNewExercise((prev) => ({
                    ...prev,
                    time: Math.max(5, prev.time - 5),
                  }))
                }
              >
                -
              </button>
              <span>{newExercise.time}</span>
              <button
                type="button"
                onClick={() =>
                  setNewExercise((prev) => ({ ...prev, time: prev.time + 5 }))
                }
              >
                +
              </button>
            </div>
            <button type="submit" className={styles.addButton}>
              Add Exercise
            </button>
          </form>
        </div>

        {/* Exercise List */}
        <div className={styles.exerciseList}>
          <h2>Workout Exercises</h2>
          {customWorkout.workout.map((exercise, index) => (
            <div key={index} className={styles.exerciseItem}>
              <div className={styles.exerciseInfo}>
                <h3>{exercise.name}</h3>
                <p>{exercise.description}</p>
                <p>{exercise.time} seconds</p>
              </div>
              <div className={styles.moveButtons}>
                <button
                  onClick={() => moveExercise(index, -1)}
                  disabled={index === 0}
                >
                  ↑
                </button>
                <button
                  onClick={() => moveExercise(index, 1)}
                  disabled={index === customWorkout.workout.length - 1}
                >
                  ↓
                </button>
              </div>
              <button
                onClick={() => handleRemoveExercise(index)}
                className={styles.removeButton}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Start Button */}
        {customWorkout.workout.length > 0 && (
          <div className={styles.startButtonContainer}>
            <button onClick={handleStartWorkout} className={styles.startButton}>
              Start Workout
            </button>
          </div>
        )}
      </div>
      <Footer />
    </Wrapper>
  );
};

export default CustomWorkout;
