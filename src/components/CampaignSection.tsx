"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { m, Variants } from "framer-motion";

const campaigns = [
  {
    id: 1,
    subtitle: "Muhammadi Creation",
    title: "Unique blend",
    image: "/images/products/Gemini_Generated_Image_cffat1cffat1cffa.jpg", // Note: placeholder image
  },
  {
    id: 2,
    subtitle: "Perfume Oil",
    title: "Perfume oil & Natural oil",
    image: "/images/products/Gemini_Generated_Image_kz1z4okz1z4okz1z.png", // Note: placeholder image
  },
];

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

export default function CampaignSection() {
  return (
    <m.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
      className="w-full pb-20 overflow-hidden"
    >
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {campaigns.map((campaign) => (
          <m.div
            key={campaign.id}
            variants={itemVariants}
            className="group relative aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden cursor-pointer"
          >
            {/* Image Area */}
            <m.div
              initial={{ scale: 1.05, filter: "blur(10px)" }}
              whileInView={{ scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
              viewport={{ once: false }}
              className="absolute inset-0"
            >
              <Image
                src={campaign.image}
                alt={campaign.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-[800ms] ease-out group-hover:scale-105"
              />
            </m.div>

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />

            {/* Content Area */}
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={containerVariants}
              className="absolute bottom-0 left-0 flex flex-col p-8 md:p-10 lg:p-12 lg:pb-16 lg:pl-16"
            >
              <m.span
                variants={itemVariants}
                className="mb-2 text-[10px] font-bold tracking-widest text-white/90"
              >
                {campaign.subtitle}
              </m.span>

              <m.h2
                variants={itemVariants}
                className="mb-8 text-[32px] font-serif leading-[1.1] text-white md:text-[36px] lg:text-[42px] max-w-[320px]"
              >
                {campaign.title}
              </m.h2>

              <m.button
                variants={itemVariants}
                className="flex h-11 w-11 lg:h-12 lg:w-12 items-center justify-center bg-white transition-colors hover:bg-gray-200"
              >
                <ArrowRight className="h-[18px] w-[18px] stroke-[1.5] text-black" />
              </m.button>
            </m.div>
          </m.div>
        ))}
      </div>
    </m.section>
  );
}
