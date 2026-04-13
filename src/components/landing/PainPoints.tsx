import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Clock, AlertTriangle, XCircle, PackageX } from "lucide-react";
import restaurantOverview from "@/assets/restaurant-overview.jpg";

const pains = [
  { icon: Clock, title: "Long Queues", desc: "Customers leave before ordering. Peak hours become chaos — and every lost customer is lost revenue." },
  { icon: AlertTriangle, title: "Slow Billing", desc: "Manual calculations slow down every transaction. Your staff spends more time billing than serving." },
  { icon: XCircle, title: "Order Mistakes", desc: "Wrong items, missed modifications, unhappy customers. Paper tickets and verbal orders lead to costly errors." },
  { icon: PackageX, title: "Inventory Blind Spots", desc: "Running out of bestsellers during rush hour? No visibility into stock means missed sales and waste." },
];

export default function PainPoints() {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding bg-card" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 animate-on-scroll">The Problem</p>
          <h2 className="section-title mb-4 animate-on-scroll">Sound Familiar?</h2>
          <p className="section-subtitle animate-on-scroll">
            Running a QSR shouldn't feel like fighting fires. But without the right tools, it often does.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll order-2 lg:order-1">
            <img src={restaurantOverview} alt="Busy restaurant interior with digital kiosks" className="rounded-2xl shadow-lg w-full" loading="lazy" width={1280} height={720} />
          </div>
          <div className="grid sm:grid-cols-2 gap-4 order-1 lg:order-2">
            {pains.map((p, i) => (
              <div
                key={i}
                className={`animate-on-scroll stagger-${i + 1} glass-card p-6 text-left hover-lift group`}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-destructive/10 group-hover:scale-110 transition-transform">
                  <p.icon className="w-7 h-7 text-destructive" />
                </div>
                <h3 className="text-lg font-bold font-heading mb-2 text-foreground">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
