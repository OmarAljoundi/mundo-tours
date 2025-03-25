import { replaceNumbersWithSpans } from "@/lib/utils";
import { QueryTourSchema } from "@/schema";
import { Check, Dot, X } from "lucide-react";
import { FC } from "react";

const TourBenfits: FC<{ tour: QueryTourSchema }> = ({ tour }) => {
  return (
    <section
      className="p-3 sm:p-4 lg:p-6 bg-[var(--bg-1)] rounded-2xl border border-neutral-40 mb-6 lg:mb-10"
      aria-labelledby="tour-benefits-heading"
    >
      <h2
        id="tour-benefits-heading"
        className="mb-0 text-2xl font-semibold font-primary"
      >
        مميزات البرنامج
      </h2>
      <hr className="border border-dashed my-5" aria-hidden="true" />

      <div>
        <h3 id="includes-heading" className="mb-4 font-semibold font-primary">
          البرنامج يشمل التالي
        </h3>
        <ul
          className="flex flex-col gap-4 mb-10"
          aria-labelledby="includes-heading"
        >
          {tour?.tourIncludes?.map((item) => (
            <li key={item.uuid} className="flex items-start gap-4">
              <div
                className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-green-700"
                aria-hidden="true"
              >
                <Check className="las w-6 h-6 p-1 text-lg text-white" />
              </div>
              <div className="grid items-start">
                <strong className="font-bold font-primary">{item.title}</strong>
                <div className="inline-block font-primary">
                  <div className="grid items-center flex-wrap">
                    {item.description.split(",").map((detail, index) => (
                      <div
                        className="flex items-center"
                        key={`${item.uuid}-detail-${index}`}
                      >
                        <div aria-hidden="true">
                          <Dot className="text-green-900 w-6 h-6" />
                        </div>
                        <div
                          className="font-primary"
                          dangerouslySetInnerHTML={{
                            __html: replaceNumbersWithSpans(detail),
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 id="excludes-heading" className="mb-4 font-semibold font-primary">
          البرنامج لا يشمل التالي
        </h3>
        <ul
          className="flex flex-col gap-4 mb-10"
          aria-labelledby="excludes-heading"
        >
          {tour?.tourExcludes?.map(({ uuid, description }) => (
            <li key={uuid} className="flex items-center gap-2">
              <div
                className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-red-500/80"
                aria-hidden="true"
              >
                <X className="p-1 text-white" />
              </div>
              <div
                className="inline-block font-primary"
                dangerouslySetInnerHTML={{
                  __html: replaceNumbersWithSpans(description),
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TourBenfits;
