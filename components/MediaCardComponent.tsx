import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import media from "@/sample_data/media.json";
import Link from "next/link";

function MediaCardComponent() {
  return (
    <div className="flex flex-wrap justify-center gap-5 w-fit">
      {
         media.map((data, idx) => (
            <BackgroundGradient className="rounded-[22px] w-full md:max-w-96 h-auto p-4 sm:p-5 bg-white" key={idx}>
              <Image
                src={data.imageUrl}
                alt="jordans"
                height="200"
                width="200"
                className="object-contain"
              />
              <h1 className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                {data.heading}
              </h1>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {data.description}
              </p>
              <button className="px-4 py-2 mt-5 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                <Link href={data.readMoreLink}>
                  Read More
                </Link>
              </button>
            </BackgroundGradient>
          ))}
    </div>
  );
}

export default MediaCardComponent;
