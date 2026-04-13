import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Zap, Package, BarChart3, Building2, Cloud, Smartphone } from "lucide-react";

const features = [
  { icon: Zap, title: "Lightning-Fast Billing", desc: "Process orders in seconds with intuitive touch interface and smart menu navigation." },
  { icon: Package, title: "Inventory Management", desc: "Real-time stock tracking, low-stock alerts, and automated reorder suggestions." },
  { icon: BarChart3, title: "Reports & Analytics", desc: "Daily, weekly, and monthly insights into sales, best-sellers, and trends." },
  { icon: Building2, title: "Multi-Branch Support", desc: "Manage all your outlets from one dashboard with centralized menu and pricing." },
  { icon: Cloud, title: "Cloud-Based System", desc: "Access your data anywhere, anytime. Automatic backups and zero data loss." },
  { icon: Smartphone, title: "Mobile Ordering", desc: "Let customers order ahead via QR codes and mobile apps for faster service." },
];

export default function Features() {
  const ref = useScrollAnimation();

  return (
    <section id="features" className="section-padding bg-card" ref={ref}>
      <div className="container mx-auto text-center">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 animate-on-scroll">Features</p>
        <h2 className="section-title mb-4 animate-on-scroll">
          Everything You Need to <span className="gradient-text">Win</span>
        </h2>
        <p className="section-subtitle mb-16 animate-on-scroll">
          A complete toolkit designed specifically for quick-service restaurants.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={`animate-on-scroll stagger-${i + 1} glass-card p-8 text-left hover-lift group cursor-default`}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ background: "var(--gradient-primary)" }}>
                <f.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
