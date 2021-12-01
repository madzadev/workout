import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import SetWorkoutTime from "../components/SetWorkoutTime";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Workout app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Select available time:</h1>
      <SetWorkoutTime minutes="30" />
    </div>
  );
}
