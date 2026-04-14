import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "Ravi Sharma", role: "Owner, Spice Express", text: "QuickCrave cut our billing time by 70%. Our staff loves how easy it is, and customers notice the faster service.", rating: 5 },
  { name: "Priya Patel", role: "Manager, Fresh Bites", text: "The inventory tracking alone saved us thousands in waste. And the analytics help us plan our menu perfectly.", rating: 5 },
  { name: "Ahmed Khan", role: "CEO, Burger Hub Chain", text: "Managing 12 branches from one dashboard changed everything. We scaled from 3 to 12 outlets in a year with QuickCrave.", rating: 5 },
  { name: "Lisa Chen", role: "Owner, Wok & Roll", text: "24/7 support is real — I called at 2 AM on a Saturday and got help in 3 minutes. That's unheard of.", rating: 5 },
];

export default function Testimonials() {
  const ref = useScrollAnimation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);

  return (
    <section className="section-padding bg-card" ref={ref}>
      <div className="container mx-auto text-center">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 animate-on-scroll">Testimonials</p>
        <h2 className="section-title mb-16 animate-on-scroll">
          Loved by <span className="gradient-text">Restaurant Owners</span>
        </h2>

        <div className="max-w-3xl mx-auto relative animate-on-scroll">
          <div className="glass-card p-10 md:p-14">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-lg md:text-xl text-foreground italic leading-relaxed mb-8">
              "{testimonials[current].text}"
            </p>
            <div>
              <p className="font-bold font-heading text-foreground">{testimonials[current].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
