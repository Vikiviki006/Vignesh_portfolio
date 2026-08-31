import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Briefcase, Calendar, CheckCircle2, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "AI Developer & Backend Intern",
    company: "Payoda Technologies",
    type: "Internship",
    date: "Feb 2026 – Present",
    location: "Coimbatore, India",
    points: [
      "Architected scalable asynchronous backend microservices using FastAPI to support real-time data processing and model integration.",
      "Engineered multi-agent systems with CrewAI for autonomous workflow execution, automated research data extraction, and task pipeline management.",
      "Optimized API query structures and asynchronous handlers to maintain high-throughput service reliability under load.",
    ],
    tech: ["FastAPI", "CrewAI", "Python 3.11", "REST Microservices", "AsyncIO"],
    metric: "Production Multi-Agent Pipeline",
  },
  {
    role: "Machine Learning Intern",
    company: "Synovers Technologies",
    type: "Internship",
    date: "Jan 2025 – Feb 2025",
    location: "Remote / India",
    points: [
      "Engineered an osteoporosis risk prediction model using XGBoost & Decision Trees with custom clinical feature extraction and hyperparameter tuning.",
      "Achieved 92% diagnostic accuracy and 98% precision on real clinical data, leading to peer-reviewed IEEE publication.",
      "Built a lightweight Flask API and web interface for instant risk evaluation and interpretability visualization.",
    ],
    tech: ["XGBoost", "Python", "Scikit-Learn", "Flask", "Healthcare ML"],
    metric: "92% Diagnostic Accuracy / 98% Precision",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section id="experience" className="section-padding max-w-7xl mx-auto">
      <SectionHeading
        number="04"
        subtitle="EXPERIENCE"
        title="Engineering & Industry Internships"
        description="Hands-on industry experience building production backend microservices, autonomous multi-agent AI systems, and diagnostic ML models."
      />

      <div ref={ref} className="relative mt-12">
        {/* Continuous Central Progress Line for Desktop / Left for Mobile */}
        <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
        
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-4 lg:left-1/2 top-0 w-px bg-amber-500 -translate-x-1/2 origin-top shadow-[0_0_8px_#f59e0b]"
        />

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <AnimatedSection key={exp.company} delay={index * 0.15}>
                <div className={`relative flex flex-col lg:flex-row items-start ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}>
                  
                  {/* Timeline Dot Node */}
                  <div className="absolute left-4 lg:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#080a0f] border-2 border-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                      <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                  </div>

                  {/* Card Container */}
                  <div className={`w-full lg:w-1/2 pl-12 lg:pl-0 ${
                    isEven ? "lg:pr-12 lg:text-right" : "lg:pl-12"
                  }`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="glass-card-standard p-6 sm:p-8 hover:border-amber-500/30 transition-all group"
                    >
                      {/* Header Row */}
                      <div className={`flex flex-wrap items-center gap-2 mb-3 ${
                        isEven ? "lg:justify-end" : "justify-start"
                      }`}>
                        <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">
                          {exp.type}
                        </span>
                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.date}</span>
                        </span>
                      </div>

                      {/* Title & Company */}
                      <h3 className="font-mono text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-amber-400 font-mono text-sm font-semibold mt-1">
                        {exp.company} <span className="text-slate-500 text-xs">• {exp.location}</span>
                      </p>

                      {/* Metric Banner if available */}
                      {exp.metric && (
                        <div className={`my-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono ${
                          isEven ? "lg:flex-row-reverse" : ""
                        }`}>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Key Impact: {exp.metric}</span>
                        </div>
                      )}

                      {/* Bullet points */}
                      <ul className={`mt-4 space-y-2.5 text-sm text-slate-300 font-sans leading-relaxed ${
                        isEven ? "lg:text-right" : "text-left"
                      }`}>
                        {exp.points.map((point, pIdx) => (
                          <li key={pIdx} className={`flex items-start gap-2 ${
                            isEven ? "lg:flex-row-reverse" : ""
                          }`}>
                            <ChevronRight className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Chips */}
                      <div className={`mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-1.5 ${
                        isEven ? "lg:justify-end" : "justify-start"
                      }`}>
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.04] text-slate-300 border border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;