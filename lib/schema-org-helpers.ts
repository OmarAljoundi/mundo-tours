"use server";
import { SettingSchema } from "@/schema/setting-schema";
import { getSettingBySectionAsync } from "@/server/settings.server";
import { unstable_cache } from "next/cache";
import type { TravelAgency, WebSite, PostalAddress, Place } from "schema-dts";

function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_APP_URL!;
}

export const getOrganizationSchema = unstable_cache(
  async (): Promise<TravelAgency> => {
    const BASE_URL = getBaseUrl();
    const settings = (await getSettingBySectionAsync(
      "CMS"
    )) as SettingSchema | null;
    const orgName = settings?.seoStaticPagesHome?.seo?.title ?? "";
    const orgDescription = settings?.seoStaticPagesHome?.seo?.description ?? "";

    const organization: TravelAgency = {
      "@type": "TravelAgency",
      "@id": `${BASE_URL}/#/schema/organization`,
      name: orgName,
      description: orgDescription,
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        "@id": `${BASE_URL}/#/schema/logo`,
        url: "https://www.mundo-tours.com/_next/image?url=%2Fimages%2Fmundo_logo.png&w=384&q=100",
        caption: "Mundo Tours Logo",
      },
      location: [
        {
          "@type": "Place",
          "@id": `${BASE_URL}/#/schema/location/oman`,
          name: "Mundo Tours - Oman Branch (موندو للسياحة)",
          address: {
            "@type": "PostalAddress",
            streetAddress: "العذيبة - شارع 18 نوفمبر",
            addressLocality: "Muscat",
            addressCountry: "OM",
          } as PostalAddress,
          telephone: "+96879667679",
          hasMap: "https://maps.app.goo.gl/HP5ty2j5WA56G3oq6",
          geo: {
            "@type": "GeoCoordinates",
            latitude: "23.601272532045147",
            longitude: "58.37085945102229",
          },
        } as Place,
        {
          "@type": "Place",
          "@id": `${BASE_URL}/#/schema/location/saudi`,
          name: "Mundo Tours - Saudi Arabia Branch (موندو للسياحة)",
          address: {
            "@type": "PostalAddress",
            streetAddress: "حي المنار - شارع ابو بكر الصديق",
            addressLocality: "Dammam",
            addressCountry: "SA",
          } as PostalAddress,
          telephone: "+966920031910",
          hasMap: "https://maps.app.goo.gl/rFguX6KNWyrrSLQK7",
          geo: {
            "@type": "GeoCoordinates",
            latitude: "26.381170403321235",
            longitude: "50.055680492625164",
          },
        } as Place,
      ],
      sameAs: [
        "https://www.instagram.com/mundo.oman",
        "https://www.instagram.com/mundo.ksa",
      ],
    };
    return organization;
  },
  ["organization-schema"],
  { revalidate: 86400 }
);

export const getWebSiteSchema = unstable_cache(
  async (): Promise<WebSite> => {
    const BASE_URL = getBaseUrl();
    const settings = (await getSettingBySectionAsync(
      "CMS"
    )) as SettingSchema | null;
    const siteName = settings?.seoStaticPagesHome?.seo?.title ?? "";
    const siteDescription =
      settings?.seoStaticPagesHome?.seo?.description ?? "";

    const organization = await getOrganizationSchema();

    const website: WebSite = {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#/schema/website`,
      url: BASE_URL,
      name: siteName,
      description: siteDescription,
      publisher:
        typeof organization != "string" ? organization["@id"] : organization,
      inLanguage: ["ar"],
    };
    return website;
  },
  ["website-schema"],
  { revalidate: 86400 }
);

export async function getBaseSchemaGraph(): Promise<
  (TravelAgency | WebSite)[]
> {
  const organization = await getOrganizationSchema();
  const website = await getWebSiteSchema();
  return [organization, website];
}
