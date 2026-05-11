"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { m, Variants } from "framer-motion";
import productsData from "../../products.json";

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

export interface Product {
  _id: {
    $oid: string;
  };
  name: string;
  image: string;
}

export interface TrendingSectionProps {
  /** Optional array of products to display. Defaults to products from products.json */
  products?: Product[];
}

export default function TrendingSection({
  products = productsData as Product[],
}: TrendingSectionProps) {
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Shuffle the products on mount so each instance of the component
    // shows a different random order. We do this in useEffect to avoid
    // hydration mismatches between server and client renders.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDisplayProducts(
      [...products].sort(() => 0.5 - Math.random()).slice(0, 8),
    );
  }, [products]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320; // approximate width of one item + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <m.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
      className="mx-auto w-full max-w-[1440px] px-6 py-20 overflow-hidden"
    >
      <m.div
        variants={itemVariants}
        className="mb-8 flex items-end justify-between"
      >
        <h2 className="text-[32px] font-serif tracking-tight text-[#0a2319]">
          Now Trending
        </h2>
        <div className="flex gap-[6px]">
          <button
            onClick={() => scroll("left")}
            className="flex h-10 w-10 items-center justify-center border border-black text-black hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="h-[18px] w-[18px] stroke-[1.5]" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex h-10 w-10 items-center justify-center border border-black text-black hover:bg-gray-50 transition-colors"
          >
            <ArrowRight className="h-[18px] w-[18px] stroke-[1.5]" />
          </button>
        </div>
      </m.div>

      <div ref={scrollRef} className="flex w-full gap-5 overflow-x-auto overflow-y-hidden pb-8 hide-scrollbar scroll-smooth">
        {displayProducts.map((product, index) => (
          <m.div
            key={index}
            variants={itemVariants}
            className="group flex min-w-[300px] flex-1 flex-col"
          >
            <Link
              href={`/products/${product._id.$oid}`}
              className="flex h-full w-full flex-col"
            >
              <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden bg-[#ebebeb]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top"
                />
              </div>
              <span className="text-[15px] font-medium text-[#0a2319] underline decoration-1 underline-offset-[6px] hover:decoration-2">
                {product.name}
              </span>
            </Link>
          </m.div>
        ))}
        {/* Fill empty spaces if we have fewer than 4 products */}
        {displayProducts.length === 0 &&
          Array.from({ length: 4 }).map((_, index) => (
            <m.div
              key={`skeleton-${index}`}
              variants={itemVariants}
              className="group flex min-w-[300px] flex-1 flex-col"
            >
              <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden bg-[#ebebeb] animate-pulse rounded-sm" />
              <div className="h-4 bg-[#ebebeb] animate-pulse w-3/4 rounded-sm" />
            </m.div>
          ))}
      </div>
    </m.section>
  );
}
