import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  imageAlt: string;
  tags: string[];
  readingTime: number;
  keywords: string[];
}

export function getAllArticles(): ArticleMeta[] {
  const fileNames = fs.readdirSync(articlesDirectory);
  const articles = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title ?? "",
        description: data.description ?? "",
        date: data.date ?? "",
        image: data.image ?? "",
        imageAlt: data.imageAlt ?? "",
        tags: data.tags ?? [],
        readingTime: data.readingTime ?? 5,
        keywords: data.keywords ?? [],
      } satisfies ArticleMeta;
    });

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getArticleBySlug(
  slug: string
): { meta: ArticleMeta; content: string } | null {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    meta: {
      slug,
      title: data.title ?? "",
      description: data.description ?? "",
      date: data.date ?? "",
      image: data.image ?? "",
      imageAlt: data.imageAlt ?? "",
      tags: data.tags ?? [],
      readingTime: data.readingTime ?? 5,
      keywords: data.keywords ?? [],
    },
    content,
  };
}

export function getRelatedArticles(
  currentSlug: string,
  tags: string[],
  limit: number = 3
): ArticleMeta[] {
  const all = getAllArticles();
  return all
    .filter(
      (a) =>
        a.slug !== currentSlug && a.tags.some((tag) => tags.includes(tag))
    )
    .slice(0, limit);
}
