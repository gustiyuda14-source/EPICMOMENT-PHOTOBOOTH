import { waLink } from "@/data/site";

type WhatsAppButtonProps = {
  message: string;
  children: React.ReactNode;
  className?: string;
};

export function WhatsAppButton({ message, children, className = "" }: WhatsAppButtonProps) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream px-8 py-3 font-serif text-sm font-bold uppercase tracking-[0.15em] text-cream transition-all duration-300 hover:bg-cream hover:text-maroon-deep ${className}`}
    >
      {children}
    </a>
  );
}

export function WhatsAppFloatingButton() {
  return (
    <a
      href={waLink("Halo Epic Moment PhotoBooth, saya ingin bertanya tentang sewa photobooth.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.24-1.38a9.9 9.9 0 0 0 4.8 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.51 2 12.04 2zm5.8 14.11c-.24.68-1.38 1.3-1.91 1.38-.49.08-1.1.11-1.78-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.7-4.12-4.84-4.31-.14-.19-1.16-1.54-1.16-2.94s.72-2.09.98-2.37c.24-.27.53-.34.71-.34h.51c.16 0 .38-.06.6.46.24.57.81 1.97.88 2.11.07.14.11.3.02.49-.08.19-.13.3-.26.46-.14.16-.29.35-.41.47-.14.13-.28.28-.13.55.16.27.7 1.16 1.51 1.88 1.04.93 1.91 1.22 2.19 1.36.27.14.43.11.59-.07.16-.19.68-.79.86-1.06.19-.27.37-.22.62-.13.27.09 1.66.78 1.94.92.27.14.46.2.53.32.06.13.06.71-.18 1.39z" />
      </svg>
    </a>
  );
}
