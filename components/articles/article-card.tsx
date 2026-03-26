"use client";

import Link from "next/link";
import BlurImage from "../shared/blur-image";
import { Badge } from "../ui/badge";
import { ArticleMeta } from "@/lib/articles";
import { cn } from "@/lib/utils";

export default function ArticleCard({ article }: { article: ArticleMeta }) {
  const formattedDate = new Date(article.date).toLocaleDateString("ar-SA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/articles/${article.slug}`} className="group block">
      <article className="bg-white shadow-xl rounded-2xl p-2 transition-transform duration-300 group-hover:-translate-y-1">
        <div className="rounded-2xl relative overflow-hidden">
          <BlurImage
            priority={false}
            loading="lazy"
            width={1200}
            height={630}
            quality={70}
            src={article.image}
            alt={article.imageAlt}
            className="rounded-2xl w-full h-[200px] lg:h-[260px] transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute top-2 right-2 bg-white px-4 h-8 rounded-full shadow-xl border-primary border-2 flex items-center">
            <span className="text-sm font-primary">{article.readingTime} دقائق قراءة</span>
          </div>
        </div>

        <div className="p-3 sm:p-4 lg:p-5">
          <div className="flex items-center gap-2 mb-3 text-sm text-neutral-500 font-primary">
            <time dateTime={article.date} className="font-primary">{formattedDate}</time>
          </div>

          <h3 className="text-base sm:text-xl font-medium text-neutral-700 mb-3 font-primary line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>

          <p className="text-sm text-neutral-500 font-primary line-clamp-2 mb-4">
            {article.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {article.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className={cn(
                  "text-xs font-primary bg-secondary/10 text-secondary hover:bg-secondary/20"
                )}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
