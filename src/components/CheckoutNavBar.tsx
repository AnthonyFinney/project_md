"use client";

import Link from "next/link";
import { Heart, User, ChevronLeft, ChevronRight, Truck } from "lucide-react";

export default function CheckoutNavBar() {
  return (
    <>
      <div className="w-full h-[108px]" />
      <nav className="fixed top-0 left-0 z-50 flex w-full flex-col shadow-sm">
        {/* Top Notification Bar */}
        <div className="flex items-center justify-center bg-[#f4f4f4] py-2.5 text-xs text-gray-700 border-b border-gray-200">
          <span className="flex items-center gap-2 font-medium tracking-wide">
            <Truck className="h-4 w-4" />
            Free ground shipping for Le Club Lacoste members or on orders over
            $75.
          </span>
        </div>

        {/* Main Nav */}
        <div className="flex h-[72px] items-center justify-between px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <svg
              width="40"
              height="20"
              viewBox="0 0 100 50"
              fill="currentColor"
              className="text-green-800"
            >
              <path d="M10 25 C 20 20, 30 20, 40 25 C 50 30, 60 30, 70 25 C 80 20, 90 20, 95 25 C 90 35, 80 40, 70 40 C 60 40, 50 35, 40 30 C 30 25, 20 25, 10 30 Z" />
              <circle cx="20" cy="23" r="2" fill="white" />
              <path
                d="M85 25 C 90 23, 95 23, 98 25"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M15 35 C 25 38, 35 38, 45 35"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </Link>

          {/* Right Icons */}
          <div className="flex items-center gap-5">
            <Link href="#" className="relative text-gray-900 hover:text-black">
              <Heart className="h-[24px] w-[24px] stroke-[1.2]" />
              <span className="absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white">
                0
              </span>
            </Link>
            <Link href="#" className="text-gray-900 hover:text-black">
              <User className="h-[24px] w-[24px] stroke-[1.2]" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
