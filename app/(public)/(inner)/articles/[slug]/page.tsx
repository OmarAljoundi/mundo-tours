import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Image from "next/image";
import { getAllArticles, getArticleBySlug, getRelatedArticles } from "@/lib/articles";
import { generatePageSeo } from "@/lib/generate-seo";
import { mdxComponents } from "@/components/articles/mdx-components";
import ArticleCard from "@/components/articles/article-card";
import { Suspense } from "react";
import LoadJsonLdScript from "@/providers/load-jsonLd-script";
import { generateArticleLDJson } from "@/lib/ld-json-schema";
import remarkGfm from "remark-gfm";
import RegisterBreadcrumbClient from "@/store/register-breadcrumb-client";

export const dynamic = "force-static";

export function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return generatePageSeo(
    {
      title: `${article.meta.title} | موندو تورز`,
      description: article.meta.description,
      keywords: article.meta.keywords.map((k, i) => ({ id: String(i), text: k })),
      media: { url: article.meta.image, alt: article.meta.imageAlt },
    },
    `/articles/${slug}`,
    undefined,
    "article"
  );
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const relatedArticles = getRelatedArticles(slug, article.meta.tags);
  const formattedDate = new Date(article.meta.date).toLocaleDateString("ar-SA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Suspense>
        <LoadJsonLdScript
          dataPromise={generateArticleLDJson(article.meta)}
        />
      </Suspense>

      <RegisterBreadcrumbClient
        breadcrumb={{
          href: `/articles/${slug}`,
          label: article.meta.title,
        }}
      />

      <article className="container mx-auto px-4 py-6 lg:py-10">
        <div className="relative rounded-2xl overflow-hidden mb-8 lg:mb-12">
          <Image
            src={article.meta.image}
            alt={article.meta.imageAlt}
            width={1200}
            height={630}
            priority
            className="w-full h-[300px] lg:h-[500px] object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 left-0 p-6 lg:p-10">
            <div className="flex items-center gap-3 text-white/80 text-sm font-primary mb-3">
              <time dateTime={article.meta.date} className="font-primary">{formattedDate}</time>
              <span className="font-primary">•</span>
              <span className="font-primary">{article.meta.readingTime} دقائق قراءة</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold font-primary text-white leading-tight">
              {article.meta.title}
            </h1>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-neutral max-w-none" dir="rtl">
            <MDXRemote
              source={article.content}
              components={mdxComponents}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>

          <div className="mt-10 pt-6 border-t border-neutral-200">
            <div className="flex flex-wrap gap-2">
              {article.meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-neutral-100 text-neutral-600 px-3 py-1.5 rounded-full text-sm font-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-between items-center">
            <Link
              href="/articles"
              className="text-primary font-primary hover:underline flex items-center gap-1"
            >
              → العودة للمقالات
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-16 lg:mt-20">
            <h2 className="text-3xl lg:text-5xl font-secondary text-center mb-8">
              مقالات ذات صلة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
              {relatedArticles.map((related) => (
                <ArticleCard key={related.slug} article={related} />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
