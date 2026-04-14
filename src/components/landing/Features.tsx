import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Zap, Package, BarChart3, Building2, Cloud, Smartphone } from "lucide-react";
import posMockup from "@/assets/pos-mockup.jpg";

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
    <section id="features" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 animate-on-scroll">Features</p>
          <h2 className="section-title mb-4 animate-on-scroll">
            Everything You Need to <span className="gradient-text">Win</span>
          </h2>
          <p className="section-subtitle animate-on-scroll">
            A complete toolkit designed specifically for quick-service restaurants.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className={`animate-on-scroll stagger-${i + 1} glass-card p-6 text-left hover-lift group cursor-default`}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ background: "var(--gradient-primary)" }}>
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-base font-bold font-heading mb-1.5 text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="animate-on-scroll stagger-3">
            <img src={posMockup} alt="QuickCrave tablet interface showing restaurant menu" className="rounded-2xl shadow-lg w-full" loading="lazy" width={1280} height={720} />
          </div>
        </div>
      </div>
    </section>
  );
}
