"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { m, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function TournamentSection() {
  return (
    <section className="w-full  overflow-hidden">
      <div className="flex flex-col md:flex-row md:min-h-[600px] lg:min-h-[650px]">
        {/* Left Side: Image */}
        <div className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-auto md:w-1/2 md:min-h-[600px] overflow-hidden">
          <m.div
            initial={{ scale: 1.05, filter: "blur(10px)" }}
            whileInView={{ scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: false }}
            className="absolute inset-0"
          >
            <Image
              src="/hero_spring_summer.png"
              alt="Tournament Style"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              loading="eager"
            />
          </m.div>

          {/* Mobile Pagination overlaid on image (hidden on md+) */}
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: false }}
            className="absolute bottom-4 right-4 flex md:hidden items-center gap-2 text-[14px] font-medium tracking-widest text-[#0a2319]"
          >
            <button className="hover:opacity-70 transition-opacity">
              <ChevronLeft className="h-[22px] w-[22px] stroke-[1]" />
            </button>
            <span>1 / 2</span>
            <button className="hover:opacity-70 transition-opacity">
              <ChevronRight className="h-[22px] w-[22px] stroke-[1]" />
            </button>
          </m.div>
        </div>

        {/* Right Side: Content */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="relative flex w-full flex-col justify-center px-4 py-8 sm:px-8 sm:py-16 md:w-1/2 md:py-20 lg:pl-24 lg:pr-12"
        >
          {/* Desktop Pagination (hidden on mobile) */}
          <m.div
            variants={itemVariants}
            className="absolute hidden md:flex right-8 top-8 lg:right-16 lg:top-12 items-center gap-3 text-[13px] font-medium tracking-widest text-gray-800"
          >
            <button className="text-gray-300 hover:text-black">
              <ChevronLeft className="h-[18px] w-[18px] stroke-[1.5]" />
            </button>
            <span className="text-black">1 / 2</span>
            <button className="text-black hover:text-gray-600">
              <ChevronRight className="h-[18px] w-[18px] stroke-[1.5]" />
            </button>
          </m.div>

          <div className="max-w-[480px]">
            <m.h2
              variants={itemVariants}
              className="mb-3 md:mb-5 text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.15] font-serif text-[#092119]"
            >
              Tournament Style at The Mutua Madrid Open
            </m.h2>
            <m.p
              variants={itemVariants}
              className="mb-6 md:mb-9 text-[15px] leading-[1.5] text-[#333] md:text-[#0a2319]"
            >
              Discover on-court looks worn by Novak Djokovic, Daniil Medvedev,
              Grigor Dimitrov, Arthur Fils, and Eva Lys at the Mutua Madrid
              Open, where Lacoste is an official partner.
            </m.p>

            {/* Buttons: Side-by-side on mobile per the screenshot */}
            <m.div
              variants={itemVariants}
              className="flex flex-row gap-3 w-full"
            >
              <button className="flex-1 flex h-[48px] items-center justify-center bg-[#092119] text-[11px] sm:text-[12px] font-bold tracking-wider text-white transition-colors hover:bg-black px-2 text-center leading-tight">
                SHOP NOW
              </button>
              <button className="flex-1 flex h-[48px] items-center justify-center bg-[#092119] text-[11px] sm:text-[12px] font-bold tracking-wider text-white transition-colors hover:bg-black px-2 text-center leading-tight">
                EXPLORE PLAYER LOOKS
              </button>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
