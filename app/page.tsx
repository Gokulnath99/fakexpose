"use client"

import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MovingCard } from "@/components/MovingCard";
import MediaCardComponent from "@/components/MediaCardComponent";


import feature_image from "@/public/featured/feature1.png"
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        className="
          bg-gradient-to-tl from-[#00274C] to-[#145089]
          w-full
          h-screen
          absolute
          overflow-hidden
          -z-20
          snap-start
          top-0
          "
      >
        <Image
          src={feature_image}
          alt={"feature1"}
          className="mix-blend-overlay blur"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center mb-40 md:mt-18 md:mb-60 mx-2">
        <h1 className="max-w-4xl text-2xl font-bold md:text-6xl lg:text-7xl ">
          <TextGenerateEffect words="Leading the Fight Against Deepfakes" />
        </h1>
        <p className="mt-5 max-w-prose text-md sm:text-lg text-white ">
          Detection and Analysis with State-of-the-Art AI. Secure the Truth in a
          World of Synthetic Voices.
        </p>

        <Link
          className={buttonVariants({
            variant: "secondary",
            size: "lg",
            className: "mt-5",
          })}
          href="/dashboard"
        >
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 w-full ">
          <motion.div whileHover={{ scale: 1.01 }} className="shadow-2xl p-4">
            <h3 className="text-[#00274C] dark:text-[#FFCB05] text-sm uppercase tracking-[10px] mb-2">
              SPONSORS
            </h3>
            <h1 className="text-[#00274C] dark:text-[#FFCB05] text-2xl font-bold">
              Thank-you to our Sponsors!
            </h1>
            <p className="text-left pr-3 text-lg">
              Their continued support is key to our success - we wouldn't be
              able to do it without them!
            </p>
            {/* Sponsors moving card */}
            <MovingCard />
          </motion.div>
          <motion.div whileHover={{ scale: 1.01 }} className="shadow-2xl p-4">
            <h3 className="text-[#00274C] dark:text-[#FFCB05] text-sm uppercase tracking-[10px] mb-2">
              Our Mission
            </h3>
            <h1 className="text-[#00274C] dark:text-[#FFCB05] text-2xl font-bold">
              Combating Deepfakes through Detection, Education, and Advocacy
            </h1>
            <p className="text-left pr-3 text-lg">
              we are dedicated to pioneering the detection of deepfakes,
              educating the public on their dangers, and advocating for robust
              legal frameworks to combat their spread, thereby ensuring the
              integrity of digital media and protecting democratic values.
            </p>
          </motion.div>
        </div>
        <motion.div className="p-4 mt-8">
          <div className="contain">
            <h3 className="mb-12 mt-10 text-[#00274C] dark:text-[#FFCB05] text-sm uppercase tracking-[10px] ">
              Latest News and Updates
            </h3>
            <MediaCardComponent />
          </div>
        </motion.div>
    </main>
  );
}
