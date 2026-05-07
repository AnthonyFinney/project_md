import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const categories = [
  { name: 'The Linen Shop', image: '/trending_linen.png' },
  { name: 'Sweaters & Sweatshirts', image: '/trending_sweaters.png' },
  { name: 'Polos', image: '/trending_polos.png' },
  { name: 'Jackets & Coats', image: '/trending_jackets.png' },
];

export default function TrendingSection() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 py-20">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-[32px] font-serif tracking-tight text-[#0a2319]">Now Trending</h2>
        <div className="flex gap-[6px]">
          <button className="flex h-10 w-10 items-center justify-center border border-[#e5e5e5] text-gray-300 cursor-not-allowed">
            <ArrowLeft className="h-[18px] w-[18px] stroke-[1.5]" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center border border-black text-black hover:bg-gray-50 transition-colors">
            <ArrowRight className="h-[18px] w-[18px] stroke-[1.5]" />
          </button>
        </div>
      </div>

      <div className="flex w-full gap-5 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((category, index) => (
          <Link href="#" key={index} className="group flex min-w-[300px] flex-1 flex-col">
            <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden bg-[#ebebeb]">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top"
              />
            </div>
            <span className="text-[15px] font-medium text-[#0a2319] underline decoration-1 underline-offset-[6px] hover:decoration-2">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
