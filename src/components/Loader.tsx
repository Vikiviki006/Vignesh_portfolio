import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 1500);
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] bg-background flex flex-col items-center justify-center pointer-events-auto"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-12 h-12 rounded-full border-4 border-border border-t-primary"
      />
    </motion.div>
  );
};

export default Loader;
