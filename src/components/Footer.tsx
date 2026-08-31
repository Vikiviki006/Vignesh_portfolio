import { Terminal, Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-white/10 py-10 px-6 bg-[#06080d] relative z-10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
          <Terminal className="w-3.5 h-3.5" />
        </div>
        <span className="text-slate-300 font-semibold">Vignesh K</span>
        <span>— AI / ML Engineer & Backend Developer</span>
      </div>

      <div className="flex items-center gap-4">
        <span>Coimbatore, Tamil Nadu, India</span>
        <span className="text-slate-700">•</span>
        <span>© 2026 Vignesh K</span>
      </div>
    </div>
  </footer>
);

export default Footer;
