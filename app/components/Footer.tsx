import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainFooter}>
        <address className={styles.address}>
          <strong>TLA Graphics Ltd.</strong>
          <br />
          4 Paisley Lane
          <br />
          Uxbridge, ON L9P 0G5
        </address>
        <div className={styles.contact}>
          <a href="tel:+1-905-726-2600" className={styles.link}>
            +1 (905) 726-2600
          </a>
          <br />
          <a href="mailto:info@tlagraphics.com" className={styles.link}>
            info@tlagraphics.com
          </a>
          <br />
          <a
            href="https://www.dropbox.com/request/FL93CCTD7UCysvFI2Pp6"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            File Upload
          </a>
        </div>
        <div className={styles.backToTop}>
          <Link href="#top" className={styles.link}>
            To the top <span aria-hidden="true">&uarr;</span>
          </Link>
        </div>
      </div>
      <div className={styles.copy}>
        <p>
          &copy; {new Date().getFullYear()} TLA Graphics &middot; All rights
          reserved
        </p>
      </div>
    </footer>
  );
}
