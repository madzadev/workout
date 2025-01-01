import Link from "next/link";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <div className={styles.logoIcon}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.5 7C5.11929 7 4 8.11929 4 9.5V14.5C4 15.8807 5.11929 17 6.5 17C7.88071 17 9 15.8807 9 14.5V9.5C9 8.11929 7.88071 7 6.5 7Z"
            className={styles.primary}
          />
          <path
            d="M17.5 7C16.1193 7 15 8.11929 15 9.5V14.5C15 15.8807 16.1193 17 17.5 17C18.8807 17 20 15.8807 20 14.5V9.5C20 8.11929 18.8807 7 17.5 7Z"
            className={styles.secondary}
          />
          <path
            d="M11 5C11 3.89543 11.8954 3 13 3C14.1046 3 15 3.89543 15 5V19C15 20.1046 14.1046 21 13 21C11.8954 21 11 20.1046 11 19V5Z"
            className={styles.accent}
          />
        </svg>
      </div>
      <div className={styles.logoText}>
        <span className={styles.name}>FitHub</span>
        <span className={styles.tagline}>Train Smarter</span>
      </div>
    </Link>
  );
};

export default Logo;
