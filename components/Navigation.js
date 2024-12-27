import Link from "next/link";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Link href="/">
          <h1 className={styles.links}>💪 FitHub</h1>
          {/* <p>Devmile</p> */}
        </Link>
        {/* <img src="" alt="My logo" /> */}
      </div>
      <div className={styles.links}>
        <Link href="#">Workouts</Link>
        <Link href="#">Programs</Link>
        <Link href="#">Nutrition</Link>
        <Link href="#">Community</Link>
        {/* <Link href="/settings">Settings</Link>
        <Link href="/about">About</Link>
        <Link href="#">Get Started</Link> */}
        <Link href="#">Log In</Link>
      </div>
    </div>
  );
};

export default Navigation;
