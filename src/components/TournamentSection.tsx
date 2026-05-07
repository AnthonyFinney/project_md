import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TournamentSection() {
  return (
    <section className="w-full bg-white">
      <div className="flex flex-col md:flex-row min-h-[600px] lg:min-h-[650px]">
        {/* Left Side: Image */}
        <div className="relative w-full md:w-1/2 min-h-[400px]">
          <Image
            src="/hero_spring_summer.png"
            alt="Tournament Style"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        {/* Right Side: Content */}
        <div className="relative flex w-full flex-col justify-center px-8 py-20 md:w-1/2 lg:pl-24 lg:pr-12">
          {/* Pagination Top Right */}
          <div className="absolute right-8 top-8 flex items-center gap-3 text-[13px] font-medium tracking-widest text-gray-800 lg:right-16 lg:top-12">
            <button className="text-gray-300 hover:text-black">
              <ChevronLeft className="h-[18px] w-[18px] stroke-[1.5]" />
            </button>
            <span className="text-black">1 / 2</span>
            <button className="text-black hover:text-gray-600">
              <ChevronRight className="h-[18px] w-[18px] stroke-[1.5]" />
            </button>
          </div>

          <div className="max-w-[480px]">
            <h2 className="mb-5 text-[32px] md:text-[36px] lg:text-[40px] leading-[1.15] font-serif text-[#0a2319]">
              Tournament Style at The Mutua Madrid Open
            </h2>
            <p className="mb-9 text-[15px] leading-[1.6] text-[#0a2319]">
              Discover on-court looks worn by Novak Djokovic, Daniil Medvedev,
              Grigor Dimitrov, Arthur Fils, and Eva Lys at the Mutua Madrid Open,
              where Lacoste is an official partner.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex h-12 w-[140px] items-center justify-center bg-[#0a2319] text-[12px] font-bold tracking-wider text-white transition-colors hover:bg-black">
                SHOP NOW
              </button>
              <button className="flex h-12 px-7 items-center justify-center bg-[#0a2319] text-[12px] font-bold tracking-wider text-white transition-colors hover:bg-black">
                EXPLORE PLAYER LOOKS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
