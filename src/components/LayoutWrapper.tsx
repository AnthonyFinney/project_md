"use client";

import { usePathname } from 'next/navigation';
import { LazyMotion, domAnimation } from 'framer-motion';
import NavBar from "./NavBar";
import Footer from "./Footer";
import CheckoutNavBar from "./CheckoutNavBar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isCheckout = pathname === '/cart' || pathname === '/checkout';

  if (isCheckout) {
    return (
      <LazyMotion features={domAnimation}>
        <CheckoutNavBar />
        {children}
      </LazyMotion>
    );
  }

  return (
    <LazyMotion features={domAnimation}>
      <NavBar />
      {children}
      <Footer />
    </LazyMotion>
  );
}
