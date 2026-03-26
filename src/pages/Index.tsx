import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <Features />
      <Testimonials />
      <Contact />
      <footer className="bg-foreground py-8 px-6 border-t border-background/10">
        <div className="container mx-auto text-center font-body text-background/40 text-sm">
          © 2026 Sidian Trinity Family Medicine. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
