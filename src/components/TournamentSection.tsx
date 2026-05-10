import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TournamentSection() {
  return (
    <section className="w-full bg-white">
      <div className="flex flex-col md:flex-row md:min-h-[600px] lg:min-h-[650px]">
        {/* Left Side: Image */}
        <div className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-auto md:w-1/2 md:min-h-[600px]">
          <Image
            src="/hero_spring_summer.png"
            alt="Tournament Style"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
            loading="eager"
          />

          {/* Mobile Pagination overlaid on image (hidden on md+) */}
          <div className="absolute bottom-4 right-4 flex md:hidden items-center gap-2 text-[14px] font-medium tracking-widest text-[#0a2319]">
            <button className="hover:opacity-70 transition-opacity">
              <ChevronLeft className="h-[22px] w-[22px] stroke-[1]" />
            </button>
            <span>1 / 2</span>
            <button className="hover:opacity-70 transition-opacity">
              <ChevronRight className="h-[22px] w-[22px] stroke-[1]" />
            </button>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="relative flex w-full flex-col justify-center px-4 py-8 sm:px-8 sm:py-16 md:w-1/2 md:py-20 lg:pl-24 lg:pr-12">
          {/* Desktop Pagination (hidden on mobile) */}
          <div className="absolute hidden md:flex right-8 top-8 lg:right-16 lg:top-12 items-center gap-3 text-[13px] font-medium tracking-widest text-gray-800">
            <button className="text-gray-300 hover:text-black">
              <ChevronLeft className="h-[18px] w-[18px] stroke-[1.5]" />
            </button>
            <span className="text-black">1 / 2</span>
            <button className="text-black hover:text-gray-600">
              <ChevronRight className="h-[18px] w-[18px] stroke-[1.5]" />
            </button>
          </div>

          <div className="max-w-[480px]">
            <h2 className="mb-3 md:mb-5 text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.15] font-serif text-[#092119]">
              Tournament Style at The Mutua Madrid Open
            </h2>
            <p className="mb-6 md:mb-9 text-[15px] leading-[1.5] text-[#333] md:text-[#0a2319]">
              Discover on-court looks worn by Novak Djokovic, Daniil Medvedev,
              Grigor Dimitrov, Arthur Fils, and Eva Lys at the Mutua Madrid
              Open, where Lacoste is an official partner.
            </p>

            {/* Buttons: Side-by-side on mobile per the screenshot */}
            <div className="flex flex-row gap-3 w-full">
              <button className="flex-1 flex h-[48px] items-center justify-center bg-[#092119] text-[11px] sm:text-[12px] font-bold tracking-wider text-white transition-colors hover:bg-black px-2 text-center leading-tight">
                SHOP NOW
              </button>
              <button className="flex-1 flex h-[48px] items-center justify-center bg-[#092119] text-[11px] sm:text-[12px] font-bold tracking-wider text-white transition-colors hover:bg-black px-2 text-center leading-tight">
                EXPLORE PLAYER LOOKS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
