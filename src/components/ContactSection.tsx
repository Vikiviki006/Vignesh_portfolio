import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Mail, Phone, Linkedin, Github, Code2, ArrowUpRight, MessageSquare } from "lucide-react";

const socials = [
  {
    label: "Email Direct",
    value: "vikikannan8@gmail.com",
    href: "mailto:vikikannan8@gmail.com",
    subtext: "Fastest response for engineering inquiries",
    icon: <Mail className="w-5 h-5 text-amber-400" />,
  },
  {
    label: "Phone / WhatsApp",
    value: "+91 63697 27236",
    href: "tel:+916369727236",
    subtext: "Direct voice call or messaging",
    icon: <Phone className="w-5 h-5 text-amber-400" />,
  },
  {
    label: "LinkedIn Network",
    value: "Vignesh K",
    href: "https://www.linkedin.com/in/vignesh-k-2ab69629b/",
    subtext: "Professional history & publications",
    icon: <Linkedin className="w-5 h-5 text-amber-400" />,
  },
  {
    label: "GitHub Repositories",
    value: "Vikiviki006",
    href: "https://github.com/Vikiviki006",
    subtext: "Source code & ML research repos",
    icon: <Github className="w-5 h-5 text-amber-400" />,
  },
  {
    label: "LeetCode Profile",
    value: "viki006",
    href: "https://leetcode.com/u/viki006/",
    subtext: "Algorithmic problem solving record",
    icon: <Code2 className="w-5 h-5 text-amber-400" />,
  },
];

const ContactSection = () => (
  <section id="contact" className="section-padding max-w-7xl mx-auto">
    <SectionHeading
      number="07"
      subtitle="CONTACT"
      title="Initiate Collaboration or Technical Discussion"
      description="Interested in building high-performance AI services, microservices architecture, or reviewing research opportunities? Let's connect."
    />

    <AnimatedSection>
      <div className="max-w-4xl">
        {/* Intro sentence folding availability naturally */}
        <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/25 mb-10 backdrop-blur-md">
          <div className="flex items-start gap-3">
            <MessageSquare className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
            <p className="text-slate-200 text-sm sm:text-base font-sans leading-relaxed">
              I am currently open to full-time <strong className="text-amber-400 font-semibold">AI/ML Engineering roles</strong>, asynchronous backend microservices architecture opportunities, and applied AI research collaborations. Feel free to reach out directly through any of the channels below.
            </p>
          </div>
        </div>

        {/* Premium Interactive Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0f17]/90 backdrop-blur-xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent pointer-events-none" />

              <div>
                {/* Header Row with Icon & Arrow Shift */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black">
                    {s.icon}
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-amber-400 group-hover:border-amber-500/40 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Content */}
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                  {s.label}
                </p>
                <p className="text-base font-mono font-bold text-white group-hover:text-amber-400 transition-colors truncate">
                  {s.value}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5">
                <p className="text-[11px] font-sans text-slate-400">
                  {s.subtext}
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