export interface PortfolioProject {
  slug: string;
  title: string;
  client: string;
  serviceCategory: string;
  productType: string;
  shortDescription: string;
  description: string;
  images: { src: string; alt: string }[];
  ogImage: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "lg-dimensional-sign",
    title: "LG Dimensional Sign",
    client: "LG",
    serviceCategory: "signage",
    productType: "Dimensional Signage",
    shortDescription:
      "Custom dimensional sign for LG featuring precision-cut lettering and brand-accurate colour matching.",
    description:
      "TLA Graphics designed and fabricated a custom dimensional sign for LG, featuring precision-cut raised lettering and brand-accurate colour matching. This high-impact signage solution was engineered for durability and visual presence in a retail environment.",
    images: [
      { src: "/images/homepage/LG-03.jpg", alt: "LG dimensional sign produced by TLA Graphics" },
    ],
    ogImage: "/images/homepage/LG-03.jpg",
  },
  {
    slug: "dos-equis-backlit-display",
    title: "Dos Equis Backlit Display",
    client: "Dos Equis",
    serviceCategory: "visual-merchandising",
    productType: "Backlit Display",
    shortDescription:
      "Vibrant backlit wall display for Dos Equis with edge-lit LED technology.",
    description:
      "A vibrant backlit wall display created for Dos Equis, utilising edge-lit LED technology to deliver a visually striking brand presence in a hospitality setting. TLA Graphics handled design, production, and installation.",
    images: [
      { src: "/images/homepage/dosequis-04.jpg", alt: "Dos Equis backlit display by TLA Graphics" },
    ],
    ogImage: "/images/homepage/dosequis-04.jpg",
  },
  {
    slug: "noble-stratford-backlit-signage",
    title: "Noble Stratford Backlit Signage",
    client: "Noble",
    serviceCategory: "signage",
    productType: "Backlit Signage",
    shortDescription:
      "Backlit custom signage for Noble Stratford with an illuminated logo and storefront presence.",
    description:
      "Custom backlit signage for Noble Stratford, featuring an illuminated logo designed for maximum storefront visibility. This project included design consultation, fabrication, and professional installation.",
    images: [
      { src: "/images/homepage/nobleStratford.jpg", alt: "Noble Stratford backlit custom signage by TLA Graphics" },
    ],
    ogImage: "/images/homepage/nobleStratford.jpg",
  },
  {
    slug: "custom-acrylic-display",
    title: "Custom Acrylic Display",
    client: "Corporate Client",
    serviceCategory: "visual-merchandising",
    productType: "Acrylic Display",
    shortDescription:
      "Precision-fabricated custom acrylic display for product showcasing.",
    description:
      "A precision-fabricated custom acrylic display designed for product showcasing in a retail environment. TLA Graphics utilised advanced cutting and bonding techniques to create a seamless, high-quality presentation piece.",
    images: [
      { src: "/images/homepage/acrylicisplay-01.jpg", alt: "Custom acrylic display fabricated by TLA Graphics" },
    ],
    ogImage: "/images/homepage/acrylicisplay-01.jpg",
  },
  {
    slug: "beer-cart-vinyl-wrap",
    title: "Custom Beer Cart Vinyl Wrap",
    client: "Beverage Brand",
    serviceCategory: "marketing-collateral",
    productType: "Vinyl Wrap",
    shortDescription:
      "Full vinyl wrap on a custom beer cart for event and promotional use.",
    description:
      "TLA Graphics produced a full custom vinyl wrap for a beer cart used in events and promotions. The wrap features high-resolution graphics with brand-accurate colours designed to withstand outdoor conditions.",
    images: [
      { src: "/images/homepage/beerCart-01-sq.jpg", alt: "Custom vinyl wrapped beer cart by TLA Graphics" },
    ],
    ogImage: "/images/homepage/beerCart-01-sq.jpg",
  },
  {
    slug: "vehicle-vinyl-wrap",
    title: "Vehicle Vinyl Wrap",
    client: "Fleet Client",
    serviceCategory: "marketing-collateral",
    productType: "Vehicle Wrap",
    shortDescription:
      "Professional vehicle vinyl wrap for fleet branding and mobile advertising.",
    description:
      "A professional vehicle vinyl wrap designed for fleet branding. TLA Graphics delivered a full-coverage wrap with crisp graphics and durable outdoor-rated vinyl for long-lasting mobile advertising impact.",
    images: [
      { src: "/images/homepage/DSC_7362.jpg", alt: "Vehicle vinyl wrap installed by TLA Graphics" },
      { src: "/images/homepage/DSC_4045.jpg", alt: "Trailer vinyl wrap by TLA Graphics" },
    ],
    ogImage: "/images/homepage/DSC_7362.jpg",
  },
  {
    slug: "nike-yorkdale-window-graphics",
    title: "Nike Yorkdale Window Graphics",
    client: "Nike",
    serviceCategory: "visual-merchandising",
    productType: "Window Graphics",
    shortDescription:
      "Storefront window graphics for Nike at Yorkdale Shopping Centre.",
    description:
      "TLA Graphics designed and installed storefront window graphics for the Nike store at Yorkdale Shopping Centre. The large-format graphics create visual impact while maintaining brand consistency across the retail environment.",
    images: [
      { src: "/images/homepage/Nike-Yorkdale-IMG_7346-sq.jpg", alt: "Nike Yorkdale storefront window graphics by TLA Graphics" },
    ],
    ogImage: "/images/homepage/Nike-Yorkdale-IMG_7346-sq.jpg",
  },
  {
    slug: "canada-goose-merchandise-display",
    title: "Canada Goose Merchandise Display",
    client: "Canada Goose",
    serviceCategory: "visual-merchandising",
    productType: "Merchandise Display",
    shortDescription:
      "Custom merchandise display for Canada Goose Henry Poole collection.",
    description:
      "A custom merchandise display created for the Canada Goose Henry Poole collection. TLA Graphics produced a branded display solution that highlights the product while reinforcing the premium brand aesthetic.",
    images: [
      { src: "/images/homepage/CanadaGoose-01-1200x800-sq.jpg", alt: "Canada Goose merchandise display by TLA Graphics" },
    ],
    ogImage: "/images/homepage/CanadaGoose-01-1200x800-sq.jpg",
  },
  {
    slug: "decorative-frost-vinyl",
    title: "Decorative Frost Vinyl Panels",
    client: "Corporate Client",
    serviceCategory: "decorative-graphics",
    productType: "Frost Vinyl",
    shortDescription:
      "Decorative frosted vinyl panels for office privacy and aesthetics.",
    description:
      "TLA Graphics installed decorative frost vinyl panels for an office environment, combining privacy with a refined aesthetic. The panels feature custom patterns that complement the interior design while controlling light and sightlines.",
    images: [
      { src: "/images/homepage/tla-presentation14-sq.jpg", alt: "Decorative frost vinyl panels by TLA Graphics" },
    ],
    ogImage: "/images/homepage/tla-presentation14-sq.jpg",
  },
  {
    slug: "dentistry-reception-logo",
    title: "Dentistry on 88 Reception Logo",
    client: "Dentistry on 88",
    serviceCategory: "decorative-graphics",
    productType: "Reception Logo",
    shortDescription:
      "Custom reception logo sign for a dental office.",
    description:
      "A custom-designed reception logo for Dentistry on 88, featuring dimensional lettering mounted on a feature wall. TLA Graphics managed the full process from design through installation to create a welcoming branded entrance.",
    images: [
      { src: "/images/homepage/IMG_6530-sq.jpg", alt: "Dentistry on 88 reception logo by TLA Graphics" },
    ],
    ogImage: "/images/homepage/IMG_6530-sq.jpg",
  },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}
