import type { MetadataRoute } from "next";
import { PERSPECTIVES } from "@/lib/content";

const BASE_URL = "https://www.nghindia.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/apply",
    "/certification/syllabus",
    "/colleges",
    "/compare",
    "/disclaimer",
    "/dr-maruti-sharma",
    "/gallery",
    "/gcc/hypnotherapy-dubai-sharjah",
    "/india/hypnotherapy-delhi-ncr",
    "/perspectives",
    "/privacy",
    "/articles/famous-people-who-used-hypnosis",
    "/articles/does-hypnotherapy-work",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const perspectiveRoutes = PERSPECTIVES.map((p) => ({
    url: `${BASE_URL}/perspectives/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...perspectiveRoutes];
}
