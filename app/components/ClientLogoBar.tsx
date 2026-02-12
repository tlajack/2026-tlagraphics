import Image from "next/image";
import styles from "./ClientLogoBar.module.css";

const clients = [
  { src: "/images/logos/philips-logo.png", alt: "Philips logo", name: "Philips" },
  { src: "/images/logos/coke-logo.png", alt: "Coca-Cola logo", name: "Coca-Cola" },
  { src: "/images/logos/noble-logo.png", alt: "Noble logo", name: "Noble" },
  { src: "/images/logos/scotiabankarena-logo.png", alt: "Scotiabank Arena logo", name: "Scotiabank Arena" },
  { src: "/images/logos/nike-logo.png", alt: "Nike logo", name: "Nike" },
  { src: "/images/logos/raptors-logo.png", alt: "Toronto Raptors logo", name: "Toronto Raptors" },
  { src: "/images/logos/molson-logo.png", alt: "Molson logo", name: "Molson" },
  { src: "/images/logos/canadagoose-logo.png", alt: "Canada Goose logo", name: "Canada Goose" },
  { src: "/images/logos/homedepot-logo.png", alt: "Home Depot logo", name: "Home Depot" },
  { src: "/images/logos/smokes-logo.png", alt: "Smokes Poutinerie logo", name: "Smokes Poutinerie" },
  { src: "/images/logos/BMO-logo.png", alt: "BMO Field logo", name: "BMO Field" },
  { src: "/images/logos/torontoFC-logo.png", alt: "Toronto FC logo", name: "Toronto FC" },
  { src: "/images/logos/LG-logo.png", alt: "LG logo", name: "LG" },
  { src: "/images/logos/shoppers-logo.png", alt: "Shoppers Drug Mart logo", name: "Shoppers Drug Mart" },
  { src: "/images/logos/tml-logo.png", alt: "Toronto Maple Leafs logo", name: "Toronto Maple Leafs" },
];

export default function ClientLogoBar() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Trusted by Leading Brands</h2>
      <div className={styles.grid}>
        {clients.map((client) => (
          <div key={client.name} className={styles.logoWrapper}>
            <Image
              src={client.src}
              alt={client.alt}
              title={client.name}
              width={120}
              height={80}
              className={styles.logo}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
