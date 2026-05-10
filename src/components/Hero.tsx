import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative h-[80vh] w-full min-h-[600px] overflow-hidden bg-gray-100"
    >
      {/* Background Image */}
      <Image
        src="/hero_spring_summer.png"
        alt="New Spring-Summer Collection"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
        loading="eager"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-end bg-black/10">
        <div className="px-8 pb-16 md:px-16 md:pb-24">
          <h1 className="mb-8 max-w-2xl text-4xl font-serif text-white md:text-5xl lg:text-[56px] leading-[1.15] drop-shadow-md">
            New Spring–Summer Collection
          </h1>
          <button className="flex h-12 w-[140px] items-center justify-center bg-white text-[13px] font-bold tracking-wider text-black transition-colors hover:bg-gray-100">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
}
