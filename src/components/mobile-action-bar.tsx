import { MessageCircle, Phone } from "lucide-react";

import { quickEnquiryMessage, site, whatsappUrl } from "@/lib/site";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 backdrop-blur lg:hidden">
      <div className="grid grid-cols-2 gap-2 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        <a
          href={site.phonePrimaryTel}
          className="flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary text-sm font-semibold text-primary-foreground"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call now
        </a>
        <a
          href={whatsappUrl(quickEnquiryMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 items-center justify-center gap-2 rounded-md bg-whatsapp text-sm font-semibold text-whatsapp-foreground"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
