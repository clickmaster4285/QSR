import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, TrendingUp } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [hero1, hero2, hero3];
const stats = [
  { icon: Zap, value: "3x", label: "Faster Billing" },
  { icon: Users, value: "500+", label: "Restaurants" },
  { icon: TrendingUp, value: "40%", label: "More Revenue" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {slides.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt=""
            className={`w-full h-full object-cover ${i === current ? "animate-hero-zoom" : ""}`}
            width={1920}
            height={1080}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/40" />

      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/15 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-1.5 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">#1 POS Solution for QSRs</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-heading leading-tight mb-6 text-foreground">
            Serve Faster. Sell More.{" "}
            <span className="gradient-text">Run Your Restaurant Smarter.</span>
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-xl text-muted-foreground">
            Boost profits, eliminate order errors, and delight every customer with the smartest POS built exclusively for quick-service restaurants.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-base animate-pulse-glow"
            >
              Get Free Demo <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              variant="outline"
              className="rounded-full px-8 text-base border-foreground/30 text-foreground hover:bg-foreground/10"
            >
              Explore Features
            </Button>
          </div>

          <div className="flex flex-wrap gap-8">
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold font-heading text-foreground">{s.value}</p>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-primary" : "w-2 bg-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
