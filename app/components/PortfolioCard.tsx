import Image from "next/image";
import Link from "next/link";
import styles from "./PortfolioCard.module.css";

interface PortfolioCardProps {
  title: string;
  client: string;
  productType: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

export default function PortfolioCard({
  title,
  client,
  productType,
  href,
  imageSrc,
  imageAlt,
}: PortfolioCardProps) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={400}
          className={styles.image}
        />
        <div className={styles.overlay}>
          <span className={styles.viewProject}>View Project &rarr;</span>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.meta}>
          {client} &middot; {productType}
        </p>
      </div>
    </Link>
  );
}
