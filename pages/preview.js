import Wrapper from "../components/Wrapper";
import Navigation from "../components/Navigation";

const Preview = () => {
  return (
    <Wrapper>
      <Navigation />
      <div>
        <div>
          <h1>Workout name: AAAAAA</h1>
          <h3>Workout description: AAAAAAAAA</h3>
          <h3>Targeted body parts: AAA, BBB, CCC</h3>
          <h3>Equipment needed: none</h3>
        </div>
        <div>
          <h1>Audio Settings:</h1>
          <h3>Music: on</h3>
          <h3>Voiceover: on</h3>
          <h3>Effects: on</h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default Preview;
