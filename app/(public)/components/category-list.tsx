"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowTopLeftIcon } from "@radix-ui/react-icons";
import { getTourTypes } from "@/server/public-query.server";
import { Button } from "@/components/ui/button";

export default function CategoryList({
  categoryPromise,
}: {
  categoryPromise: ReturnType<typeof getTourTypes>;
}) {
  const results = React.use(categoryPromise);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="container mx-auto px-4 py-8 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="flex flex-col space-y-4"
      >
        {results?.map((item) => (
          <Link
            href={`/tour-listing?type=${item.name.replace(" ", "+")}`}
            key={item.id}
          >
            <motion.div
              variants={{
                hidden: { x: 50, opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: { type: "spring", stiffness: 100 },
                },
              }}
              className="w-full border rounded-md"
            >
              <div className="flex items-center justify-between flex-row-reverse p-2 rounded-lg shadow-md">
                <Button variant="ghost" className="transition-all duration-300">
                  <span className="sr-only">الذهاب إلى {item.name}</span>
                  <ArrowTopLeftIcon className="h-5 w-5 text-primary" />
                </Button>
                <div className="flex items-center  flex-row-reverse gap-x-2 ">
                  <h4 className="font-primary text-lg text-primary">
                    {item.name}
                  </h4>
                  <Image
                    src={item.image.url}
                    width={40}
                    height={40}
                    alt={item.image.alt ?? ""}
                    className="rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
