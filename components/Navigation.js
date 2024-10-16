import Link from "next/link";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <h1>FitDevs logo</h1>
        {/* <img src="" alt="My logo" /> */}
      </div>
      <div className={styles.links}>
        <Link href="#">Link 1</Link>
        <Link href="#">Link 2</Link>
      </div>
    </div>
  );
};

export default Navigation;
