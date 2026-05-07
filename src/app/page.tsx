import Hero from "@/components/Hero";
import TrendingSection from "@/components/TrendingSection";
import TournamentSection from "@/components/TournamentSection";
import BestSellersSection from "@/components/BestSellersSection";
import CampaignSection from "@/components/CampaignSection";
import WeAreLacosteSection from "@/components/WeAreLacosteSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <TrendingSection />
      <TournamentSection />
      <BestSellersSection />
      <CampaignSection />
      <WeAreLacosteSection />
    </main>
  );
}

