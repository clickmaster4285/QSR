import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#" className={`text-2xl font-extrabold font-heading tracking-tight ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
          Swift<span className="gradient-text">POS</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-primary-foreground/80"
              }`}
            >
              {l.label}
            </button>
          ))}
          <Button onClick={() => scrollTo("#contact")} size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
            Get Free Demo
          </Button>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <X className={scrolled ? "text-foreground" : "text-primary-foreground"} />
          ) : (
            <Menu className={scrolled ? "text-foreground" : "text-primary-foreground"} />
          )}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-card/95 backdrop-blur-lg border-t border-border px-4 py-4 space-y-3">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="block w-full text-left text-sm font-medium text-foreground py-2"
            >
              {l.label}
            </button>
          ))}
          <Button onClick={() => scrollTo("#contact")} className="w-full bg-primary text-primary-foreground rounded-full">
            Get Free Demo
          </Button>
        </div>
      )}
    </nav>
  );
}
