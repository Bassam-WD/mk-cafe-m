import { useEffect } from "react";
import { motion } from "framer-motion";
import logoSrc from "../imges/logo2.png";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative mb-8"
      >
        <div className="absolute inset-0 rounded-full animate-pulse glow-effect" />
        <img
          src={logoSrc}
          alt="MK Cafe Logo"
          className="relative z-10 w-40 h-40 rounded-full object-cover "
        />
      </motion.div>
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        className="font-serif text-3xl text-primary tracking-wider uppercase"
      >
        M.K CAFE
      </motion.h1>
    </motion.div>
  );
}
