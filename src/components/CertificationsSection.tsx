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
  <section id="certifications" className="section-padding max-w-6xl mx-auto">
    <SectionHeading title="Certifications" subtitle="Credentials" />

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {certs.map((c, i) => (
        <AnimatedSection key={c.title} delay={i * 0.05}>
          <motion.div
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-primary/5 blur-2xl" />

            <div className="relative flex items-start gap-4">
              
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition group-hover:scale-110 group-hover:bg-primary/20">
                <svg
                  className="w-5 h-5 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 15l-2 5l1-3h2l1 3l-2-5z" />
                  <circle cx="12" cy="9" r="6" />
                  <path d="M9 9l2 2l4-4" />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-mono text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition">
                  {c.title}
                </h3>

                <p className="text-xs text-muted-foreground mt-1">
                  {c.issuer}
                </p>

                {/* Hover CTA */}
                <div className="mt-2 text-[11px] text-primary opacity-0 group-hover:opacity-100 transition">
                  View Certificate →
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default CertificationsSection;