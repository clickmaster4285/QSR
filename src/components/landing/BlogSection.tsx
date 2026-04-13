import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Calendar } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";

const posts = [
  { title: "5 Ways a Smart POS Boosts QSR Revenue", date: "Apr 5, 2026", tag: "Growth", excerpt: "Discover how automation, upselling prompts, and real-time analytics directly impact your bottom line.", image: blog1 },
  { title: "Why Cloud-Based POS is the Future of Fast Food", date: "Mar 22, 2026", tag: "Technology", excerpt: "On-premise servers are dead. Learn why restaurants are moving to the cloud — and why you should too.", image: blog2 },
  { title: "Reducing Food Waste with Inventory Intelligence", date: "Mar 10, 2026", tag: "Operations", excerpt: "Smart inventory tracking can cut waste by up to 30%. Here's how data-driven restaurants do it.", image: blog3 },
  { title: "The Complete Guide to QSR Digital Transformation", date: "Feb 28, 2026", tag: "Strategy", excerpt: "From kiosks to kitchen displays, a roadmap for modernizing every aspect of your restaurant.", image: blog4 },
];

export default function BlogSection() {
  const ref = useScrollAnimation();

  return (
    <section id="blog" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 animate-on-scroll">Blog</p>
          <h2 className="section-title mb-4 animate-on-scroll">
            Insights & <span className="gradient-text">Resources</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, i) => (
            <article key={i} className={`animate-on-scroll stagger-${i + 1} glass-card overflow-hidden hover-lift group cursor-pointer`}>
              <div className="aspect-video overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={512} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{post.tag}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                </div>
                <h3 className="font-bold font-heading text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
             
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
