import { Users, Award, Clock, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: "15,000+", label: "Patients Served" },
  { icon: Award, value: "12+", label: "Years of Excellence" },
  { icon: Clock, value: "24hr", label: "Emergency Support" },
  { icon: Heart, value: "98%", label: "Patient Satisfaction" },
];

const StatsBar = () => {
  return (
    <section className="bg-primary py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-8 h-8 text-primary-foreground/60 mx-auto mb-3" />
              <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                {stat.value}
              </p>
              <p className="font-body text-primary-foreground/70 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
