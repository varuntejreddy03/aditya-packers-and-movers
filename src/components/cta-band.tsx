import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { quickEnquiryMessage, site, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

export function CtaBand({
  title = "Planning a move in Rajahmundry?",
  text = "Tell us what you are shifting and where. We will look at the goods, distance and access, then share a clear quote.",
  className,
}: {
  title?: string;
  text?: string;
  className?: string;
}) {
  return (
    <section className={cn("mx-auto max-w-7xl px-4 sm:px-6", className)}>
      <div className="paper-grid relative overflow-hidden rounded-2xl bg-primary px-6 py-12 text-primary-foreground sm:px-12">
        <span
          className="tape-stripe absolute -right-10 top-8 hidden h-8 w-56 rotate-[-12deg] opacity-80 sm:block"
          aria-hidden="true"
        />
        <div className="relative max-w-2xl">
          <h2 className="text-balance font-display text-2xl font-bold sm:text-3xl">{title}</h2>
          <p className="mt-3 text-primary-foreground/85">{text}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="cta" size="lg" className="arrow-nudge">
              <Link to="/contact">
                Get a Free Quote
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="onNavy" size="lg">
              <a href={site.phonePrimaryTel}>
                <Phone />
                {site.phonePrimaryDisplay}
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="lg">
              <a
                href={whatsappUrl(quickEnquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle />
                WhatsApp us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
