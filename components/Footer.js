import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.links}>
        <Link href="/#">Twitter</Link>
        <Link href="/#">LinkedIn</Link>
      </div>
    </div>
  );
};

export default Footer;
