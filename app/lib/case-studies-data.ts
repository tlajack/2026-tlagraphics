export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  intro: string;
  paragraphs: string[];
  images: { src: string; alt: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "load-lifter",
    title: "Load Lifter – OEM Graphics & Labeling Program",
    client: "Load Lifter",
    industry: "Industrial Equipment / Manufacturing",
    intro:
      "TLA Graphics partners with Load Lifter to supply complete graphics and labeling systems for their line of industrial lifting equipment.",
    paragraphs: [
      "Load Lifter manufactures a wide range of machines — from compact 5,000 lb units to large 40,000 lb capacity lifts — including vertical mast and extended reach boom equipment designed for rough terrain applications.",
      "Each machine requires a comprehensive set of safety labels, branding, and model-specific graphics. The challenge was to ensure complete consistency across all units while supporting efficient assembly.",
      "TLA Graphics developed a standardized graphics kit program tailored to their manufacturing process. Each machine is supplied with a complete, pre-packaged set of labels and graphics, organized for easy installation by the assembly team.",
      "The result is a streamlined production process, reduced installation errors, and consistent branding across all equipment.",
    ],
    images: [],
  },
  {
    slug: "univar-guelph",
    title: "Univar – Guelph Location Branding",
    client: "Univar",
    industry: "Industrial / Chemical Distribution",
    intro:
      "TLA Graphics was engaged to support a branding refresh at Univar's Guelph location, focusing on both interior and exterior visual updates.",
    paragraphs: [
      "The project required updating existing branding elements within an active industrial facility while maintaining consistency with other company locations.",
      "We implemented a coordinated approach that included production and installation of updated branded elements, carefully planned to minimize disruption to operations.",
      "The result is a clean, professional environment with consistent branding across all applications and a scalable approach for future locations.",
    ],
    images: [],
  },
  {
    slug: "enterprise-fleet-robertson-electric",
    title: "Enterprise Fleet / Robertson Electric – Fleet Graphics Program",
    client: "Enterprise Fleet / Robertson Electric",
    industry: "Fleet / Electrical Services",
    intro:
      "TLA Graphics manages ongoing fleet branding for Enterprise Fleet Management, supporting vehicle graphics for their client Robertson Electric.",
    paragraphs: [
      "This program includes the branding of over 20 vehicles, with continued rollout as new units are introduced.",
      "The fleet includes multiple Ford Transit configurations, as well as larger F-550 and F-650 box trucks. The challenge was maintaining consistency in colour and placement across different vehicle sizes while coordinating installation with delivery and transport schedules.",
      "TLA Graphics implemented a structured approach with standardized artwork, controlled placement, and coordinated scheduling.",
      "The result is a consistent, professional fleet presence supported by a scalable system for ongoing expansion.",
    ],
    images: [],
  },
  {
    slug: "acrylic-enclosures",
    title: "Custom Acrylic Environmental Testing Enclosures",
    client: "Confidential",
    industry: "Laboratory / Industrial",
    intro:
      "TLA Graphics designed and fabricated custom acrylic enclosures for laboratory testing environments.",
    paragraphs: [
      "These units were built to exact specifications to support long-term environmental testing, requiring precise fabrication and safe interaction with equipment and wiring.",
      "Each enclosure included integrated ventilation, access points, and custom acrylic hinge systems, allowing technicians to interact with instruments inside the unit.",
      "The result is a high-quality enclosure with clean, polished finishes, reliable performance, and safe operation in a controlled environment.",
    ],
    images: [],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
