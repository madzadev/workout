import Wrapper from "../components/Wrapper";
import Navigation from "../components/Navigation";
import StartWorkoutButton from "../components/StartWorkoutButton";
import Footer from "../components/Footer";

import styles from "../styles/Preview.module.css";

const Preview = () => {
  return (
    <Wrapper>
      <Navigation />
      <div className={styles.columnWrapper}>
        <div>
          <h1 className={styles.title}>Workout name: AAAAAA</h1>
          <h3>Workout description: AAAAAAAAA</h3>
          <h3>Targeted body parts: AAA, BBB, CCC</h3>
          <h3>Equipment needed: none</h3>
          <h3>Total time: 15 minutes 23 seconds</h3>
        </div>
        <div>
          <h1 className={styles.title}>Timer Settings:</h1>
          <h3>Warmup: 05:00</h3>
          <h3>Exercise interval: 00:20</h3>
          <h3>Exercise rest interval: 00:15</h3>
          <h3>Rounds: 5</h3>
          <h3>Rest between rounds: 01:00</h3>
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
