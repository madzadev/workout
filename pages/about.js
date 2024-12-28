import Wrapper from "../components/layout/Wrapper";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";

const About = () => {
  return (
    <Wrapper>
      <Navigation />
      <h1>About the app</h1>
      <p>Having workout is important</p>
      <h1>Note about programs</h1>
      <p>
        Note that created presets are general. It is always recommended do go to
        the doctor first or arrange a consultation with the exercise specialist
        to get more special program specific to you.
      </p>
      <Footer />
    </Wrapper>
  );
};

export default About;
