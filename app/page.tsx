import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import AppMockup from "@/components/AppMockup";
import Pricing from "@/components/Pricing";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <Problem />
        <HowItWorks />
        <Features />
        <AppMockup />
        <Pricing />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
