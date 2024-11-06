import Link from "next/link";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Link href="/">
          <h1 className={styles.links}>💪 FitDevs</h1>
        </Link>
        {/* <img src="" alt="My logo" /> */}
      </div>
      <div className={styles.links}>
        <Link href="/settings">Settings</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
};

export default Navigation;
