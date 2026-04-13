import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import PainPoints from "@/components/landing/PainPoints";
import Solutions from "@/components/landing/Solutions";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import CaseStudy from "@/components/landing/CaseStudy";
import Testimonials from "@/components/landing/Testimonials";
import AboutUs from "@/components/landing/AboutUs";
import Services from "@/components/landing/Services";
import BlogSection from "@/components/landing/BlogSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PainPoints />
      <Solutions />
      <Features />
      <HowItWorks />
      <WhyChooseUs />
      <CaseStudy />
      <Testimonials />
      <AboutUs />
      <Services />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
