import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, Terminal } from "lucide-react";

const links = [
  { number: "01", label: "About", href: "#about" },
  { number: "02", label: "Projects", href: "#projects" },
  { number: "03", label: "Research", href: "#research" },
  { number: "04", label: "Experience", href: "#experience" },
  { number: "05", label: "Arsenal", href: "#arsenal" },
  { number: "06", label: "Certifications", href: "#certifications" },
  { number: "07", label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = links.map((l) => l.href.slice(1));
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActive(links[i].href);
          return;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (href: string) => {
    setOpen(false);
    setActive(href);
    const el = document.querySelector(href);
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#06080d]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/80 py-3"
            : "bg-transparent py-5"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12">
          {/* Brand/Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 group font-mono text-sm font-semibold tracking-tight text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-all">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="group-hover:text-amber-400 transition-colors">
              VIGNESH<span className="text-amber-500 font-bold">.K</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-1 bg-[#0d1017]/85 border border-white/[0.08] backdrop-blur-md rounded-full px-3 py-1.5 shadow-inner">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(l.href);
                  }}
                  className={`relative text-xs font-mono px-3 py-1.5 rounded-full transition-colors duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "text-amber-400 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <span className="text-[10px] text-amber-500/80 font-normal">{l.number}.</span>
                  <span>{l.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-amber-500 rounded-full shadow-[0_0_8px_#f59e0b]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/Vignesh_resume-26.pdf"
              download="Vignesh_K_Resume.pdf"
              className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-lg transition-all shadow-md shadow-amber-500/10 hover:shadow-amber-500/20 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden p-2.5 rounded-xl border border-white/10 bg-[#0d1017] text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="xl:hidden bg-[#0a0d14]/95 border-b border-white/10 backdrop-blur-2xl overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {links.map((l) => {
                const isActive = active === l.href;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(l.href);
                    }}
                    className={`flex items-center justify-between text-sm font-mono py-3 px-4 rounded-xl transition-all ${
                      isActive
                        ? "bg-amber-500/10 text-amber-400 font-semibold border border-amber-500/30"
                        : "text-slate-300 hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-amber-500 text-xs">{l.number}.</span>
                      <span>{l.label}</span>
                    </div>
                    {isActive && <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />}
                  </a>
                );
              })}

              <div className="h-px bg-white/10 my-3" />

              <a
                href="/Vignesh_resume-26.pdf"
                download="Vignesh_K_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 text-sm font-mono py-3.5 px-4 bg-amber-500 text-black font-bold rounded-xl shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
              >
                <Download className="w-4 h-4" />
                Download Resume (PDF)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
