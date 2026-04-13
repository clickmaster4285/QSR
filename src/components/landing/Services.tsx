import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Monitor, Code, Link, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Monitor, title: "POS Development", desc: "Custom-built POS systems tailored to your restaurant's unique workflow and needs." },
  { icon: Code, title: "Custom Solutions", desc: "Bespoke software for loyalty programs, kitchen display systems, and more." },
  { icon: Link, title: "Third-Party Integrations", desc: "Seamless connections with payment gateways, delivery apps, and accounting tools." },
  { icon: Smartphone, title: "Mobile Ordering", desc: "Branded mobile apps and QR-based ordering to serve the modern customer." },
];

export default function Services() {
  const ref = useScrollAnimation();
  const scrollToContact = () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" className="section-padding bg-card" ref={ref}>
      <div className="container mx-auto text-center">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 animate-on-scroll">Services</p>
        <h2 className="section-title mb-4 animate-on-scroll">
          Beyond <span className="gradient-text">POS</span>
        </h2>
        <p className="section-subtitle mb-16 animate-on-scroll">
          We offer a full suite of technology services to power your restaurant's digital transformation.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((s, i) => (
            <div key={i} className={`animate-on-scroll stagger-${i + 1} glass-card p-8 hover-lift group text-center`}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform" style={{ background: "var(--gradient-primary)" }}>
                <s.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <Button onClick={scrollToContact} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 animate-on-scroll">
          Discuss Your Project
        </Button>
      </div>
    </section>
  );
}
