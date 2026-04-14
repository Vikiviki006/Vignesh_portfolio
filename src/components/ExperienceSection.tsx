import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Machine Learning Intern",
    company: "Synovers Technologies",
    type: "Internship",
    date: "Jan 2025 – Feb 2025",
    points: [
      "Built an osteoporosis prediction model using Decision Trees with feature engineering and hyperparameter tuning.",
      "Developed a Flask app for real-time predictions and improved model interpretability.",
    ],
  },
  {
    role: "AI Developer Intern",
    company: "Your Second Company",
    type: "Internship",
    date: "Jun 2024 – Aug 2024",
    points: [
      "Worked on computer vision models using OpenCV and YOLO for real-time object detection.",
      "Integrated AI models with a web interface to deliver live predictions and analytics.",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);

  // scroll progress for timeline
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // animate line height
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="section-padding max-w-6xl mx-auto">
      <SectionHeading title="Experience" subtitle="Internships" />

      <div ref={ref} className="relative pl-6 space-y-12">
        
        {/* Animated timeline line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-0 top-0 w-px bg-primary origin-top"
        />

        {experiences.map((exp, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <motion.div
              whileHover={{ scale: 1.015 }}
              className="relative group"
            >
              {/* Dot (perfectly ON the line) */}
              <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-primary shadow-md transition group-hover:scale-125" />

              {/* Card */}
              <div className="ml-6 glass-card p-6 md:p-8 border border-transparent transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-xl">
                
                {/* Header */}
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xs font-mono px-3 py-1 bg-accent/20 text-accent-foreground rounded-full">
                    {exp.type}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    {exp.date}
                  </span>
                </div>

                {/* Role */}
                <h3 className="font-mono text-lg md:text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition">
                  {exp.role}
                </h3>

                {/* Company */}
                <p className="text-primary font-mono text-sm mb-4">
                  {exp.company}
                </p>

                {/* Points */}
                <ul className="space-y-3">
                  {exp.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-1 shrink-0">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;