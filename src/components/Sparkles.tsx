import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Sparkles = () => {
  const [sparkles, setSparkles] = useState<{ id: number; size: number; left: string; top: string; duration: number }[]>([]);

  useEffect(() => {
    const newSparkles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 3 + 2,
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.7)]"
          style={{ width: sparkle.size, height: sparkle.size, left: sparkle.left, top: sparkle.top }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;
