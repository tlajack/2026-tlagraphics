import type { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";
import PortfolioCard from "../components/PortfolioCard";
import { portfolioProjects } from "../lib/portfolio-data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse TLA Graphics portfolio of completed projects including dimensional signs, vehicle wraps, window graphics, reception logos, and custom displays for leading brands.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio | TLA Graphics",
    description:
      "Browse our portfolio of custom signage, displays, wraps, and graphic installations for leading brands.",
    url: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Portfolio", href: "/portfolio" }]} />

      <section className={styles.hero}>
        <h1 className={styles.title}>Our Portfolio</h1>
        <p className={styles.description}>
          Explore our work — from custom signage and retail displays to vehicle
          wraps and office graphics. Each project showcases our commitment to
          quality and attention to detail.
        </p>
      </section>

      <section className={styles.grid}>
        {portfolioProjects.map((project) => (
          <PortfolioCard
            key={project.slug}
            title={project.title}
            client={project.client}
            productType={project.productType}
            href={`/portfolio/${project.slug}`}
            imageSrc={project.images[0].src}
            imageAlt={project.images[0].alt}
          />
        ))}
      </section>
    </>
  );
}
