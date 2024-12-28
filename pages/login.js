import Wrapper from "../components/layout/Wrapper";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Login = () => {
  return (
    <Wrapper>
      <Header />
      <h1>LOGIN</h1>
      <p>Google/Github</p>
      <h1>Or use an email</h1>
      <p>Your email and password goes here.</p>
      <Footer />
    </Wrapper>
  );
};

export default Login;
