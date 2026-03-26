import { Accessibility, Smartphone, Shield, Heart } from "lucide-react";

const features = [
  {
    icon: Accessibility,
    title: "Wheelchair Accessible",
    description: "Fully equipped entrances, specialized restrooms, and priority parking for patients with mobility needs.",
  },
  {
    icon: Smartphone,
    title: "M-Pesa & Card Payments",
    description: "Seamless mobile money and contactless card payment support for all services.",
  },
  {
    icon: Shield,
    title: "Patient-Centered Care",
    description: "Thorough diagnostic listening and a calm, supportive atmosphere praised by visitors.",
  },
  {
    icon: Heart,
    title: "Family-Friendly",
    description: "A welcoming environment designed for patients of all ages — from newborns to seniors.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary font-body font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            Why Choose Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Built Around You
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Modern amenities and inclusive design for a comfortable healthcare experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-6 items-start p-6 rounded-xl hover:bg-secondary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
