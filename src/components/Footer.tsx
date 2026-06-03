import logoSrc from "../imges/logo.png";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border pt-16 pb-24 md:pb-16 px-6 relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <img
            src={logoSrc}
            alt="MK Cafe"
            className="w-20 h-20 rounded-full mb-6 border border-primary/20"
          />
          <p className="text-muted-foreground text-sm font-light leading-relaxed">
            A premium luxury café experience. Unhurried, tactile, and confident.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-xl text-primary mb-6">Contact</h4>
          <ul className="space-y-3">
            <li>
              <a
                href="tel:+201021578480"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                01021578480
              </a>
            </li>
            <li>
              <a
                href="tel:+201016282029"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                01016282029
              </a>
            </li>
            <li>
              <a
                href="tel:+20503232454"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                0503232454
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl text-primary mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <button
                onClick={() => scrollTo("menu")}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Menu
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("location")}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Location
              </button>
            </li>
            <li>
              <a
                href="https://www.google.com/maps?q=31.243698120117188,31.80351448059082&z=17&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Get Directions
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl text-primary mb-6">Social</h4>
          <div className="flex gap-4">
            <a
              href="https://wa.me/201021578480"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-[#25D366] hover:border-[#25D366] transition-all"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Created by Bassam Mahmoud</p>
        <a
          href="mailto:bassam223mahmoud@gmail.com"
          className="mt-2 md:mt-0 font-serif text-primary/50 text-base"
        >
          bassam223mahmoud@gmail.com
        </a>
      </div>
    </footer>
  );
}
