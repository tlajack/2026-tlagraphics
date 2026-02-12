import Link from "next/link";
import JsonLd from "./JsonLd";
import { getBreadcrumbSchema } from "../lib/structured-data";
import { BASE_URL } from "../lib/metadata";
import styles from "./Breadcrumbs.module.css";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = [
    { name: "Home", url: BASE_URL },
    ...items.map((item) => ({
      name: item.label,
      url: `${BASE_URL}${item.href}`,
    })),
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
        <ol className={styles.list}>
          <li className={styles.item}>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={item.href} className={styles.item}>
              <span className={styles.separator} aria-hidden="true">
                /
              </span>
              {i === items.length - 1 ? (
                <span className={styles.current} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
