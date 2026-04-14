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
  Clickmasters began as a small team of passionate developers with a shared vision — to build meaningful software that solves real business problems. Over time, we have grown into a full-service software development company delivering modern, scalable, and high-performance digital solutions.
</p>

<p className="text-muted-foreground leading-relaxed mb-4">
  Throughout our journey, we have worked with a wide range of clients — from early-stage startups to established enterprises across multiple industries. Each collaboration has helped us refine our approach to building web, mobile, and cloud-based applications that are practical, scalable, and impact-driven.
</p>

<p className="text-muted-foreground leading-relaxed mb-4">
  Today, Clickmasters is recognized as a trusted technology partner, helping businesses streamline operations, improve efficiency, and accelerate growth through custom software systems and modern digital platforms.
</p>

<p className="text-muted-foreground leading-relaxed mb-8">
  As a leading software development company in Pakistan, we specialize in web and mobile applications, custom software solutions, cloud integrations, and enterprise systems. Our mission is to empower businesses of all sizes with technology that drives performance, innovation, and long-term success.
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
            <img src={aboutTeam} alt="QuickCrave team working together" className="rounded-2xl shadow-lg w-full" loading="lazy" width={1280} height={720} />
          </div>
        </div>
      </div>
    </section>
  );
}
