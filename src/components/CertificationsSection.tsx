import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const certs = [
  { title: "Problem Solving", issuer: "HackerRank" },
  { title: "Introduction to Large Language Models", issuer: "NPTEL" },
  { title: "Introduction to Industry 4.0 and IoT", issuer: "NPTEL" },
  { title: "Student Jury Mobility 2.0 (24-Hour Hackathon)", issuer: "IEEE VTS" },
  { title: "SindhanAI'25 National Level Hackathon", issuer: "SRM TRP" },
  { title: "GitHub Foundations", issuer: "GitHub" },
  { title: "StudAI Workshop 2", issuer: "Elev8" },
];

const CertificationsSection = () => (
  <section id="certifications" className="section-padding max-w-7xl mx-auto">
    <SectionHeading title="Certifications" subtitle="credentials" />

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {certs.map((c, i) => (
        <AnimatedSection key={c.title} delay={i * 0.05}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card p-5 flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 15l-2 5l1-3h2l1 3l-2-5z" />
                <circle cx="12" cy="9" r="6" />
                <path d="M9 9l2 2l4-4" />
              </svg>
            </div>
            <div>
              <h3 className="font-mono text-sm font-semibold text-foreground leading-snug">
                {c.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">{c.issuer}</p>
            </div>
          </motion.div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default CertificationsSection;
