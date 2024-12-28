import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.content}>
        <p>Created with 💖 by Madza</p>
        <p>Built with Next.js and deployed on Vercel</p>
        <p>
          <Link href="#">Terms</Link> • <Link href="#">Privacy</Link> •{" "}
          <Link href="#">Support</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
