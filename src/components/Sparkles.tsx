import { motion } from "framer-motion";

const BackgroundMotif = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* Subtle blueprint grid background */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f59e0b 1px, transparent 1px),
            linear-gradient(to bottom, #f59e0b 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Radial fade to soften grid edges */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#080a0f]/60 to-[#080a0f]" />

      {/* Restrained subtle ambient warm glow behind hero top right */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-amber-500/[0.03] rounded-full blur-[140px]" />
      <div className="absolute top-1/2 -left-48 w-[500px] h-[500px] bg-blue-500/[0.015] rounded-full blur-[160px]" />

      {/* Architectural crosshair indicators */}
      <div className="absolute top-24 left-12 text-[10px] font-mono text-white/10 tracking-widest hidden lg:block">
        SYS_VER // 2026.4 • LATENCY &lt;100ms
      </div>
      <div className="absolute top-24 right-12 text-[10px] font-mono text-white/10 tracking-widest hidden lg:block">
        COORD // 11.0168° N, 76.9558° E
      </div>
      <div className="absolute bottom-12 left-12 text-[10px] font-mono text-white/10 tracking-widest hidden lg:block">
        STATUS // ACTIVE ENGINE
      </div>
    </div>
  );
};

export default BackgroundMotif;

