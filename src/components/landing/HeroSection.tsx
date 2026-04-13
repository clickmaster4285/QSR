import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, TrendingUp, Clock, CreditCard, Coffee } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [hero1, hero2, hero3];
const stats = [
  { icon: Zap, value: 3, label: "Faster Billing", suffix: "x", prefix: "" },
  { icon: Users, value: 500, label: "Restaurants", suffix: "+", prefix: "" },
  { icon: TrendingUp, value: 40, label: "More Revenue", suffix: "%", prefix: "" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Animate counters when component mounts
    const duration = 2000; // 2 seconds
    const steps = 60;
    const intervals = stats.map((stat, index) => {
      const stepValue = stat.value / steps;
      let currentStep = 0;
      
      const interval = setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.min(Math.floor(stepValue * currentStep), stat.value);
            return newCounters;
          });
        } else {
          clearInterval(interval);
        }
      }, duration / steps);
      
      return interval;
    });

    return () => intervals.forEach(interval => clearInterval(interval));
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

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />

      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4">
        <div className="max-w-4xl">
         
      

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading leading-tight mb-6">
            <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              Serve Faster,   Sell More
            </span>
            {/* <br /> */}
            {/* <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              Sell More.
            </span> */}
            <br />
            <span className="relative">
              <span className="absolute inset-0 blur-xl bg-primary/30 rounded-full"></span>
              <span className="relative text-primary drop-shadow-[0_0_15px_rgba(255,107,0,0.5)]">
                Run Your QSR Smarter
              </span>
            </span>
          </h1>

    

          <p className="text-base md:text-lg mb-8 max-w-2xl text-white/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            The smartest POS built exclusively for quick-service restaurants. 
            Handle rush hours like a pro and turn every customer into a repeat buyer.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 text-base animate-pulse-glow shadow-lg shadow-primary/30"
            >
               Get Free Demo <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              variant="outline"
              className="rounded-full px-8 text-base border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Explore Features
            </Button>
          </div>

          {/* Stats with white glow behind text */}
          <div className="flex flex-wrap gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className="relative">
                  {/* White glow effect */}
                  <div className="absolute inset-0 blur-2xl bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <stat.icon className="w-8 h-8 text-primary drop-shadow-[0_0_8px_rgba(255,107,0,0.5)]" />
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold font-heading text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                    {stat.prefix}{counters[i]}{stat.suffix}
                  </p>
                  <p className="text-sm text-white/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-6 text-xs text-white/70">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                Trusted by 500+ QSRs
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                4.9/5 from 1,200+ reviews
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                24/7 QSR-dedicated support
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-primary shadow-lg shadow-primary/50" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}