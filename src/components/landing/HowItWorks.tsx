import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Monitor, Settings, Rocket } from "lucide-react";

const steps = [
  { icon: Phone, title: "Contact Us", desc: "Reach out via our form or call. We'll understand your unique needs." },
  { icon: Monitor, title: "Free Demo", desc: "See QuickCrave in action with a personalized walkthrough of every feature." },
  { icon: Settings, title: "Easy Setup", desc: "Our team configures everything — menu, pricing, integrations — in 24 hours." },
  { icon: Rocket, title: "Go Live!", desc: "Start serving faster from day one with full training and support." },
];

export default function HowItWorks() {
  const ref = useScrollAnimation();

  return (
    <section id="how-it-works" className="section-padding" ref={ref}>
      <div className="container mx-auto text-center">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 animate-on-scroll">How It Works</p>
        <h2 className="section-title mb-4 animate-on-scroll">
          Up & Running in <span className="gradient-text">4 Simple Steps</span>
        </h2>
        <p className="section-subtitle mb-16 animate-on-scroll">
          Getting started is effortless. We handle the heavy lifting so you can focus on your food.
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute top-24 left-[12%] right-[12%] h-0.5 bg-border" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className={`animate-on-scroll stagger-${i + 1} relative`}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg" style={{ background: "var(--gradient-primary)" }}>
                  <s.icon className="w-9 h-9 text-primary-foreground" />
                </div>
                <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-2 text-xs font-bold text-primary bg-primary/10 rounded-full w-6 h-6 flex items-center justify-center z-20">
                  {i + 1}
                </span>
                <h3 className="text-lg font-bold font-heading mb-2 text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
