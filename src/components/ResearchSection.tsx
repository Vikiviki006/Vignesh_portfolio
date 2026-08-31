import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { BookOpen, ExternalLink, FileText, Sparkles } from "lucide-react";

const papers = [
  {
    id: "p1",
    title: "Generative AI for Personalized Energy Consumption Behavior Analysis",
    publisher: "IGI Global",
    date: "Dec 2025",
    link: "https://www.linkedin.com/posts/vignesh-k-2ab69629b_book-activity-7396451693862768642-5J88/",
    description:
      "Integrates Generative AI models to predict and optimize personalized household energy consumption, promoting ethical, resilient smart-grid energy ecosystems.",
    type: "Book Chapter",
  },
  {
    id: "p2",
    title: "Osteoporosis Prediction Using Machine Learning: An XGBoost Approach for Early Detection",
    publisher: "IEEE Xplore",
    date: "Aug 2025",
    link: "https://ieeexplore.ieee.org/document/11086173",
    description:
      "Engineered a diagnostic classification model utilizing XGBoost with extensive feature selection, attaining 92.4% accuracy and 98.1% precision on real clinical datasets.",
    type: "IEEE Conference Paper",
    highlight: true,
  },
  {
    id: "p3",
    title: "Enhanced Brain Tumor Detection using Deep Convolutional Neural Networks",
    publisher: "IGI Global",
    date: "May 2025",
    link: "https://www.linkedin.com/posts/vignesh-k-2ab69629b_book-chapter-activity-7329190946640658435-S8HJ/",
    description:
      "Investigated automated MRI brain tumor segmentation and classification using customized CNN architectures to improve early diagnostic accuracy.",
    type: "Book Chapter",
  },
  {
    id: "p4",
    title: "BlockChain and AI for Security and Privacy in Smart Agriculture",
    publisher: "CRC Press",
    date: "July 2026",
    link: "https://www.linkedin.com/posts/vignesh-k-2ab69629b_book-chapter-activity-7329190946640658435-S8HJ/",
    description:
      "A joint framework merging decentralized Blockchain smart contracts and AI anomaly detection to safeguard smart agricultural sensor data.",
    type: "CRC Press Book Chapter",
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="section-padding max-w-7xl mx-auto">
      <SectionHeading
        number="03"
        subtitle="RESEARCH"
        title="Peer-Reviewed Publications & Technical Papers"
        description="Published research contributions spanning machine learning diagnostics, generative AI systems, computer vision, and secure decentralized frameworks."
      />

      <div className="space-y-6">
        {papers.map((p, index) => (
          <AnimatedSection key={p.title} delay={index * 0.1}>
            <motion.a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className={`block glass-card-standard p-6 sm:p-8 hover:border-amber-500/40 transition-all duration-300 group relative overflow-hidden ${
                p.highlight ? "border-amber-500/30 bg-[#0e121b]" : ""
              }`}
            >
              {p.highlight && (
                <div className="absolute top-0 right-0 px-3 py-1 bg-amber-500 text-black font-mono text-[10px] font-bold uppercase rounded-bl-lg tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  IEEE Highlight
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2 flex-1">
                  {/* Header badges */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">
                      {p.publisher}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {p.type}
                    </span>
                    <span className="text-slate-600 text-xs">•</span>
                    <span className="text-xs font-mono text-slate-400">
                      {p.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-mono text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 font-sans leading-relaxed">
                    {p.description}
                  </p>
                </div>

                {/* Arrow CTA */}
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold group-hover:translate-x-1 transition-transform shrink-0 pt-2 md:pt-0">
                  <span>View Publication</span>
                  <ExternalLink className="w-4 h-4" />
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