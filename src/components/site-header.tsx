import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Clock, Menu, Phone, X, ChevronRight } from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Utility strip */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-2 text-[12px] sm:px-6">
          <p className="flex min-w-0 items-center gap-2 font-medium">
            <Clock className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
            <span className="truncate">{site.hoursShort}</span>
          </p>
          <a
            href={site.phonePrimaryTel}
            className="flex items-center gap-2 font-semibold hover:text-accent"
          >
            <Phone className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
            {site.phonePrimaryDisplay}
          </a>
        </div>
      </div>

      <div className="border-b border-border/70 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:flex lg:justify-between">
          <BrandLogo />

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary data-[status=active]:bg-primary-soft data-[status=active]:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button asChild variant="outlineNavy" size="lg">
              <a href={site.phonePrimaryTel}>
                <Phone />
                Call now
              </a>
            </Button>
            <Button asChild variant="cta" size="lg" className="arrow-nudge">
              <Link to="/contact">
                Get a Free Quote
                <ChevronRight />
              </Link>
            </Button>
          </div>

          {/* Mobile drawer */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outlineNavy"
                size="icon"
                aria-label="Open navigation menu"
                className="min-h-11 min-w-11 lg:hidden"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm overflow-y-auto p-0">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <BrandLogo />
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Close navigation menu"
                  className="min-h-11 min-w-11"
                  onClick={() => setOpen(false)}
                >
                  <X />
                </Button>
              </div>
              <nav aria-label="Mobile" className="px-4 py-4">
                <ul className="space-y-1">
                  {navLinks.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        onClick={() => setOpen(false)}
                        activeOptions={{ exact: l.to === "/" }}
                        className="flex items-center justify-between rounded-md px-3 py-3 text-base font-semibold text-primary hover:bg-primary-soft data-[status=active]:bg-primary-soft"
                      >
                        {l.label}
                        <ChevronRight className="h-4 w-4 text-accent" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 px-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Services
                </p>
                <ul className="mt-2 space-y-1">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        onClick={() => setOpen(false)}
                        className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-primary-soft hover:text-primary"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 space-y-2 px-1 pb-6">
                  <Button asChild variant="cta" size="lg" className="w-full">
                    <Link to="/contact" onClick={() => setOpen(false)}>
                      Get a Free Quote
                    </Link>
                  </Button>
                  <Button asChild variant="outlineNavy" size="lg" className="w-full">
                    <a href={site.phonePrimaryTel}>
                      <Phone />
                      {site.phonePrimaryDisplay}
                    </a>
                  </Button>
                  <p className="pt-2 text-center text-xs text-muted-foreground">
                    {site.hoursLabel} · 7:00 AM – 9:00 PM
                  </p>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
