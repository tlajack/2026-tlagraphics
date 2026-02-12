import Link from "next/link";
import Image from "next/image";
import NavbarMobileToggle from "./NavbarMobileToggle";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header} id="top">
      <Link href="/" aria-label="TLA Graphics home">
        <Image
          className={styles.logo}
          src="/tla-logo-horizontal.svg"
          alt="TLA Graphics"
          width={200}
          height={60}
          priority
        />
      </Link>
      <NavbarMobileToggle>
        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.navList}>
            <li>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className={styles.navLink}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className={styles.navLink}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.navLink}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.navLink}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </NavbarMobileToggle>
    </header>
  );
}
