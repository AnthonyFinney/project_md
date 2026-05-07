"use client";

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import FilterSidebar from '@/components/FilterSidebar';
import ProductCard from '@/components/ProductCard';

// Mock data for the category banner
const categories = [
  { name: 'NEW ARRIVALS', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop' },
  { name: "MEN'S NEW ARRIVALS", image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop', active: true },
  { name: "NEW MEN'S CLOTHING", image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop' },
  { name: "NEW MEN'S SHOES", image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=600&auto=format&fit=crop' },
  { name: "NEW MEN'S LEATHER GOODS", image: 'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?q=80&w=600&auto=format&fit=crop' },
  { name: "NEW MEN'S ACCESSORIES", image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600&auto=format&fit=crop' },
];

// Mock product data to match the layout
const products = [
  {
    id: 'p1',
    title: "Men's L-Spin Deluxe Leather Sneakers",
    price: 135.00,
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    badges: ["NEW"],
    colors: ["#fff", "#000", "#1e3a8a"]
  },
  {
    id: 'p2',
    title: "Men's Striped Cotton Polo",
    price: 110.00,
    imageUrl: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?q=80&w=800&auto=format&fit=crop",
    badges: ["NEW"],
    colors: ["#059669", "#b91c1c"]
  },
  {
    id: 'p3',
    title: "Men's Classic Fit Orange Polo",
    price: 110.00,
    imageUrl: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=800&auto=format&fit=crop",
    colors: ["#f97316", "#3b82f6", "#000"]
  },
  {
    id: 'p4',
    title: "Men's Navy Blue Long Sleeve Polo",
    price: 125.00,
    imageUrl: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=800&auto=format&fit=crop",
    colors: ["#1e3a8a", "#000", "#fff"]
  },
  {
    id: 'p5',
    title: "Men's Crew Neck Sweatshirt",
    price: 155.00,
    imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
    badges: ["ECO-RESPONSIBLE"],
    colors: ["#f3f4f6", "#000"]
  },
  {
    id: 'p6',
    title: "Men's Croco Slides",
    price: 45.00,
    imageUrl: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=800&auto=format&fit=crop",
    badges: ["BEST SELLER"],
    colors: ["#fff", "#000"]
  },
  {
    id: 'p7',
    title: "Men's Patterned Green Polo",
    price: 125.00,
    imageUrl: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800&auto=format&fit=crop",
    colors: ["#059669"]
  },
  {
    id: 'p8',
    title: "Men's Patterned White Polo",
    price: 125.00,
    imageUrl: "https://images.unsplash.com/photo-1618517351616-38fb9c52e0c6?q=80&w=800&auto=format&fit=crop",
    colors: ["#f3f4f6"]
  },
  {
    id: 'p9',
    title: "Men's Green Trunks",
    price: 35.00,
    imageUrl: "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?q=80&w=800&auto=format&fit=crop",
    colors: ["#059669", "#000", "#1e3a8a"]
  },
  {
    id: 'p10',
    title: "Men's White T-Shirt",
    price: 65.00,
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    colors: ["#fff", "#000", "#1e3a8a", "#f97316"]
  },
  {
    id: 'p11',
    title: "Men's Navy Striped Polo",
    price: 110.00,
    imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?q=80&w=800&auto=format&fit=crop",
    colors: ["#1e3a8a", "#fff"]
  },
  {
    id: 'p12',
    title: "Men's Grey Trunks",
    price: 35.00,
    imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6d4c74f9d?q=80&w=800&auto=format&fit=crop",
    colors: ["#9ca3af", "#000"]
  },
  {
    id: 'p13',
    title: "Men's Orange T-Shirt",
    price: 65.00,
    imageUrl: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
    colors: ["#f97316", "#fff", "#000"]
  },
  {
    id: 'p14',
    title: "Men's Lime Green Polo",
    price: 110.00,
    imageUrl: "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=800&auto=format&fit=crop",
    colors: ["#84cc16", "#fff", "#000"]
  },
  {
    id: 'p15',
    title: "Men's Navy Cap",
    price: 55.00,
    imageUrl: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    colors: ["#1e3a8a", "#000", "#fff"]
  },
  {
    id: 'p16',
    title: "Men's Yellow Cap",
    price: 55.00,
    imageUrl: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=800&auto=format&fit=crop",
    colors: ["#eab308", "#1e3a8a", "#fff"]
  },
  {
    id: 'p17',
    title: "Men's Green Crossbody Bag",
    price: 185.00,
    imageUrl: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    badges: ["NEW"],
    colors: ["#059669", "#000"]
  },
  {
    id: 'p18',
    title: "Men's Orange Sneakers",
    price: 145.00,
    imageUrl: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop",
    colors: ["#f97316", "#fff", "#000"]
  },
  {
    id: 'p19',
    title: "Men's Black Croco Slides",
    price: 45.00,
    imageUrl: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=800&auto=format&fit=crop",
    colors: ["#000", "#fff"]
  },
  {
    id: 'p20',
    title: "Men's Green L Cap",
    price: 65.00,
    imageUrl: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=800&auto=format&fit=crop",
    colors: ["#059669"]
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Category Header Section */}
      <div className="w-full bg-white overflow-hidden">
        <div className="flex w-full overflow-x-auto no-scrollbar">
          {categories.map((category) => (
            <Link 
              key={category.name} 
              href="#" 
              className={`relative flex-1 min-w-[200px] flex flex-col group border-b-4 ${category.active ? 'border-[#008a54]' : 'border-transparent hover:border-[#008a54]/50'} transition-colors duration-300`}
            >
              <div className="aspect-[3/4] md:aspect-[4/5] bg-gray-200 overflow-hidden relative">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-0 w-full px-2 text-center">
                  <span className="text-white text-[12px] md:text-[14px] font-bold tracking-wide uppercase drop-shadow-md">
                    {category.name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6">
        {/* Horizontal Sub-Category Links */}
        <div className="flex items-center gap-6 py-4 text-[14px] font-medium text-gray-800 border-b border-transparent">
          <Link href="/men" className="flex items-center gap-2 hover:text-black hover:underline underline-offset-4">
            <span className="text-[16px] leading-none mb-0.5">←</span> Men
          </Link>
          <Link href="#" className="hover:text-black hover:underline underline-offset-4">New In</Link>
          <Link href="#" className="hover:text-black hover:underline underline-offset-4">Clothing</Link>
          <Link href="#" className="hover:text-black hover:underline underline-offset-4">Shoes</Link>
          <Link href="#" className="hover:text-black hover:underline underline-offset-4">Leather Goods</Link>
          <Link href="#" className="hover:text-black hover:underline underline-offset-4">Accessories</Link>
        </div>

        {/* Page Title */}
        <div className="pt-4 pb-6">
          <h1 className="text-[28px] md:text-[36px] font-serif text-gray-900 leading-none">Men's New Arrivals</h1>
        </div>

        {/* Filter & Sort Bar */}
        <div className="flex items-center justify-between border-y border-gray-200 py-3 mb-8">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-[#092119] text-white px-5 py-2.5 text-[12px] font-bold tracking-wide hover:bg-black transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="21" x2="4" y2="14"></line>
                <line x1="4" y1="10" x2="4" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12" y2="3"></line>
                <line x1="20" y1="21" x2="20" y2="16"></line>
                <line x1="20" y1="12" x2="20" y2="3"></line>
                <line x1="1" y1="14" x2="7" y2="14"></line>
                <line x1="9" y1="8" x2="15" y2="8"></line>
                <line x1="17" y1="16" x2="23" y2="16"></line>
              </svg>
              HIDE FILTERS
            </button>
            <button className="border border-gray-300 px-4 py-2 text-[12px] text-gray-600 hover:border-black hover:text-black transition-colors uppercase">
              Color
            </button>
            <button className="border border-gray-300 px-4 py-2 text-[12px] text-gray-600 hover:border-black hover:text-black transition-colors uppercase">
              Product Type
            </button>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-[12px] text-gray-500">999 results</span>
            <div className="flex items-center gap-3">
              <button className="text-gray-400 hover:text-black">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              </button>
              <button className="text-black">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20"></rect></svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="hidden lg:block w-[260px] flex-shrink-0">
            <FilterSidebar />
          </div>

          {/* Main Grid */}
          <div className="flex-1 w-full lg:pl-8">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 auto-rows-max">
              {/* Row 1 */}
              <ProductCard {...products[0]} />
              <ProductCard {...products[1]} />
              <ProductCard {...products[2]} />
              <ProductCard {...products[3]} />
              
              {/* Row 2 - with large span image */}
              <div className="col-span-2 row-span-2 relative group overflow-hidden cursor-pointer bg-[#ececec]">
                <img 
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop" 
                  alt="Men's Tracksuit" 
                  className="w-full h-full object-cover object-center" 
                />
              </div>
              <ProductCard {...products[4]} />
              <ProductCard {...products[5]} />
              
              {/* Row 3 - completing beside the large image */}
              <ProductCard {...products[6]} />
              <ProductCard {...products[7]} />
              
              {/* Row 4 - with horizontal promo image */}
              <ProductCard {...products[8]} />
              <ProductCard {...products[9]} />
              <div className="col-span-2 relative group overflow-hidden cursor-pointer bg-[#ececec] flex flex-col justify-end p-8">
                <img 
                  src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1200&auto=format&fit=crop" 
                  alt="Tennis Collection" 
                  className="absolute inset-0 w-full h-full object-cover opacity-90" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="relative z-10 text-white">
                  <h3 className="text-[24px] font-serif mb-2">The Tennis Collection</h3>
                  <span className="text-[14px] underline underline-offset-4 font-medium hover:text-gray-200 transition-colors">Discover</span>
                </div>
              </div>
              
              {/* Row 5 */}
              <ProductCard {...products[10]} />
              <ProductCard {...products[11]} />
              <ProductCard {...products[12]} />
              <ProductCard {...products[13]} />
              
              {/* Row 6 */}
              <ProductCard {...products[14]} />
              <ProductCard {...products[15]} />
              <ProductCard {...products[16]} />
              <ProductCard {...products[17]} />
            </div>

            {/* Pagination / Load More */}
            <div className="mt-20 flex flex-col items-center justify-center border-t border-gray-200 pt-12">
              <p className="text-[14px] text-gray-500 mb-6">You've viewed 20 of 842 products</p>
              <div className="w-[300px] h-1 bg-gray-200 rounded-full overflow-hidden mb-8">
                <div className="h-full bg-black w-[10%]" />
              </div>
              <button className="px-12 py-3 border border-black text-black font-medium hover:bg-black hover:text-white transition-colors">
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer is rendered in layout.tsx */}
    </main>
  );
}
