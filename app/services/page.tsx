import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import ServiceCard from "../components/ServiceCard";
import { serviceCategories } from "../lib/services-data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore TLA Graphics services: visual merchandising, marketing collateral, decorative graphic films, and custom signage solutions for Ontario businesses.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Our Services | TLA Graphics",
    description:
      "Explore TLA Graphics services: visual merchandising, marketing collateral, decorative graphic films, and custom signage solutions.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />

      <section className={styles.hero}>
        <h1 className={styles.title}>Our Services</h1>
        <p className={styles.description}>
          From retail displays to vehicle wraps, architectural films to
          wayfinding signage — TLA Graphics delivers end-to-end graphic
          solutions for every business need.
        </p>
      </section>

      <section className={styles.grid}>
        {serviceCategories.map((service) => (
          <ServiceCard
            key={service.slug}
            title={service.title}
            description={service.description}
            href={`/services/${service.slug}`}
            imageSrc={service.heroImage}
            imageAlt={service.heroImageAlt}
          />
        ))}
      </section>

      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Have a Project in Mind?</h2>
        <p className={styles.ctaText}>
          We provide creative solutions for truly unique and custom
          projects. Discuss your needs with our team.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Contact Us
        </Link>
      </section>
    </>
  );
}
