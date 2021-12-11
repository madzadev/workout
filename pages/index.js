import { useState } from "react";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import SetWorkoutTime from "../components/SetWorkoutTime";

export default function Home() {
  const [workoutTime, setWorkoutTime] = useState(15);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Workout app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 style={{ color: "white" }}>Select available time:</h1>
      <SetWorkoutTime
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
      <h1 style={{ color: "white" }}>Pick a present:</h1>
    </div>
  );
}
