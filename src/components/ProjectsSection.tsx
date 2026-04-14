import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "AI-based Smart Hostel Anomaly Detection",
    description: "Real-time identification of abnormal activities with automated alerts and evidence capture using AI.",
    tags: ["Python", "YOLOv8", "OpenCV", "Flask"],
    link: "https://github.com/Vikiviki006",
    period: "Jun – Oct 2025",
  },
  {
    title: "Osteoporosis Risk Prediction System",
    description: "Logistic Regression, Random Forest & SVM models with an interactive clinical web interface.",
    tags: ["Python", "Scikit-learn", "Flask", "ML"],
    link: "https://github.com/Vikiviki006",
    period: "March 2024",
  },
  {
    title: "GYM Fit Track App",
    description: "Modern fitness tracking frontend with React.js, reusable components and responsive UI.",
    tags: ["React", "JavaScript", "CSS", "UI/UX"],
    link: "https://github.com/Vikiviki006",
    period: "Present",
  },
  {
    title: "Movie Recommendation App",
    description: "React-based app integrating TMDB API with dynamic rendering, search, and responsive UI.",
    tags: ["React", "TMDB API", "JavaScript"],
    link: "https://github.com/Vikiviki006",
    period: "Dec 2025",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding max-w-7xl mx-auto">
    <SectionHeading title="Projects" subtitle="what I built" />

    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p, i) => (
        <AnimatedSection key={p.title} delay={i * 0.1}>
          <motion.a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="block glass-card p-6 h-full group"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs font-mono text-muted-foreground">{p.period}</span>
              <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
            <h3 className="font-mono text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
              {p.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs font-mono px-2 py-1 bg-primary/10 text-primary rounded">
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
