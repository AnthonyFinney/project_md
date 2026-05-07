import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const campaigns = [
  {
    id: 1,
    subtitle: "GOLF ATTITUDE",
    title: "Elegance Born on the Green",
    image: "/hero_spring_summer.png" // Note: placeholder image
  },
  {
    id: 2,
    subtitle: "TENNIS ATTITUDE",
    title: "Style Takes the Advantage",
    image: "/trending_polos.png" // Note: placeholder image
  }
];

export default function CampaignSection() {
  return (
    <section className="w-full bg-white pb-20">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {campaigns.map((campaign) => (
          <div 
            key={campaign.id} 
            className="group relative aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden cursor-pointer"
          >
            {/* Image Area */}
            <Image
              src={campaign.image}
              alt={campaign.title}
              fill
              className="object-cover object-center transition-transform duration-[800ms] ease-out group-hover:scale-105"
            />
            
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
            
            {/* Content Area */}
            <div className="absolute bottom-0 left-0 flex flex-col p-8 md:p-10 lg:p-12 lg:pb-16 lg:pl-16">
              <span className="mb-2 text-[10px] font-bold tracking-widest text-white/90">
                {campaign.subtitle}
              </span>
              
              <h2 className="mb-8 text-[32px] font-serif leading-[1.1] text-white md:text-[36px] lg:text-[42px] max-w-[320px]">
                {campaign.title}
              </h2>
              
              <button className="flex h-11 w-11 lg:h-12 lg:w-12 items-center justify-center bg-white transition-colors hover:bg-gray-200">
                <ArrowRight className="h-[18px] w-[18px] stroke-[1.5] text-black" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

