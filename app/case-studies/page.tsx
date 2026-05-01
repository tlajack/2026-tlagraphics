import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import { caseStudies } from "../lib/case-studies-data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore how TLA Graphics delivers complete graphics programs for manufacturers, fleet operators, and facility managers.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies | TLA Graphics",
    description:
      "Real-world examples of TLA Graphics delivering complete graphics programs across manufacturing, fleet, and facility environments.",
    url: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Case Studies", href: "/case-studies" }]} />

      <section className={styles.hero}>
        <h1 className={styles.title}>Case Studies</h1>
        <p className={styles.description}>
          Real-world examples of how TLA Graphics delivers complete, system-driven
          graphics programs across manufacturing, fleet, and facility environments.
        </p>
      </section>

      <section className={styles.list}>
        {caseStudies.map((cs) => (
          <article key={cs.slug} className={styles.card}>
            <div className={styles.cardContent}>
              <p className={styles.industry}>{cs.industry}</p>
              <h2 className={styles.cardTitle}>{cs.title}</h2>
              <p className={styles.cardIntro}>{cs.intro}</p>
              <Link href={`/case-studies/${cs.slug}`} className={styles.readMore}>
                Read More
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
