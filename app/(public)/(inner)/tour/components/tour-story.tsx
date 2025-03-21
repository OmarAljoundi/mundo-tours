import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { DAYS } from "@/lib/constants";
import { QueryTourSchema } from "@/schema";

function getArabicDayLabel(dayNumber: number): string {
  if (dayNumber < 1 || dayNumber > 30) {
    throw new Error("The number must be between 1 and 30");
  }

  const arabicNumbers = [
    "الأول",
    "الثاني",
    "الثالث",
    "الرابع",
    "الخامس",
    "السادس",
    "السابع",
    "الثامن",
    "التاسع",
    "العاشر",
    "الحادي عشر",
    "الثاني عشر",
    "الثالث عشر",
    "الرابع عشر",
    "الخامس عشر",
    "السادس عشر",
    "السابع عشر",
    "الثامن عشر",
    "التاسع عشر",
    "العشرون",
    "الحادي والعشرون",
    "الثاني والعشرون",
    "الثالث والعشرون",
    "الرابع والعشرون",
    "الخامس والعشرون",
    "السادس والعشرون",
    "السابع والعشرون",
    "الثامن والعشرون",
    "التاسع والعشرون",
    "الثلاثون",
  ];

  return `اليوم ${arabicNumbers[dayNumber - 1]}`;
}

function TourStoryItem({
  tourSection,
  day_text,
}: {
  tourSection: QueryTourSchema["tourSections"][number];
  day_text: string | React.ReactNode;
}) {
  return (
    <AccordionItem
      value={tourSection.uuid}
      className="mb-4 bg-white dark:bg-black/5 rounded-xl border border-gray-100 dark:border-gray-800/60 shadow-sm dark:shadow-black/10 font-primary"
    >
      <AccordionTrigger className="font-primary text-lg text-primary/80 px-6 py-4 text-left hover:no-underline data-[state=open]:border-b data-[state=open]:border-gray-100 dark:data-[state=open]:border-gray-800/60">
        <div className="flex flex-col gap-2">
          <Badge
            variant="secondary"
            className="w-fit text-xs font-normal rounded-sm font-primary"
          >
            {day_text}
          </Badge>

          <h3 className="font-primary text-lg hover:underline hover:underline-offset-4 hover:text-primary duration-300 transition-colors font-medium text-gray-900 dark:text-gray-200 group-hover:text-primary">
            {tourSection.title}
          </h3>
        </div>
      </AccordionTrigger>
      <AccordionContent className="font-primary text-base">
        <div className="p-4 font-primary">{tourSection.description}</div>
      </AccordionContent>
    </AccordionItem>
  );
}

export function TourStory({ tour }: { tour: QueryTourSchema }) {
  const getDay = (index: number) => {
    const currentDay = tour.startDay ? tour.startDay[0] : "";
    if (currentDay == "كل يوم") {
      return (
        <div className="text-center flex gap-x-2 items-center">
          <p className="text-sm mb-0 font-primary">
            {" "}
            {getArabicDayLabel(index + 1)}{" "}
          </p>
        </div>
      );
    } else {
      const startIndex = DAYS.indexOf(currentDay);
      return ` ${getArabicDayLabel(index + 1)}: يوم ${
        DAYS[(startIndex + index) % 7]
      }`;
    }
  };
  return (
    <div className="p-3 sm:p-4 lg:p-6 bg-[var(--bg-1)] rounded-2xl border border-neutral-40 mb-6 lg:mb-10">
      <h4 className="mb-0 text-2xl font-semibold font-primary">قصة الرحلة</h4>
      <div className="border border-dashed my-5"></div>

      {tour.tourSections?.map((item, index) => (
        <Accordion type="single" collapsible key={item.uuid}>
          <TourStoryItem tourSection={item} day_text={getDay(index)} />
        </Accordion>
      ))}
    </div>
  );
}
