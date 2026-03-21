import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import KerjasamaSection from "@/components/KerjasamaSection";
import AppSection from "@/components/AppSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero with overlapping service cards — needs bottom padding to show cards */}
      <div className="pb-40 sm:pb-44">
        <HeroSection />
      </div>

      {/* About */}
      <AboutSection />

      {/* Stats */}
      <StatsSection />

      {/* Features / Services */}
      <FeaturesSection />

      {/* Kerjasama Kargo */}
      <KerjasamaSection />

      {/* App Download */}
      <AppSection />

      {/* News */}
      <NewsSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
