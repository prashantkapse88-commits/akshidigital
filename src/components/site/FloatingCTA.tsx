import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP = "919630040607";
const PHONE = "+919630040607";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
          "Hi Akshi Digital, I'd like to discuss a website/SEO project."
        )}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow transition hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
      <a
        href={`tel:${PHONE}`}
        aria-label="Call Akshi Digital"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-white shadow-glow transition hover:scale-110"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
