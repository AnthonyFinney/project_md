import Hero from "@/components/Hero";
import TrendingSection from "@/components/TrendingSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <TrendingSection />
    </main>
  );
}
