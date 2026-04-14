import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Subtle warm ambient background */}
    <div className="absolute inset-0 bg-background">
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-primary/[0.03] rounded-full blur-[150px]" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-accent/[0.02] rounded-full blur-[120px]" />
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(hsl(40 10% 90%) 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>

    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-border/80 bg-card/50"
      >
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-xs font-mono text-muted-foreground">Open to opportunities</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold leading-[1.1] tracking-tight"
      >
        <span className="text-foreground">Machine Learning</span>
        <br />
        <span className="text-foreground">Engineer & </span>
        <span className="text-gradient">Developer</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.5 }}
        className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mt-6 leading-relaxed"
      >
        I'm <strong className="text-foreground font-medium">Vignesh K</strong> — I build predictive models, AI-powered applications, and scalable full-stack solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-3 mt-10"
      >
        <a
          href="#projects"
          className="px-7 py-3 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-lg hover:brightness-110 transition-all glow-primary"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          download="Vignesh_K_Resume.pdf"
          className="inline-flex items-center gap-2 px-7 py-3 bg-card border border-border text-foreground font-mono text-sm font-semibold rounded-lg hover:border-primary/40 hover:bg-card/80 transition-all"
        >
          <Download className="w-4 h-4" />
          Resume
        </a>
        <a
          href="#contact"
          className="px-7 py-3 text-muted-foreground font-mono text-sm font-semibold hover:text-foreground transition-colors"
        >
          Contact →
        </a>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="flex items-center justify-center gap-10 md:gap-16 mt-20"
      >
        {[
          { value: "3+", label: "Publications" },
          { value: "4+", label: "Projects" },
          { value: "8.6", label: "CGPA" },
        ].map((s, i) => (
          <div key={s.label} className="text-center flex items-center gap-10">
            <div>
              <div className="text-2xl md:text-3xl font-mono font-bold text-primary">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.label}</div>
            </div>
            {i < 2 && <div className="hidden md:block w-px h-8 bg-border" />}
          </div>
        ))}
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.a
      href="#about"
      animate={{ y: [0, 6, 0] }}
      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
    >
      <ArrowDown className="w-5 h-5" />
    </motion.a>
  </section>
);

export default HeroSection;
