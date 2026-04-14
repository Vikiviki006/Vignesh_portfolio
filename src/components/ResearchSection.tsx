import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const papers = [
  {
    title: "Generative AI for Personalized Energy Consumption Behavior Analysis",
    publisher: "IGI Global",
    date: "Dec 2025",
    description: "Uses Generative AI to predict and optimize personalized energy usage. Enhances resilient, ethical energy systems with human behavior insights.",
  },
  {
    title: "Osteoporosis Prediction Using Machine Learning: An XGBoost Approach for Early Detection",
    publisher: "IEEE Xplore",
    date: "Aug 2025",
    description: "Developed an osteoporosis prediction model using XGBoost, achieving 92% accuracy and 98% precision on real-world clinical datasets.",
  },
  {
    title: "Enhanced Brain Tumor Detection using CNNs",
    publisher: "IGI Global",
    date: "May 2025",
    description: "Worked on tumor segmentation and classification using deep learning architectures. Collaborated with a research team to improve detection accuracy.",
  },
];

const ResearchSection = () => (
  <section id="research" className="section-padding max-w-7xl mx-auto">
    <SectionHeading title="Research & Publications" subtitle="my papers" />

    <div className="space-y-6">
      {papers.map((p, i) => (
        <AnimatedSection key={p.title} delay={i * 0.1}>
          <motion.div
            whileHover={{ x: 6 }}
            className="glass-card p-6 md:p-8 border-l-2 border-l-primary"
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xs font-mono px-3 py-1 bg-primary/10 text-primary rounded-full">
                {p.publisher}
              </span>
              <span className="text-xs font-mono text-muted-foreground">{p.date}</span>
            </div>
            <h3 className="font-mono text-base md:text-lg font-semibold text-foreground mb-2">
              {p.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
          </motion.div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default ResearchSection;
