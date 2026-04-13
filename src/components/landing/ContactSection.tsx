import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Send, Clock } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const ref = useScrollAnimation();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-card" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 animate-on-scroll">Contact Us</p>
          <h2 className="section-title mb-4 animate-on-scroll">
            Get Your Free <span className="gradient-text">POS Demo Today</span>
          </h2>
          <p className="section-subtitle animate-on-scroll">
            Limited slots available this month. Book your personalized demo now — no commitment required.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-3 animate-on-scroll">
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                  <Input
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="bg-muted/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                  <Input
                    type="email"
                    placeholder="john@restaurant.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="bg-muted/50"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                <Input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="bg-muted/50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                <Textarea
                  placeholder="Tell us about your restaurant and what you're looking for..."
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="bg-muted/50"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                <Send className="w-5 h-5 mr-2" /> Request Free Demo
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                🔒 Your information is 100% secure. We never share your data.
              </p>
            </form>
          </div>

          <div className="lg:col-span-2 animate-on-scroll stagger-2 space-y-6">
            <div className="glass-card p-6 flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-foreground">Address</p>
                <p className="text-sm text-muted-foreground">123 Tech Park, Suite 400<br />San Francisco, CA 94105</p>
              </div>
            </div>
            <div className="glass-card p-6 flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">hello@swiftpos.com</p>
              </div>
            </div>
            <div className="glass-card p-6 flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-foreground">Phone</p>
                <p className="text-sm text-muted-foreground">+1 (555) 987-6543</p>
              </div>
            </div>
            <div className="glass-card p-6 flex items-start gap-4">
              <Clock className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-foreground">Working Hours</p>
                <p className="text-sm text-muted-foreground">Mon — Fri: 9 AM – 6 PM<br />Support: 24/7</p>
              </div>
            </div>

            <div className="rounded-2xl p-6 text-center" style={{ background: "var(--gradient-primary)" }}>
              <p className="text-primary-foreground font-bold font-heading text-lg mb-1">⏰ Limited Offer</p>
              <p className="text-primary-foreground/80 text-sm">Book this month and get 3 months free support + setup!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
