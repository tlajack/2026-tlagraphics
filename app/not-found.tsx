import type { Metadata } from "next";
import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Page Not Found</h2>
      <p className={styles.text}>
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className={styles.links}>
        <Link href="/" className={styles.button}>
          Go Home
        </Link>
        <Link href="/services" className={styles.buttonSecondary}>
          View Services
        </Link>
        <Link href="/contact" className={styles.buttonSecondary}>
          Contact Us
        </Link>
      </div>
    </div>
  );
}
