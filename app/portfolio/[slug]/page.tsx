import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../components/Breadcrumbs";
import { portfolioProjects, getProjectBySlug } from "../../lib/portfolio-data";
import styles from "./page.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} — ${project.client}`,
    description: project.shortDescription,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      title: `${project.title} | TLA Graphics Portfolio`,
      description: project.shortDescription,
      url: `/portfolio/${project.slug}`,
      images: [{ url: project.ogImage, alt: project.images[0].alt }],
    },
  };
}

export default async function PortfolioProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const relatedProjects = portfolioProjects
    .filter(
      (p) =>
        p.slug !== project.slug &&
        p.serviceCategory === project.serviceCategory
    )
    .slice(0, 3);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Portfolio", href: "/portfolio" },
          { label: project.title, href: `/portfolio/${project.slug}` },
        ]}
      />

      <article className={styles.article}>
        <header className={styles.header}>
          <h1 className={styles.title}>{project.title}</h1>
          <dl className={styles.meta}>
            <div className={styles.metaItem}>
              <dt>Client</dt>
              <dd>{project.client}</dd>
            </div>
            <div className={styles.metaItem}>
              <dt>Type</dt>
              <dd>{project.productType}</dd>
            </div>
            <div className={styles.metaItem}>
              <dt>Category</dt>
              <dd>
                <Link
                  href={`/services/${project.serviceCategory}`}
                  className={styles.categoryLink}
                >
                  {project.serviceCategory
                    .split("-")
                    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                    .join(" ")}
                </Link>
              </dd>
            </div>
          </dl>
        </header>

        <div className={styles.gallery}>
          {project.images.map((img) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              width={1200}
              height={800}
              className={styles.image}
              priority
            />
          ))}
        </div>

        <div className={styles.description}>
          <p>{project.description}</p>
        </div>
      </article>

      {relatedProjects.length > 0 && (
        <section className={styles.related}>
          <h2 className={styles.relatedTitle}>Related Projects</h2>
          <div className={styles.relatedGrid}>
            {relatedProjects.map((rp) => (
              <Link
                key={rp.slug}
                href={`/portfolio/${rp.slug}`}
                className={styles.relatedCard}
              >
                <Image
                  src={rp.images[0].src}
                  alt={rp.images[0].alt}
                  width={400}
                  height={267}
                  className={styles.relatedImage}
                />
                <div className={styles.relatedContent}>
                  <h3 className={styles.relatedName}>{rp.title}</h3>
                  <p className={styles.relatedClient}>{rp.client}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Start Your Project</h2>
        <p className={styles.ctaText}>
          Ready to create something like this for your brand?
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Get in Touch
        </Link>
      </section>
    </>
  );
}
