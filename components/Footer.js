import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.links}>
        <p>Created with 💖 by Madza</p>
        <p>Created with NextJS and Vercel</p>
      </div>
    </div>
  );
};

export default Footer;
