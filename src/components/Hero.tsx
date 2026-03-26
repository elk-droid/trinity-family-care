import { Phone, MapPin, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-clinic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Sidian Trinity Family Medicine clinic interior"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1024}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-2xl animate-fade-up">
          <div className="flex items-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
            <span className="text-accent font-body font-medium ml-2">5.0 Rating</span>
          </div>

          <p className="text-primary-foreground/70 font-body text-sm uppercase tracking-[0.2em] mb-3">
            🏥 Medical Center · Nairobi
          </p>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6">
            Sidian Trinity
            <span className="block text-accent">Family Medicine</span>
          </h1>

          <p className="text-primary-foreground/80 font-body text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
            Your comprehensive healthcare partner — where personalized attention meets modern medical excellence.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold text-base px-8">
              <Phone className="w-4 h-4 mr-2" />
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body text-base px-8">
              <MapPin className="w-4 h-4 mr-2" />
              Get Directions
            </Button>
          </div>

          <div className="flex items-center gap-2 text-primary-foreground/60 font-body text-sm">
            <Clock className="w-4 h-4" />
            <span>Closed · Opens Friday 1:30 AM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
