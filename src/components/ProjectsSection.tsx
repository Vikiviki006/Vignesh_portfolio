import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "AI-based Smart Hostel Anomaly Detection",
    description:
      "Real-time identification of abnormal activities with automated alerts and evidence capture using AI.",
    tags: ["Python", "YOLOv8", "OpenCV", "Flask"],
    link: "https://github.com/Vikiviki006",
    period: "Jun – Oct 2025",
  },
  {
    title: "Osteoporosis Risk Prediction System",
    description:
      "Logistic Regression, Random Forest & SVM models with an interactive clinical web interface.",
    tags: ["Python", "Scikit-learn", "Flask", "ML"],
    link: "https://github.com/Vikiviki006",
    period: "Mar 2024",
  },
  {
    title: "GYM Fit Track App",
    description:
      "Modern fitness tracking frontend with React.js, reusable components and responsive UI.",
    tags: ["React", "JavaScript", "CSS", "UI/UX"],
    link: "https://github.com/Vikiviki006",
    period: "Present",
  },
  {
    title: "Movie Recommendation App",
    description:
      "React-based app integrating TMDB API with dynamic rendering, search, and responsive UI.",
    tags: ["React", "TMDB API", "JavaScript"],
    link: "https://github.com/Vikiviki006",
    period: "Dec 2025",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding max-w-6xl mx-auto">
    <SectionHeading title="Projects" subtitle="Selected Work" />

    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p, i) => (
        <AnimatedSection key={p.title} delay={i * 0.1}>
          <motion.a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6 }}
            className="group relative block overflow-hidden rounded-xl border border-border/50 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-2xl"
          >
            {/* Glow (fixed layering) */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-primary/5 blur-2xl z-0" />

            {/* Content wrapper */}
            <div className="relative z-10">
              
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-mono text-muted-foreground">
                  {p.period}
                </span>

                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center transition group-hover:bg-primary/20 group-hover:scale-110">
                  <svg
                    className="w-4 h-4 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-mono text-lg font-semibold text-foreground group-hover:text-primary transition mb-2">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {p.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary transition group-hover:bg-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-5 text-xs text-primary opacity-0 group-hover:opacity-100 transition">
                View Project →
              </div>
            </div>
          </motion.a>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default ProjectsSection;