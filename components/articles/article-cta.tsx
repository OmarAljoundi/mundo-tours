import Link from "next/link";
import { Button } from "../ui/button";
import { Phone, Plane, MapPin } from "lucide-react";

export function BookTourCTA() {
  return (
    <div className="my-8 bg-gradient-to-l from-primary/5 to-primary/10 rounded-2xl p-6 lg:p-8 border border-primary/20">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
            <Plane className="w-7 h-7 text-primary" />
          </div>
        </div>
        <div className="flex-1 text-center sm:text-right">
          <h4 className="text-lg font-bold font-primary text-neutral-800 mb-1">
            هل أنت مستعد لرحلتك القادمة؟
          </h4>
          <p className="text-sm text-neutral-600 font-primary">
            اكتشف برامجنا السياحية المميزة واحجز رحلتك الآن
          </p>
        </div>
        <Link href="/tour-listing">
          <Button
            size="lg"
            className="font-primary text-base whitespace-nowrap"
          >
            تصفح البرامج
          </Button>
        </Link>
      </div>
    </div>
  );
}

export function ContactCTA() {
  return (
    <div className="my-8 bg-gradient-to-l from-secondary/5 to-secondary/10 rounded-2xl p-6 lg:p-8 border border-secondary/20">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center">
            <Phone className="w-7 h-7 text-secondary" />
          </div>
        </div>
        <div className="flex-1 text-center sm:text-right">
          <h4 className="text-lg font-bold font-primary text-neutral-800 mb-1">
            تحتاج مساعدة في التخطيط؟
          </h4>
          <p className="text-sm text-neutral-600 font-primary">
            فريقنا جاهز لمساعدتك في تصميم رحلتك المثالية
          </p>
        </div>
        <Link href="/call-us">
          <Button
            size="lg"
            variant="outline"
            className="font-primary text-base border-secondary text-secondary hover:bg-secondary hover:text-white whitespace-nowrap"
          >
            تواصل معنا
          </Button>
        </Link>
      </div>
    </div>
  );
}

export function ViewTourCTA({
  tourSlug,
  tourName,
}: {
  tourSlug: string;
  tourName: string;
}) {
  return (
    <Link
      href={`/tour/${tourSlug}`}
      className="my-4 flex items-center gap-3 bg-white border border-neutral-200 rounded-xl p-4 hover:border-primary hover:shadow-md transition-all group"
    >
      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
        <MapPin className="w-5 h-5 text-primary" />
      </div>
      <div className="flex-1">
        <span className="font-primary text-sm text-neutral-500">
          برنامج مقترح
        </span>
        <p className="font-primary font-medium text-neutral-800">
          {tourName}
        </p>
      </div>
      <span className="font-primary text-primary text-sm">عرض التفاصيل ←</span>
    </Link>
  );
}
