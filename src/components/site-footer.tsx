import { Link } from "@tanstack/react-router";
import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import { services } from "@/lib/services";
import { mapsSearchUrl, site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="paper-grid mt-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="rounded-lg bg-card/95 p-3">
              <BrandLogo />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
              Packers and movers in Rajahmundry with {site.yearsExperience} years of experience in
              safe packing, careful handling and on-time delivery for homes, offices and vehicles.
            </p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-md border border-primary-foreground/25 px-3 py-2 text-sm font-semibold hover:bg-primary-foreground/10"
            >
              <Instagram className="h-4 w-4 text-accent" aria-hidden="true" />
              Instagram
            </a>
          </div>

          <nav aria-label="Footer pages">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-accent">
              Pages
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/gallery", label: "Moving Gallery" },
                { to: "/service-areas", label: "Service Areas" },
                { to: "/contact", label: "Contact & Free Quote" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-primary-foreground/80 hover:text-accent"
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer services">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-accent">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="text-primary-foreground/80 hover:text-accent"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-accent">
              Contact
            </h2>
            <ul className="mt-4 space-y-4 text-sm text-primary-foreground/85">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span className="flex flex-col">
                  <a href={site.phonePrimaryTel} className="font-semibold hover:text-accent">
                    {site.phonePrimaryDisplay}
                  </a>
                  <a href={site.phoneSecondaryTel} className="font-semibold hover:text-accent">
                    {site.phoneSecondaryDisplay}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={site.emailHref} className="break-all hover:text-accent">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  {site.addressLine}, {site.addressCity}, {site.addressRegion}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  <span className="font-semibold">{site.hoursLabel}</span>
                  <br />
                  {site.hoursDetail}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
