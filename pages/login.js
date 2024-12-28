import React from "react";
import Wrapper from "../components/layout/Wrapper";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import styles from "../styles/Login.module.css";

const Login = () => {
  return (
    <Wrapper>
      <Header />
      <div className={styles.loginContainer}>
        <h1 className={styles.title}>Login</h1>
        <div className={styles.socialLogin}>
          <button className={styles.googleButton}>Login with Google</button>
          <button className={styles.githubButton}>Login with GitHub</button>
        </div>
        <div className={styles.divider}>or</div>
        <form className={styles.loginForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Login;
