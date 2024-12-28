import Wrapper from "../components/layout/Wrapper";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Settings = () => {
  return (
    <Wrapper>
      <Header />
      <h1>Configure your app</h1>

      <h1>Main settings</h1>
      <p>Audio</p>
      <p>Controls</p>
      <p>Titles off</p>

      <h1>Select colors</h1>
      <p>Main</p>
      <p>Secondary</p>
      <p>Background</p>

      <h1>Keyboard shortcuts</h1>
      <p>Audio</p>
      <p>Audio</p>
      <p>Audio</p>
      <Footer />
    </Wrapper>
  );
};

export default Settings;
