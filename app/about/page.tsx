import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "../components/Breadcrumbs";
import ClientLogoBar from "../components/ClientLogoBar";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about TLA Graphics — a second-generation family business delivering high-end visual communication, graphics production, and signage solutions from Uxbridge, Ontario.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | TLA Graphics",
    description:
      "Learn about TLA Graphics — a second-generation family business delivering high-end visual communication and signage solutions.",
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
          Transforming Ideas into Stunning Visuals
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div className={styles.imageCol}>
            <Image
              src="/images/about/whoweare-01.jpg"
              alt="TLA Graphics design studio with production equipment"
              width={500}
              height={350}
              className={styles.photo}
            />
            <Image
              src="/images/about/whoweare-02.png"
              alt="TLA Graphics wide-format printer producing signage"
              width={500}
              height={350}
              className={styles.photo}
            />
          </div>
          <div className={styles.textCol}>
            <h1 className={styles.h1}>Who We Are</h1>
            <hr className={styles.hr} />
            <p>
              TLA Graphics is a tight-knit team of strategic visual
              communicators who work hard to clarify your desired outcome,
              understand your unique challenges, and translate the resulting
              ideas into stunning visuals that communicate your brand.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.keySection}`}>
        <h2 className={styles.h2}>Key Advantages</h2>
        <div className={styles.advantagesGrid}>
          <div className={styles.parallelogram}>
            <p>High end production equipment</p>
          </div>
          <div className={styles.parallelogram}>
            <p>Printing 98.3% of Pantone colours</p>
          </div>
          <div className={styles.parallelogram}>
            <p>Deep expertise in innovation</p>
          </div>
          <div className={styles.parallelogram}>
            <p>Second generation family business</p>
          </div>
          <div className={styles.parallelogram}>
            <p>3M Preferred Partner &amp; Trulife partner</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div className={styles.textCol}>
            <h2 className={styles.h2}>What We Do</h2>
            <hr className={styles.hr} />
            <p>
              Clients call us graphic engineers and strategic partners, but at
              the end of the day we simply take care of every visual need for
              your business, inside and out. We bring your ideas to life by
              running them through our internal innovation process while pushing
              the physical limits of media to create stunning visual products
              that support your brand.
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
              alt="Zund precision cutter at TLA Graphics production facility"
              width={400}
              height={300}
              className={styles.photo}
            />
            <Image
              src="/images/about/whychooseus-02.png"
              alt="TLA Graphics meeting room for client consultations"
              width={400}
              height={300}
              className={styles.photo}
            />
          </div>
          <div className={styles.textCol}>
            <h2 className={styles.h2}>Why Choose Us</h2>
            <hr className={styles.hr} />
            <p>
              Our intense focus on attention to detail, exquisite production
              quality and lightning fast speed underpin everything we do.
            </p>
            <p>
              As your graphics partner, you can depend on our expert team going
              above and beyond to breathe new life into an existing product or
              solve a new challenge with a creative solution. And we&apos;re on time,
              every time.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.promiseSection}`}>
        <h2 className={styles.h2}>Our Promise to You</h2>
        <div className={styles.advantagesGrid}>
          <div className={styles.parallelogram}>
            <p>Never sacrifice speed over quality</p>
          </div>
          <div className={styles.parallelogram}>
            <p>Meticulous attention to detail</p>
          </div>
          <div className={styles.parallelogram}>
            <p>Multiple eyes checking every project</p>
          </div>
          <div className={styles.parallelogram}>
            <p>Cutting-edge technology</p>
          </div>
        </div>
      </section>

      <ClientLogoBar />

      <section className={styles.imagineSection}>
        <div className={styles.imagineContent}>
          <h2 className={styles.imagineTitle}>
            You imagine it, we produce it.
          </h2>
          <hr className={`${styles.hr} ${styles.hrCenter}`} />
          <p>
            We provide creative solutions for a multitude of truly unique and
            custom projects. From custom single-piece orders to duplicates in
            the thousands — we do it all!
          </p>
        </div>
        <div className={styles.imagineColumns}>
          <p>
            Our no-boundaries approach to a project ensures success in
            developing exclusive and one of a kind experiences to fit your
            brand purpose.
          </p>
          <p>
            At TLA Graphics we recognize the needs of a brand as
            individualistic and unlike anything else. We acknowledge these
            differences by implementing a process which operates in this same
            way. No two projects are alike and we persistently encourage new
            challenges and push the limits of what is possible.
          </p>
          <p>
            If you have a project in mind please discuss it with us and
            we&apos;ll be happy to find the correct process and materials specific
            to your unique brand needs.
          </p>
        </div>
      </section>

      <section className={styles.thanksSection}>
        <div className={styles.thanksContent}>
          <p>
            I would personally like to thank you for this opportunity. TLA&apos;s
            objective is to become a valued resource partner that can assist
            with your team&apos;s challenging development strategies, client
            deliverables, as well as the demands of driving new business. We
            understand that every project must hit its mark.
          </p>
          <p>
            As president of TLA Graphics I can promise that everyone is here
            to provide support to you and your team. We will work tirelessly
            to earn your trust.
          </p>
          <p>Sincerely, Mark White</p>
          <Image
            src="/images/about/Mark-signature.png"
            alt="Signature of Mark White, President of TLA Graphics"
            width={300}
            height={80}
            className={styles.signature}
          />
        </div>
      </section>
    </>
  );
}
