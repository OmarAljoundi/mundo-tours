import { Metadata } from "next";
import { getAllArticles } from "@/lib/articles";
import { generatePageSeo } from "@/lib/generate-seo";
import ArticleSearch from "@/components/articles/article-search";
import { Suspense } from "react";
import LoadJsonLdScript from "@/providers/load-jsonLd-script";
import { generateArticleListingLDJson } from "@/lib/ld-json-schema";

export const metadata: Metadata = generatePageSeo(
  {
    title: "مقالات السفر والسياحة | موندو تورز",
    description:
      "اكتشف أحدث مقالات السفر والسياحة من موندو تورز. نصائح سفر، أدلة الوجهات، وأفكار لرحلات مميزة في عمان والسعودية والعالم العربي.",
    keywords: [
      { id: "1", text: "مقالات سفر" },
      { id: "2", text: "نصائح سياحة" },
      { id: "3", text: "دليل السفر" },
      { id: "4", text: "سياحة عمان" },
      { id: "5", text: "سياحة السعودية" },
      { id: "6", text: "رحلات سياحية" },
      { id: "7", text: "موندو تورز" },
    ],
  },
  "/articles"
);

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <>
      <Suspense>
        <LoadJsonLdScript dataPromise={generateArticleListingLDJson()} />
      </Suspense>

      <section className="container mx-auto px-4 py-8 lg:py-16">
        <div className="text-center mb-8 lg:mb-14">
          <h1 className="text-5xl lg:text-7xl font-secondary mb-4">
            المقالات
          </h1>
          <p className="text-lg text-neutral-500 font-primary max-w-2xl mx-auto">
            نصائح سفر، أدلة وجهات، وكل ما تحتاج معرفته لتخطيط رحلتك المثالية
          </p>
        </div>

        <ArticleSearch articles={articles} />
      </section>
    </>
  );
}
