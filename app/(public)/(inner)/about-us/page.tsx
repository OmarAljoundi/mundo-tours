import AboutMundo from "./components/about-mundo";
import Slogan from "./components/slogan";
import Goal from "./components/goal";
import WhyMundo from "./components/why-mundo";
import { getSettingBySectionAsync } from "@/server/settings.server";
import { Metadata } from "next";
import { SettingSchema } from "@/schema/setting-schema";
import { generatePageSeo } from "@/lib/generate-seo";

export async function generateMetadata(): Promise<Metadata> {
  const { seoStaticPagesAboutUs } = (await getSettingBySectionAsync(
    "CMS"
  )) as SettingSchema;
  const dictionary = generatePageSeo(seoStaticPagesAboutUs.seo, "/");
  return dictionary;
}

export default async function Page() {
  return (
    <main className="bg-background text-foreground overflow-hidden font-primary">
      <AboutMundo />
      <Slogan />
      <Goal />
      <WhyMundo />
    </main>
  );
}
