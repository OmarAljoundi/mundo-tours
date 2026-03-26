"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { ArticleMeta } from "@/lib/articles";
import ArticleCard from "./article-card";
import { Search } from "lucide-react";

export default function ArticleSearch({
  articles,
}: {
  articles: ArticleMeta[];
}) {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? articles.filter(
        (a) =>
          a.title.includes(query) ||
          a.description.includes(query) ||
          a.tags.some((tag) => tag.includes(query))
      )
    : articles;

  return (
    <div>
      <div className="relative max-w-md mx-auto mb-8 lg:mb-12">
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
        <Input
          type="search"
          placeholder="ابحث في المقالات..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pr-10 font-primary text-base h-12 rounded-xl border-neutral-200 focus:border-primary"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-neutral-500 font-primary text-lg">
            لم يتم العثور على مقالات مطابقة
          </p>
          <p className="text-neutral-400 font-primary text-sm mt-2">
            جرب كلمات بحث مختلفة
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
