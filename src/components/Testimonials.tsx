import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Grace Wanjiku",
    text: "The doctors here truly listen. I've never felt so cared for at a medical facility. They took time to explain everything about my treatment plan.",
    rating: 5,
  },
  {
    name: "James Odhiambo",
    text: "Brought my whole family here — from my elderly mother to my toddler. The staff is incredible with patients of all ages. Highly recommend!",
    rating: 5,
  },
  {
    name: "Amina Hassan",
    text: "The wheelchair accessibility made a huge difference for my father. Clean, modern facility with genuinely caring professionals.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6" style={{ background: "var(--section-gradient)" }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary font-body font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            Patient Stories
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by Families
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Hear from the families who trust us with their health.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-xl p-8 shadow-sm border border-border relative"
            >
              <Quote className="w-10 h-10 text-primary/15 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 font-body leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <p className="font-body font-semibold text-foreground">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
