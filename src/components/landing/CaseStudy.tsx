import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import caseStudyImg from "@/assets/case-study.jpg";

const metrics = [
  { value: "60%", label: "Faster Order Processing" },
  { value: "85%", label: "Reduction in Errors" },
  { value: "35%", label: "Increase in Revenue" },
  { value: "4.9★", label: "Customer Rating" },
];

export default function CaseStudy() {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 animate-on-scroll">Case Study</p>
          <h2 className="section-title mb-4 animate-on-scroll">
            Real Results, <span className="gradient-text">Real Growth</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <img src={caseStudyImg} alt="Restaurant owner using QuickCrave analytics" className="rounded-2xl shadow-lg w-full" loading="lazy" width={1280} height={720} />
          </div>
          <div className="animate-on-scroll stagger-2">
            <h3 className="text-2xl font-bold font-heading mb-4 text-foreground">
              How "Burger Blitz" 3x'd Their Daily Orders
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Burger Blitz, a 5-outlet fast food chain, was drowning in manual processes. After implementing QuickCrave, they cut wait times from 12 minutes to under 3, eliminated 85% of order errors, and saw a 35% revenue increase within just 90 days.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((m, i) => (
                <div key={i} className="glass-card p-5 text-center">
                  <p className="text-3xl font-extrabold font-heading gradient-text">{m.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
