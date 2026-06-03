import { motion } from "framer-motion";
import logoSrc from "../imges/logo2.png";

export function Hero({ onOrderClick }: { onOrderClick: () => void }) {
  // const particles = Array.from({ length: 15 });

  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-100dvh flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />


      <div className="relative z-10 flex flex-col items-center  px-6 text-center">
        <motion.img
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          src={logoSrc}
          alt="MK Cafe"
          className="w-32 h-32 md:w-48 md:h-48 rounded-10 object-cover mb-2 ]"
        />

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-primary "
        >
          Good Coffee,
        </motion.h1>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground mb-12"
        >
          Good Mood
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto max-w-sm"
        >
          <button
            onClick={scrollToMenu}
            data-testid="button-explore-menu"
            className="w-full sm:w-48 py-4 bg-primary text-primary-foreground font-semibold rounded-full uppercase tracking-wider text-sm transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
          >
            Explore Menu
          </button>
          <button
            onClick={onOrderClick}
            data-testid="button-hero-order"
            className="w-full sm:w-48 py-4 bg-transparent text-primary border border-primary font-semibold rounded-full uppercase tracking-wider text-sm transition-all hover:bg-primary/10 hover:scale-105 active:scale-95"
          >
            Order Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
