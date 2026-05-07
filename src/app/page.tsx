import Hero from "@/components/Hero";
import TrendingSection from "@/components/TrendingSection";
import TournamentSection from "@/components/TournamentSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <TrendingSection />
      <TournamentSection />
    </main>
  );
}
