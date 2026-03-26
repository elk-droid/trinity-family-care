import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/90 backdrop-blur-md border-b border-background/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-display text-xl font-bold text-background">
          Sidian Trinity <span className="text-accent">FM</span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-body text-sm text-background/70">
          <a href="#services" className="hover:text-background transition-colors">Services</a>
          <a href="#contact" className="hover:text-background transition-colors">Contact</a>
          <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold">
            <Phone className="w-3.5 h-3.5 mr-1.5" />
            Call Now
          </Button>
        </div>

        <button className="md:hidden text-background" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-foreground border-t border-background/10 px-6 py-4 space-y-4 font-body">
          <a href="#services" className="block text-background/70 hover:text-background" onClick={() => setOpen(false)}>Services</a>
          <a href="#contact" className="block text-background/70 hover:text-background" onClick={() => setOpen(false)}>Contact</a>
          <Button size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold">
            <Phone className="w-3.5 h-3.5 mr-1.5" />
            Call Now
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
