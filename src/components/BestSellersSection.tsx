"use client";

import Image from 'next/image';
import { ChevronLeft, ChevronRight, Heart, Eye } from 'lucide-react';
import { m, Variants } from 'framer-motion';

const products = [
  {
    id: 1,
    name: "Men's Classic Fit L.12.12 LIGHT Piqué Polo",
    price: "$54.99",
    originalPrice: "$110.00",
    discount: "50% OFF",
    colors: ["bg-[#7a1818]", "bg-[#8aa7c3]", "bg-white", "bg-[#2b2b2b]"],
    extraColors: "+ 15",
    tags: "NEW IN | ULTRA LIGHT",
    image: "/trending_polos.png",
    isUnderlined: false
  },
  {
    id: 2,
    name: "Men's Classic Fit Original L.12.12 Polo",
    price: "$110.00",
    originalPrice: null,
    discount: null,
    colors: ["bg-[#1a1a1a]", "bg-[#e5d6e2]", "bg-[#f2efe9]", "bg-[#1f283c]"],
    extraColors: "+ 58",
    tags: "SELECT COLORS ON SALE",
    image: "/trending_polos.png",
    isUnderlined: false
  },
  {
    id: 3,
    name: "Men's Classic Fit Original L.12.12 Polo",
    price: "$65.99",
    originalPrice: "$110.00",
    discount: "40% OFF",
    colors: ["bg-[#849f6b]", "bg-[#a69cc0]", "bg-[#f2efe9]", "bg-[#1a1a1a]"],
    extraColors: "+ 58",
    tags: "",
    image: "/trending_polos.png",
    isUnderlined: false
  },
  {
    id: 4,
    name: "Metropole Bracelet",
    price: "$125.00",
    originalPrice: null,
    discount: null,
    colors: ["bg-[#c1a76c]", "bg-[#a1824a]"],
    extraColors: "",
    tags: "",
    image: "/hero_spring_summer.png",
    isUnderlined: true
  },
  {
    id: 5,
    name: "Men's Cotton Polo",
    price: "$35.99",
    originalPrice: "$60.00",
    discount: "40% OFF",
    colors: ["bg-[#a0c5e8]", "bg-[#1a1a1a]", "bg-white"],
    extraColors: "",
    tags: "FINAL SALE",
    image: "/trending_polos.png",
    isUnderlined: false
  }
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

export default function BestSellersSection() {
  return (
    <m.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
      className="w-full bg-white pt-10 pb-20 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Header */}
        <m.div variants={itemVariants} className="mb-6 flex items-end justify-between px-6 lg:px-12">
          <h2 className="text-[28px] md:text-[32px] font-serif tracking-tight text-[#0a2319]">
            Shop our Best Sellers
          </h2>
          <div className="flex gap-2">
            <button className="flex h-[38px] w-[38px] items-center justify-center border border-[#e5e5e5] text-gray-300">
              <ChevronLeft className="h-[18px] w-[18px] stroke-[1.5]" />
            </button>
            <button className="flex h-[38px] w-[38px] items-center justify-center border border-black text-black hover:bg-gray-50 transition-colors">
              <ChevronRight className="h-[18px] w-[18px] stroke-[1.5]" />
            </button>
          </div>
        </m.div>

        {/* Carousel */}
        <div className="flex w-full overflow-x-auto overflow-y-hidden pb-4 border-y border-[#e5e5e5] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {/* Left spacer for alignment with header */}
          <div className="shrink-0 w-6 lg:w-12" />
          
          {products.map((product, index) => (
            <m.div 
              key={product.id} 
              variants={itemVariants}
              className={`group relative flex shrink-0 w-[260px] md:w-[300px] lg:w-[310px] flex-col border-r border-[#e5e5e5] bg-white hover:shadow-md transition-shadow ${index === 0 ? 'border-l' : ''}`}
            >
              
              {/* Image Area */}
              <div className="relative aspect-[3/4] w-full bg-[#f4f4f4] cursor-pointer">
                <button className="absolute right-3 top-3 z-10 text-gray-400">
                  <Heart className="h-[18px] w-[18px] stroke-[1.5]" />
                </button>
                
                <div className="relative h-full w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top mix-blend-multiply" 
                  />
                </div>

                {product.discount && (
                  <div className="absolute bottom-3 left-3 z-10 bg-[#008a54] px-1.5 py-[2px] text-[10px] font-bold tracking-wider text-white">
                    {product.discount}
                  </div>
                )}
                
                <button className="absolute bottom-3 right-3 z-10 flex h-[28px] w-[28px] items-center justify-center bg-[#0a2319] text-white">
                  <Eye className="h-4 w-4 stroke-[1.5]" />
                </button>
              </div>

              {/* Info Area */}
              <div className="flex flex-col p-4 flex-1">
                <div className="mb-1.5 flex items-baseline gap-1.5">
                  <span className="text-[13px] font-bold text-[#0a2319]">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-[12px] text-gray-400 line-through">{product.originalPrice}</span>
                  )}
                </div>
                
                <h3 className={`mb-3 text-[13px] leading-tight text-[#0a2319] cursor-pointer ${product.isUnderlined ? 'underline underline-offset-4 decoration-1' : ''}`}>
                  {product.name}
                </h3>
                
                <div className="mt-auto">
                  <div className="mb-2 flex items-center gap-[4px]">
                    {product.colors.map((color, idx) => (
                      <div key={idx} className={`h-[10px] w-[10px] border border-gray-200 ${color}`} />
                    ))}
                    {product.extraColors && (
                      <span className="ml-1 text-[10px] text-gray-500">{product.extraColors}</span>
                    )}
                  </div>
                  
                  {product.tags && (
                    <div className="text-[9px] font-medium tracking-widest text-gray-600 uppercase mt-2">
                      {product.tags}
                    </div>
                  )}
                </div>
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

