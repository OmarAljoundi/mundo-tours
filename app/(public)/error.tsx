"use client";
import { Illustration, NotFound } from "@/components/not-found";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const pathname = usePathname();
  useEffect(() => {
    console.log({
      error,
      pathname,
    });
  }, [error, pathname]);

  return (
    <div className="relative flex flex-col w-full justify-center  bg-background p-6 md:p-10">
      <div className="relative max-w-5xl mx-auto w-full">
        <Illustration className="absolute inset-0 w-full h-[50vh] opacity-[0.04]  text-foreground" />
        <NotFound
          title="نعتذر حصل خطأ بالنظام"
          description="نواجه مشكلة تقنية الرجاء المحاولة لاحقا ، اذا استمرت المشكلة الرجاء التواصل معنا"
        />
      </div>
    </div>
  );
}
