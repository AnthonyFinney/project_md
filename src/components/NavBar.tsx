"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, CircleHelp, MapPin, Heart, User, ShoppingBag, ChevronDown, ChevronLeft, ChevronRight, Truck, X, Package } from 'lucide-react';

const subNavData: Record<string, { title: string, sidebarLinks: string[], links: string[], imgText: string }> = {
  "New In": {
    title: "See All Men's New Arrivals",
    sidebarLinks: ["Discover The Collection", "Spring-Summer", "Essentials", "Online Exclusives"],
    links: ["Clothing", "Shoes", "Leather Goods", "Accessories"],
    imgText: "New Spring-Summer Collection"
  },
  "Polos": {
    title: "See All Polos",
    sidebarLinks: ["Polo Fit Guide", "Lacoste L.12.12", "Paris Polo", "Active Polo"],
    links: ["Classic Fit", "Slim Fit", "Regular Fit", "Long Sleeve"],
    imgText: "The Polo Collection"
  },
  "Clothing": {
    title: "See All Clothing",
    sidebarLinks: ["T-Shirt Fit Guide", "Trouser Fit Guide", "Tracksuits", "Swimwear"],
    links: ["T-Shirts", "Sweatshirts", "Jackets & Coats", "Trousers & Shorts"],
    imgText: "Men's Clothing Essentials"
  },
  "Shoes": {
    title: "See All Shoes",
    sidebarLinks: ["Shoe Size Guide", "L003 Neo", "L-Spin Deluxe", "Carnaby Evo"],
    links: ["Sneakers", "Sliders", "Loafers", "Socks"],
    imgText: "Footwear Collection"
  },
  "Bags & Leather Goods": {
    title: "See All Leather Goods",
    sidebarLinks: ["The Chantaco Collection", "The Croco Crew", "Travel Bags", "Small Leather Goods"],
    links: ["Backpacks", "Crossbody Bags", "Wallets", "Belts"],
    imgText: "Premium Leather Goods"
  },
  "Accessories": {
    title: "See All Accessories",
    sidebarLinks: ["Gift Ideas", "Gift Cards", "Sunglasses Guide", "Watch Guide"],
    links: ["Caps & Hats", "Watches", "Sunglasses", "Fragrances"],
    imgText: "Signature Accessories"
  },
  "Sport": {
    title: "See All Sport",
    sidebarLinks: ["Novak Djokovic Collection", "Daniil Medvedev", "Olympic Heritage", "Golf Collection"],
    links: ["Tennis", "Golf", "Activewear", "Sport Accessories"],
    imgText: "Lacoste Sport"
  }
};

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [openSubNav, setOpenSubNav] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenSubNav(null);
        setIsSearchOpen(false);
        setIsUserMenuOpen(false);
      }
    };

    const isMenuOpen = openSubNav !== null || isSearchOpen || isUserMenuOpen;

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Calculate scrollbar width to prevent layout shift glitch
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      if (navRef.current) {
        navRef.current.style.paddingRight = `${scrollbarWidth}px`;
      }
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.paddingRight = '';
      if (navRef.current) {
        navRef.current.style.paddingRight = '';
      }
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.paddingRight = '';
      if (navRef.current) {
        navRef.current.style.paddingRight = '';
      }
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [openSubNav, isSearchOpen, isUserMenuOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <div 
      className={`w-full transition-[height] duration-500 ease-in-out ${
        (isScrolled && !isHovered) ? 'h-[108px]' : 'h-[108px] lg:h-[160px]'
      }`} 
    />
    <nav 
      ref={navRef}
      className="fixed top-0 left-0 z-50 flex w-full flex-col bg-white shadow-sm" 
      style={{ overflowAnchor: 'none' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
        <div 
          className={`flex items-center transition-all duration-300 ${
            isSearchOpen 
              ? 'flex-1 border border-[#008a54] px-4 py-2.5 bg-white mx-8' 
              : 'w-[380px] border-b border-black pb-1.5 ml-8'
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
                  className="text-[13px] text-gray-500 hover:text-black transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSearchQuery("");
                  }}
                >
                  Reset
                </button>
              )}
              <button 
                className="flex h-5 w-5 items-center justify-center rounded-full bg-[#004751] text-white hover:bg-black transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsSearchOpen(false);
                  setSearchQuery("");
                }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <Link href="#" className="text-gray-900 hover:text-black"><CircleHelp className="h-[24px] w-[24px] stroke-[1.2]" /></Link>
          <Link href="#" className="text-gray-900 hover:text-black"><MapPin className="h-[24px] w-[24px] stroke-[1.2]" /></Link>
          <Link href="#" className="relative text-gray-900 hover:text-black">
            <Heart className="h-[24px] w-[24px] stroke-[1.2]" />
            <span className="absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white">0</span>
          </Link>
          <div 
            className="group flex h-full items-center relative px-2 -mx-2 cursor-pointer z-[80]"
            onMouseEnter={handleUserMenuEnter}
            onMouseLeave={handleUserMenuLeave}
          >
            <Link href="#" className="text-gray-900 hover:text-black peer">
              <User className="h-[24px] w-[24px] stroke-[1.2]" />
            </Link>
            
            {/* Tooltip */}
            {!isUserMenuOpen && (
              <div className="absolute top-[100%] right-0 mt-3 bg-[#111] text-white text-[11px] font-bold tracking-wide px-3 py-1.5 opacity-0 peer-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-[60]">
                Go to my account
              </div>
            )}

            {/* Invisible hover bridge to maintain hover state across the gap */}
            {isUserMenuOpen && (
              <div className={`absolute right-[-10px] top-[100%] w-[100px] bg-transparent z-[70] ${
                (isScrolled && !isHovered) ? 'h-0' : 'h-[52px]'
              }`} />
            )}
            
            {/* User Dropdown Panel */}
            <div 
              className={`fixed right-0 w-[580px] bg-white border-l border-gray-200 shadow-[-10px_0_30px_rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out cursor-default z-[60] overflow-y-auto ${
                (isScrolled && !isHovered) ? 'top-[108px] h-[calc(100vh-108px)]' : 'top-[170px] h-[calc(100vh-160px)]'
              } ${
                isUserMenuOpen ? 'opacity-100 translate-x-0 visible' : 'opacity-0 translate-x-8 invisible pointer-events-none'
              }`}
            >
              <div className="flex flex-col p-10 h-full">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-[24px] font-serif text-gray-900 flex items-center gap-3">
                    <User className="h-6 w-6 stroke-[1.2]" />
                    Sign in / Sign up
                  </h2>
                  <button className="text-gray-400 hover:text-black transition-colors" onClick={() => setIsUserMenuOpen(false)}>
                    <X className="h-5 w-5 stroke-[1.5]" />
                  </button>
                </div>
                
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-[15px] font-medium text-gray-900 mb-2">Already a member?</h3>
                    <p className="text-[14px] text-gray-600 leading-relaxed pr-4">
                      Sign in for a personalized experience and access to all your benefits and offers.
                    </p>
                  </div>
                  <button className="bg-[#092119] text-white py-3 px-8 font-bold text-[13px] tracking-wide hover:bg-black transition-colors w-max">
                    LOG IN
                  </button>
                  <p className="text-[14px] text-gray-600">
                    Not a customer yet? <Link href="#" className="text-gray-900 underline underline-offset-4 decoration-1 hover:decoration-2 font-medium">Create an account</Link>
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-100">
                  <Link href="#" className="flex items-center gap-4 text-gray-900 hover:text-gray-600 transition-colors group/guest">
                    <Package className="h-[22px] w-[22px] stroke-[1.2]" />
                    <span className="text-[14px] font-medium group-hover/guest:underline underline-offset-4">Looking for a guest checkout order?</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link href="/cart" className="relative text-gray-900 hover:text-black">
            <ShoppingBag className="h-[24px] w-[24px] stroke-[1.2]" />
            <span className="absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white">0</span>
          </Link>
        </div>
      </div>

      {/* Sub Nav */}
      <div 
        className={`hidden w-full items-center justify-center gap-9 bg-white lg:flex transition-all duration-500 ease-in-out overflow-hidden ${
          (isScrolled && !isHovered) ? 'h-0 opacity-0 border-transparent' : 'h-[52px] border-b border-black opacity-100'
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
          item.name !== "Sale" ? (
            <button 
              key={item.name} 
              onClick={() => {
                setOpenSubNav(openSubNav === item.name ? null : item.name);
                setIsSearchOpen(false);
              }}
              className={`flex items-center gap-1.5 text-[14px] font-medium tracking-tight ${openSubNav === item.name ? 'text-black' : (item.isGreen ? 'text-[#008a54]' : 'text-gray-500')} hover:text-black transition-colors outline-none`}
            >
              {item.name}
              <ChevronDown className={`h-[14px] w-[14px] stroke-[2] transition-transform duration-300 ${openSubNav === item.name ? 'rotate-180' : ''}`} />
            </button>
          ) : (
            <Link 
              key={item.name} 
              href="/products" 
              className={`flex items-center gap-1.5 text-[14px] font-medium tracking-tight ${item.isGreen ? 'text-[#008a54]' : 'text-gray-500'} hover:text-black transition-colors`}
            >
              {item.name}
            </Link>
          )
        ))}
      </div>

      {/* Mega Menu Dropdown */}
      <div 
        className={`absolute left-0 top-full w-full bg-white shadow-lg overflow-hidden transition-all duration-500 ease-in-out origin-top border-b ${
          (openSubNav || isSearchOpen) ? 'max-h-[1200px] opacity-100 border-black' : 'max-h-0 opacity-0 border-transparent pointer-events-none'
        }`}
      >
        {isSearchOpen ? (
          <div className="w-full h-[calc(100vh-124px)] min-h-[500px] overflow-y-auto bg-white pb-32 overscroll-contain">
            {searchQuery.length > 0 ? (
              <div className="px-10 py-10 w-full max-w-[1400px] mx-auto">
                {/* Search Results Header */}
                <div className="mb-8">
                  <h2 className="text-[24px] font-serif text-gray-900 mb-6">2 products found for "{searchQuery}"</h2>
                  
                  {/* Filter Bar */}
                  <div className="flex justify-between items-center pb-4">
                    <div className="flex gap-8">
                      <button className="flex items-center gap-2 text-[14px] text-gray-900 hover:text-gray-600">Category <ChevronDown className="h-4 w-4 stroke-[1.5]" /></button>
                      <button className="flex items-center gap-2 text-[14px] text-gray-900 hover:text-gray-600">Universe <ChevronDown className="h-4 w-4 stroke-[1.5]" /></button>
                      <button className="flex items-center gap-2 text-[14px] text-gray-900 hover:text-gray-600">Sizes <ChevronDown className="h-4 w-4 stroke-[1.5]" /></button>
                    </div>
                    <div>
                      <button className="text-[14px] text-gray-900 hover:text-gray-600">Sort By</button>
                    </div>
                  </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-4 gap-6">
                  {/* Product 1 */}
                  <div className="flex flex-col group cursor-pointer">
                    <div className="bg-[#f4f4f4] aspect-[3/4] mb-4 overflow-hidden relative">
                      <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2000&auto=format&fit=crop" alt="Skirt" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <p className="text-[14px] text-gray-900 mb-1.5 leading-tight">Women's <span className="bg-[#004751] text-white px-[1px]">As</span>ymmetric Pleated Midi Skirt</p>
                    <div className="flex items-center gap-2 text-[14px]">
                      <span className="text-[#008a54] font-medium">$96.99</span>
                      <span className="text-gray-400 line-through text-[13px]">$195.00</span>
                      <span className="bg-[#008a54] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm tracking-wide">50% OFF</span>
                    </div>
                  </div>
                  
                  {/* Product 2 */}
                  <div className="flex flex-col group cursor-pointer">
                    <div className="bg-[#f4f4f4] aspect-[3/4] mb-4 overflow-hidden relative">
                      <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2000&auto=format&fit=crop" alt="Dress" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <p className="text-[14px] text-gray-900 mb-1.5 leading-tight">Runway <span className="bg-[#004751] text-white px-[1px]">As</span>ymmetric Pleated Dress</p>
                    <p className="text-[14px] text-gray-900 font-medium">$560.00</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex w-full h-full min-h-[400px]">
                {/* Search Layout Column 1 */}
                <div className="w-[22%] border-r border-black pt-10 pl-10 pr-6 h-full">
                  <h3 className="text-[20px] text-gray-900 font-serif mb-6">Top searches</h3>
                  <div className="flex flex-col gap-4">
                    {['mens', 'polo', 'shoes', 'tennis', 'bracelet'].map(item => (
                      <Link key={item} href="/products" onClick={() => setIsSearchOpen(false)} className="text-[14px] text-gray-800 underline underline-offset-4 decoration-1 hover:text-black">
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Search Layout Column 2 (Images) */}
                <div className="flex-1 flex w-full h-full">
                  <div className="w-1/3 flex flex-col border-r border-gray-200 h-full">
                    <div className="h-[310px] w-full overflow-hidden bg-[#092119]">
                      <img src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2000&auto=format&fit=crop" alt="Tennis" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="h-[90px] p-6 pt-4">
                      <p className="text-[17px] text-gray-900 font-serif leading-snug">Tennis Collection at the Mutua Madrid Open</p>
                    </div>
                  </div>
                  <div className="w-1/3 flex flex-col border-r border-gray-200 h-full">
                    <div className="h-[310px] w-full overflow-hidden bg-gray-100">
                      <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop" alt="Spring" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="h-[90px] p-6 pt-4">
                      <p className="text-[17px] text-gray-900 font-serif leading-snug">New Spring-Summer Collection</p>
                    </div>
                  </div>
                  <div className="w-1/3 flex flex-col h-full">
                    <div className="h-[310px] w-full overflow-hidden bg-[#1e4a38]">
                      <img src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" alt="Sale" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="h-[90px] p-6 pt-4">
                      <p className="text-[17px] text-gray-900 font-serif leading-snug">Shop Sale</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex w-full h-[380px]">
            {/* Column 1 */}
            <div className="w-[26%] border-r border-black">
              <div className="pt-8 pb-6 border-b border-black">
                <Link href="/products" onClick={() => setOpenSubNav(null)} className="pl-10 text-[14px] text-gray-900 hover:text-gray-600 transition-colors">
                  {openSubNav && subNavData[openSubNav]?.title}
                </Link>
              </div>
              <div className="pt-6 pl-10 flex flex-col gap-4">
                {openSubNav && subNavData[openSubNav]?.sidebarLinks.map((link) => (
                  <Link key={link} href="/products" onClick={() => setOpenSubNav(null)} className="text-[14px] text-gray-600 hover:text-gray-900 transition-colors">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Column 2 */}
            <div className="w-[20%] pt-8 pl-10 flex flex-col gap-4">
              {openSubNav && subNavData[openSubNav]?.links.map((link) => (
                <Link key={link} href="/products" onClick={() => setOpenSubNav(null)} className="text-[14px] text-[#004751] hover:underline hover:underline-offset-4">
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
                <p className="text-[14px] text-[#004751]">{openSubNav && subNavData[openSubNav]?.imgText}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
}
