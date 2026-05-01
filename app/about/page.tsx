import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "../components/Breadcrumbs";
import ClientLogoBar from "../components/ClientLogoBar";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "TLA Graphics specializes in the design, production, and implementation of large-scale graphics and branding systems for manufacturing, fleet, and multi-location environments.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | TLA Graphics",
    description:
      "TLA Graphics specializes in large-scale graphics and branding systems for manufacturing, fleet, and multi-location environments.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

      <section className={styles.intro}>
        <Image
          src="/images/about/tla-logo-tealwhite.png"
          alt="TLA Graphics logo"
          width={400}
          height={120}
          className={styles.introLogo}
          priority
        />
        <p className={styles.tagline}>
          Structure. Consistency. Precision.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div className={styles.imageCol}>
            <Image
              src="/images/about/whoweare-01.jpg"
              alt="TLA Graphics production facility"
              width={500}
              height={350}
              className={styles.photo}
            />
            <Image
              src="/images/about/whoweare-02.png"
              alt="TLA Graphics wide-format production"
              width={500}
              height={350}
              className={styles.photo}
            />
          </div>
          <div className={styles.textCol}>
            <h1 className={styles.h1}>Who We Are</h1>
            <hr className={styles.hr} />
            <p>
              TLA Graphics is a focused team specializing in the design,
              production, and implementation of large-scale graphics and
              branding systems.
            </p>
            <p>
              We work with organizations that operate across multiple assets,
              locations, and environments — bringing structure, clarity, and
              consistency to every visual application.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.keySection}`}>
        <div className={styles.twoCol}>
          <div className={styles.textCol}>
            <h2 className={styles.h2}>What We Do</h2>
            <hr className={styles.hr} />
            <p>
              We develop and execute complete graphics programs across:
            </p>
            <ul className={styles.bulletList}>
              <li>Manufacturing environments</li>
              <li>Fleet vehicle systems</li>
              <li>Multi-location facilities</li>
            </ul>
            <p>
              Our work is not project-based alone — it is system-driven.
            </p>
            <p>
              Each solution is designed to integrate seamlessly into your
              operations, ensuring consistent results whether applied once or
              across hundreds of assets.
            </p>
          </div>
          <Image
            src="/images/about/icons.png"
            alt="TLA Graphics process: design and planning, pre-production, production, installation, shipping and pick-up"
            width={400}
            height={300}
            className={styles.processImage}
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div className={styles.imageCol}>
            <Image
              src="/images/about/whychooseus-01.jpg"
              alt="Precision cutting at TLA Graphics production facility"
              width={400}
              height={300}
              className={styles.photo}
            />
            <Image
              src="/images/about/whychooseus-02.png"
              alt="TLA Graphics client consultation"
              width={400}
              height={300}
              className={styles.photo}
            />
          </div>
          <div className={styles.textCol}>
            <h2 className={styles.h2}>How We Work</h2>
            <hr className={styles.hr} />
            <p>
              Every project is approached with a clear objective: deliver a
              repeatable, high-performance result.
            </p>
            <p>This includes:</p>
            <ul className={styles.bulletList}>
              <li>Understanding operational constraints</li>
              <li>Aligning with brand and architectural intent</li>
              <li>Executing with precision across all applications</li>
            </ul>
            <p>
              From concept through installation, we maintain control over
              quality, consistency, and outcome.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.keySection}`}>
        <h2 className={styles.h2}>Why TLA Graphics</h2>
        <p className={styles.sectionIntro}>
          Clients rely on us not only for execution, but for structure.
        </p>
        <div className={styles.advantagesGrid}>
          <div className={styles.parallelogram}>
            <p>Consistent reproduction across all applications</p>
          </div>
          <div className={styles.parallelogram}>
            <p>Integration into real-world environments</p>
          </div>
          <div className={styles.parallelogram}>
            <p>Reliable timelines and delivery</p>
          </div>
          <div className={styles.parallelogram}>
            <p>A detail-driven approach at every stage</p>
          </div>
        </div>
        <p className={styles.sectionOutro}>
          We are engaged as a long-term partner — not just a vendor.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Our Standard</h2>
        <p className={styles.sectionIntro}>
          We do not separate speed from quality. Every project is produced with:
        </p>
        <div className={styles.advantagesGrid}>
          <div className={styles.parallelogram}>
            <p>Careful attention to detail</p>
          </div>
          <div className={styles.parallelogram}>
            <p>Multiple levels of review</p>
          </div>
          <div className={styles.parallelogram}>
            <p>Proven production methods</p>
          </div>
          <div className={styles.parallelogram}>
            <p>A commitment to getting it right the first time</p>
          </div>
        </div>
      </section>

      <ClientLogoBar />
    </>
  );
}
