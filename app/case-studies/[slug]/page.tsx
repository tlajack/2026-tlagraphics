import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../components/Breadcrumbs";
import { caseStudies, getCaseStudyBySlug } from "../../lib/case-studies-data";
import styles from "./page.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};

  return {
    title: cs.title,
    description: cs.intro,
    alternates: { canonical: `/case-studies/${cs.slug}` },
    openGraph: {
      title: `${cs.title} | TLA Graphics`,
      description: cs.intro,
      url: `/case-studies/${cs.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Case Studies", href: "/case-studies" },
          { label: cs.title, href: `/case-studies/${cs.slug}` },
        ]}
      />

      <article className={styles.article}>
        <header className={styles.header}>
          <p className={styles.industry}>{cs.industry}</p>
          <h1 className={styles.title}>{cs.title}</h1>
          {cs.client !== "Confidential" && (
            <p className={styles.client}>Client: {cs.client}</p>
          )}
        </header>

        <div className={styles.body}>
          {cs.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </article>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Work With Us</h2>
        <p className={styles.ctaText}>
          Ready to bring this kind of structure and consistency to your program?
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Get in Touch
        </Link>
      </section>
    </>
  );
}
