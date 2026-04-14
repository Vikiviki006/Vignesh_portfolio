import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-background text-foreground min-h-screen grid-bg">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ResearchSection />
    <ExperienceSection />
    <CertificationsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
