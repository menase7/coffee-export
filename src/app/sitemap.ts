import { MetadataRoute } from "next";
import { coffeeProducts } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ethiopiancoffee-export.example";

  const staticRoutes = [
    "",
    "/about",
    "/coffee",
    "/origins",
    "/services",
    "/quality",
    "/contact",
    "/quote",
    "/privacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const productRoutes = coffeeProducts.map((product) => ({
    url: `${baseUrl}/coffee/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes];
}
