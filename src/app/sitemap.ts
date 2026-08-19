import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "/", lastModified: "2026-08-19" },
    { url: "/new", lastModified: "2026-08-19" },
    { url: "/contact", lastModified: "2026-08-19" },
    { url: "/eve", lastModified: "2026-08-19" },
    { url: "/passport", lastModified: "2026-08-19" },
  ];
}
