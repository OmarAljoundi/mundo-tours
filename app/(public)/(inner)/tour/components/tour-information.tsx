import { TextGenerateEffect } from "./text-generate-effect";

export const TourInformation = ({ info }: { info?: string | null }) => {
  if (!info) return null;

  return (
    <TextGenerateEffect
      words={info}
      duration={0.2}
      filter
      className="text-xs md:text-base text-muted-foreground   text-center font-primary"
    />
  );
};
