import { motion } from "framer-motion";
import { ArrowUpRight, Download, Terminal, ChevronDown, Cpu, GitBranch, Layers, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Restrained Architectural Blueprint Data Visual Graphic (Right side desktop background) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-1/2 h-[500px] pointer-events-none opacity-20 lg:opacity-30 z-0 flex items-center justify-center">
        <svg viewBox="0 0 600 600" className="w-full h-full max-w-[550px]" fill="none">
          {/* Blueprint Radial Grids and Concentric Geometry */}
          <circle cx="300" cy="300" r="220" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 8" opacity="0.4" />
          <circle cx="300" cy="300" r="150" stroke="#64748b" strokeWidth="1" opacity="0.3" />
          <circle cx="300" cy="300" r="80" stroke="#f59e0b" strokeWidth="1.5" opacity="0.5" />

          {/* Connecting Asynchronous Data Pipeline Axes */}
          <path d="M 120 300 H 480" stroke="#64748b" strokeWidth="1" strokeDasharray="2 4" />
          <path d="M 300 120 V 480" stroke="#64748b" strokeWidth="1" strokeDasharray="2 4" />
          <path d="M 172 172 L 428 428" stroke="#f59e0b" strokeWidth="1" opacity="0.4" />
          <path d="M 428 172 L 172 428" stroke="#64748b" strokeWidth="1" opacity="0.3" />

          {/* Active System Processing Nodes */}
          <circle cx="300" cy="80" r="4" fill="#f59e0b" />
          <circle cx="300" cy="520" r="4" fill="#f59e0b" />
          <circle cx="80" cy="300" r="4" fill="#38bdf8" />
          <circle cx="520" cy="300" r="4" fill="#38bdf8" />
          <circle cx="300" cy="300" r="6" fill="#f59e0b" className="animate-ping" style={{ animationDuration: '3s' }} />
          <circle cx="300" cy="300" r="6" fill="#f59e0b" />
        </svg>
      </div>

      {/* Profile Image - circular, animated, right side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 0 }}
        animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.3 },
          scale: { duration: 0.8, delay: 0.3, ease: "easeOut" },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.1 },
        }}
        className="hidden lg:flex absolute right-12 xl:right-24 top-1/2 -translate-y-1/2 z-10 items-center justify-center"
      >
        <div className="relative group">
          {/* Rotating gradient ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-3 rounded-full bg-[conic-gradient(from_0deg,#f59e0b,#38bdf8,transparent,#f59e0b)] opacity-60 blur-[2px]"
          />

          {/* Soft glow pulse */}
          <div className="absolute -inset-6 rounded-full bg-amber-500/20 blur-2xl animate-pulse" style={{ animationDuration: '3s' }} />

          {/* Static border ring */}
          <div className="absolute -inset-1 rounded-full border border-amber-500/30" />

      {/* Profile Image - circular, animated, aligned with paragraph */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 0 }}
        animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.3 },
          scale: { duration: 0.8, delay: 0.3, ease: "easeOut" },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.1 },
        }}
        className="hidden lg:flex absolute right-12 xl:right-24 top-1/2 -translate-y-[65%] z-10 items-center justify-center"
      >
        <div className="relative group">
          {/* Rotating gradient ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-3 rounded-full bg-[conic-gradient(from_0deg,#f59e0b,#38bdf8,transparent,#f59e0b)] opacity-60 blur-[2px]"
          />

          {/* Soft glow pulse */}
          <div className="absolute -inset-8 rounded-full bg-amber-500/20 blur-2xl animate-pulse" style={{ animationDuration: '3s' }} />

          {/* Static border ring */}
          <div className="absolute -inset-1 rounded-full border border-amber-500/30" />

          {/* Image - centered, full photo visible */}
          <div className="relative w-56 h-56 xl:w-64 xl:h-64 rounded-full bg-white border-2 border-[#0d1017] shadow-2xl shadow-amber-500/20 overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <img
              src="/Vignesh K.png"
              alt="Vignesh K"
              className="w-full h-full object-contain object-center scale-110"
            />
          </div>

          {/* Small orbiting dot accent */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_2px_rgba(245,158,11,0.6)]" />
          </motion.div>
        </div>
      </motion.div>

          {/* Small orbiting dot accent */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_2px_rgba(245,158,11,0.6)]" />
          </motion.div>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        <div className="max-w-3xl">
          {/* Identity Tag & Role */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/25 mb-6"
          >
            <Terminal className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-mono text-amber-300 font-semibold tracking-wide uppercase">
              AI / ML Engineer & Backend Developer
            </span>
          </motion.div>

          {/* Headline - First Person, Specific */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-mono font-bold tracking-tight text-white leading-[1.12]"
          >
            Hi, I'm <span className="text-amber-400">Vignesh K</span>. I build production ML models & high-performance backend microservices.
          </motion.h1>

          {/* Value Prop Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl"
          >
            Currently building scalable FastAPI backend services and multi-agent AI systems at <strong className="text-white font-medium">Payoda Technologies</strong>. 
            I specialize in computer vision, diagnostic algorithms (like 92% accurate XGBoost osteoporosis prediction), and microservices infrastructure.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector("#projects");
                if (el) {
                  const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 80;
                  window.scrollTo({ top: offsetTop, behavior: "smooth" });
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black font-mono text-sm font-bold rounded-xl transition-all shadow-lg shadow-amber-500/20 active:scale-95"
            >
              <span>View Featured Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="/Vignesh_resume-26.pdf"
              download="Vignesh_K_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0d1017] hover:bg-white/[0.06] text-slate-200 border border-white/10 hover:border-amber-500/40 font-mono text-sm font-semibold rounded-xl transition-all active:scale-95"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Real Metrics with Context - One Line Context Each */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
                <Cpu className="w-4.5 h-4.5" />
              </div>
              <div>
                <div className="font-mono text-xl font-bold text-white">92% Acc / 98% Prec</div>
                <div className="text-xs text-slate-400 mt-0.5 leading-snug font-sans">
                  XGBoost Osteoporosis Prediction on Clinical Data
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
                <GitBranch className="w-4.5 h-4.5" />
              </div>
              <div>
                <div className="font-mono text-xl font-bold text-white">4 Publications</div>
                <div className="text-xs text-slate-400 mt-0.5 leading-snug font-sans">
                  IEEE Xplore, IGI Global, & CRC Press research
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
                <Layers className="w-4.5 h-4.5" />
              </div>
              <div>
                <div className="font-mono text-xl font-bold text-white">8.75 CGPA</div>
                <div className="text-xs text-slate-400 mt-0.5 leading-snug font-sans">
                  B.E. Computer Science • 9.0 Honours GPA
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Smooth scroll hint */}
      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          const el = document.querySelector("#about");
          if (el) {
            const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
          }
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2 text-slate-400 hover:text-amber-400 transition-colors flex flex-col items-center gap-1 group"
        aria-label="Scroll down to About section"
      >
        <span className="text-[10px] font-mono tracking-widest text-slate-400 group-hover:text-amber-400 uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.a>
    </section>
  );
};

export default HeroSection;