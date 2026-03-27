import { useState } from "react";
import { Search, ShoppingCart, Truck, Phone, Plus, Minus, X, CreditCard, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import pharmacyHero from "@/assets/pharmacy-hero.jpg";

const DELIVERY_FEE = 300; // KES standardized

interface Medicine {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  requiresPrescription: boolean;
}

const medicines: Medicine[] = [
  { id: "1", name: "Paracetamol 500mg", category: "Pain Relief", price: 150, description: "For mild to moderate pain and fever. Pack of 20 tablets.", requiresPrescription: false },
  { id: "2", name: "Amoxicillin 250mg", category: "Antibiotics", price: 450, description: "Broad-spectrum antibiotic. Pack of 21 capsules.", requiresPrescription: true },
  { id: "3", name: "Cetrizine 10mg", category: "Allergy", price: 200, description: "Antihistamine for allergies and hay fever. Pack of 10 tablets.", requiresPrescription: false },
  { id: "4", name: "Omeprazole 20mg", category: "Digestive", price: 350, description: "For acid reflux and stomach ulcers. Pack of 14 capsules.", requiresPrescription: false },
  { id: "5", name: "Metformin 500mg", category: "Diabetes", price: 500, description: "Blood sugar management. Pack of 30 tablets.", requiresPrescription: true },
  { id: "6", name: "Ibuprofen 400mg", category: "Pain Relief", price: 180, description: "Anti-inflammatory pain relief. Pack of 20 tablets.", requiresPrescription: false },
  { id: "7", name: "Loratadine 10mg", category: "Allergy", price: 250, description: "Non-drowsy allergy relief. Pack of 10 tablets.", requiresPrescription: false },
  { id: "8", name: "Vitamin C 1000mg", category: "Vitamins", price: 400, description: "Immune system support. Pack of 30 tablets.", requiresPrescription: false },
  { id: "9", name: "Cough Syrup 100ml", category: "Cold & Flu", price: 320, description: "Relieves dry and productive cough.", requiresPrescription: false },
  { id: "10", name: "Amlodipine 5mg", category: "Blood Pressure", price: 380, description: "For hypertension management. Pack of 30 tablets.", requiresPrescription: true },
  { id: "11", name: "Multivitamin Complex", category: "Vitamins", price: 600, description: "Daily essential vitamins and minerals. Pack of 30 tablets.", requiresPrescription: false },
  { id: "12", name: "ORS Sachets", category: "Digestive", price: 120, description: "Oral rehydration salts. Pack of 10 sachets.", requiresPrescription: false },
];

const categories = ["All", ...Array.from(new Set(medicines.map((m) => m.category)))];

interface CartItem {
  medicine: Medicine;
  quantity: number;
}

const Pharmacy = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const filtered = medicines.filter((m) => {
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || m.category === activeCategory;
    return matchSearch && matchCat;
  });

  const addToCart = (medicine: Medicine) => {
    if (medicine.requiresPrescription) {
      toast({
        title: "Prescription Required",
        description: "This medicine requires a valid prescription. Please visit the clinic or upload a prescription.",
        variant: "destructive",
      });
      return;
    }
    setCart((prev) => {
      const existing = prev.find((c) => c.medicine.id === medicine.id);
      if (existing) {
        return prev.map((c) => c.medicine.id === medicine.id ? { ...c, quantity: c.quantity + 1 } : c);
      }
      return [...prev, { medicine, quantity: 1 }];
    });
    toast({ title: "Added to cart", description: `${medicine.name} added.` });
  };

  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev.map((c) => c.medicine.id === id ? { ...c, quantity: Math.max(0, c.quantity + delta) } : c).filter((c) => c.quantity > 0)
    );
  };

  const subtotal = cart.reduce((s, c) => s + c.medicine.price * c.quantity, 0);
  const total = cart.length > 0 ? subtotal + DELIVERY_FEE : 0;

  const handleCheckout = (method: "mpesa" | "card") => {
    toast({
      title: method === "mpesa" ? "M-Pesa Payment" : "Card Payment",
      description: `Payment of KES ${total.toLocaleString()} initiated via ${method === "mpesa" ? "M-Pesa" : "card"}. You'll receive a confirmation shortly.`,
    });
    setCart([]);
    setCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/90 backdrop-blur-md border-b border-background/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="font-display text-xl font-bold text-background">
            Sidian Trinity <span className="text-accent">Pharmacy</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="/" className="hidden md:block text-background/70 hover:text-background font-body text-sm transition-colors">
              ← Back to Clinic
            </a>
            <Button
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold relative"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart className="w-4 h-4 mr-1.5" />
              Cart
              {cart.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-destructive text-destructive-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cart.reduce((s, c) => s + c.quantity, 0)}
                </span>
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-16 h-[40vh] min-h-[280px] flex items-center overflow-hidden">
        <img src={pharmacyHero} alt="Sidian Trinity Pharmacy" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1024} />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-3">
            Sidian Trinity <span className="text-accent">Pharmacy</span>
          </h1>
          <p className="text-primary-foreground/80 font-body text-lg max-w-xl">
            Quality medicines delivered to your door. Standardized delivery fee of KES {DELIVERY_FEE} across Nairobi.
          </p>
          <div className="flex items-center gap-2 mt-4 text-primary-foreground/60 font-body text-sm">
            <Truck className="w-4 h-4" />
            <span>Free delivery on orders above KES 5,000</span>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 px-6 border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="relative max-w-md mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search medicines..."
              className="pl-10 font-body"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Badge
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                className={`cursor-pointer font-body transition-colors ${activeCategory === cat ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((med) => (
              <Card key={med.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="font-body text-xs">{med.category}</Badge>
                    {med.requiresPrescription && (
                      <Badge variant="destructive" className="font-body text-xs">Rx</Badge>
                    )}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-3 mb-1">{med.name}</h3>
                  <p className="text-muted-foreground font-body text-sm mb-4 line-clamp-2">{med.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-body font-bold text-lg text-primary">KES {med.price}</span>
                    <Button
                      size="sm"
                      onClick={() => addToCart(med)}
                      className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Add
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground font-body py-12">No medicines found matching your search.</p>
          )}
        </div>
      </section>

      {/* Info Bar */}
      <section className="py-12 px-6 bg-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Truck className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-display text-xl font-semibold text-background mb-1">Standard Delivery</h3>
              <p className="text-background/60 font-body text-sm">KES {DELIVERY_FEE} flat rate across Nairobi. Free above KES 5,000.</p>
            </div>
            <div>
              <Phone className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-display text-xl font-semibold text-background mb-1">Pharmacist Support</h3>
              <p className="text-background/60 font-body text-sm">Call us for guidance on your medication.</p>
            </div>
            <div>
              <CreditCard className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-display text-xl font-semibold text-background mb-1">M-Pesa & Card</h3>
              <p className="text-background/60 font-body text-sm">Pay conveniently with M-Pesa or card at checkout.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground py-8 px-6 border-t border-background/10">
        <div className="container mx-auto text-center font-body text-background/40 text-sm">
          © 2026 Sidian Trinity Family Medicine. All rights reserved.
        </div>
      </footer>

      {/* Cart Dialog */}
      <Dialog open={cartOpen} onOpenChange={setCartOpen}>
        <DialogContent className="sm:max-w-[480px] max-h-[90vh] overflow-y-auto bg-card">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-foreground">Your Cart</DialogTitle>
          </DialogHeader>
          {cart.length === 0 ? (
            <p className="text-muted-foreground font-body py-8 text-center">Your cart is empty.</p>
          ) : (
            <div className="space-y-4 mt-4">
              {cart.map((item) => (
                <div key={item.medicine.id} className="flex items-center justify-between gap-3 py-3 border-b border-border">
                  <div className="flex-1 min-w-0">
                    <p className="font-body font-semibold text-foreground truncate">{item.medicine.name}</p>
                    <p className="text-muted-foreground font-body text-sm">KES {item.medicine.price} each</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="outline" className="h-7 w-7" onClick={() => updateQty(item.medicine.id, -1)}>
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="font-body font-semibold w-6 text-center">{item.quantity}</span>
                    <Button size="icon" variant="outline" className="h-7 w-7" onClick={() => updateQty(item.medicine.id, 1)}>
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                  <span className="font-body font-bold text-foreground w-20 text-right">
                    KES {(item.medicine.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}

              <div className="space-y-2 pt-2">
                <div className="flex justify-between font-body text-sm text-muted-foreground">
                  <span>Subtotal</span>
                  <span>KES {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-body text-sm text-muted-foreground">
                  <span>Delivery Fee</span>
                  <span>{subtotal >= 5000 ? <span className="text-primary font-semibold">FREE</span> : `KES ${DELIVERY_FEE}`}</span>
                </div>
                <div className="flex justify-between font-body font-bold text-lg text-foreground border-t border-border pt-3">
                  <span>Total</span>
                  <span>KES {(subtotal >= 5000 ? subtotal : total).toLocaleString()}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold"
                  onClick={() => handleCheckout("mpesa")}
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  Pay M-Pesa
                </Button>
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold"
                  onClick={() => handleCheckout("card")}
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Pay Card
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Pharmacy;
