import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const socials = [
  {
    label: "Email",
    value: "vikikannan8@gmail.com",
    href: "mailto:vikikannan8@gmail.com",
    icon: (
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
  {
    label: "Phone",
    value: "+91 63697 27236",
    href: "tel:+916369727236",
    icon: (
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    ),
  },
  {
    label: "LinkedIn",
    value: "Vignesh K",
    href: "https://www.linkedin.com/in/vignesh-k-2ab69629b/",
    icon: (
      <>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: "GitHub",
    value: "Vikiviki006",
    href: "https://github.com/Vikiviki006",
    icon: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    ),
  },
  {
    label: "LeetCode",
    value: "viki006",
    href: "https://leetcode.com/u/viki006/",
    icon: (
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    ),
  },
];

const ContactSection = () => (
  <section id="contact" className="section-padding max-w-7xl mx-auto">
    <SectionHeading title="Get In Touch" subtitle="contact" />

    <AnimatedSection>
      <div className="max-w-2xl">
        <p className="text-muted-foreground mb-8 leading-relaxed">
          I'm always open to discussing ML projects, research collaborations, or internship opportunities. Feel free to reach out!
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="flex items-center gap-4 glass-card p-4 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {s.icon}
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{s.label}</p>
                <p className="text-sm font-mono text-foreground group-hover:text-primary transition-colors">
                  {s.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  </section>
);

export default ContactSection;
