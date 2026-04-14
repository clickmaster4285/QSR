import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Zap, Shield, Headphones, Wrench } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Blazing Speed", desc: "Process 200+ orders per hour without breaking a sweat.", stat: "0.3s", statLabel: "Avg. Transaction" },
  { icon: Shield, title: "99.9% Uptime", desc: "Enterprise-grade reliability so your business never stops.", stat: "99.9%", statLabel: "Uptime SLA" },
  { icon: Headphones, title: "24/7 Support", desc: "Expert help whenever you need it — calls, chat, or on-site.", stat: "< 5min", statLabel: "Response Time" },
  { icon: Wrench, title: "Fully Customizable", desc: "Tailor menus, workflows, and reports to match your brand.", stat: "100%", statLabel: "Configurable" },
];

export default function WhyChooseUs() {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding bg-card" ref={ref}>
      <div className="container mx-auto text-center">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 animate-on-scroll">Why Choose Us</p>
        <h2 className="section-title mb-4 animate-on-scroll">
          Built for <span className="gradient-text">Performance</span>
        </h2>
        <p className="section-subtitle mb-16 animate-on-scroll">
          We obsess over speed, reliability, and your success.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className={`animate-on-scroll stagger-${i + 1} glass-card p-8 hover-lift group`}>
              <r.icon className="w-7 h-7 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-2xl font-extrabold font-heading gradient-text mb-1">{r.stat}</p>
              <p className="text-xs text-muted-foreground mb-4">{r.statLabel}</p>
           
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
