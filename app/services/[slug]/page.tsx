import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../components/Breadcrumbs";
import JsonLd from "../../components/JsonLd";
import { serviceCategories, getServiceBySlug } from "../../lib/services-data";
import { getServiceSchema } from "../../lib/structured-data";
import styles from "./page.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return serviceCategories.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.metaTitle} | TLA Graphics`,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      images: [{ url: service.heroImage, alt: service.heroImageAlt }],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: service.title, href: `/services/${service.slug}` },
        ]}
      />
      <JsonLd
        data={getServiceSchema({
          name: service.title,
          description: service.description,
          slug: service.slug,
        })}
      />

      <section className={styles.hero}>
        <h1 className={styles.title}>{service.title}</h1>
        <p className={styles.heroDescription}>{service.description}</p>
      </section>

      <section className={styles.subServices}>
        {service.subServices.map((sub) => (
          <article key={sub.title} className={styles.subService}>
            <Image
              src={sub.imageSrc}
              alt={sub.imageAlt}
              width={600}
              height={400}
              className={styles.subServiceImage}
            />
            <div className={styles.subServiceContent}>
              <h2 className={styles.subServiceTitle}>{sub.title}</h2>
              <ul className={styles.subServiceList}>
                {sub.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>
          Interested in {service.title}?
        </h2>
        <p className={styles.ctaText}>
          Let&apos;s discuss how TLA Graphics can bring your project to life
          with our {service.title.toLowerCase()} expertise.
        </p>
        <div className={styles.ctaLinks}>
          <Link href="/contact" className={styles.ctaButton}>
            Get a Quote
          </Link>
          <Link href="/portfolio" className={styles.ctaButtonSecondary}>
            View Portfolio
          </Link>
        </div>
      </section>
    </>
  );
}
