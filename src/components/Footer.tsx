"use client";

import Link from "next/link";
import {
  Headphones,
  RefreshCw,
  CreditCard,
  Truck,
  ArrowRight,
} from "lucide-react";
import { m, Variants } from "framer-motion";

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

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a2319] text-white overflow-hidden">
      {/* Top Banner: App Download */}
      <m.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
        className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 lg:px-12"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-10 lg:py-12 border-b border-white/10 gap-6 md:gap-0">
          <m.div variants={itemVariants} className="flex items-center gap-6">
            {/* Hidden on mobile, makes no sense to scan a QR code on the device you're holding */}
            <div className="hidden sm:flex h-20 w-20 shrink-0 items-center justify-center bg-white p-1">
              <div className="flex h-full w-full items-center justify-center border border-black">
                <span className="text-[8px] font-bold text-black text-center">
                  QR
                  <br />
                  CODE
                </span>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-xl lg:text-2xl font-serif leading-tight">
                Discover the new Lacoste app
              </h3>
              <p className="text-[13px] lg:text-sm text-gray-300">
                Enjoy 15% off your first full-price purchase in the app with
                code APP15
              </p>
            </div>
          </m.div>
          <m.div variants={itemVariants} className="flex w-full md:w-auto gap-3 sm:gap-4 mt-2 md:mt-0">
            <div className="flex flex-1 md:flex-none h-12 md:h-10 md:w-[140px] cursor-pointer items-center justify-center rounded-md border border-white/30 bg-black text-[11px] md:text-xs font-semibold text-center leading-tight hover:bg-gray-900 transition-colors">
              Download on the <br /> App Store
            </div>
            <div className="flex flex-1 md:flex-none h-12 md:h-10 md:w-[140px] cursor-pointer items-center justify-center rounded-md border border-white/30 bg-black text-[11px] md:text-xs font-semibold text-center leading-tight hover:bg-gray-900 transition-colors">
              GET IT ON <br /> Google Play
            </div>
          </m.div>
        </div>
      </m.div>

      {/* Services Row */}
      <div className="border-b border-white/10">
        <m.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
          className="mx-auto grid w-full max-w-[1440px] grid-cols-2 gap-y-10 gap-x-4 px-5 py-10 sm:px-6 lg:px-12 md:flex md:flex-nowrap md:justify-between md:py-12"
        >
          <m.div variants={itemVariants} className="flex flex-col items-center gap-3 md:w-1/4 text-center">
            <Headphones className="h-6 w-6 stroke-[1.5]" />
            <span className="text-[12px] lg:text-[13px] font-medium">
              Customer Service
            </span>
          </m.div>
          <m.div variants={itemVariants} className="flex flex-col items-center gap-3 md:w-1/4 text-center">
            <RefreshCw className="h-6 w-6 stroke-[1.5]" />
            <span className="text-[12px] lg:text-[13px] font-medium">
              Free Returns
            </span>
          </m.div>
          <m.div variants={itemVariants} className="flex flex-col items-center gap-3 md:w-1/4 text-center">
            <CreditCard className="h-6 w-6 stroke-[1.5]" />
            <span className="text-[12px] lg:text-[13px] font-medium">
              Safe & Secure Payment
            </span>
          </m.div>
          <m.div variants={itemVariants} className="flex flex-col items-center gap-3 md:w-1/4 text-center">
            <Truck className="h-6 w-6 stroke-[1.5]" />
            <span className="text-[12px] lg:text-[13px] font-medium">
              Free Shipping for Members
            </span>
          </m.div>
        </m.div>
      </div>

      {/* Main Footer Links & Newsletter */}
      <div className="border-b border-white/10">
        <m.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={containerVariants}
          className="mx-auto flex w-full max-w-[1440px] flex-col lg:flex-row"
        >
          {/* Newsletter Column */}
          <m.div variants={itemVariants} className="w-full border-b border-white/10 p-6 sm:p-8 lg:w-[28%] lg:border-b-0 lg:border-r lg:p-12">
            <div className="mb-8 lg:mb-10 flex items-center gap-4">
              <div className="flex h-[60px] w-[60px] lg:h-[72px] lg:w-[72px] shrink-0 items-center justify-center rounded-full border border-white text-center font-serif text-[9px] lg:text-[10px] leading-tight">
                LE CLUB
                <br />
                LACOSTE
              </div>
              <p className="text-[13px] leading-relaxed">
                Want exclusive offers & first access to products? Sign up.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex h-[50px] lg:h-[60px] w-full border border-white/30 bg-transparent">
                {/* Hidden on mobile to save space, visible on tablet+ */}
                <div className="hidden sm:flex w-[35%] items-center border-r border-white/30 px-4">
                  <span className="text-[13px] font-semibold">
                    Email address
                  </span>
                </div>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full sm:w-[65%] bg-transparent px-4 text-[13px] text-white outline-none placeholder:text-gray-400"
                />
              </div>
              <button className="flex h-[50px] lg:h-[64px] w-full items-center justify-center bg-white text-[11px] font-bold tracking-widest text-black transition-colors hover:bg-gray-200">
                SIGN UP <ArrowRight className="ml-2 h-4 w-4 stroke-[1.5]" />
              </button>
            </div>
          </m.div>

          {/* Links & Payments Column */}
          <m.div variants={itemVariants} className="flex w-full flex-col justify-between border-b border-white/10 p-6 sm:p-8 lg:w-[54%] lg:border-b-0 lg:border-r lg:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-8">
              <div className="flex flex-col gap-3">
                <h4 className="mb-1 md:mb-2 text-[15px] font-semibold">
                  About Lacoste
                </h4>
                <Link
                  href="#"
                  className="text-[13px] text-gray-300 hover:text-white"
                >
                  Le Club Lacoste
                </Link>
                <Link
                  href="#"
                  className="text-[13px] text-gray-300 hover:text-white"
                >
                  The Lacoste Group
                </Link>
                <Link
                  href="#"
                  className="text-[13px] text-gray-300 hover:text-white"
                >
                  Careers
                </Link>
                <Link
                  href="#"
                  className="text-[13px] text-gray-300 hover:text-white"
                >
                  Military Discount
                </Link>
                <Link
                  href="#"
                  className="text-[13px] text-gray-300 hover:text-white"
                >
                  Accessibility - Not conform
                </Link>
                <Link
                  href="#"
                  className="text-[13px] text-gray-300 hover:text-white"
                >
                  Brand Protection
                </Link>
                <Link
                  href="#"
                  className="text-[13px] text-gray-300 hover:text-white"
                >
                  FAQ
                </Link>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="mb-1 md:mb-2 text-[15px] font-semibold">
                  Categories
                </h4>
                <Link
                  href="#"
                  className="text-[13px] text-gray-300 hover:text-white"
                >
                  Men&apos;s Collection
                </Link>
                <Link
                  href="#"
                  className="text-[13px] text-gray-300 hover:text-white"
                >
                  Women&apos;s Collection
                </Link>
                <Link
                  href="#"
                  className="text-[13px] text-gray-300 hover:text-white"
                >
                  Kid&apos;s Collection
                </Link>
                <Link
                  href="#"
                  className="text-[13px] text-gray-300 hover:text-white"
                >
                  Polo Shop
                </Link>
                <Link
                  href="#"
                  className="text-[13px] text-gray-300 hover:text-white"
                >
                  Shoe Shop
                </Link>
                <Link
                  href="#"
                  className="text-[13px] text-gray-300 hover:text-white"
                >
                  Lacoste Sport
                </Link>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="mb-1 md:mb-2 text-[15px] font-semibold">
                  Help & Contacts
                </h4>
                <Link
                  href="#"
                  className="mb-1 text-[13px] text-gray-300 hover:text-white"
                >
                  By phone
                </Link>
                <span className="text-[13px] font-semibold">
                  1-800-452-2678
                </span>
                <p className="mb-1 text-[11px] leading-snug text-gray-400 max-w-[240px]">
                  Our customer service team is here to help you. Contact us
                  Monday through Sunday from 9AM to 7PM EST.
                </p>
                <Link
                  href="#"
                  className="mb-1 text-[13px] text-gray-300 hover:text-white"
                >
                  By email and by chat
                </Link>
                <Link
                  href="#"
                  className="text-[13px] text-gray-300 hover:text-white"
                >
                  FAQ
                </Link>
              </div>
            </div>

            {/* Payment Logos Placeholder */}
            <div className="mt-12 lg:mt-16 flex flex-wrap items-center gap-4 lg:gap-6 opacity-80">
              <span className="text-[10px] font-bold">Apple Pay</span>
              <span className="text-[11px] font-bold italic">VISA</span>
              <span className="text-[10px] font-bold">AMEX</span>
              <span className="text-[10px] font-bold">MasterCard</span>
              <span className="text-[10px] font-bold">DISCOVER</span>
              <span className="text-[16px] font-bold tracking-widest">JCB</span>
              <span className="text-[10px] font-bold">Diners Club</span>
              <span className="text-[11px] font-bold italic">PayPal</span>
              <span className="text-[10px] font-bold">Klarna.</span>
              <span className="text-[10px] font-bold tracking-widest text-[#4d148c]">
                FedEx
              </span>
            </div>
          </m.div>

          {/* Socials Column */}
          <m.div variants={itemVariants} className="flex w-full flex-row flex-wrap lg:flex-col gap-5 p-6 sm:p-8 lg:w-[18%] lg:p-12">
            <Link
              href="#"
              className="flex items-center gap-3 text-[13px] text-gray-300 hover:text-white hover:underline"
            >
              <span className="flex h-4 w-4 items-center justify-center font-bold text-sm">
                Ig
              </span>{" "}
              <span className="hidden lg:inline">Instagram</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 text-[13px] text-gray-300 hover:text-white hover:underline"
            >
              <span className="flex h-4 w-4 items-center justify-center font-bold text-sm">
                f
              </span>{" "}
              <span className="hidden lg:inline">Facebook</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 text-[13px] text-gray-300 hover:text-white hover:underline"
            >
              <span className="flex h-4 w-4 items-center justify-center font-bold text-sm">
                X
              </span>{" "}
              <span className="hidden lg:inline">Twitter</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 text-[13px] text-gray-300 hover:text-white hover:underline"
            >
              <span className="flex h-4 w-4 items-center justify-center font-serif text-sm italic">
                P
              </span>{" "}
              <span className="hidden lg:inline">Pinterest</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 text-[13px] text-gray-300 hover:text-white hover:underline"
            >
              <span className="flex h-4 w-4 items-center justify-center font-bold text-lg">
                t
              </span>{" "}
              <span className="hidden lg:inline">Tumblr</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 text-[13px] text-gray-300 hover:text-white hover:underline"
            >
              <span className="flex h-4 w-4 items-center justify-center font-bold text-sm">
                Yt
              </span>{" "}
              <span className="hidden lg:inline">YouTube</span>
            </Link>
          </m.div>
        </m.div>
      </div>

      {/* Giant LACOSTE Text */}
      <m.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={containerVariants}
        className="flex w-full justify-center overflow-hidden bg-[#0a2319] py-6 lg:py-8"
      >
        <m.h1 variants={itemVariants} className="select-none font-serif text-[24vw] leading-[0.75] tracking-tighter text-[#e8e4db]">
          LACOSTE
        </m.h1>
      </m.div>

      {/* Bottom Legal Bar */}
      <div className="w-full bg-white py-6">
        <m.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={containerVariants}
          className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between px-5 text-[11px] font-medium text-gray-500 lg:flex-row sm:px-6 lg:px-12"
        >
          <m.div variants={itemVariants} className="mb-5 flex flex-wrap justify-center gap-4 sm:gap-6 lg:mb-0 text-center">
            <Link href="#" className="hover:text-black">
              Sitemap
            </Link>
            <Link href="#" className="hover:text-black">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-black">
              Privacy policy
            </Link>
            <Link href="#" className="hover:text-black">
              Size guide
            </Link>
            <Link href="#" className="hover:text-black">
              Cookie Settings
            </Link>
          </m.div>
          <m.div variants={itemVariants} className="flex cursor-pointer items-center gap-2 hover:text-black">
            <div className="flex h-[14px] w-[20px] items-center justify-center overflow-hidden rounded-[2px] border border-gray-200">
              {/* Fake US Flag */}
              <div className="h-full w-full bg-stripes-us relative">
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-800" />
                <div className="w-full h-full bg-[repeating-linear-gradient(transparent,transparent_20%,#b22234_20%,#b22234_40%)]" />
              </div>
            </div>
            <span className="text-black transition-colors hover:underline">
              United States
            </span>
          </m.div>
        </m.div>
      </div>
    </footer>
  );
}