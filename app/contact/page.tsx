import type { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactForm from "../components/ContactForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with TLA Graphics for custom signage, graphics, and visual merchandising projects. Located in Uxbridge, Ontario — serving businesses across the GTA and beyond.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | TLA Graphics",
    description:
      "Get in touch with TLA Graphics for custom signage, graphics, and visual merchandising projects.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

      <div className={styles.container}>
        <section className={styles.info}>
          <h1 className={styles.title}>Get in Touch</h1>
          <p className={styles.description}>
            Have a project in mind? We&apos;d love to hear from you. Reach out
            using the form or contact us directly.
          </p>

          <div className={styles.details}>
            <div className={styles.detail}>
              <h2 className={styles.detailTitle}>Address</h2>
              <address className={styles.address}>
                TLA Graphics Ltd.
                <br />
                4 Paisley Lane
                <br />
                Uxbridge, ON L9P 0G5
              </address>
            </div>

            <div className={styles.detail}>
              <h2 className={styles.detailTitle}>Phone</h2>
              <a href="tel:+1-905-726-2600" className={styles.link}>
                +1 (905) 726-2600
              </a>
            </div>

            <div className={styles.detail}>
              <h2 className={styles.detailTitle}>Email</h2>
              <a href="mailto:info@tlagraphics.com" className={styles.link}>
                info@tlagraphics.com
              </a>
            </div>

            <div className={styles.detail}>
              <h2 className={styles.detailTitle}>File Upload</h2>
              <a
                href="https://www.dropbox.com/request/FL93CCTD7UCysvFI2Pp6"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Upload files via Dropbox
              </a>
            </div>
          </div>
        </section>

        <section className={styles.formSection}>
          <h2 className={styles.formTitle}>Send Us a Message</h2>
          <ContactForm />
        </section>
      </div>
    </>
  );
}
