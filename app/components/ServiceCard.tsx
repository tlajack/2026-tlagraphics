import Image from "next/image";
import Link from "next/link";
import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ServiceCard({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
}: ServiceCardProps) {
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
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.cta}>Learn more &rarr;</span>
      </div>
    </Link>
  );
}
