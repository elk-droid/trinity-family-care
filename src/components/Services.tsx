import { Stethoscope, Baby, HeartPulse, Syringe } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Consultations",
    description: "Thorough diagnostic listening with personalized treatment plans for all ages.",
  },
  {
    icon: Baby,
    title: "Pediatric Care",
    description: "Gentle, specialized healthcare for infants, children, and adolescents.",
  },
  {
    icon: HeartPulse,
    title: "Chronic Conditions",
    description: "Expert management of diabetes, hypertension, and other long-term conditions.",
  },
  {
    icon: Syringe,
    title: "Minor Procedures",
    description: "Safe, in-clinic surgical procedures with professional aftercare support.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6" style={{ background: "var(--section-gradient)" }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary font-body font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            Our Services
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Diverse Medical Expertise
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            From routine check-ups to specialized treatments — comprehensive care under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
