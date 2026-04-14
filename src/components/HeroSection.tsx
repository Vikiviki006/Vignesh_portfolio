import { motion } from "framer-motion";
import { Download } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Refined ambient background */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-background to-[hsl(225,20%,8%)]" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[100px]" />
    </div>

    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="font-mono text-primary text-sm tracking-widest mb-4"
      >
        {"// MACHINE LEARNING ENGINEER"}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="text-5xl md:text-7xl lg:text-8xl font-mono font-bold leading-tight"
      >
        Hi, I'm{" "}
        <span className="text-gradient">Vignesh K</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-6"
      >
        Full Stack & ML Developer building scalable web applications, predictive models, and AI-powered solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-4 mt-10"
      >
        <a
          href="#projects"
          className="px-8 py-3 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity glow-primary"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          download="Vignesh_K_Resume.pdf"
          className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-mono text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </a>
        <a
          href="#contact"
          className="px-8 py-3 border border-primary/30 text-primary font-mono text-sm font-semibold rounded-lg hover:bg-primary/10 transition-colors"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="flex items-center justify-center gap-8 md:gap-16 mt-16"
      >
        {[
          { value: "3+", label: "Publications" },
          { value: "4+", label: "Projects" },
          { value: "8.6", label: "CGPA" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-2xl md:text-3xl font-mono font-bold text-primary">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="w-5 h-8 border-2 border-primary/40 rounded-full flex justify-center pt-1.5">
        <div className="w-1 h-2 bg-primary rounded-full" />
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
