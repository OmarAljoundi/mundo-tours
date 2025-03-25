import { getDestinations, getTours } from "@/server/public-query.server";
import type { MetadataRoute } from "next";

function encodeXmlSpecialChars(url: string): string {
  return url
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = process.env.NEXT_PUBLIC_APP_URL!;
  const staticSiteMap = [
    {
      url: encodeXmlSpecialChars(url),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: encodeXmlSpecialChars(`${url}/about-us`),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: encodeXmlSpecialChars(`${url}/tour-listing`),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ] as MetadataRoute.Sitemap;

  const [destinations, tours] = await Promise.all([
    getDestinations(),
    getTours(),
  ]);

  const toursSiteMap = tours.map((tour) => ({
    url: encodeXmlSpecialChars(`${url}/tour/${tour.slug}`),
    lastModified: tour.createdAt,
    changeFrequency: "monthly",
    priority: 0.7,
  })) as MetadataRoute.Sitemap;

  const destinationsSiteMap = destinations.flatMap((n) => {
    const mainEntry = {
      url: encodeXmlSpecialChars(`${url}/tour-listing/${n.slug}`),
      lastModified: n.createdAt,
      changeFrequency: "monthly",
      priority: 0.7,
    };

    if (n.attributes && n.attributes.length > 1) {
      const attributeEntries = n.attributes.map((m) => ({
        url: encodeXmlSpecialChars(
          `${url}/tour-listing/${n.slug}?attribute=${m.title!.replace(
            / /g,
            "-"
          )}`
        ),
        lastModified: n.createdAt,
        changeFrequency: "monthly",
        priority: 0.7,
      }));

      return [mainEntry, ...attributeEntries];
    }

    return [mainEntry];
  }) as MetadataRoute.Sitemap;

  return [...staticSiteMap, ...destinationsSiteMap, ...toursSiteMap];
}
