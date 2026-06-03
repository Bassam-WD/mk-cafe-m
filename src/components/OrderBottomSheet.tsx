import { Drawer } from "vaul";
import { Phone, MapPin, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface OrderBottomSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function OrderBottomSheet({ open, onOpenChange }: OrderBottomSheetProps) {
  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/80 z-100 backdrop-blur-sm" />
        <Drawer.Content className="bg-card border-t border-border flex flex-col rounded-t-2rem h-[85vh] md:h-[60vh] mt-24 fixed bottom-0 left-0 right-0 z-101 outline-none">
          <div className="p-4 bg-card rounded-t-2rem flex-1 overflow-y-auto hide-scrollbar flex flex-col">
            <div className="mx-auto w-12 h-1.5 shrink-0 rounded-full bg-border mb-8" />
            
            <div className="flex items-center justify-between px-4 mb-8">
              <Drawer.Title className="font-serif text-3xl text-primary m-0">Order Now</Drawer.Title>
              <Drawer.Close asChild>
                <button 
                  className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="button-close-order"
                >
                  <X size={20} />
                </button>
              </Drawer.Close>
            </div>

            <div className="flex flex-col gap-4 px-4 pb-12">
              {/* Call Now Card */}
              <div className="bg-secondary border border-border p-6 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone size={24} />
                  </div>
                  <h3 className="font-serif text-xl text-foreground">Call Us</h3>
                </div>
                <div className="flex flex-col gap-3 pl-16">
                  <a href="tel:+201021578480" className="text-muted-foreground hover:text-primary transition-colors text-lg" data-testid="link-phone-1">01021578480</a>
                  <a href="tel:+201016282029" className="text-muted-foreground hover:text-primary transition-colors text-lg" data-testid="link-phone-2">01016282029</a>
                  <a href="tel:+20503232454" className="text-muted-foreground hover:text-primary transition-colors text-lg" data-testid="link-phone-3">0503232454</a>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-secondary border border-border p-6 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                    <FaWhatsapp size={28} />
                  </div>
                  <h3 className="font-serif text-xl text-foreground">WhatsApp</h3>
                </div>
                <div className="flex flex-col gap-3 pl-16">
                  <a href="https://wa.me/201021578480" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#25D366] transition-colors text-lg flex items-center justify-between group" data-testid="link-whatsapp-1">
                    Primary Number <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </a>
                  <a href="https://wa.me/201016282029" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#25D366] transition-colors text-lg flex items-center justify-between group" data-testid="link-whatsapp-2">
                    Secondary Number <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </a>
                </div>
              </div>

              {/* Directions Card */}
              <a 
                href="https://www.google.com/maps?q=31.243698120117188,31.80351448059082&z=17&hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="link-order-directions"
                className="bg-secondary border border-border p-6 rounded-2xl flex items-center gap-4 group hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-foreground">Get Directions</h3>
                  <p className="text-muted-foreground text-sm">Open in Google Maps</p>
                </div>
              </a>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
