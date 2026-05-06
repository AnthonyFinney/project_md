"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, CircleHelp, MapPin, Heart, User, ShoppingBag, ChevronDown, ChevronLeft, ChevronRight, Truck } from 'lucide-react';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero-section');
      const baseThreshold = hero ? hero.offsetHeight : 600;
      
      setIsScrolled((prev) => {
        // Hysteresis: prevents the layout shift from causing a loop.
        if (prev) {
          // If already shrunk, wait until scrolling back up significantly before expanding
          return window.scrollY > baseThreshold - 100;
        } else {
          // If expanded, wait until Hero is fully out of view to shrink
          return window.scrollY > baseThreshold;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 flex w-full flex-col bg-white shadow-sm">
      {/* Top Notification Bar */}
      <div className="flex items-center justify-between bg-[#f4f4f4] px-4 py-2.5 text-xs text-gray-700">
        <button className="p-1 hover:text-black"><ChevronLeft className="h-4 w-4" /></button>
        <span className="flex items-center gap-2 font-medium tracking-wide">
          <Truck className="h-4 w-4" />
          Free ground shipping for Le Club Lacoste members or on orders over $75.
        </span>
        <button className="p-1 hover:text-black"><ChevronRight className="h-4 w-4" /></button>
      </div>

      {/* Main Nav */}
      <div className="flex h-[72px] items-center justify-between border-b border-gray-100 px-6">
        {/* Left Links */}
        <div className="flex items-center gap-8">
          {/* Logo Placeholder */}
          <Link href="/" className="flex items-center mr-4">
            <svg width="40" height="20" viewBox="0 0 100 50" fill="currentColor" className="text-green-800">
              <path d="M10 25 C 20 20, 30 20, 40 25 C 50 30, 60 30, 70 25 C 80 20, 90 20, 95 25 C 90 35, 80 40, 70 40 C 60 40, 50 35, 40 30 C 30 25, 20 25, 10 30 Z" />
              <circle cx="20" cy="23" r="2" fill="white" />
              <path d="M85 25 C 90 23, 95 23, 98 25" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M15 35 C 25 38, 35 38, 45 35" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </Link>
          <div className="hidden gap-7 lg:flex">
            <Link href="#" className="text-[15px] font-medium text-gray-900 hover:underline hover:underline-offset-8">Men</Link>
            <Link href="#" className="text-[15px] font-medium text-gray-900 hover:underline hover:underline-offset-8">Women</Link>
            <Link href="#" className="text-[15px] font-medium text-gray-900 hover:underline hover:underline-offset-8">Kids</Link>
            <Link href="#" className="text-[15px] font-medium text-[#008a54] hover:underline hover:underline-offset-8">Sale</Link>
            <Link href="#" className="text-[15px] font-medium text-gray-900 hover:underline hover:underline-offset-8">Discover</Link>
          </div>
        </div>

        {/* Search */}
        <div className="flex w-[380px] items-center border-b border-black pb-1.5 ml-8">
          <Search className="h-[22px] w-[22px] stroke-[1.5] text-gray-800" />
          <input 
            type="text" 
            placeholder="Find a product" 
            className="ml-3 w-full bg-transparent text-[15px] outline-none placeholder:text-gray-800"
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <Link href="#" className="text-gray-900 hover:text-black"><CircleHelp className="h-[24px] w-[24px] stroke-[1.2]" /></Link>
          <Link href="#" className="text-gray-900 hover:text-black"><MapPin className="h-[24px] w-[24px] stroke-[1.2]" /></Link>
          <Link href="#" className="relative text-gray-900 hover:text-black">
            <Heart className="h-[24px] w-[24px] stroke-[1.2]" />
            <span className="absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white">0</span>
          </Link>
          <Link href="#" className="text-gray-900 hover:text-black"><User className="h-[24px] w-[24px] stroke-[1.2]" /></Link>
          <Link href="#" className="relative text-gray-900 hover:text-black">
            <ShoppingBag className="h-[24px] w-[24px] stroke-[1.2]" />
            <span className="absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white">0</span>
          </Link>
        </div>
      </div>

      {/* Sub Nav */}
      <div 
        className={`hidden w-full items-center justify-center gap-9 bg-white lg:flex transition-all duration-500 ease-in-out overflow-hidden ${
          isScrolled ? 'h-0 opacity-0 border-transparent' : 'h-[52px] border-b border-gray-100 opacity-100'
        }`}
      >
        {[
          { name: "New In" },
          { name: "Polos" },
          { name: "Clothing" },
          { name: "Shoes" },
          { name: "Bags & Leather Goods" },
          { name: "Accessories" },
          { name: "Sport" },
          { name: "Sale", isGreen: true }
        ].map((item) => (
          <Link 
            key={item.name} 
            href="#" 
            className={`flex items-center gap-1.5 text-[14px] font-medium tracking-tight ${item.isGreen ? 'text-[#008a54]' : 'text-gray-500'} hover:text-black transition-colors`}
          >
            {item.name}
            {item.name !== "New In" && item.name !== "Sale" && (
              <ChevronDown className="h-[14px] w-[14px] stroke-[2]" />
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}
