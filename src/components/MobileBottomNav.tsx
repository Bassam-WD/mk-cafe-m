import { Home, Coffee, MapPin, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

export function MobileBottomNav({ onOrderClick }: { onOrderClick: () => void }) {
  const [active, setActive] = useState("home");

  // Basic scroll spy to update active state
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "menu", "location"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos) {
          setActive(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-lg border-t border-border z-40 pb-safe">
      <div className="flex items-center justify-around p-4">
        <NavButton
          icon={<Home size={24} />}
          label="Home"
          isActive={active === "home"}
          onClick={() => scrollTo("home")}
          testId="nav-home"
        />
        <NavButton
          icon={<Coffee size={24} />}
          label="Menu"
          isActive={active === "menu"}
          onClick={() => scrollTo("menu")}
          testId="nav-menu"
        />
        <NavButton
          icon={<ShoppingBag size={24} />}
          label="Order"
          isActive={false}
          onClick={onOrderClick}
          testId="nav-order"
        />
        <NavButton
          icon={<MapPin size={24} />}
          label="Location"
          isActive={active === "location"}
          onClick={() => scrollTo("location")}
          testId="nav-location"
        />
      </div>
    </div>
  );
}

function NavButton({
  icon,
  label,
  isActive,
  onClick,
  testId,
}: {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
  testId: string;
}) {
  return (
    <button
      onClick={onClick}
      data-testid={testId}
      className={`flex flex-col items-center gap-1 transition-colors ${
        isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      <div className={`${isActive ? "scale-110" : "scale-100"} transition-transform`}>{icon}</div>
      <span className="text-[10px] uppercase tracking-wider">{label}</span>
    </button>
  );
}
