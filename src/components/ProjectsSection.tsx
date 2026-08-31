import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { ExternalLink, Github, Activity, ShieldAlert, FileText, CheckCircle2, Cpu } from "lucide-react";

interface Project {
  id: string;
  title: string;
  whyIBuiltThis: string;
  description: string;
  metric?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  period: string;
  isFeatured?: boolean;
  type: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "Osteoporosis Risk Prediction & Clinical Interface",
    whyIBuiltThis: "Designed to bridge the gap between complex machine learning risk models and clinical diagnostic workflows, providing physicians with an interpretable assessment tool.",
    description: "Supervised classification engine combining XGBoost, Random Forest, and SVM models with extensive clinical feature engineering. Integrated into a responsive Flask web application providing instant patient risk stratification and feature attribution.",
    metric: "92.4% Accuracy & 98.1% Precision on real-world medical data (Published in IEEE Xplore)",
    tags: ["Python", "XGBoost", "Scikit-Learn", "Flask", "Healthcare AI"],
    githubUrl: "https://github.com/Vikiviki006/Osterioporosis",
    liveUrl: "https://ieeexplore.ieee.org/document/11086173",
    period: "Mar 2024 – Aug 2025",
    isFeatured: true,
    type: "Clinical ML & Web App",
  },
  {
    id: "02",
    title: "AI-based Smart Hostel Anomaly Detection",
    whyIBuiltThis: "Built to automate continuous security surveillance across institutional dormitories, identifying unapproved movements and security triggers in real-time.",
    description: "Real-time video analytics pipeline integrating YOLOv8 object detection and OpenCV. Automatically tags anomalous movement patterns, triggers instant event alerts, and logs captured video frames for automated security reviews.",
    metric: "Sub-100ms per-frame detection latency on 1080p surveillance video feeds",
    tags: ["YOLOv8", "OpenCV", "Python", "Flask", "Computer Vision"],
    githubUrl: "https://github.com/Vikiviki006/Anamoly_detection",
    period: "Jun – Oct 2025",
    isFeatured: true,
    type: "Computer Vision & Surveillance",
  },
  {
    id: "03",
    title: "Clinical Trial Eligibility & Ranking Engine",
    whyIBuiltThis: "Created to replace slow probabilistic matching with deterministic eligibility ranking and evidence-backed patient screening.",
    description: "Hierarchical matching engine that evaluates clinical inclusion criteria, applies hard exclusion rules for patient safety, and generates audit-ready rationale logs for trial coordinators.",
    tags: ["FastAPI", "Python", "React", "Deterministic Ranking"],
    githubUrl: "https://github.com/Vikiviki006",
    period: "2026",
    type: "Healthcare Backend",
  },
  {
    id: "04",
    title: "Multi-Agent AI Workflow Orchestrator",
    whyIBuiltThis: "Engineered at Payoda Technologies to automate complex multi-step research and backend task pipelines through autonomous AI agent collaboration.",
    description: "Asynchronous backend orchestration using CrewAI and FastAPI. Coordinates specialized agent roles to extract data, validate inputs, and produce structured analytical outputs.",
    tags: ["CrewAI", "FastAPI", "Python", "Multi-Agent Systems"],
    period: "Feb 2026",
    type: "AI Agents & Systems",
  },
  {
    id: "05",
    title: "FITTrack Pro Gym Companion",
    whyIBuiltThis: "Crafted for fitness enthusiasts requiring a minimal, high-performance UI to log strength training, track progressive overload, and analyze volume trends.",
    description: "Responsive web application engineered with React and modular state management, featuring interactive volume tracking charts and custom workout routine builder.",
    tags: ["React", "JavaScript", "TailwindCSS", "State Management"],
    githubUrl: "https://github.com/Vikiviki006/FITTRACK_PRO",
    period: "2025",
    type: "Frontend Engineering",
  },
  {
    id: "06",
    title: "TMDB Movie Recommendation Engine",
    whyIBuiltThis: "Built to explore dynamic REST API data fetching, client-side debounced search, and responsive layout caching.",
    description: "Fluid media catalog web application featuring live search, detailed cast profiles, trailer modal integration, and responsive grid pagination.",
    tags: ["React", "TMDB API", "JavaScript", "REST APIs"],
    liveUrl: "https://movierecomend.vercel.app/",
    period: "Dec 2025",
    type: "Web Application",
  },
];

const ProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.isFeatured);
  const regularProjects = projects.filter((p) => !p.isFeatured);

  return (
    <section id="projects" className="section-padding max-w-7xl mx-auto">
      <SectionHeading
        number="02"
        subtitle="PROJECTS"
        title="Featured Machine Learning & Full-Stack Systems"
        description="Production ML models, computer vision pipelines, and backend microservices built for real operational problems."
      />

      {/* FEATURED PROJECTS — Differentiated Wide 2-Column Asymmetric Cards */}
      <div className="space-y-10 mb-16">
        {featuredProjects.map((p, index) => (
          <AnimatedSection key={p.id} delay={index * 0.1}>
            <div className="glass-card-hero overflow-hidden group hover:border-amber-500/40 transition-all duration-500">
              <div className="grid lg:grid-cols-12 items-stretch">
                
                {/* Left Info Column */}
                <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    {/* Header bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                          {p.id} // FEATURED
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {p.type}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-slate-400">
                        {p.period}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-mono text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors mb-3">
                      {p.title}
                    </h3>

                    {/* Why I Built This — Persona Requirement */}
                    <div className="mb-4 p-3.5 rounded-xl bg-white/[0.03] border-l-2 border-amber-500 text-xs font-sans text-amber-200/90 leading-relaxed">
                      <span className="font-mono text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                        Why I Built This:
                      </span>
                      "{p.whyIBuiltThis}"
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-5 font-sans">
                      {p.description}
                    </p>

                    {/* Real Metric Badge */}
                    {p.metric && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{p.metric}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Tech chips */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.05] text-slate-300 border border-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-lg bg-white/[0.05] hover:bg-amber-500 text-slate-200 hover:text-black font-semibold transition-all"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Repository</span>
                        </a>
                      )}
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 hover:text-amber-300 font-semibold transition-colors"
                        >
                          <span>View Details</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Interactive/Visual Mockup Panel */}
                <div className="lg:col-span-5 bg-[#0a0d14] p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute inset-0 tech-grid-pattern opacity-40" />

                  {p.id === "01" ? (
                    <div className="relative z-10 space-y-4">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-white/10 pb-2">
                        <span className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-amber-400" />
                          <span>XGBoost Diagnostics</span>
                        </span>
                        <span className="text-emerald-400 font-bold">AUC 0.96</span>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-xs font-mono mb-1">
                            <span className="text-slate-400">Clinical Accuracy</span>
                            <span className="text-amber-400 font-bold">92.4%</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                            <div className="h-full bg-amber-500 rounded-full w-[92.4%]" />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs font-mono mb-1">
                            <span className="text-slate-400">Model Precision</span>
                            <span className="text-amber-400 font-bold">98.1%</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                            <div className="h-full bg-amber-400 rounded-full w-[98.1%]" />
                          </div>
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] font-mono text-amber-200 leading-snug">
                        Feature Attribution: Bone Mineral Density (-0.42), Age (+0.31), BMI (-0.18)
                      </div>
                    </div>
                  ) : (
                    <div className="relative z-10 space-y-4">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-white/10 pb-2">
                        <span className="flex items-center gap-2">
                          <ShieldAlert className="w-4 h-4 text-amber-400 animate-pulse" />
                          <span>YOLOv8 Stream 01</span>
                        </span>
                        <span className="text-amber-400 font-bold">LIVE 30FPS</span>
                      </div>
                      <div className="h-36 rounded-xl bg-black/60 border border-amber-500/30 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-[10px] font-mono border border-red-500/40">
                          ALERT: Movement Triggered
                        </div>
                        <FileText className="w-6 h-6 text-amber-400 mb-1" />
                        <span className="text-xs font-mono text-slate-300">Surveillance Frame Logged</span>
                        <span className="text-[10px] font-mono text-slate-500 mt-1">Latency: 84ms • Conf: 94.8%</span>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* SECONDARY PROJECTS — Dynamic Asymmetric Card Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {regularProjects.map((p, index) => (
          <AnimatedSection key={p.id} delay={index * 0.1}>
            <div className="glass-card-standard p-6 md:p-7 h-full flex flex-col justify-between group hover:border-amber-500/30">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span className="text-amber-400 font-bold">{p.id} // {p.type}</span>
                  <span>{p.period}</span>
                </div>

                <h3 className="font-mono text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                  {p.title}
                </h3>

                {/* Why I Built This Callout */}
                <div className="my-3 p-3 rounded-lg bg-white/[0.03] border-l-2 border-amber-500/70 text-xs font-sans text-amber-200/90 leading-snug">
                  <span className="font-mono text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-0.5">
                    Why I Built This:
                  </span>
                  "{p.whyIBuiltThis}"
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-5 font-sans">
                  {p.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-white/10 text-xs font-mono">
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live App</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;