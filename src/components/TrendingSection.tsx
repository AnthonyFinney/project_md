"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { m, Variants } from 'framer-motion';

const categories = [
  { name: 'The Linen Shop', image: '/trending_linen.png' },
  { name: 'Sweaters & Sweatshirts', image: '/trending_sweaters.png' },
  { name: 'Polos', image: '/trending_polos.png' },
  { name: 'Jackets & Coats', image: '/trending_jackets.png' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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

export default function TrendingSection() {
  return (
    <m.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
      className="mx-auto w-full max-w-[1440px] px-6 py-20 overflow-hidden"
    >
      <m.div variants={itemVariants} className="mb-8 flex items-end justify-between">
        <h2 className="text-[32px] font-serif tracking-tight text-[#0a2319]">Now Trending</h2>
        <div className="flex gap-[6px]">
          <button className="flex h-10 w-10 items-center justify-center border border-[#e5e5e5] text-gray-300 cursor-not-allowed">
            <ArrowLeft className="h-[18px] w-[18px] stroke-[1.5]" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center border border-black text-black hover:bg-gray-50 transition-colors">
            <ArrowRight className="h-[18px] w-[18px] stroke-[1.5]" />
          </button>
        </div>
      </m.div>

      <div className="flex w-full gap-5 overflow-x-auto overflow-y-hidden pb-8 scrollbar-hide">
        {categories.map((category, index) => (
          <m.div key={index} variants={itemVariants} className="group flex min-w-[300px] flex-1 flex-col">
            <Link href="#" className="flex h-full w-full flex-col">
              <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden bg-[#ebebeb]">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top"
                />
              </div>
              <span className="text-[15px] font-medium text-[#0a2319] underline decoration-1 underline-offset-[6px] hover:decoration-2">
                {category.name}
              </span>
            </Link>
          </m.div>
        ))}
      </div>
    </m.section>
  );
}
