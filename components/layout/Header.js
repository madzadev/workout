import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.wrapper}>
      <Logo />

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
        <Link href="/login">Log In</Link>
      </div>
    </nav>
  );
};

export default Header;
