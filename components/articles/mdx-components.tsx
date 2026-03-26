import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import { BookTourCTA, ContactCTA, ViewTourCTA } from "./article-cta";

export const mdxComponents: MDXComponents = {
  h2: ({ children, ...props }) => (
    <h2
      className="text-2xl lg:text-3xl font-bold font-primary text-neutral-800 mt-10 mb-4"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className="text-xl lg:text-2xl font-bold font-primary text-neutral-700 mt-8 mb-3"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4
      className="text-lg font-bold font-primary text-neutral-700 mt-6 mb-2"
      {...props}
    >
      {children}
    </h4>
  ),
  p: ({ children, ...props }) => (
    <p
      className="text-base lg:text-lg leading-8 text-neutral-600 font-primary mb-5"
      {...props}
    >
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul
      className="list-disc list-inside space-y-2 text-neutral-600 font-primary mb-5 mr-4"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol
      className="list-decimal list-inside space-y-2 text-neutral-600 font-primary mb-5 mr-4"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="text-base lg:text-lg leading-8 font-primary" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="border-r-4 border-primary bg-primary/5 pr-4 pl-2 py-3 my-6 rounded-lg font-primary text-neutral-700 italic"
      {...props}
    >
      {children}
    </blockquote>
  ),
  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors font-primary"
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href ?? "#"}
        className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors font-primary"
        {...props}
      >
        {children}
      </Link>
    );
  },
  img: ({ src, alt, ...props }) => (
    <figure className="my-6">
      <Image
        src={src ?? ""}
        alt={alt ?? ""}
        width={1200}
        height={630}
        className="rounded-xl w-full"
        sizes="(max-width: 768px) 100vw, 800px"
        {...(props as Record<string, unknown>)}
      />
      {alt && (
        <figcaption className="text-center text-sm text-neutral-400 font-primary mt-2">
          {alt}
        </figcaption>
      )}
    </figure>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-bold font-primary text-neutral-800" {...props}>
      {children}
    </strong>
  ),
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto my-6">
      <table
        className="w-full border-collapse font-primary text-sm lg:text-base"
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead className="bg-secondary/10" {...props}>
      {children}
    </thead>
  ),
  th: ({ children, ...props }) => (
    <th
      className="border border-neutral-200 px-3 py-2 text-right font-bold font-primary text-neutral-800"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td
      className="border border-neutral-200 px-3 py-2 text-right font-primary text-neutral-600"
      {...props}
    >
      {children}
    </td>
  ),
  hr: () => <hr className="my-8 border-neutral-200" />,
  BookTourCTA,
  ContactCTA,
  ViewTourCTA,
};
