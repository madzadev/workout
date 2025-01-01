import React from "react";
import Wrapper from "../components/layout/Wrapper";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import styles from "../styles/Login.module.css";

const Login = () => {
  return (
    <Wrapper>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.benefitsSection}>
            <div className={styles.benefitsContent}>
              <h2>Why Join FitHub?</h2>
              <div className={styles.benefits}>
                <div className={styles.benefit}>
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path
                      fill="currentColor"
                      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"
                    />
                  </svg>
                  <div>
                    <h3>Personalized Workouts</h3>
                    <p>
                      Customized fitness routines tailored to your goals and
                      preferences
                    </p>
                  </div>
                </div>
                <div className={styles.benefit}>
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path
                      fill="currentColor"
                      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM10.622 8.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.879 3.252a.4.4 0 0 1-.622-.332V8.747a.4.4 0 0 1 .622-.332z"
                    />
                  </svg>
                  <div>
                    <h3>Progress Tracking</h3>
                    <p>Monitor your improvements and celebrate achievements</p>
                  </div>
                </div>
                <div className={styles.benefit}>
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path
                      fill="currentColor"
                      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-7h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"
                    />
                  </svg>
                  <div>
                    <h3>Community Support</h3>
                    <p>Join a community of like-minded fitness enthusiasts</p>
                  </div>
                </div>
                <div className={styles.benefit}>
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path
                      fill="currentColor"
                      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7h2v6h-2v-6zm0-4h2v2h-2V9z"
                    />
                  </svg>
                  <div>
                    <h3>Expert Guidance</h3>
                    <p>Access professional workout plans and fitness tips</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formSection}>
            <h1 className={styles.title}>Welcome Back</h1>
            <p className={styles.subtitle}>
              Sign in to continue your fitness journey
            </p>

            <form className={styles.loginForm}>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className={styles.loginButton}>
                Sign In
              </button>
            </form>

            <div className={styles.divider}>
              <span>or continue with</span>
            </div>

            <div className={styles.socialLogin}>
              <button className={styles.googleButton}>
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path
                    fill="currentColor"
                    d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                  />
                </svg>
                Continue with Google
              </button>
              <button className={styles.githubButton}>
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path
                    fill="currentColor"
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  />
                </svg>
                Continue with GitHub
              </button>
            </div>

            <p className={styles.signupPrompt}>
              Don't have an account? <a href="#">Sign up</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Login;
