import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h3>FitHub</h3>
          <p>
            Transform your body, elevate your life. Join our community of
            fitness enthusiasts and achieve your goals.
          </p>
          <div className={styles.social}>
            <Link href="#" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 5.8a8.49 8.49 0 0 1-2.36.64 4.13 4.13 0 0 0 1.81-2.27 8.21 8.21 0 0 1-2.61 1 4.1 4.1 0 0 0-7 3.74 11.64 11.64 0 0 1-8.45-4.29 4.16 4.16 0 0 0-.55 2.07 4.09 4.09 0 0 0 1.82 3.41 4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4 4.1 4.1 0 0 1-1.86.07 4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 3 18.34a11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 21 8.45v-.53a8.43 8.43 0 0 0 2-2.12Z" />
              </svg>
            </Link>
            <Link href="#" aria-label="GitHub">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 6.84 9.49c.5.09.69-.21.69-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.19.57.69.48A10 10 0 0 0 22 12 10 10 0 0 0 12 2Z" />
              </svg>
            </Link>
            <Link href="#" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
              </svg>
            </Link>
          </div>
        </div>

        <div className={styles.section}>
          <h4>Quick Links</h4>
          <nav>
            <Link href="/workouts">Workouts</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/custom">Create Workout</Link>
            <Link href="/settings">Settings</Link>
          </nav>
        </div>

        <div className={styles.section}>
          <h4>Support</h4>
          <nav>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
          </nav>
        </div>

        <div className={styles.section}>
          <h4>Download App</h4>
          <div className={styles.appButtons}>
            <button className={styles.appButton}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.5 1.32-.82 2.67-2.53 4.08ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.32-1.89 4.31-3.74 4.25Z" />
              </svg>
              <span>iOS App</span>
            </button>
            <button className={styles.appButton}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.337c.49-.503.922-1.005 1.301-1.549 1.341-1.934 1.947-4.361 1.658-7.417l-.012-.123h-9.806l.01 9.764h4.23c.582.48 1.112.848 1.62 1.131v1.76h-5.85l-.01-12.655h12.683c.315 3.754-.574 7.029-2.476 9.512-1.403 1.836-3.216 3.182-5.36 4.066v-4.489h-.002zM6.979 15.425V2.766H4.664v14.418c0 .576.157 1.056.48 1.428.322.374.783.556 1.363.556h12.323v-2.083H7.024a.05.05 0 0 1-.045-.048v-1.612z" />
              </svg>
              <span>Android App</span>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} FitHub. All rights reserved.</p>
        <p>
          Built with 💪 by <Link href="https://github.com">Madza</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
