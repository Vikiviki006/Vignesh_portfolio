import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActive(links[i].href);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-mono text-base font-bold text-foreground hover:text-primary transition-colors"
        >
          vignesh<span className="text-primary">.</span>k
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center bg-card/50 border border-border/40 rounded-full px-1 py-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(l.href);
                }}
                className={`relative text-xs px-3.5 py-1.5 rounded-full transition-all duration-200 font-mono ${
                  active === l.href
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === l.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-primary rounded-full"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="/resume.pdf"
            download="Vignesh_K_Resume.pdf"
            className="ml-4 inline-flex items-center gap-1.5 text-xs font-mono px-4 py-2 bg-primary text-primary-foreground rounded-full hover:brightness-110 transition-all font-semibold"
          >
            <Download className="w-3 h-3" />
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-foreground hover:bg-muted transition-colors"
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-16 left-4 right-4 bg-card border border-border rounded-xl shadow-2xl shadow-background/80 overflow-hidden"
          >
            <div className="flex flex-col p-3 gap-0.5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(l.href);
                  }}
                  className={`text-sm py-2.5 px-4 rounded-lg transition-all font-mono ${
                    active === l.href
                      ? "text-primary-foreground bg-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <div className="h-px bg-border my-2" />
              <a
                href="/resume.pdf"
                download="Vignesh_K_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 text-sm py-2.5 px-4 rounded-lg font-mono text-primary-foreground bg-primary font-semibold"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
