"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Search,
  CircleHelp,
  MapPin,
  Heart,
  User,
  ShoppingBag,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Truck,
  X,
  Package,
} from "lucide-react";

const subNavData: Record<
  string,
  { title: string; sidebarLinks: string[]; links: string[]; imgText: string }
> = {
  "New In": {
    title: "See All Men's New Arrivals",
    sidebarLinks: [
      "Discover The Collection",
      "Spring-Summer",
      "Essentials",
      "Online Exclusives",
    ],
    links: ["Clothing", "Shoes", "Leather Goods", "Accessories"],
    imgText: "New Spring-Summer Collection",
  },
  Polos: {
    title: "See All Polos",
    sidebarLinks: [
      "Polo Fit Guide",
      "Lacoste L.12.12",
      "Paris Polo",
      "Active Polo",
    ],
    links: ["Classic Fit", "Slim Fit", "Regular Fit", "Long Sleeve"],
    imgText: "The Polo Collection",
  },
  Clothing: {
    title: "See All Clothing",
    sidebarLinks: [
      "T-Shirt Fit Guide",
      "Trouser Fit Guide",
      "Tracksuits",
      "Swimwear",
    ],
    links: ["T-Shirts", "Sweatshirts", "Jackets & Coats", "Trousers & Shorts"],
    imgText: "Men's Clothing Essentials",
  },
  Shoes: {
    title: "See All Shoes",
    sidebarLinks: [
      "Shoe Size Guide",
      "L003 Neo",
      "L-Spin Deluxe",
      "Carnaby Evo",
    ],
    links: ["Sneakers", "Sliders", "Loafers", "Socks"],
    imgText: "Footwear Collection",
  },
  "Bags & Leather Goods": {
    title: "See All Leather Goods",
    sidebarLinks: [
      "The Chantaco Collection",
      "The Croco Crew",
      "Travel Bags",
      "Small Leather Goods",
    ],
    links: ["Backpacks", "Crossbody Bags", "Wallets", "Belts"],
    imgText: "Premium Leather Goods",
  },
  Accessories: {
    title: "See All Accessories",
    sidebarLinks: [
      "Gift Ideas",
      "Gift Cards",
      "Sunglasses Guide",
      "Watch Guide",
    ],
    links: ["Caps & Hats", "Watches", "Sunglasses", "Fragrances"],
    imgText: "Signature Accessories",
  },
  Sport: {
    title: "See All Sport",
    sidebarLinks: [
      "Novak Djokovic Collection",
      "Daniil Medvedev",
      "Olympic Heritage",
      "Golf Collection",
    ],
    links: ["Tennis", "Golf", "Activewear", "Sport Accessories"],
    imgText: "Lacoste Sport",
  },
};

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [openSubNav, setOpenSubNav] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  // Mobile specific state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedSubNav, setMobileExpandedSubNav] = useState<
    string | null
  >(null);

  const navRef = useRef<HTMLElement>(null);
  const userMenuTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleUserMenuEnter = () => {
    if (userMenuTimeout.current) clearTimeout(userMenuTimeout.current);
    setIsUserMenuOpen(true);
  };

  const handleUserMenuLeave = () => {
    userMenuTimeout.current = setTimeout(() => {
      setIsUserMenuOpen(false);
    }, 150);
  };

  // Handle outside clicks
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenSubNav(null);
        setIsSearchOpen(false);
        setIsUserMenuOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    const isMenuOpen =
      openSubNav !== null || isSearchOpen || isUserMenuOpen || isMobileMenuOpen;

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openSubNav, isSearchOpen, isUserMenuOpen, isMobileMenuOpen]);

  // Handle scroll direction for shrinking header
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      // 1. Check if we are on a mobile screen (Tailwind 'lg' is 1024px)
      if (window.innerWidth < 1024) {
        ticking = false;
        return; // Bail out early: don't run the scroll effect on mobile
      }

      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setIsScrolled(false);
      } else if (currentScrollY > lastScrollY + 15) {
        setIsScrolled(true);
      } else if (currentScrollY < lastScrollY - 15) {
        setIsScrolled(false);
      }
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Spacing block: 140px on mobile (Top Bar + Nav + Mobile Search), 108/160px on desktop */}
      <div
        className={`w-full transition-[height] duration-500 ease-in-out h-[140px] ${
          isScrolled && !isHovered ? "lg:h-[108px]" : "lg:h-[160px]"
        }`}
      />

      <nav
        ref={navRef}
        className="fixed top-0 left-0 z-50 flex w-full flex-col bg-white shadow-sm"
        style={{ overflowAnchor: "none" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Top Notification Bar */}
        <div className="flex h-[36px] items-center justify-between bg-[#fcfcfc] px-4 text-[13px] md:text-xs text-gray-800 border-b border-gray-100">
          <button className="p-1 hover:text-black">
            <ChevronLeft className="h-4 w-4 stroke-[1.5]" />
          </button>
          <span className="flex items-center gap-2 font-medium tracking-wide text-center">
            Free Shipping on orders over $50.
            <span className="underline underline-offset-4">Download Here</span>
          </span>
          <button className="p-1 hover:text-black">
            <ChevronRight className="h-4 w-4 stroke-[1.5]" />
          </button>
        </div>

        {/* Main Nav Container */}
        <div className="flex h-[56px] lg:h-[72px] items-center justify-between border-b lg:border-gray-100 px-4 md:px-6 relative">
          {/* Left: Logo & Desktop Links */}
          <div className="flex items-center lg:gap-8">
            <Link href="/" className="flex items-center mr-4">
              <svg
                width="40"
                height="20"
                viewBox="0 0 100 50"
                fill="currentColor"
                className="text-[#092119]"
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

            {/* Desktop Main Links */}
            <div className="hidden gap-7 lg:flex">
              <Link
                href="#"
                className="text-[15px] font-medium text-gray-900 hover:underline hover:underline-offset-8"
              >
                Men
              </Link>
              <Link
                href="#"
                className="text-[15px] font-medium text-gray-900 hover:underline hover:underline-offset-8"
              >
                Women
              </Link>
              <Link
                href="#"
                className="text-[15px] font-medium text-gray-900 hover:underline hover:underline-offset-8"
              >
                Kids
              </Link>
              <Link
                href="#"
                className="text-[15px] font-medium text-[#008a54] hover:underline hover:underline-offset-8"
              >
                Sale
              </Link>
              <Link
                href="#"
                className="text-[15px] font-medium text-gray-900 hover:underline hover:underline-offset-8"
              >
                Discover
              </Link>
            </div>
          </div>

          {/* Desktop Search Bar (Hidden on Mobile) */}
          <div
            className={`hidden lg:flex items-center transition-all duration-300 ${
              isSearchOpen
                ? "flex-1 border border-[#008a54] px-4 py-2.5 bg-white mx-8"
                : "w-[380px] border-b border-black pb-1.5 ml-8"
            }`}
            onClick={() => {
              setIsSearchOpen(true);
              setOpenSubNav(null);
            }}
          >
            <Search className="h-[22px] w-[22px] stroke-[1.5] text-gray-800" />
            <input
              type="text"
              placeholder="Find a product"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ml-3 w-full bg-transparent text-[15px] outline-none placeholder:text-gray-800"
            />
            {isSearchOpen && (
              <div className="flex items-center ml-auto gap-3">
                {searchQuery && (
                  <button
                    className="text-[13px] text-gray-500 hover:text-black"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSearchQuery("");
                    }}
                  >
                    Reset
                  </button>
                )}
                <button
                  className="flex h-5 w-5 items-center justify-center rounded-full bg-[#004751] text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsSearchOpen(false);
                    setSearchQuery("");
                  }}
                >
                  <X className="h-3 w-3 stroke-[3]" />
                </button>
              </div>
            )}
          </div>

          {/* Right Icons Row */}
          <div className="flex items-center gap-3 md:gap-5">
            {/* Search Icon (Desktop Only via Toggle) */}
            <button
              className="hidden lg:block text-gray-900 hover:text-black"
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
              }}
            >
              <Search className="h-[24px] w-[24px] stroke-[1.2]" />
            </button>

            {/* Help */}
            <Link href="#" className="text-gray-900 hover:text-black">
              <CircleHelp className="h-[20px] w-[20px] lg:h-[24px] lg:w-[24px] stroke-[1.2]" />
            </Link>

            {/* Map */}
            <Link href="#" className="text-gray-900 hover:text-black">
              <MapPin className="h-[20px] w-[20px] lg:h-[24px] lg:w-[24px] stroke-[1.2]" />
            </Link>

            {/* Heart */}
            <Link href="#" className="relative text-gray-900 hover:text-black">
              <Heart className="h-[20px] w-[20px] lg:h-[24px] lg:w-[24px] stroke-[1.2]" />
              <span className="absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#092119] text-[9px] font-bold text-white">
                0
              </span>
            </Link>

            {/* User (Desktop Hover & Mobile Icon) */}
            <div
              className="hidden lg:flex group h-full items-center relative px-2 -mx-2 cursor-pointer z-[80]"
              onMouseEnter={handleUserMenuEnter}
              onMouseLeave={handleUserMenuLeave}
            >
              <Link
                href="#"
                className="text-gray-900 hover:text-black peer relative"
              >
                <User className="h-[24px] w-[24px] stroke-[1.2]" />
              </Link>

              {/* User Dropdown Panel ... (Kept original logic) */}
              <div
                className={`fixed right-0 w-[580px] bg-white border-l border-gray-200 shadow-[-10px_0_30px_rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out cursor-default z-[60] overflow-y-auto ${
                  isScrolled && !isHovered
                    ? "top-[108px] h-[calc(100vh-108px)]"
                    : "top-[160px] h-[calc(100vh-160px)]"
                } ${
                  isUserMenuOpen
                    ? "opacity-100 translate-x-0 visible"
                    : "opacity-0 translate-x-8 invisible pointer-events-none"
                }`}
              >
                <div className="flex flex-col p-10 h-full">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-[24px] font-serif text-gray-900 flex items-center gap-3">
                      <User className="h-6 w-6 stroke-[1.2]" />
                      Sign in / Sign up
                    </h2>
                    <button
                      className="text-gray-400 hover:text-black transition-colors"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <X className="h-5 w-5 stroke-[1.5]" />
                    </button>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-[15px] font-medium text-gray-900 mb-2">
                        Already a member?
                      </h3>
                      <p className="text-[14px] text-gray-600 leading-relaxed pr-4">
                        Sign in for a personalized experience and access to all
                        your benefits and offers.
                      </p>
                    </div>
                    <button className="bg-[#092119] text-white py-3 px-8 font-bold text-[13px] tracking-wide hover:bg-black transition-colors w-max">
                      LOG IN
                    </button>
                    <p className="text-[14px] text-gray-600">
                      Not a customer yet?{" "}
                      <Link
                        href="#"
                        className="text-gray-900 underline underline-offset-4 decoration-1 hover:decoration-2 font-medium"
                      >
                        Create an account
                      </Link>
                    </p>
                  </div>

                  <div className="mt-10 pt-6 border-t border-gray-100">
                    <Link
                      href="#"
                      className="flex items-center gap-4 text-gray-900 hover:text-gray-600 transition-colors group/guest"
                    >
                      <Package className="h-[22px] w-[22px] stroke-[1.2]" />
                      <span className="text-[14px] font-medium group-hover/guest:underline underline-offset-4">
                        Looking for a guest checkout order?
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile User Icon */}
            <Link
              href="/account"
              className="lg:hidden relative text-gray-900 hover:text-black"
            >
              <User className="h-[20px] w-[20px] stroke-[1.2]" />
              <span className="absolute -right-1.5 -top-1.5 flex h-[14px] w-[14px] items-center justify-center rounded-full bg-[#092119] border border-white"></span>
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative text-gray-900 hover:text-black"
            >
              <ShoppingBag className="h-[20px] w-[20px] lg:h-[24px] lg:w-[24px] stroke-[1.2]" />
              <span className="absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#092119] text-[9px] font-bold text-white">
                0
              </span>
            </Link>

            {/* Mobile Hamburger Menu */}
            <button
              className="lg:hidden ml-1 text-gray-900 hover:text-black flex items-center justify-center h-[24px] w-[24px] mr-6"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-[24px] w-[24px] stroke-[1.5]" />
              ) : (
                // Custom 2-line menu icon to perfectly match the screenshot
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="3" y1="15" x2="21" y2="15"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Permanent Mobile Search Bar (Below Nav) */}
        <div className="lg:hidden w-full h-[48px] bg-white px-4 border-b border-gray-200 flex items-center">
          <Search className="h-[18px] w-[18px] text-gray-600 mr-3 stroke-[1.5]" />
          <input
            type="text"
            placeholder="Find a product"
            className="flex-1 outline-none text-[15px] bg-transparent text-gray-900 placeholder:text-[#333]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Mobile Menu Dropdown (Slides under the search bar) */}
        <div
          className={`lg:hidden absolute left-0 top-[140px] w-full bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out origin-top border-b ${
            isMobileMenuOpen
              ? "max-h-[calc(100vh-140px)] opacity-100 border-black"
              : "max-h-0 opacity-0 border-transparent pointer-events-none"
          }`}
        >
          <div className="flex flex-col w-full h-full max-h-[calc(100vh-140px)] overflow-y-auto overscroll-contain">
            {/* Mobile Main Links */}
            <div className="flex flex-col px-6 py-4 border-b border-gray-100">
              <Link
                href="#"
                className="py-3 text-[16px] font-medium text-gray-900"
              >
                Men
              </Link>
              <Link
                href="#"
                className="py-3 text-[16px] font-medium text-gray-900"
              >
                Women
              </Link>
              <Link
                href="#"
                className="py-3 text-[16px] font-medium text-gray-900"
              >
                Kids
              </Link>
              <Link
                href="#"
                className="py-3 text-[16px] font-medium text-[#008a54]"
              >
                Sale
              </Link>
            </div>

            {/* Mobile SubNav Accordions */}
            <div className="flex flex-col px-6 py-2">
              {Object.entries(subNavData).map(([name, data]) => (
                <div
                  key={name}
                  className="border-b border-gray-100 last:border-0"
                >
                  <button
                    className="flex w-full items-center justify-between py-4 text-[15px] font-medium text-gray-900"
                    onClick={() =>
                      setMobileExpandedSubNav(
                        mobileExpandedSubNav === name ? null : name,
                      )
                    }
                  >
                    {name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${mobileExpandedSubNav === name ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${mobileExpandedSubNav === name ? "max-h-[500px] mb-4" : "max-h-0"}`}
                  >
                    <div className="flex flex-col pl-4 gap-3 border-l-2 border-[#008a54]">
                      <Link
                        href="#"
                        className="text-[14px] font-semibold text-gray-900 mt-2"
                      >
                        {data.title}
                      </Link>
                      {data.links.map((link) => (
                        <Link
                          key={link}
                          href="#"
                          className="text-[14px] text-gray-600"
                        >
                          {link}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Footer Links */}
            <div className="bg-gray-50 p-6 flex flex-col gap-5 border-t border-gray-100 pb-12">
              <Link
                href="#"
                className="flex items-center gap-3 text-[14px] font-medium text-gray-900"
              >
                <CircleHelp className="h-5 w-5 stroke-[1.5]" /> Help & Support
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 text-[14px] font-medium text-gray-900"
              >
                <MapPin className="h-5 w-5 stroke-[1.5]" /> Store Locator
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Sub Nav */}
        <div
          className={`hidden lg:flex w-full items-center justify-center gap-9 bg-white transition-all duration-500 ease-in-out overflow-hidden ${
            isScrolled && !isHovered
              ? "h-0 opacity-0 border-transparent"
              : "h-[52px] border-b border-black opacity-100"
          }`}
        >
          {Object.keys(subNavData).map((name) => (
            <button
              key={name}
              onClick={() => {
                setOpenSubNav(openSubNav === name ? null : name);
                setIsSearchOpen(false);
              }}
              className={`flex items-center gap-1.5 text-[14px] font-medium tracking-tight ${openSubNav === name ? "text-black" : "text-gray-500"} hover:text-black transition-colors outline-none`}
            >
              {name}
              <ChevronDown
                className={`h-[14px] w-[14px] stroke-[2] transition-transform duration-300 ${openSubNav === name ? "rotate-180" : ""}`}
              />
            </button>
          ))}
          <Link
            href="/sale"
            className="text-[14px] font-medium tracking-tight text-[#008a54] hover:text-black transition-colors"
          >
            Sale
          </Link>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        <div
          className={`hidden lg:block absolute left-0 top-[160px] w-full bg-white shadow-lg overflow-hidden transition-all duration-500 ease-in-out origin-top border-b ${
            openSubNav
              ? "max-h-[1200px] opacity-100 border-black"
              : "max-h-0 opacity-0 border-transparent pointer-events-none"
          } ${isScrolled && !isHovered ? "lg:top-[108px]" : "lg:top-[160px]"}`}
        >
          <div className="flex w-full h-[380px]">
            {/* Column 1 */}
            <div className="w-[26%] border-r border-black">
              <div className="pt-8 pb-6 border-b border-black">
                <Link
                  href="/products"
                  onClick={() => setOpenSubNav(null)}
                  className="pl-10 text-[14px] text-gray-900 hover:text-gray-600 transition-colors"
                >
                  {openSubNav && subNavData[openSubNav]?.title}
                </Link>
              </div>
              <div className="pt-6 pl-10 flex flex-col gap-4">
                {openSubNav &&
                  subNavData[openSubNav]?.sidebarLinks.map((link) => (
                    <Link
                      key={link}
                      href="/products"
                      onClick={() => setOpenSubNav(null)}
                      className="text-[14px] text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link}
                    </Link>
                  ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="w-[20%] pt-8 pl-10 flex flex-col gap-4">
              {openSubNav &&
                subNavData[openSubNav]?.links.map((link) => (
                  <Link
                    key={link}
                    href="/products"
                    onClick={() => setOpenSubNav(null)}
                    className="text-[14px] text-[#004751] hover:underline hover:underline-offset-4"
                  >
                    {link}
                  </Link>
                ))}
            </div>

            {/* Column 3 */}
            <div className="flex-1 flex flex-col">
              <div className="w-full flex-1 overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop"
                  alt="Collection"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="h-[70px] flex items-center justify-start ml-10">
                <p className="text-[14px] text-[#004751]">
                  {openSubNav && subNavData[openSubNav]?.imgText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
