import type { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactForm from "../components/ContactForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Tell us about your project. TLA Graphics works with OEM manufacturers, fleet operators, facilities teams, and brands across Ontario on custom graphics, signage, and visual merchandising.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Start a Project | TLA Graphics",
    description:
      "Tell us about your project. TLA Graphics works with OEM manufacturers, fleet operators, facilities teams, and brands across Ontario.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

      <section className={styles.hero}>
        <h1 className={styles.title}>Start a Project</h1>
        <p className={styles.description}>
          Tell us what you&apos;re working on. The more detail you share, the
          faster we can come back with a clear plan and quote.
        </p>
      </section>

      <section className={styles.formSection}>
        <ContactForm />
      </section>

      <section className={styles.secondary}>
        <p>For immediate attention contact Mark directly.</p>
        <div className={styles.secondaryLinks}>
          <a href="mailto:info@tlagraphics.ca" className={styles.link}>
            info@tlagraphics.ca
          </a>
          <a href="tel:+1-905-726-2660" className={styles.link}>
            905-726-2660
          </a>
        </div>
      </section>
    </>
  );
}
