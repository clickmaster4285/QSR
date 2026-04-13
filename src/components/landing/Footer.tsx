import { ArrowUp } from "lucide-react";

const links = {
  Product: ["Features", "Pricing", "Demo", "Integrations"],
  Company: ["About", "Careers", "Blog", "Contact"],
  Support: ["Help Center", "Documentation", "API", "Status"],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground/70 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <p className="text-2xl font-extrabold font-heading text-primary-foreground mb-4">
              Swift<span className="text-primary">POS</span>
            </p>
            <p className="text-sm leading-relaxed">
              The smartest POS solution built exclusively for quick-service restaurants. Serving faster since 2018.
            </p>
          </div>
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <p className="font-bold text-primary-foreground mb-4">{title}</p>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-primary transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© 2026 SwiftPOS. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors"
          >
            <ArrowUp className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>
      </div>
    </footer>
  );
}
