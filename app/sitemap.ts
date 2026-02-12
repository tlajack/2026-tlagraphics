import type { MetadataRoute } from "next";
import { BASE_URL } from "./lib/metadata";
import { portfolioProjects } from "./lib/portfolio-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services/visual-merchandising`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/marketing-collateral`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/decorative-graphics`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/signage`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/portfolio`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  ];

  const portfolioRoutes: MetadataRoute.Sitemap = portfolioProjects.map(
    (project) => ({
      url: `${BASE_URL}/portfolio/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  return [...staticRoutes, ...portfolioRoutes];
}
