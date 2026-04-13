import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Clock, AlertTriangle, XCircle, PackageX } from "lucide-react";

const pains = [
  { icon: Clock, title: "Long Queues", desc: "Customers leave before ordering. Peak hours become chaos — and every lost customer is lost revenue.", color: "text-destructive" },
  { icon: AlertTriangle, title: "Slow Billing", desc: "Manual calculations slow down every transaction. Your staff spends more time billing than serving.", color: "text-accent" },
  { icon: XCircle, title: "Order Mistakes", desc: "Wrong items, missed modifications, unhappy customers. Paper tickets and verbal orders lead to costly errors.", color: "text-destructive" },
  { icon: PackageX, title: "Inventory Blind Spots", desc: "Running out of bestsellers during rush hour? No visibility into stock means missed sales and waste.", color: "text-accent" },
];

export default function PainPoints() {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding bg-card" ref={ref}>
      <div className="container mx-auto text-center">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 animate-on-scroll">The Problem</p>
        <h2 className="section-title mb-4 animate-on-scroll">Sound Familiar?</h2>
        <p className="section-subtitle mb-16 animate-on-scroll">
          Running a QSR shouldn't feel like fighting fires. But without the right tools, it often does.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((p, i) => (
            <div
              key={i}
              className={`animate-on-scroll stagger-${i + 1} glass-card p-8 text-center hover-lift group`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 bg-muted group-hover:scale-110 transition-transform`}>
                <p.icon className={`w-8 h-8 ${p.color}`} />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-foreground">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
