import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { PageBreadcrumb } from "@/components/page-breadcrumb";
import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TrustStrip } from "@/components/trust-strip";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Moving Services in Rajahmundry | Aditya Packers and Movers" },
      {
        name: "description",
        content:
          "House shifting, office relocation, packing and unpacking, local shifting, domestic relocation, loading, transport, vehicle and shop moving in Rajahmundry.",
      },
      { property: "og:title", content: "Moving Services in Rajahmundry" },
      {
        property: "og:description",
        content:
          "Nine relocation services from Aditya Packers and Movers, Rajahmundry — homes, offices, shops and vehicles.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="paper-grid bg-primary py-14 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <PageBreadcrumb tone="dark" items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          <SectionHeading
            as="h1"
            tone="dark"
            className="mt-6 max-w-3xl"
            eyebrow="Our services"
            title="Relocation services for homes, offices and businesses"
            description="Each service below has its own page with the process, what it suits and the questions people usually ask. Pick the one closest to your move — if you are unsure, call us and we will guide you."
          />
        </div>
      </section>

      <TrustStrip />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 60} className="h-full">
                <div className="card-lift group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card">
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="h-44 w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-lg font-bold text-primary">{s.title}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {s.blurb}
                    </p>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="arrow-nudge mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                    >
                      View {s.title.toLowerCase()} details
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Free quote"
              title="Not sure which service you need?"
              description="Send us the basics and we will suggest the right option. If your move needs two services together — say packing plus vehicle transport — we will plan them as one job."
            />
          </Reveal>
          <Reveal delay={100}>
            <QuoteForm id="services-quote" />
          </Reveal>
        </div>
      </section>

      <CtaBand className="mt-16" />
    </>
  );
}
