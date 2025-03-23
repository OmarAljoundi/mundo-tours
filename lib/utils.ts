import { QueryLocationSchema } from "@/schema";
import { clsx, type ClassValue } from "clsx";
import { createHash } from "crypto";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatBytes(
  bytes: number,
  opts: {
    decimals?: number;
    sizeType?: "accurate" | "normal";
  } = {}
) {
  const { decimals = 0, sizeType = "normal" } = opts;

  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const accurateSizes = ["Bytes", "KiB", "MiB", "GiB", "TiB"];
  if (bytes === 0) return "0 Byte";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(decimals)} ${
    sizeType === "accurate" ? accurateSizes[i] ?? "Bytest" : sizes[i] ?? "Bytes"
  }`;
}

export function formatDate(
  date: Date | string | number,
  opts: Intl.DateTimeFormatOptions = {}
) {
  return new Intl.DateTimeFormat("en-US", {
    month: opts.month ?? "long",
    day: opts.day ?? "numeric",
    year: opts.year ?? "numeric",
    ...opts,
  }).format(new Date(date));
}

export function composeEventHandlers<E>(
  originalEventHandler?: (event: E) => void,
  ourEventHandler?: (event: E) => void,
  { checkForDefaultPrevented = true } = {}
) {
  return function handleEvent(event: E) {
    originalEventHandler?.(event);

    if (
      checkForDefaultPrevented === false ||
      !(event as unknown as Event).defaultPrevented
    ) {
      return ourEventHandler?.(event);
    }
  };
}

export function isCreationPage(firstParma: string) {
  if (firstParma == "new") {
    return { isCreation: true, id: firstParma };
  }

  return { isCreation: false, id: firstParma };
}

export function getDestinationNextRoute(destination: QueryLocationSchema) {
  let baseUrl = `/tour-listing/${destination.slug}`;
  if (destination.attributes && destination.attributes?.length >= 2) {
    const locationTabSlug =
      destination.attributes[0].title?.replaceAll(" ", "-") ?? "";
    baseUrl += `?attribute=${locationTabSlug}`;
  }

  return baseUrl;
}
export function getCookie(name: string): string | null {
  if (typeof document == "undefined") return null;

  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")[1];

  return cookieValue ? decodeURIComponent(cookieValue) : null;
}

export function setCookie(name: string, value: string, days = 365): void {
  if (typeof document == "undefined") return;

  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);

  const cookieValue = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )};expires=${expirationDate.toUTCString()};path=/`;
  document.cookie = cookieValue;
}

export function hashString(str: string): string {
  return createHash("sha256").update(str).digest("hex").substring(0, 32);
}

export function replaceNumbersWithSpans(text: string): string {
  const numberRegex = /\d+(\.\d+)?/g;

  return text.replace(numberRegex, (match) => {
    return `<span class="font-english text-primary">${match}</span>`;
  });
}
