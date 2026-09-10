import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Navigation, Phone, Route as RouteIcon, Truck } from "lucide-react";

import areaImage from "@/assets/domestic-relocation.jpg";
import { CtaBand } from "@/components/cta-band";
import { PageBreadcrumb } from "@/components/page-breadcrumb";
import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { mapsEmbedUrl, mapsSearchUrl, site } from "@/lib/site";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: [
      { title: "Service Areas | Packers and Movers in Rajahmundry" },
      {
        name: "description",
        content:
          "Local shifting in and around Rajahmundry, plus domestic relocation enquiries to other cities in India. Share your pickup and destination to confirm coverage.",
      },
      { property: "og:title", content: "Service Areas | Aditya Packers and Movers" },
      {
        property: "og:description",
        content:
          "Based on Paper Mill Road, Rajahmundry — local moves in the city and domestic relocation across India.",
      },
      { property: "og:url", content: "/service-areas" },
    ],
    links: [{ rel: "canonical", href: "/service-areas" }],
  }),
  component: ServiceAreasPage,
});

function ServiceAreasPage() {
  return (
    <>
      <section className="paper-grid bg-primary py-14 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <PageBreadcrumb
            tone="dark"
            items={[{ label: "Home", to: "/" }, { label: "Service Areas" }]}
          />
          <SectionHeading
            as="h1"
            tone="dark"
            className="mt-6 max-w-3xl"
            eyebrow="Service areas"
            title="Rajahmundry first, and domestic moves from here"
            description="We are a Rajahmundry-based team. Local shifting in and around the city is our day-to-day work, and we also take domestic relocation enquiries to other cities in India."
          />
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3">
          {[
            {
              icon: MapPin,
              title: "Local shifting in Rajahmundry",
              text: "Homes, offices and shops moving between areas within Rajahmundry and its surrounding localities. Same-day completion is often possible for smaller loads.",
            },
            {
              icon: RouteIcon,
              title: "Around Rajahmundry",
              text: "Moves to and from nearby towns and villages in the region. Tell us the exact pickup and drop points and we will confirm whether we can serve them.",
            },
            {
              icon: Truck,
              title: "Domestic relocation",
              text: "Long-distance shifting to other cities in India, planned with reinforced packing and a confirmed delivery window before dispatch.",
            },
          ].map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="card-lift h-full rounded-xl border border-border bg-card p-6 shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-accent-soft">
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                </span>
                <h2 className="mt-4 font-display text-lg font-bold text-primary">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="rounded-xl border border-accent/30 bg-accent-soft p-6">
              <h2 className="font-display text-base font-bold text-primary">
                Why we ask instead of listing cities
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-primary/80">
                Coverage for a long-distance move depends on the route, load size and vehicle
                availability on your dates. Rather than promise a list of cities, we prefer to
                confirm your specific pickup and destination before you plan around us.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Address + map */}
      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <SectionHeading eyebrow="Find us" title="Our office in Rajahmundry" />
            <address className="mt-6 not-italic leading-relaxed text-muted-foreground">
              <strong className="block font-display text-base font-bold text-primary">
                {site.name}
              </strong>
              {site.addressLine}
              <br />
              {site.addressCity}, {site.addressRegion}
            </address>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3 text-primary">
                <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={site.phonePrimaryTel} className="font-semibold hover:text-accent">
                  {site.phonePrimaryDisplay}
                </a>
                <span className="text-muted-foreground">·</span>
                <a href={site.phoneSecondaryTel} className="font-semibold hover:text-accent">
                  {site.phoneSecondaryDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3 font-semibold text-primary">
                <Clock className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {site.hoursLabel} · 7:00 AM – 9:00 PM
              </li>
            </ul>
            <Button asChild variant="cta" size="lg" className="mt-7">
              <a href={mapsSearchUrl} target="_blank" rel="noopener noreferrer">
                <Navigation />
                Open in Google Maps
              </a>
            </Button>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
              <img
                src={areaImage}
                alt="Moving truck on a highway, representing domestic relocation from Rajahmundry"
                width={1600}
                height={900}
                loading="lazy"
                className="h-48 w-full object-cover sm:h-60"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-2xl border border-border shadow-card">
              <iframe
                title="Map showing the location of Aditya Packers and Movers, Rajahmundry"
                src={mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full sm:h-96"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Confirm route form */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Check your route"
              title="Tell us where you are moving from and to"
              description="Fill in both locations and we will confirm whether we can take the move, and what it would involve."
            />
          </Reveal>
          <Reveal delay={100}>
            <QuoteForm id="areas-quote" />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Not sure if we cover your area?"
        text="One call settles it. Tell us your pickup and destination and we will answer honestly."
      />
    </>
  );
}
