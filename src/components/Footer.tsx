import Link from 'next/link';
import { Headphones, RefreshCw, CreditCard, Truck, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a2319] text-white">
      
      {/* Top Banner: App Download */}
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between py-12 border-b border-white/10">
          <div className="flex items-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center bg-white p-1">
              <div className="flex h-full w-full items-center justify-center border border-black">
                <span className="text-[8px] font-bold text-black">QR CODE</span>
              </div>
            </div>
            <div>
              <h3 className="mb-1 text-2xl font-serif">Discover the new Lacoste app</h3>
              <p className="text-sm text-gray-300">Enjoy 15% off your first full-price purchase in the app with code APP15</p>
            </div>
          </div>
          <div className="mt-6 flex gap-4 md:mt-0">
            <div className="flex h-10 w-[140px] cursor-pointer items-center justify-center rounded-md border border-white/30 bg-black text-xs font-semibold hover:bg-gray-900">
              Download on the <br/> App Store
            </div>
            <div className="flex h-10 w-[140px] cursor-pointer items-center justify-center rounded-md border border-white/30 bg-black text-xs font-semibold hover:bg-gray-900">
              GET IT ON <br/> Google Play
            </div>
          </div>
        </div>
      </div>

      {/* Services Row */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex w-full max-w-[1440px] flex-wrap justify-between gap-8 px-6 py-12 lg:px-12 md:flex-nowrap">
          <div className="flex w-1/2 flex-col items-center gap-3 md:w-1/4">
            <Headphones className="h-6 w-6 stroke-[1.5]" />
            <span className="text-[13px] font-medium">Customer Service</span>
          </div>
          <div className="flex w-1/2 flex-col items-center gap-3 md:w-1/4">
            <RefreshCw className="h-6 w-6 stroke-[1.5]" />
            <span className="text-[13px] font-medium">Free Returns</span>
          </div>
          <div className="flex w-1/2 flex-col items-center gap-3 md:w-1/4">
            <CreditCard className="h-6 w-6 stroke-[1.5]" />
            <span className="text-[13px] font-medium">Safe & Secure Payment</span>
          </div>
          <div className="flex w-1/2 flex-col items-center gap-3 md:w-1/4">
            <Truck className="h-6 w-6 stroke-[1.5]" />
            <span className="text-[13px] font-medium">Free Shipping for Members</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Newsletter */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col lg:flex-row">
          
          {/* Newsletter Column */}
          <div className="w-full border-b border-white/10 p-8 lg:w-[28%] lg:border-b-0 lg:border-r lg:p-12">
            <div className="mb-10 flex items-center gap-4">
              <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border border-white text-center font-serif text-[10px] leading-tight">
                LE CLUB<br/>LACOSTE
              </div>
              <p className="text-[13px] leading-relaxed">Want exclusive offers & first access to products? Sign up.</p>
            </div>
            
            <div className="flex flex-col">
              <div className="flex h-[60px] w-full border border-white/30 bg-transparent">
                <div className="flex w-[35%] items-center border-r border-white/30 px-4">
                  <span className="text-[13px] font-semibold">Email address</span>
                </div>
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-[65%] bg-transparent px-4 text-[13px] text-white outline-none placeholder:text-gray-500"
                />
              </div>
              <button className="flex h-[64px] w-full items-center justify-center bg-white text-[11px] font-bold tracking-widest text-black transition-colors hover:bg-gray-200">
                SIGN UP <ArrowRight className="ml-2 h-4 w-4 stroke-[1.5]" />
              </button>
            </div>
          </div>

          {/* Links & Payments Column */}
          <div className="flex w-full flex-col justify-between border-b border-white/10 p-8 lg:w-[54%] lg:border-b-0 lg:border-r lg:p-12">
            <div className="flex flex-wrap justify-between gap-8 md:flex-nowrap">
              
              <div className="flex flex-col gap-3">
                <h4 className="mb-2 text-[15px] font-semibold">About Lacoste</h4>
                <Link href="#" className="text-[13px] text-gray-300 hover:text-white">Le Club Lacoste</Link>
                <Link href="#" className="text-[13px] text-gray-300 hover:text-white">The Lacoste Group</Link>
                <Link href="#" className="text-[13px] text-gray-300 hover:text-white">Careers</Link>
                <Link href="#" className="text-[13px] text-gray-300 hover:text-white">Military Discount</Link>
                <Link href="#" className="text-[13px] text-gray-300 hover:text-white">Accessibility - Not conform</Link>
                <Link href="#" className="text-[13px] text-gray-300 hover:text-white">Brand Protection</Link>
                <Link href="#" className="text-[13px] text-gray-300 hover:text-white">FAQ</Link>
              </div>
              
              <div className="flex flex-col gap-3">
                <h4 className="mb-2 text-[15px] font-semibold">Categories</h4>
                <Link href="#" className="text-[13px] text-gray-300 hover:text-white">Men's Collection</Link>
                <Link href="#" className="text-[13px] text-gray-300 hover:text-white">Women's Collection</Link>
                <Link href="#" className="text-[13px] text-gray-300 hover:text-white">Kid's Collection</Link>
                <Link href="#" className="text-[13px] text-gray-300 hover:text-white">Polo Shop</Link>
                <Link href="#" className="text-[13px] text-gray-300 hover:text-white">Shoe Shop</Link>
                <Link href="#" className="text-[13px] text-gray-300 hover:text-white">Lacoste Sport</Link>
              </div>
              
              <div className="flex max-w-[200px] flex-col gap-3">
                <h4 className="mb-2 text-[15px] font-semibold">Help & Contacts</h4>
                <Link href="#" className="mb-1 text-[13px] text-gray-300 hover:text-white">By phone</Link>
                <span className="text-[13px] font-semibold">1-800-452-2678</span>
                <p className="mb-1 text-[11px] leading-snug text-gray-400">Our customer service team is here to help you. Contact us Monday through Sunday from 9AM to 7PM EST.</p>
                <Link href="#" className="mb-1 text-[13px] text-gray-300 hover:text-white">By email and by chat</Link>
                <Link href="#" className="text-[13px] text-gray-300 hover:text-white">FAQ</Link>
              </div>

            </div>

            {/* Payment Logos Placeholder */}
            <div className="mt-16 flex flex-wrap items-center gap-6 opacity-80">
              <span className="text-[10px] font-bold">Apple Pay</span>
              <span className="text-[11px] font-bold italic">VISA</span>
              <span className="text-[10px] font-bold">AMEX</span>
              <span className="text-[10px] font-bold">MasterCard</span>
              <span className="text-[10px] font-bold">DISCOVER</span>
              <span className="text-[16px] font-bold tracking-widest">JCB</span>
              <span className="text-[10px] font-bold">Diners Club</span>
              <span className="text-[11px] font-bold italic">PayPal</span>
              <span className="text-[10px] font-bold">Klarna.</span>
              <span className="text-[10px] font-bold tracking-widest text-[#4d148c]">FedEx</span>
            </div>
          </div>

          {/* Socials Column */}
          <div className="flex w-full flex-col gap-5 p-8 lg:w-[18%] lg:p-12">
            <Link href="#" className="flex items-center gap-3 text-[13px] text-gray-300 hover:text-white hover:underline">
              <span className="flex h-4 w-4 items-center justify-center font-bold text-sm">Ig</span> Instagram
            </Link>
            <Link href="#" className="flex items-center gap-3 text-[13px] text-gray-300 hover:text-white hover:underline">
              <span className="flex h-4 w-4 items-center justify-center font-bold text-sm">f</span> Facebook
            </Link>
            <Link href="#" className="flex items-center gap-3 text-[13px] text-gray-300 hover:text-white hover:underline">
              <span className="flex h-4 w-4 items-center justify-center font-bold text-sm">X</span> Twitter
            </Link>
            <Link href="#" className="flex items-center gap-3 text-[13px] text-gray-300 hover:text-white hover:underline">
              <span className="flex h-4 w-4 items-center justify-center font-serif text-sm italic">P</span> Pinterest
            </Link>
            <Link href="#" className="flex items-center gap-3 text-[13px] text-gray-300 hover:text-white hover:underline">
              <span className="flex h-4 w-4 items-center justify-center font-bold text-lg">t</span> Tumblr
            </Link>
            <Link href="#" className="flex items-center gap-3 text-[13px] text-gray-300 hover:text-white hover:underline">
              <span className="flex h-4 w-4 items-center justify-center font-bold text-sm">Yt</span> YouTube
            </Link>
          </div>

        </div>
      </div>

      {/* Giant LACOSTE Text */}
      <div className="flex w-full justify-center overflow-hidden bg-[#0a2319] py-8">
        <h1 className="select-none font-serif text-[24vw] leading-[0.75] tracking-tighter text-[#e8e4db]">
          LACOSTE
        </h1>
      </div>

      {/* Bottom Legal Bar */}
      <div className="w-full bg-white py-6">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between px-6 text-[11px] font-medium text-gray-500 md:flex-row lg:px-12">
          <div className="mb-4 flex flex-wrap gap-6 md:mb-0">
            <Link href="#" className="hover:text-black">Sitemap</Link>
            <Link href="#" className="hover:text-black">Terms & Conditions</Link>
            <Link href="#" className="hover:text-black">Privacy policy</Link>
            <Link href="#" className="hover:text-black">Size guide</Link>
            <Link href="#" className="hover:text-black">Cookie Settings</Link>
          </div>
          <div className="flex cursor-pointer items-center gap-2 hover:text-black">
            <div className="flex h-[14px] w-[20px] items-center justify-center overflow-hidden rounded-[2px] border border-gray-200">
              {/* Fake US Flag */}
              <div className="h-full w-full bg-stripes-us relative">
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-800" />
                <div className="w-full h-full bg-[repeating-linear-gradient(transparent,transparent_20%,#b22234_20%,#b22234_40%)]" />
              </div>
            </div>
            <span className="text-black transition-colors hover:underline">United States</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
