import AboutMundo from "./components/about-mundo";
import WhyMundo from "./components/why-mundo";
import { getSettingBySectionAsync } from "@/server/settings.server";
import { Metadata } from "next";
import { SettingSchema } from "@/schema/setting-schema";
import { generatePageSeo } from "@/lib/generate-seo";
import { unstable_cache } from "next/cache";
import { Suspense } from "react";
import LoadJsonLdScript from "@/providers/load-jsonLd-script";
import { generateAboutUsLDJson } from "@/lib/ld-json-schema";
import ServicesSection from "./components/service-section";

const getSettingBySectionAsyncCached = unstable_cache(
  async () => getSettingBySectionAsync("CMS"),
  ["setting-by-section-cms"],
  { revalidate: 86400 }
);

export async function generateMetadata(): Promise<Metadata> {
  const { seoStaticPagesAboutUs } =
    (await getSettingBySectionAsyncCached()) as SettingSchema;
  const dictionary = generatePageSeo(seoStaticPagesAboutUs.seo, "/");
  return dictionary;
}

export default async function Page() {
  return (
    <main className="bg-background text-foreground overflow-hidden font-primary">
      <Suspense>
        <LoadJsonLdScript dataPromise={generateAboutUsLDJson()} />
      </Suspense>
      <AboutMundo />
      <ServicesSection />
      <WhyMundo />
    </main>
  );
}
