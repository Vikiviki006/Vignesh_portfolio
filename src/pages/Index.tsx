import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Sparkles from "@/components/Sparkles";
import Loader from "@/components/Loader";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className={`bg-background text-foreground min-h-screen grid-bg transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Sparkles />
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
    </>
  );
};

export default Index;
