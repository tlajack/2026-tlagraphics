"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";

export default function NavbarMobileToggle({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span className={`${styles.bar} ${isOpen ? styles.barOpen : ""}`} />
        <span className={`${styles.bar} ${isOpen ? styles.barOpen : ""}`} />
        <span className={`${styles.bar} ${isOpen ? styles.barOpen : ""}`} />
      </button>
      <div
        className={`${styles.navWrapper} ${isOpen ? styles.navOpen : ""}`}
        onClick={() => setIsOpen(false)}
      >
        {children}
      </div>
    </>
  );
}
