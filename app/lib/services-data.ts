export interface SubService {
  title: string;
  items: string[];
  imageSrc: string;
  imageAlt: string;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  subServices: SubService[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "visual-merchandising",
    title: "Visual Merchandising",
    metaTitle: "Visual Merchandising & Retail Display Solutions",
    metaDescription:
      "Custom visual merchandising solutions including dental office graphics, manufacturing partnerships, and retail POP displays. Serving Ontario businesses.",
    description:
      "From retail POP displays to custom manufacturing partnerships, we create visual merchandising solutions that captivate customers and drive sales.",
    heroImage: "/images/homepage/IMG_7353-hd.jpg",
    heroImageAlt:
      "Retail storefront visual merchandising display by TLA Graphics",
    subServices: [
      {
        title: "New Construction - Dental",
        items: [
          "Dental office wall art",
          "Dental office decals",
          "Dental window graphics",
          "Dental signage",
        ],
        imageSrc: "/images/homepage/dentistry-01-IMG_6525.jpg",
        imageAlt:
          "Dental office visual merchandising and wall art by TLA Graphics",
      },
      {
        title: "Manufacturing Partnerships",
        items: [
          "Furnishings",
          "Furniture",
          "Lectern Logos",
          "Custom podium decals",
          "Podium signs",
          "Reusable / detachable / removeable podium signs",
        ],
        imageSrc: "/images/homepage/palmieri-navigate-infoDesk.jpg",
        imageAlt:
          "Custom manufactured info desk graphics by TLA Graphics",
      },
      {
        title: "Retail POP",
        items: [
          "POP Signage and graphics",
          "POP displays",
          "Point of sale display ideas",
          "Point of purchase examples",
          "Types of POP material / POP material examples",
        ],
        imageSrc: "/images/homepage/IMG_7353-hd.jpg",
        imageAlt:
          "Retail point of purchase display by TLA Graphics",
      },
    ],
  },
  {
    slug: "marketing-collateral",
    title: "Marketing Collateral",
    metaTitle: "Marketing Collateral & Print Production Services",
    metaDescription:
      "Professional print production and customized branding services including catalogues, brochures, industrial decals, and corporate branding solutions.",
    description:
      "Professional print production and customized branding — from catalogues and brochures to corporate awards and internal branding.",
    heroImage: "/images/homepage/decals.jpg",
    heroImageAlt:
      "Industrial decals and marketing collateral produced by TLA Graphics",
    subServices: [
      {
        title: "Print Production",
        items: [
          "Catalogue design and print services",
          "Catalogues, brochures, decals, posters, tags, coupons",
          "Industrial decals",
        ],
        imageSrc: "/images/homepage/decals.jpg",
        imageAlt: "Industrial decals and print production by TLA Graphics",
      },
      {
        title: "Customized Branding",
        items: [
          "Internal Corporate Branding",
          "Company logo design",
          "Custom award design and fabrication",
          "Custom corporate awards",
        ],
        imageSrc: "/images/homepage/shield-clear-high-1000.jpg",
        imageAlt:
          "Custom corporate branding and acrylic award by TLA Graphics",
      },
    ],
  },
  {
    slug: "decorative-graphics",
    title: "Decorative Graphic Films",
    metaTitle: "Decorative Graphic Films & Accent Graphics",
    metaDescription:
      "Architectural frosting, wall graphics, privacy films, and reception logo design. Transform your office space with decorative graphic films from TLA Graphics.",
    description:
      "Transform interiors with architectural frosting, wall graphics, privacy films, and reception logos that elevate your brand environment.",
    heroImage: "/images/homepage/wallgraphics.jpg",
    heroImageAlt:
      "Decorative wall graphics and accent films by TLA Graphics",
    subServices: [
      {
        title: "Architectural Frosting",
        items: [
          "Decorative glass finishes",
          "Architectural window film",
          "Architectural film",
          "Office glass design",
          "Office glass door design",
          "Frosted glass door design",
        ],
        imageSrc:
          "/images/homepage/benjamin-child-0sT9YhNgSEs-unsplash.jpg",
        imageAlt: "Architectural frosting on boardroom glass by TLA Graphics",
      },
      {
        title: "Decorative Graphics / Wall Graphics",
        items: [
          "Custom wall graphics",
          "Large wall graphics",
          "Custom wall wraps",
          "Wall graphics for businesses / offices",
          "Wall and floor decals",
          "Photo Tex\u2122 fabric prints",
        ],
        imageSrc: "/images/homepage/wallgraphics.jpg",
        imageAlt: "Large custom wall graphics installed by TLA Graphics",
      },
      {
        title: "Privacy Films",
        items: [
          "Commercial safety window films",
          "Commercial window films",
          "Privacy and decorative window films",
          "Frosted window films",
        ],
        imageSrc: "/images/homepage/frosted-film.jpg",
        imageAlt: "Privacy and frosted window film by TLA Graphics",
      },
      {
        title: "Reception Graphics & Logos",
        items: [
          "Reception logo design",
          "Reception logo wall",
          "Reception logo signage",
          "Reception logo sign",
        ],
        imageSrc: "/images/homepage/reception-01.jpg",
        imageAlt: "Custom reception logo sign by TLA Graphics",
      },
    ],
  },
  {
    slug: "signage",
    title: "Signage",
    metaTitle: "Custom Signage, Wayfinding & Safety Signs",
    metaDescription:
      "Professional wayfinding signage, safety signs, and full installation services. Custom metal, magnetic, and digital signage solutions for businesses.",
    description:
      "Wayfinding systems, safety signage, and full installation services — from design through worry-free completion.",
    heroImage: "/images/homepage/exit.jpg",
    heroImageAlt:
      "Custom wayfinding and safety signage by TLA Graphics",
    subServices: [
      {
        title: "Wayfinding",
        items: [
          "Wayfinding and sign design",
          "Wayfinding signage systems",
          "Digital wayfinding signage",
        ],
        imageSrc: "/images/homepage/exit.jpg",
        imageAlt: "Wayfinding signage system designed by TLA Graphics",
      },
      {
        title: "Safety Signage",
        items: [
          "Workplace safety signage",
          "Construction safety signs",
          "Custom safety signs",
          "Custom metal / magnetic safety signs",
          "Industrial safety signs",
          "Safety signs and workplace signs",
        ],
        imageSrc: "/images/homepage/safetySignage.png",
        imageAlt: "Custom workplace safety signage by TLA Graphics",
      },
      {
        title: "Installation Services",
        items: [
          "Pre-install preparation/cleaning",
          "Installation accessories",
          "Worry-free job completion",
        ],
        imageSrc: "/images/homepage/tlaBuilding.jpg",
        imageAlt: "TLA Graphics professional signage installation",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((s) => s.slug === slug);
}
