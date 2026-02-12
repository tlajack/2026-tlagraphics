import { BASE_URL } from "./metadata";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#business`,
    name: "TLA Graphics Ltd.",
    url: BASE_URL,
    logo: `${BASE_URL}/tla-logo-horizontal.svg`,
    image: `${BASE_URL}/images/about/tla-logo-tealwhite.png`,
    description:
      "Full-service graphics and signage company specializing in visual merchandising, marketing collateral, decorative graphic films, and custom signage.",
    telephone: "+1-905-726-2600",
    email: "info@tlagraphics.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4 Paisley Lane",
      addressLocality: "Uxbridge",
      addressRegion: "ON",
      postalCode: "L9P 0G5",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.1072,
      longitude: -79.1215,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 43.6532,
        longitude: -79.3832,
      },
      geoRadius: "150000",
    },
    knowsAbout: [
      "Visual Merchandising",
      "Marketing Collateral",
      "Decorative Graphic Films",
      "Custom Signage",
      "Point of Purchase Displays",
      "Vehicle Wraps",
      "Window Graphics",
      "Reception Logos",
      "Wayfinding Signage",
      "Safety Signage",
    ],
    priceRange: "$$",
  };
}

export function getServiceSchema(service: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${BASE_URL}/services/${service.slug}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
      name: "TLA Graphics Ltd.",
    },
    areaServed: {
      "@type": "Country",
      name: "Canada",
    },
  };
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
