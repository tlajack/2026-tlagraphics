import Link from "next/link";
import HeroCarousel from "./components/HeroCarousel";
import ServiceCard from "./components/ServiceCard";
import ClientLogoBar from "./components/ClientLogoBar";
import { serviceCategories } from "./lib/services-data";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <HeroCarousel />

      <section className={styles.intro}>
        <h1 className={styles.headline}>
          Transforming Ideas into Stunning Visuals
        </h1>
        <p className={styles.subheadline}>
          TLA Graphics is a full-service graphics and signage company serving
          Ontario businesses with visual merchandising, marketing collateral,
          decorative films, and custom signage solutions.
        </p>
      </section>

      <section className={styles.services}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <div className={styles.serviceGrid}>
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
        </div>
        <div className={styles.ctaWrapper}>
          <Link href="/services" className={styles.ctaButton}>
            View All Services
          </Link>
        </div>
      </section>

      <ClientLogoBar />

      <section className={styles.cta}>
        <h2 className={styles.ctaHeading}>Ready to Start Your Project?</h2>
        <p className={styles.ctaText}>
          From custom single-piece orders to duplicates in the thousands — we do
          it all. Let us bring your ideas to life.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Get in Touch
        </Link>
      </section>
    </>
  );
}
