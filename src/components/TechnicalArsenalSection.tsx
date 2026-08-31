import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Cpu, Server, Code2, Terminal, Layers, Sparkles } from "lucide-react";

interface SkillCategory {
  id: string;
  name: string;
  icon: JSX.Element;
  description: string;
  skills: {
    name: string;
    level: string;
    context: string;
    highlight?: boolean;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "aiml",
    name: "AI & Machine Learning",
    icon: <Cpu className="w-5 h-5 text-amber-400" />,
    description: "Predictive modeling, computer vision pipelines, and deep neural architectures.",
    skills: [
      { name: "XGBoost", level: "Advanced", context: "92% Osteoporosis Risk Model", highlight: true },
      { name: "PyTorch", level: "Proficient", context: "Deep Learning & Vision Models" },
      { name: "YOLOv8", level: "Production", context: "Sub-100ms Surveillance Feed", highlight: true },
      { name: "Scikit-Learn", level: "Advanced", context: "Feature Engineering & Tuning" },
      { name: "OpenCV", level: "Production", context: "Real-time Video Analytics" },
      { name: "NumPy & Pandas", level: "Advanced", context: "Clinical Data Processing" },
      { name: "Model Interpretability", level: "Applied", context: "SHAP / Feature Attribution" },
    ],
  },
  {
    id: "backend",
    name: "Backend & Systems",
    icon: <Server className="w-5 h-5 text-amber-400" />,
    description: "Asynchronous microservices, AI multi-agent orchestrations, and REST APIs.",
    skills: [
      { name: "FastAPI", level: "Production", context: "Payoda Technologies Microservices", highlight: true },
      { name: "CrewAI", level: "Production", context: "Multi-Agent Workflow Engine", highlight: true },
      { name: "Python 3.11+", level: "Advanced", context: "Async Core Language" },
      { name: "Flask", level: "Production", context: "ML Web Service Endpoints" },
      { name: "RESTful APIs", level: "Advanced", context: "Schema & Route Design" },
      { name: "Asynchronous I/O", level: "Production", context: "High-Throughput Pipelines" },
      { name: "Postman", level: "Proficient", context: "API Testing & Documentation" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend & Tooling",
    icon: <Code2 className="w-5 h-5 text-amber-400" />,
    description: "Modern component-driven web interfaces, state management, and build tools.",
    skills: [
      { name: "React", level: "Proficient", context: "FITTrack & TMDB Web Apps", highlight: true },
      { name: "TypeScript", level: "Proficient", context: "Type-Safe Application Logic" },
      { name: "JavaScript (ES6+)", level: "Advanced", context: "DOM & Async UI Execution" },
      { name: "TailwindCSS", level: "Advanced", context: "Custom Design Systems" },
      { name: "Git & GitHub", level: "Advanced", context: "CI/CD & Code Reviews", highlight: true },
      { name: "Vite / Bun", level: "Proficient", context: "Modern Web Toolchain" },
      { name: "Linux / Bash", level: "Proficient", context: "Environment Scripting" },
    ],
  },
];

const TechnicalArsenalSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="arsenal" className="section-padding max-w-7xl mx-auto">
      <SectionHeading
        number="05"
        subtitle="TECHNICAL ARSENAL"
        title="Core Stack & Engineering Tooling"
        description="Applied technical capabilities across machine learning research, asynchronous backend microservices, and modern web application development."
      />

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
            activeCategory === "all"
              ? "bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20"
              : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/10"
          }`}
        >
          All Domains
        </button>
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
              activeCategory === cat.id
                ? "bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20"
                : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/10"
            }`}
          >
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Categories & Skills Grid */}
      <div className="space-y-8">
        <AnimatePresence mode="wait">
          {filteredCategories.map((category, catIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, delay: catIdx * 0.08 }}
              className="glass-card-standard p-6 sm:p-8"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-mono text-lg font-bold text-white">
                      {category.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-sans mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-block text-xs font-mono text-slate-400 bg-white/[0.04] px-3 py-1 rounded-md border border-white/5">
                  {category.skills.length} Technologies
                </span>
              </div>

              {/* Skills Interactive Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -3, scale: 1.01 }}
                    className={`p-4 rounded-xl border transition-all duration-200 ${
                      skill.highlight
                        ? "bg-amber-500/[0.04] border-amber-500/30 hover:border-amber-500/60 shadow-lg shadow-amber-500/[0.03]"
                        : "bg-white/[0.02] border-white/[0.06] hover:border-white/20 hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-sm font-bold text-white flex items-center gap-2">
                        {skill.name}
                        {skill.highlight && (
                          <Sparkles className="w-3 h-3 text-amber-400" />
                        )}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          skill.level === "Production"
                            ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                            : skill.level === "Advanced"
                            ? "bg-amber-500/15 text-amber-300 border border-amber-500/30"
                            : "bg-slate-500/15 text-slate-300 border border-slate-500/30"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 font-sans leading-snug">
                      {skill.context}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TechnicalArsenalSection;
