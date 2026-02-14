"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import styles from "./HeroCarousel.module.css";

const slides = [
  { src: "/images/homepage/LG-03.jpg", alt: "LG dimensional sign produced by TLA Graphics", label: "Dimensional Sign" },
  { src: "/images/homepage/dosequis-04.jpg", alt: "Dos Equis backlit display by TLA Graphics", label: "Backlit Display" },
  { src: "/images/homepage/nobleStratford.jpg", alt: "Noble Stratford backlit custom signage by TLA Graphics", label: "Backlit Custom Signage" },
  { src: "/images/homepage/acrylicisplay-01.jpg", alt: "Custom acrylic display fabricated by TLA Graphics", label: "Custom Acrylic Display" },
  { src: "/images/homepage/displayCase-01.jpg", alt: "Custom display case built by TLA Graphics", label: "Custom Display Case" },
  { src: "/images/homepage/beerCart-01-sq.jpg", alt: "Custom vinyl wrap on beer cart by TLA Graphics", label: "Custom Vinyl Wrap" },
  { src: "/images/homepage/DSC_7362.jpg", alt: "Vehicle vinyl wrap installed by TLA Graphics", label: "Vehicle Vinyl Wrap" },
  { src: "/images/homepage/Nike-Yorkdale-IMG_7346-sq.jpg", alt: "Nike Yorkdale storefront window graphics by TLA Graphics", label: "Storefront Window Graphics" },
  { src: "/images/homepage/CanadaGoose-01-1200x800-sq.jpg", alt: "Canada Goose merchandise display by TLA Graphics", label: "Custom Merchandise Display" },
  { src: "/images/homepage/tla-presentation14-sq.jpg", alt: "Decorative frost vinyl panels by TLA Graphics", label: "Decorative Frost Vinyl" },
  { src: "/images/homepage/IMG_6530-sq.jpg", alt: "Dental office reception logo by TLA Graphics", label: "Reception Logo" },
  { src: "/images/homepage/DSC_4045.jpg", alt: "Vehicle vinyl wrap on trailer by TLA Graphics", label: "Vehicle Vinyl Wrap" },
];

export default function HeroCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement! }),
  ]);

  return (
    <section className={styles.embla} ref={emblaRef} aria-label="Portfolio showcase carousel">
      <div className={styles.container}>
        {slides.map((slide, i) => (
          <div key={slide.src} className={styles.slide}>
            <Image
              src={slide.src}
              alt={slide.alt}
              width={1200}
              height={800}
              className={styles.image}
              priority={i === 0}
              fetchPriority={i === 0 ? "high" : undefined}
              quality={70}
              sizes="100vw"
            />
            <div className={styles.label}>{slide.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
