import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const papers = [
  {
    title: "Generative AI for Personalized Energy Consumption Behavior Analysis",
    publisher: "IGI Global",
    date: "Dec 2025",
    link: "https://www.linkedin.com/posts/vignesh-k-2ab69629b_book-activity-7396451693862768642-5J88/?utm_source=share&utm_medium=member_android&rcm=ACoAAEiJuyMB57W2dZyVyazoXbaMpR1iW7yZnsA",
    description:
      "Uses Generative AI to predict and optimize personalized energy usage. Enhances resilient, ethical energy systems with human behavior insights.",
  },
  {
    title:
      "Osteoporosis Prediction Using Machine Learning: An XGBoost Approach for Early Detection",
    publisher: "IEEE Xplore",
    date: "Aug 2025",
    link: "https://ieeexplore.ieee.org/document/11086173",
    description:
      "Developed an osteoporosis prediction model using XGBoost, achieving 92% accuracy and 98% precision on real-world clinical datasets.",
  },
  {
    title: "Enhanced Brain Tumor Detection using CNNs",
    publisher: "IGI Global",
    date: "May 2025",
    link: "https://www.linkedin.com/posts/vignesh-k-2ab69629b_book-chapter-activity-7329190946640658435-S8HJ/?utm_source=share&utm_medium=member_android&rcm=ACoAAEiJuyMB57W2dZyVyazoXbaMpR1iW7yZnsA",
    description:
      "Worked on tumor segmentation and classification using deep learning architectures. Collaborated with a research team to improve detection accuracy.",
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="section-padding max-w-6xl mx-auto">
      <SectionHeading
        title="Research & Publications"
        subtitle="Selected work"
      />

      <div className="relative border-l border-border space-y-10 pl-6">
        {papers.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.1}>
            <motion.a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.015 }}
              className="block group"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[9px] mt-2 h-4 w-4 rounded-full bg-primary shadow-md group-hover:scale-110 transition" />

              {/* Card */}
              <div className="glass-card p-6 md:p-7 transition-all duration-300 group-hover:shadow-xl group-hover:border-primary/30 border border-transparent">
                
                {/* Header */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-mono px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {p.publisher}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    {p.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-mono text-base md:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>

                {/* CTA */}
                <div className="mt-4 text-xs text-primary opacity-0 group-hover:opacity-100 transition">
                  View Paper →
                </div>
              </div>
            </motion.a>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default ResearchSection;