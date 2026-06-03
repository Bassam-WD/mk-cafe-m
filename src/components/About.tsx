import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative bg-secondary overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl text-primary mb-8">The Experience</h2>
          <p className="text-lg md:text-2xl text-foreground font-light leading-relaxed mb-6">
            Step into a world where exceptional taste meets unparalleled atmosphere. 
            M.K Cafe is an upscale haven in the heart of Egypt, dedicated to the art of fine beverages and artisanal indulgence.
          </p>
          <p className="text-base md:text-xl text-muted-foreground font-light leading-relaxed">
            From our masterfully crafted coffee to our luxurious ambiance, every detail is designed to elevate your everyday moments into something truly extraordinary. Unhurried, tactile, and confident.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
