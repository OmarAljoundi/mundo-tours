import { QueryTourSchema } from "@/schema";
import { FunctionComponent } from "react";
import { ContactForm } from "./contact-form";
import { Button } from "@/components/ui/button";
import { generate } from "./pdf-document";
import { Download } from "lucide-react";

interface TourLinksProps {
  tour: QueryTourSchema;
}

const TourLinks: FunctionComponent<TourLinksProps> = ({ tour }) => {
  return (
    <section
      className="p-3 sm:p-4 lg:p-6 bg-[var(--bg-1)] rounded-2xl border border-neutral-40 mb-6 lg:mb-10"
      aria-labelledby="booking-section-heading"
    >
      <h2
        id="booking-section-heading"
        className="mb-0 text-2xl font-semibold font-primary"
      >
        أحجز اللآن
      </h2>
      <hr className="border border-dashed my-5" aria-hidden="true" />

      <div className="my-5" role="group" aria-label="خيارات الحجز والتنزيل">
        <div className="flex gap-6">
          <ContactForm tourId={tour.id!} />

          <Button
            className="font-primary"
            size={"sm"}
            variant={"secondary"}
            onClick={async () => await generate(tour)}
            aria-label={`تنزيل برنامج رحلة ${tour.name}`}
            title={`تنزيل برنامج رحلة ${tour.name}`}
          >
            <span>تنزيل البرنامج</span>
            <span className="sr-only">بصيغة PDF</span>
            <Download className="w-4 h-4 ml-2" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TourLinks;
