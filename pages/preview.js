import Wrapper from "../components/Wrapper";
import Navigation from "../components/Navigation";
import StartWorkoutButton from "../components/StartWorkoutButton";
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
        </div>
        <div>
          <h1 className={styles.title}>Audio Settings:</h1>
          <h3>Music: on</h3>
          <h3>Voiceover: on</h3>
          <h3>Effects: on</h3>
        </div>
      </div>
      <h1 className={styles.title}>Workout progress</h1>
      <div className={styles.columnWrapper}>
        <div>
          <h3>Lunges</h3>
        </div>
        <div>
          <h3>Do a pushup on the floor and jump up.</h3>
        </div>
      </div>
      <StartWorkoutButton />
    </Wrapper>
  );
};

export default Preview;
