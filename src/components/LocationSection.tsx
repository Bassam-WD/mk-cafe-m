import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export function LocationSection() {
  return (
    <section id="location" className="py-24 px-6 bg-secondary relative">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl text-primary mb-4">Find Us</h2>
          <div className="w-16 h-1 bg-primary mx-auto opacity-50 mb-12" />

          <div className="bg-card border border-border p-8 md:p-12 rounded-3xl max-w-2xl mx-auto relative overflow-hidden group hover:border-primary/30 transition-colors">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <MapPin size={32} />
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">M.K Cafe</h3>
              <p className="text-muted-foreground text-center max-w-sm mx-auto mb-8">
                Join us for an extraordinary experience. We're open daily, serving the finest coffee and ambiance.
              </p>
              
              <a
                href="https://www.google.com/maps?q=31.243698120117188,31.80351448059082&z=17&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-location-maps"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-sm transition-transform hover:scale-105 active:scale-95"
              >
                <Navigation size={18} />
                Get Directions
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
