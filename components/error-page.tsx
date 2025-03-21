import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorPageProps {
  title?: string;
  description?: string;
  homeButtonText?: string;
  backButtonText?: string;
}

export function ServerErrorIllustration(
  props: React.ComponentPropsWithoutRef<"svg">
) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" {...props}>
      <path
        fill="currentColor"
        d="M221.09 64.91c-95.85 22.05-173.5 99.69-195.55 195.55a12.21 12.21 0 0 0 2.37 10.91l38.24 45.88a12.22 12.22 0 0 0 17.56 1.73L143.02 269a12.22 12.22 0 0 0 1.73-17.57l-25.3-30.36a12.23 12.23 0 0 1 .81-15.68c37.42-36.38 97.35-36.34 134.73 0a12.23 12.23 0 0 1 .83 15.67l-25.3 30.37a12.22 12.22 0 0 0 1.73 17.56l59.31 49.99a12.22 12.22 0 0 0 17.56-1.73l38.24-45.88a12.21 12.21 0 0 0 2.37-10.91c-22.05-95.86-99.7-173.5-195.55-195.55L221.09 64.91z"
      />
    </svg>
  );
}

export function ServerError({
  title = "خطأ في الخادم",
  description = "عذرًا، حدث خطأ في الخادم. يرجى المحاولة مرة أخرى لاحقًا.",
  homeButtonText = "الصفحة الرئيسية",
  backButtonText = "العودة",
}: ErrorPageProps) {
  return (
    <div className="relative text-center z-[1] pt-52 rtl">
      <div className="flex justify-center">
        <ServerErrorIllustration className="h-40 w-40 text-primary" />
      </div>
      <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-primary sm:text-7xl">
        500
      </h1>
      <h2 className="mt-2 text-3xl font-medium text-primary">{title}</h2>
      <p className="mt-6 text-pretty text-lg font-medium text-muted-foreground sm:text-xl/8">
        {description}
      </p>
      <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-y-3 gap-x-6">
        <Button variant="secondary" asChild className="group">
          <a href="#">
            <ArrowRight
              className="ms-2 me-0 opacity-60 transition-transform group-hover:translate-x-0.5"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            {backButtonText}
          </a>
        </Button>
        <Button className="sm:order-none" asChild>
          <a href="#">{homeButtonText}</a>
        </Button>
      </div>
    </div>
  );
}
