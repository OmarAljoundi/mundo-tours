"use client";
import { cn, getDestinationNextRoute } from "@/lib/utils";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { use, useEffect } from "react";
import { getDestinations } from "@/server/public-query.server";
import { QueryLocationSchema } from "@/schema";
import BlurImage from "@/components/shared/blur-image";
import { getTotalToursSeprate } from "@/lib/helpers";
import SectionProvider from "./section-provider";
const variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
const DestinationList = ({
  destinationPromise,
}: {
  destinationPromise: ReturnType<typeof getDestinations>;
}) => {
  const response = use(destinationPromise);

  return (
    <SectionProvider title="الباقات السياحية">
      <div className="container">
        <div className="grid grid-cols-12 gap-4 px-4 lg:gap-4 mt-8">
          {response.map((location) => (
            <DestinationCard
              key={location.id}
              location={location}
              isPriority={false}
            />
          ))}
        </div>
      </div>
    </SectionProvider>
  );
};

const DestinationCard = ({
  location,
  isPriority,
}: {
  location: QueryLocationSchema;
  isPriority: boolean;
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const url = getDestinationNextRoute(location);

  return (
    <Link
      href={url}
      key={location.id}
      scroll={true}
      className={cn("block col-span-6  lg:col-span-3")}
    >
      <motion.div
        className="relative w-full h-full overflow-hidden rounded-2xl"
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <BlurImage
          priority={isPriority}
          loading={isPriority ? "eager" : "lazy"}
          src={location.image?.url || ""}
          alt={location.image?.alt ?? location.name ?? ""}
          className=" object-cover"
          width={384}
          height={460}
          quality={80}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black/60 to-transparent" />

        <div
          className="absolute top-2 right-2
          bg-white
          inline-block 
          bg-opacity-70 
          backdrop-filter backdrop-blur-sm 
          text-gray-800 
          rounded-lg 
          px-3 py-1
          lg:px-4 lg:py-2 
          font-semibold
          shadow-md
          text-xs 
          font-primary"
        >
          <span className="font-english ml-1">
            {getTotalToursSeprate(location)?.count}
          </span>
          <span className="font-primary">
            {getTotalToursSeprate(location).word}
          </span>
        </div>

        <div className="absolute bottom-2 left-2 right-4">
          <h2 className="text-white text-sm sm:text-xl lg:text-2xl font-bold line-clamp-2 font-primary">
            {location.name}
          </h2>
        </div>
      </motion.div>
    </Link>
  );
};

export default DestinationList;
