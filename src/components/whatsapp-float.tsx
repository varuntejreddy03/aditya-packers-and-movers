import { MessageCircle } from "lucide-react";

import { quickEnquiryMessage, whatsappUrl } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl(quickEnquiryMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-4 bottom-[5.5rem] z-40 flex h-13 w-13 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lift transition-transform hover:scale-105 lg:bottom-6 lg:h-14 lg:w-14"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
