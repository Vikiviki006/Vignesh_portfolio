import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Award, CheckCircle2, ExternalLink, Code2, Cpu, Trophy, Terminal } from "lucide-react";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: "ai-data" | "software" | "hackathon";
  categoryLabel: string;
  date?: string;
  accentColor: string;
  credentialUrl?: string;
}

const certs: Certification[] = [
  {
    id: "c1",
    title: "Introduction to Large Language Models",
    issuer: "NPTEL",
    category: "ai-data",
    categoryLabel: "AI & Data Science",
    date: "2024",
    accentColor: "border-amber-500/50",
  },
  {
    id: "c2",
    title: "Data Analytics with Python",
    issuer: "NPTEL",
    category: "ai-data",
    categoryLabel: "AI & Data Science",
    date: "2024",
    accentColor: "border-amber-500/50",
  },
  {
    id: "c3",
    title: "Prompt Engineering: Shaping Better AI Responses",
    issuer: "IBM SkillsBuild",
    category: "ai-data",
    categoryLabel: "AI & Data Science",
    date: "2025",
    accentColor: "border-amber-500/50",
  },
  {
    id: "c4",
    title: "Problem Solving (Advanced)",
    issuer: "HackerRank",
    category: "software",
    categoryLabel: "Software Engineering",
    date: "Verified",
    accentColor: "border-blue-500/50",
  },
  {
    id: "c5",
    title: "GitHub Foundations",
    issuer: "GitHub",
    category: "software",
    categoryLabel: "Software Engineering",
    date: "2025",
    accentColor: "border-blue-500/50",
  },
  {
    id: "c6",
    title: "Algouniversity Tech Fellowship 2025",
    issuer: "Algouniversity",
    category: "hackathon",
    categoryLabel: "Fellowships & Competitions",
    date: "2025",
    accentColor: "border-purple-500/50",
  },
  {
    id: "c7",
    title: "SindhanAI'25 National Level Hackathon",
    issuer: "SRM TRP Engineering College",
    category: "hackathon",
    categoryLabel: "Fellowships & Competitions",
    date: "2025",
    accentColor: "border-purple-500/50",
  },
  {
    id: "c8",
    title: "Student Jury Mobility 2.0 (24-Hour Hackathon)",
    issuer: "IEEE VTS",
    category: "hackathon",
    categoryLabel: "Fellowships & Competitions",
    date: "2024",
    accentColor: "border-purple-500/50",
  },
  {
    id: "c9",
    title: "Introduction to Industry 4.0 and IoT",
    issuer: "NPTEL",
    category: "software",
    categoryLabel: "Software Engineering",
    date: "2024",
    accentColor: "border-blue-500/50",
  },
  {
    id: "c10",
    title: "Python (Basic)",
    issuer: "HackerRank",
    category: "software",
    categoryLabel: "Software Engineering",
    date: "Verified",
    accentColor: "border-blue-500/50",
  },
  {
    id: "c11",
    title: "Java (Basic)",
    issuer: "HackerRank",
    category: "software",
    categoryLabel: "Software Engineering",
    date: "Verified",
    accentColor: "border-blue-500/50",
  },
  {
    id: "c12",
    title: "StudAI Workshop 2",
    issuer: "Elev8",
    category: "ai-data",
    categoryLabel: "AI & Data Science",
    date: "2025",
    accentColor: "border-amber-500/50",
  },
];

const CertificationsSection = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredCerts =
    filter === "all" ? certs : certs.filter((c) => c.category === filter);

  return (
    <section id="certifications" className="section-padding max-w-7xl mx-auto">
      <SectionHeading
        number="06"
        subtitle="CERTIFICATIONS"
        title="Verified Credentials & Technical Recognition"
        description="Formal certifications, hackathon achievements, and technical fellowships earned across machine learning, software engineering, and IoT."
      />

      {/* Filter Chips */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <button
          onClick={() => setFilter("all")}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
            filter === "all"
              ? "bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20"
              : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/10"
          }`}
        >
          All Credentials ({certs.length})
        </button>
        <button
          onClick={() => setFilter("ai-data")}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
            filter === "ai-data"
              ? "bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20"
              : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/10"
          }`}
        >
          AI & Data Science
        </button>
        <button
          onClick={() => setFilter("software")}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
            filter === "software"
              ? "bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20"
              : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/10"
          }`}
        >
          Software Engineering
        </button>
        <button
          onClick={() => setFilter("hackathon")}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
            filter === "hackathon"
              ? "bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20"
              : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/10"
          }`}
        >
          Hackathons & Fellowships
        </button>
      </div>

      {/* Denser List / Row Layout (Non-uniform card grid) */}
      <div className="space-y-3">
        <AnimatePresence mode="wait">
          {filteredCerts.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.25, delay: i * 0.03 }}
              className="glass-card-subtle p-4 rounded-xl border border-white/[0.07] hover:border-amber-500/30 hover:bg-[#0e121b]/80 transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative overflow-hidden"
            >
              {/* Subtle Left Accent Line */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 ${
                  c.category === "ai-data"
                    ? "bg-amber-500"
                    : c.category === "software"
                    ? "bg-blue-500"
                    : "bg-purple-500"
                }`}
              />

              <div className="flex items-center gap-3.5 pl-2">
                {/* Category Icon */}
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${
                    c.category === "ai-data"
                      ? "bg-amber-500/10 border-amber-500/20 text-amber-400"
                      : c.category === "software"
                      ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
                      : "bg-purple-500/10 border-purple-500/20 text-purple-400"
                  }`}
                >
                  {c.category === "ai-data" ? (
                    <Cpu className="w-4 h-4" />
                  ) : c.category === "software" ? (
                    <Code2 className="w-4 h-4" />
                  ) : (
                    <Trophy className="w-4 h-4" />
                  )}
                </div>

                <div>
                  <h3 className="font-mono text-sm font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                    {c.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-slate-400 font-sans">
                      {c.issuer}
                    </span>
                    <span className="text-slate-600 text-xs">•</span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {c.categoryLabel}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 pl-2 sm:pl-0 border-t sm:border-t-0 border-white/5 pt-2 sm:pt-0">
                {c.date && (
                  <span className="text-xs font-mono text-slate-400 bg-white/[0.04] px-2.5 py-1 rounded border border-white/5">
                    {c.date}
                  </span>
                )}
                <div className="inline-flex items-center gap-1 text-xs font-mono text-amber-400/80 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all">
                  <span>Verified</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CertificationsSection;