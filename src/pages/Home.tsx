import { useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MenuSection } from "@/components/MenuSection";
import { LocationSection } from "@/components/LocationSection";
import { OrderBottomSheet } from "@/components/OrderBottomSheet";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { Footer } from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [orderOpen, setOrderOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <main
        className={`min-h-100dvh bg-background text-foreground transition-opacity duration-1000 ${loading ? "opacity-0 h-screen overflow-hidden" : "opacity-100"}`}
      >
        <Hero onOrderClick={() => setOrderOpen(true)} />
        <About />
        <MenuSection />
        <LocationSection />
        <Footer />
      </main>

      {!loading && (
        <>
          <OrderBottomSheet open={orderOpen} onOpenChange={setOrderOpen} />
          <MobileBottomNav onOrderClick={() => setOrderOpen(true)} />

          <button
            onClick={() => setOrderOpen(true)}
            className="hidden md:flex fixed bottom-8 right-8 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-40 items-center justify-center"
            data-testid="floating-order-button"
          >
            <ShoppingBag size={24} />
          </button>
        </>
      )}
    </>
  );
}
