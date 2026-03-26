import { Phone } from "lucide-react";

const PHONE_NUMBER = "+254700000000";

const FloatingCallButton = () => {
  return (
    <a
      href={`tel:${PHONE_NUMBER}`}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-body font-semibold text-sm md:hidden"
      aria-label="Call Sidian Trinity Family Medicine"
    >
      <Phone className="w-5 h-5" />
      Call Now
    </a>
  );
};

export default FloatingCallButton;
