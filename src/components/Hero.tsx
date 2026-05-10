"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <section
      id="hero-section"
      className="relative h-[80vh] w-full min-h-[600px] overflow-hidden bg-gray-100"
    >
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: false }}
        className="absolute inset-0"
      >
        <Image
          src="/hero_spring_summer.png"
          alt="New Spring-Summer Collection"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
          loading="eager"
        />
      </motion.div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-end bg-black/10">
        <motion.div
          className="px-8 pb-16 md:px-16 md:pb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="mb-8 max-w-2xl text-4xl font-serif text-white md:text-5xl lg:text-[56px] leading-[1.15] drop-shadow-md"
          >
            New Spring–Summer Collection
          </motion.h1>
          <motion.button
            variants={itemVariants}
            className="flex h-12 w-[140px] items-center justify-center bg-white text-[13px] font-bold tracking-wider text-black transition-colors hover:bg-gray-100"
          >
            SHOP NOW
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
