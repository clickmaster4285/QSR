import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aboutTeam from "@/assets/about-team.jpg";
import { Award, Users, Globe, Clock } from "lucide-react";

const highlights = [
  { icon: Award, value: "8+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Globe, value: "15+", label: "Countries" },
  { icon: Clock, value: "24/7", label: "Support" },
];

export default function AboutUs() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">About Us</p>
            <h2 className="section-title mb-6 text-left">
              We Build Technology That <span className="gradient-text">Feeds the World</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              SwiftPOS was founded with a simple mission: help quick-service restaurants serve better, faster, and smarter. Our team of 50+ engineers, designers, and QSR experts have spent 8 years perfecting the ultimate POS platform.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From a single-outlet burger shop to a 200-branch franchise, we've powered growth for restaurants across 15 countries. We don't just sell software — we partner with you for success.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {highlights.map((h, i) => (
                <div key={i} className="text-center">
                  <h.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-extrabold font-heading text-foreground">{h.value}</p>
                  <p className="text-xs text-muted-foreground">{h.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll stagger-2">
            <img src={aboutTeam} alt="SwiftPOS team working together" className="rounded-2xl shadow-lg w-full" loading="lazy" width={1280} height={720} />
          </div>
        </div>
      </div>
    </section>
  );
}
