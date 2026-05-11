"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Heart, Eye } from "lucide-react";
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

export interface ProductVariant {
  size: string;
  price: number;
  stock: number;
}

export interface Product {
  _id: {
    $oid: string;
  };
  name: string;
  category: {
    name: string;
  };
  image: string;
  variants: ProductVariant[];
}

export interface BestSellersSectionProps {
  /** Optional array of products to display. Defaults to products from products.json */
  products?: Product[];
}

export default function BestSellersSection({
  products = productsData as Product[],
}: BestSellersSectionProps) {
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
      const scrollAmount = 320; // approximate width of one item
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
      className="w-full pt-10 pb-20 overflow-hidden "
    >
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Header */}
        <m.div
          variants={itemVariants}
          className="mb-6 flex items-end justify-between px-6 lg:px-12"
        >
          <h2 className="text-[28px] md:text-[32px] font-serif tracking-tight text-[#0a2319]">
            Shop our Best Sellers
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="flex h-[38px] w-[38px] items-center justify-center border border-black text-black hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-[18px] w-[18px] stroke-[1.5]" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-[38px] w-[38px] items-center justify-center border border-black text-black hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-[18px] w-[18px] stroke-[1.5]" />
            </button>
          </div>
        </m.div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex w-full overflow-x-auto overflow-y-hidden pb-4 border-y border-[#e5e5e5] hide-scrollbar scroll-smooth"
        >
          {/* Left spacer for alignment with header */}
          <div className="shrink-0 w-6 lg:w-12" />

          {displayProducts.map((product, index) => (
            <m.div
              key={product._id.$oid}
              variants={itemVariants}
              className={`group relative flex shrink-0 w-[260px] md:w-[300px] lg:w-[310px] mx-1 flex-col border-r border-[#e5e5e5] hover:shadow-md transition-shadow ${index === 0 ? "border-l" : ""}`}
            >
              {/* Image Area */}
              <div className="relative aspect-[3/4] w-full bg-[#f4f4f4] cursor-pointer">
                <button className="absolute right-3 top-3 z-10 text-gray-400">
                  <Heart className="h-[18px] w-[18px] stroke-[1.5]" />
                </button>

                <Link href={`/products/${product._id.$oid}`}>
                  <div className="relative h-full w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top mix-blend-multiply"
                    />
                  </div>
                </Link>

                <button className="absolute bottom-3 right-3 z-10 flex h-[28px] w-[28px] items-center justify-center bg-[#0a2319] text-white">
                  <Eye className="h-4 w-4 stroke-[1.5]" />
                </button>
              </div>

              {/* Info Area */}
              <div className="flex flex-col p-4 flex-1 ">
                <div className="mb-1.5 flex items-baseline gap-1.5">
                  <span className="text-[13px] font-bold text-[#0a2319]">
                    ${(product.variants[0]?.price / 100).toFixed(2)}
                  </span>
                </div>

                <Link href={`/products/${product._id.$oid}`}>
                  <h3 className="mb-3 text-[13px] leading-tight text-[#0a2319] cursor-pointer hover:underline underline-offset-4 decoration-1">
                    {product.name}
                  </h3>
                </Link>

                <div className="mt-auto">
                  <div className="text-[9px] font-medium tracking-widest text-gray-600 uppercase mt-2">
                    {product.category.name}
                  </div>
                </div>
              </div>
            </m.div>
          ))}

          {/* Fill empty spaces if we have fewer than 4 products */}
          {displayProducts.length === 0 &&
            Array.from({ length: 4 }).map((_, index) => (
              <m.div
                key={`skeleton-${index}`}
                variants={itemVariants}
                className={`group relative flex shrink-0 w-[260px] md:w-[300px] lg:w-[310px] flex-col border-r border-[#e5e5e5] ${index === 0 ? "border-l" : ""}`}
              >
                <div className="relative aspect-[3/4] w-full bg-[#f4f4f4] animate-pulse" />
                <div className="flex flex-col p-4 flex-1 bg-white">
                  <div className="h-4 bg-[#f4f4f4] animate-pulse w-1/3 mb-2" />
                  <div className="h-4 bg-[#f4f4f4] animate-pulse w-3/4" />
                </div>
              </m.div>
            ))}

          {/* Right spacer for scrolling past the last item */}
          <div className="shrink-0 w-6 lg:w-12" />
        </div>
      </div>
    </m.section>
  );
}
