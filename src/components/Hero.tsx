"use client";

import { m, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1], // Custom spring-like easing
    },
  },
};

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative h-[80vh] w-full min-h-[600px] overflow-hidden bg-gray-100"
    >
      {/* Background Video */}
      <m.div
        initial={{ scale: 1.1, filter: "blur(10px)" }}
        whileInView={{ scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: false }}
        className="absolute inset-0"
      >
        <video
          src="/videos/Hero_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-center scale-[1.5] md:scale-100"
        />
      </m.div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-end bg-black/10">
        <m.div
          className="px-8 pb-16 md:px-16 md:pb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
        >
          <m.h1
            variants={itemVariants}
            className="mb-8 max-w-2xl text-4xl font-serif text-white md:text-5xl lg:text-[56px] leading-[1.15] drop-shadow-md"
          >
            New Muhammadi Creation Collection
          </m.h1>
          <m.button
            variants={itemVariants}
            className="flex h-12 w-[140px] items-center justify-center bg-white text-[13px] font-bold tracking-wider text-black transition-colors hover:bg-gray-100"
          >
            SHOP NOW
          </m.button>
        </m.div>
      </div>
    </section>
  );
}
