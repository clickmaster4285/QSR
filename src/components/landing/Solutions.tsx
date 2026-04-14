import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const items = [
  { before: "10-min average wait", after: "Under 2 minutes", label: "Queue Time" },
  { before: "Manual calculator billing", after: "One-tap smart billing", label: "Billing Speed" },
  { before: "15% order error rate", after: "Near-zero mistakes", label: "Order Accuracy" },
  { before: "Guesswork inventory", after: "Real-time stock alerts", label: "Inventory Control" },
];

export default function Solutions() {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto text-center">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 animate-on-scroll">The Solution</p>
        <h2 className="section-title mb-4 animate-on-scroll">
          From Chaos to <span className="gradient-text">Control</span>
        </h2>
        <p className="section-subtitle mb-16 animate-on-scroll">
          See how QuickCrave transforms every pain point into a competitive advantage.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <div key={i} className={`animate-on-scroll stagger-${i + 1} glass-card p-8 hover-lift`}>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">{item.label}</p>
              <div className="flex items-center justify-center gap-4">
                <div className="flex-1 bg-destructive/10 rounded-xl p-4">
                  <p className="text-sm font-medium text-destructive line-through">{item.before}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-primary shrink-0" />
                <div className="flex-1 rounded-xl p-4 bg-primary/10">
                  <p className="text-sm font-bold text-primary">{item.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
