"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { m, AnimatePresence, Variants } from "framer-motion";
import productsData from "../../products.json";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
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

export interface Product {
  name: string;
  category: {
    name: string;
  };
  description: string;
  image: string;
}

export interface TournamentSectionProps {
  /** Optional array of products to display. Defaults to all products from products.json */
  products?: Product[];
}

export default function TournamentSection({
  products = productsData as Product[],
}: TournamentSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayProducts, setDisplayProducts] = useState<Product[]>(products);

  useEffect(() => {
    // Shuffle the products on mount so each instance of the component
    // shows a different random order. We do this in useEffect to avoid
    // hydration mismatches between server and client renders.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDisplayProducts(
      [...products].sort(() => 0.5 - Math.random()).slice(0, 2),
    );
  }, [products]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % displayProducts.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + displayProducts.length) % displayProducts.length,
    );
  };

  const product = displayProducts[currentIndex];

  if (!product) return null;

  return (
    <section className="w-full overflow-hidden">
      <div className="flex flex-col md:flex-row md:min-h-[600px] lg:min-h-[650px]">
        {/* Left Side: Image */}
        <div className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-auto md:w-1/2 md:min-h-[600px] overflow-hidden">
          <AnimatePresence mode="wait">
            <m.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
                loading="eager"
              />
            </m.div>
          </AnimatePresence>

          {/* Mobile Pagination overlaid on image (hidden on md+) */}
          <div className="absolute bottom-4 right-4 flex md:hidden items-center gap-2 text-[14px] font-medium tracking-widest text-[#0a2319] px-3 py-1 rounded-full backdrop-blur-sm z-10">
            <button
              onClick={handlePrev}
              className="hover:opacity-70 transition-opacity p-1"
            >
              <ChevronLeft className="h-[20px] w-[20px] stroke-[1.5]" />
            </button>
            <span>
              {currentIndex + 1} / {displayProducts.length}
            </span>
            <button
              onClick={handleNext}
              className="hover:opacity-70 transition-opacity p-1"
            >
              <ChevronRight className="h-[20px] w-[20px] stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="relative flex w-full flex-col justify-center px-4 py-8 sm:px-8 sm:py-16 md:w-1/2 md:py-20 lg:pl-24 lg:pr-12 ">
          {/* Desktop Pagination (hidden on mobile) */}
          <div className="absolute hidden md:flex right-8 top-8 lg:right-16 lg:top-12 items-center gap-3 text-[13px] font-medium tracking-widest text-gray-800 z-10">
            <button
              onClick={handlePrev}
              className="text-gray-400 hover:text-black transition-colors p-1"
            >
              <ChevronLeft className="h-[18px] w-[18px] stroke-[1.5]" />
            </button>
            <span className="text-black w-[40px] text-center">
              {currentIndex + 1} / {displayProducts.length}
            </span>
            <button
              onClick={handleNext}
              className="text-gray-400 hover:text-black transition-colors p-1"
            >
              <ChevronRight className="h-[18px] w-[18px] stroke-[1.5]" />
            </button>
          </div>

          <div className="max-w-[480px]">
            <AnimatePresence mode="wait">
              <m.div
                key={currentIndex}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
              >
                <m.div variants={itemVariants} className="mb-4">
                  <span className="text-[12px] font-bold tracking-widest text-gray-500 uppercase">
                    {product.category.name}
                  </span>
                </m.div>

                <m.h2
                  variants={itemVariants}
                  className="mb-3 md:mb-5 text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.15] font-serif text-[#092119]"
                >
                  {product.name}
                </m.h2>
                <m.p
                  variants={itemVariants}
                  className="mb-6 md:mb-9 text-[15px] leading-[1.5] text-[#333] md:text-[#0a2319]"
                >
                  {product.description}
                </m.p>

                {/* Buttons */}
                <m.div
                  variants={itemVariants}
                  className="flex flex-row gap-3 w-full"
                >
                  <button className="flex-1 flex h-[48px] items-center justify-center bg-[#092119] text-[11px] sm:text-[12px] font-bold tracking-wider text-white transition-colors hover:bg-black px-2 text-center leading-tight cursor-pointer">
                    SHOP NOW
                  </button>
                  <button className="flex-1 flex h-[48px] items-center justify-center border border-[#092119] text-[#092119] bg-transparent text-[11px] sm:text-[12px] font-bold tracking-wider transition-colors hover:bg-[#f4f4f4] px-2 text-center leading-tight cursor-pointer">
                    VIEW DETAILS
                  </button>
                </m.div>
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
