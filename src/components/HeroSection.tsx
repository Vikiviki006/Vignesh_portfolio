import { motion, Variants } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const AnimatedName = ({ text }: { text: string }) => {
  const letters = Array.from(text);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.2 },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 18, stiffness: 160 },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70 font-extrabold"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const HeroSection = () => {
  const ref = useRef(null);

  // subtle scroll fade
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-primary/[0.03] rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-accent/[0.02] rounded-full blur-[120px]" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(hsl(40 10% 90%) 0.5px, transparent 0.5px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Status */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-border/80 bg-card/50"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-mono text-muted-foreground">
            Open to opportunities
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold leading-[1.1] tracking-tight"
        >
          <span className="text-foreground">
            <AnimatedName text="Vignesh K" />
          </span>
          <br />
          <span className="text-foreground">Machine Learning</span>
          <br />
          <span className="text-foreground">Engineer & </span>
          <span className="text-primary">Full Stack Developer</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mt-6 leading-relaxed"
        >
          I'm{" "}
          <strong className="text-foreground font-medium">
            Vignesh K
          </strong>{" "}
          — I build predictive models, AI-powered applications, and scalable
          full-stack solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          {/* Primary */}
          <a
            href="#projects"
            className="px-7 py-3 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-lg hover:brightness-110 transition-all"
          >
            View Projects
          </a>

          {/* Secondary */}
          <a
            href="/resume.pdf"
            download="Vignesh_K_Resume.pdf"
            className="inline-flex items-center gap-2 px-7 py-3 border border-border text-foreground font-mono text-sm font-semibold rounded-lg hover:border-primary/40 transition-all"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>

          {/* Tertiary */}
          <a
            href="#contact"
            className="px-4 py-3 text-muted-foreground font-mono text-sm hover:text-primary transition-colors"
          >
            Contact →
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="flex items-center justify-center mt-20 divide-x divide-border"
        >
          {[
            { value: "3+", label: "Publications" },
            { value: "4+", label: "Projects" },
            { value: "8.6", label: "CGPA" },
          ].map((s) => (
            <div key={s.label} className="px-6 text-center">
              <div className="text-2xl md:text-3xl font-mono font-bold text-primary">
                {s.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

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
};

export default HeroSection;