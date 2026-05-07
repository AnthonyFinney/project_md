import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function WeAreLacosteSection() {
  return (
    <section className="w-full bg-white py-20 pb-32">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        
        {/* Header Row */}
        <div className="mb-6 flex w-full items-end justify-between">
          <h2 className="flex items-center gap-3 text-[28px] font-serif tracking-tight text-[#0a2319] md:text-[32px]">
            We are Lacoste
            <svg width="42" height="20" viewBox="0 0 100 50" fill="currentColor" className="text-[#0a2319] hidden sm:block">
              <path d="M10 25 C 20 20, 30 20, 40 25 C 50 30, 60 30, 70 25 C 80 20, 90 20, 95 25 C 90 35, 80 40, 70 40 C 60 40, 50 35, 40 30 C 30 25, 20 25, 10 30 Z" />
              <circle cx="20" cy="23" r="2" fill="white" />
              <path d="M85 25 C 90 23, 95 23, 98 25" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M15 35 C 25 38, 35 38, 45 35" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </h2>
          <div className="flex items-center gap-4 text-sm font-semibold text-[#0a2319]">
            <button className="text-gray-300 hover:text-black transition-colors">
              <ChevronLeft className="h-[18px] w-[18px] stroke-[1.5]" />
            </button>
            <span className="text-[13px] tracking-widest">1 / 7</span>
            <button className="hover:text-black transition-colors">
              <ChevronRight className="h-[18px] w-[18px] stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* Content Row */}
        <div className="flex w-full flex-col lg:flex-row lg:items-end justify-between">
          
          {/* Left Image Area */}
          <div className="w-full lg:w-[60%]">
            <div className="relative aspect-[1.35/1] w-full bg-[#f4f4f4] overflow-hidden">
              <Image
                src="/hero_spring_summer.png" // placeholder
                alt="Man playing tennis"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Right Text Area */}
          <div className="w-full lg:w-[32%] flex flex-col pt-10 lg:pt-0 mr-auto ml-10">
            <h3 className="mb-4 text-[28px] font-serif tracking-tight text-[#0a2319] md:text-[32px]">
              Life is a Beautiful Sport
            </h3>
            <p className="mb-10 text-[14px] leading-[1.7] text-[#4a4a4a]">
              Lacoste reaffirms what defines its identity: a style born from tennis, carried by a free, effortless French elegance in motion. A way of approaching sport beyond performance: as an attitude, a gesture, a way of playing and of living.
            </p>
            <button className="w-fit bg-[#0a2319] px-8 py-[14px] text-[11px] font-bold tracking-widest text-white transition-colors hover:bg-[#1a382a]">
              SHOP NEW ARRIVALS
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
