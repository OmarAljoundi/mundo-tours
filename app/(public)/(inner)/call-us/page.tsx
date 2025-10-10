import { getSettingBySectionAsync } from "@/server/settings.server";
import { Metadata } from "next";
import { SettingSchema } from "@/schema/setting-schema";
import { generatePageSeo } from "@/lib/generate-seo";
import { unstable_cache } from "next/cache";

import { generateContactUsLDJson } from "@/lib/ld-json-schema";
import LoadJsonLdScript from "@/providers/load-jsonLd-script";
import { Suspense } from "react";
import { CallUsContact } from "./call-us-content";

const getSettingBySectionAsyncCached = unstable_cache(
  async () => getSettingBySectionAsync("CMS"),
  ["setting-by-section-cms"],
  { revalidate: 86400 }
);

export async function generateMetadata(): Promise<Metadata> {
  const { seoStaticPagesContactUs } =
    (await getSettingBySectionAsyncCached()) as SettingSchema;
  const dictionary = generatePageSeo(seoStaticPagesContactUs.seo, "/");
  return dictionary;
}

export default async function Page() {
  return (
    <main className="bg-background text-foreground overflow-hidden font-primary">
      <Suspense>
        <LoadJsonLdScript dataPromise={generateContactUsLDJson()} />
      </Suspense>
      <CallUsContact />
    </main>
  );
}
