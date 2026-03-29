// src/app/robots.ts
// Next.js gera automaticamente o /robots.txt com este ficheiro

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://biocleanenvironment.co.mz/sitemap.xml",
    host: "https://biocleanenvironment.co.mz",
  };
}