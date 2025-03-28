"use client";

import { useBreadcrumbStore } from "@/store/bread-crumb-store";
import Link from "next/link";

export function InnerBreadcrumb() {
  const { breadcrumbs } = useBreadcrumbStore();
  return (
    <nav aria-label="Breadcrumb" className="flex container">
      <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600 mt-8 ">
        {breadcrumbs.slice(0, -1).map((breadcrumb, index) => (
          <li className="flex items-center" key={breadcrumb.href ?? index}>
            <Link
              href={breadcrumb.href}
              className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
            >
              {index == 0 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              )}

              <span className="ms-1.5 text-xs font-medium font-primary">
                {breadcrumb.label}
              </span>
            </Link>
          </li>
        ))}

        <li className="relative flex items-center">
          <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>

          <Link
            href="#"
            className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900 font-primary"
          >
            {breadcrumbs[breadcrumbs.length - 1]?.label}
          </Link>
        </li>
      </ol>
    </nav>
  );
}
