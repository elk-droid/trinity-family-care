import { Stethoscope, Baby, HeartPulse, Syringe } from "lucide-react";
import consultationImg from "@/assets/consultation.jpg";
import pediatricImg from "@/assets/pediatric-care.jpg";
import labImg from "@/assets/lab-services.jpg";
import vaccinationImg from "@/assets/vaccination.jpg";

const services = [
  {
    icon: Stethoscope,
    title: "General Consultations",
    description: "Thorough diagnostic listening with personalized treatment plans for all ages.",
    image: consultationImg,
  },
  {
    icon: Baby,
    title: "Pediatric Care",
    description: "Gentle, specialized healthcare for infants, children, and adolescents.",
    image: pediatricImg,
  },
  {
    icon: HeartPulse,
    title: "Chronic Conditions",
    description: "Expert management of diabetes, hypertension, and other long-term conditions.",
    image: labImg,
  },
  {
    icon: Syringe,
    title: "Vaccinations & Procedures",
    description: "Safe vaccinations and in-clinic surgical procedures with professional aftercare.",
    image: vaccinationImg,
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
              className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-card-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
