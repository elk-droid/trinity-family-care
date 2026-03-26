import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingDialog from "@/components/BookingDialog";

const PHONE_NUMBER = "+254700000000";

const hours = [
  { day: "Monday", time: "1:30 AM – 10:00 PM" },
  { day: "Tuesday", time: "1:30 AM – 10:00 PM" },
  { day: "Wednesday", time: "1:30 AM – 10:00 PM" },
  { day: "Thursday", time: "1:30 AM – 10:00 PM" },
  { day: "Friday", time: "1:30 AM – 10:00 PM" },
  { day: "Saturday", time: "8:00 AM – 5:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-primary font-body font-semibold text-sm uppercase tracking-[0.15em] mb-3">
              Visit Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-background mb-6">
              Get in Touch
            </h2>
            <p className="text-background/70 font-body text-lg leading-relaxed mb-10">
              We're here to help. Reach out for appointments, inquiries, or walk-in visits at our Nairobi location.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
                <div>
                  <p className="text-background font-body font-semibold">Location</p>
                  <p className="text-background/60 font-body">Nairobi, Kenya</p>
                </div>
              </div>
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-start gap-4 group">
                <Phone className="w-5 h-5 text-accent mt-1 shrink-0" />
                <div>
                  <p className="text-background font-body font-semibold group-hover:text-accent transition-colors">Phone</p>
                  <p className="text-background/60 font-body group-hover:text-background/80 transition-colors">+254 700 000 000</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-accent mt-1 shrink-0" />
                <div>
                  <p className="text-background font-body font-semibold">Email</p>
                  <p className="text-background/60 font-body">info@sidiantrinity.co.ke</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <BookingDialog>
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold text-base px-8">
                  Book Appointment
                </Button>
              </BookingDialog>
              <a href={`tel:${PHONE_NUMBER}`}>
                <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10 font-body font-semibold text-base px-8">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </Button>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-semibold text-background mb-6 flex items-center gap-3">
              <Clock className="w-6 h-6 text-accent" />
              Operating Hours
            </h3>
            <div className="space-y-0">
              {hours.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between items-center py-4 border-b border-background/10 font-body"
                >
                  <span className="text-background/80 font-medium">{item.day}</span>
                  <span className={item.time === "Closed" ? "text-destructive font-semibold" : "text-background/60"}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
