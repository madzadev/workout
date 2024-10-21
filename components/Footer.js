import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <p>Created with 💖 by Madza</p>
      <p>Created with NextJS and Vercel</p>
    </div>
  );
};

export default Footer;
