import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.wrapper}>
      <div className={styles.logo}>
        <Link href="/">
          <span className={styles.links}>
            💪 <h1>FitHub</h1>
          </span>
        </Link>
      </div>

      <button
        className={styles.mobileMenuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      <div className={`${styles.links} ${isMenuOpen ? styles.active : ""}`}>
        <Link href="#">Workouts</Link>
        <Link href="#">Programs</Link>
        <Link href="#">Nutrition</Link>
        <Link href="#">Community</Link>
        <Link href="#">Log In</Link>
      </div>
    </nav>
  );
};

export default Header;
