import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Award, BookOpen, Brain, Code, Cpu, Server, Sparkles } from "lucide-react";

const focusAreas = [
  {
    icon: <Brain className="w-5 h-5 text-amber-400" />,
    title: "Predictive ML & Vision Pipelines",
    description: "Developing custom XGBoost risk classifiers, YOLOv8 surveillance models, and diagnostic neural networks evaluated on real clinical datasets.",
  },
  {
    icon: <Server className="w-5 h-5 text-amber-400" />,
    title: "Asynchronous Microservices & AI Agents",
    description: "Architecting high-throughput FastAPI REST endpoints, multi-agent CrewAI orchestration, and resilient async task execution engines.",
  },
  {
    icon: <Code className="w-5 h-5 text-amber-400" />,
    title: "Full-Stack Data Engineering",
    description: "Crafting responsive React interface applications, telemetry dashboards, and client-side REST API integration systems.",
  },
];

const AboutSection = () => (
  <section id="about" className="section-padding max-w-7xl mx-auto">
    <SectionHeading
      number="01"
      subtitle="ABOUT"
      title="Engineering Practical Intelligence & Reliable Systems"
      description="A background rooted in machine learning research, full-stack API architecture, and scalable software execution."
    />

    <div className="grid lg:grid-cols-12 gap-8 items-start">
      {/* Left Column: First-Person Narrative */}
      <AnimatedSection className="lg:col-span-7">
        <div className="glass-card-standard p-6 sm:p-8 space-y-5 text-slate-300 leading-relaxed font-sans text-base">
          <p>
            I'm a B.E. Computer Science student specializing in{" "}
            <strong className="text-amber-400 font-semibold">AI & Machine Learning</strong> at KPR Institute of Engineering and Technology, Coimbatore.
          </p>

          <p>
            My engineering philosophy centers around <strong className="text-white font-medium">taking machine learning off the workbench into production</strong>. 
            Whether optimizing an XGBoost osteoporosis diagnostic model to hit 92.4% clinical accuracy or writing asynchronous FastAPI endpoints for real-time inference at Payoda Technologies, I care deeply about model interpretability, API latency, and software maintainability.
          </p>

          <p>
            Beyond code, I serve as the <strong className="text-white font-medium">Joint Secretary of the IEEE Computational Intelligence Society</strong>, 
            where I lead technical workshops, compete in national hackathons (like SindhanAI'25), and collaborate on peer-reviewed research published in IEEE Xplore, IGI Global, and CRC Press.
          </p>

          {/* Academic Badge Row */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300">
              <Award className="w-4 h-4 text-amber-400" />
              <span>8.75 CGPA (Honours 9.0)</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300">
              <BookOpen className="w-4 h-4 text-slate-400" />
              <span>IEEE CIS Joint Secretary</span>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Right Column: Focus Areas */}
      <AnimatedSection delay={0.2} className="lg:col-span-5 space-y-4">
        {focusAreas.map((area) => (
          <motion.div
            key={area.title}
            whileHover={{ x: 4 }}
            className="glass-card-subtle p-5 hover:border-amber-500/30 hover:bg-[#0e121b]/90 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-black transition-all shrink-0">
                {area.icon}
              </div>
              <div>
                <h3 className="font-mono text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                  {area.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-sans">
                  {area.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
