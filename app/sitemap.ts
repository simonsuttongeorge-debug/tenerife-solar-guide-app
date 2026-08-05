import { MetadataRoute } from "next";
import { towns } from "@/content/towns";
import { services } from "@/content/services";
import { siteConfig } from "@/content/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/faq", "/about", "/get-a-quote", "/privacy-policy"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.6,
  }));

  const townPages = towns.map((t) => ({
    url: `${siteConfig.url}/solar-panels-${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const servicePages = services.map((s) => ({
    url: `${siteConfig.url}/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...townPages, ...servicePages];
}
