"use client";

import { usePathname } from 'next/navigation';
import NavBar from "./NavBar";
import Footer from "./Footer";
import CheckoutNavBar from "./CheckoutNavBar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isCheckout = pathname === '/cart' || pathname === '/checkout';

  if (isCheckout) {
    return (
      <>
        <CheckoutNavBar />
        {children}
      </>
    );
  }

  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
