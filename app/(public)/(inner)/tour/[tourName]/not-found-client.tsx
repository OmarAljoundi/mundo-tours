"use client";
import { Illustration, NotFound } from "@/components/not-found";

export function NotFoundClient() {
  return (
    <div className="relative flex flex-col w-full justify-center  bg-background p-6 md:p-10">
      <div className="relative max-w-5xl mx-auto w-full">
        <Illustration className="absolute inset-0 w-full h-[50vh] opacity-[0.04]  text-foreground" />
        <NotFound
          title="الصفحة غير موجودة"
          description="نأسف، لم نتمكن من العثور على الوجهة السياحية التي تبحث عنها. يمكنك استكشاف وجهاتنا السياحية الأخرى من الصفحة الرئيسية."
        />
      </div>
    </div>
  );
}
