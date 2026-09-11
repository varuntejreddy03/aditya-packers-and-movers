import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, MessageCircle, Phone, ShieldCheck } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { PageBreadcrumb } from "@/components/page-breadcrumb";
import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { getService, services } from "@/lib/services";
import { quickEnquiryMessage, site, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { slug: service.slug, title: service.title, blurb: service.blurb };
  },
  component: ServiceDetailPage,
  notFoundComponent: ServiceNotFound,
});

function ServiceNotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-2xl font-bold text-primary">We could not find that service</h1>
      <p className="mt-3 text-muted-foreground">
        Please browse all our moving services, or call us and describe what you need to shift.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild variant="cta" size="lg">
          <Link to="/services">All services</Link>
        </Button>
        <Button asChild variant="outlineNavy" size="lg">
          <a href={site.phonePrimaryTel}>Call {site.phonePrimaryDisplay}</a>
        </Button>
      </div>
    </div>
  );
}

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = getService(slug);
  if (!service) return <ServiceNotFound />;
  const Icon = service.icon;
  const related = service.related
    .map((r) => services.find((s) => s.slug === r))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  return (
    <>
      {/* Hero */}
      <section className="paper-grid bg-primary py-12 text-primary-foreground sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <PageBreadcrumb
              tone="dark"
              items={[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: service.title },
              ]}
            />
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/40 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-accent">
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              {service.heroEyebrow}
            </p>
            <h1 className="mt-4 text-balance font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 max-w-xl leading-relaxed text-primary-foreground/85">
              {service.blurb}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="cta" size="lg" className="arrow-nudge min-h-12">
                <a href="#service-quote">
                  Get a Free Quote
                  <ArrowRight />
                </a>
              </Button>
              <Button asChild variant="onNavy" size="lg" className="min-h-12">
                <a href={site.phonePrimaryTel}>
                  <Phone />
                  {site.phonePrimaryDisplay}
                </a>
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-primary-foreground/15 shadow-lift">
            <img
              src={service.image}
              alt={service.imageAlt}
              width={1280}
              height={960}
              className="h-full w-full object-contain bg-white"
            />
            {service.realPhoto && (
              <span className="absolute left-3 top-3 rounded-md bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-accent-foreground shadow">
                Actual Move
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Description + suitable for */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">
              What this service covers
            </h2>
            {service.intro.map((p) => (
              <p key={p} className="mt-4 leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
              <h2 className="font-display text-lg font-bold text-primary">Suitable for</h2>
              <ul className="mt-4 space-y-3">
                {service.suitableFor.map((s) => (
                  <li key={s} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
              <Button asChild variant="whatsapp" size="lg" className="mt-6 w-full">
                <a href={whatsappUrl(`${quickEnquiryMessage} Service: ${service.title}.`)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle />
                  Ask on WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Typical process"
              title={`How a ${service.title.toLowerCase()} job runs`}
              align="center"
            />
          </Reveal>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 80}>
                <div className="h-full rounded-xl border border-border bg-background p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent font-display text-sm font-bold text-accent-foreground">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-primary">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Careful handling */}
      <section className="paper-grid bg-primary py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading tone="dark" eyebrow="Careful handling" title={service.care.heading} />
            <ul className="mt-8 space-y-4">
              {service.care.points.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed text-primary-foreground/85">
                  <ShieldCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 sm:p-8">
              <p className="font-display text-lg font-bold">Have a specific item to worry about?</p>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
                A glass-top table, an aquarium, a piano, a heavy safe — tell us before the move so we
                bring the right material and enough hands. We will tell you honestly if something
                needs special arrangements.
              </p>
              <Button asChild variant="onNavy" size="lg" className="mt-6">
                <a href={site.phoneSecondaryTel}>
                  <Phone />
                  {site.phoneSecondaryDisplay}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Questions"
              title={`${service.title} — common questions`}
              description="Scope, timing and cost depend on your goods and route. Please call to confirm details for your move."
              align="center"
            />
          </Reveal>
          <Reveal delay={80} className="mt-10 block">
            <FaqList faqs={service.faqs} idPrefix={service.slug} />
          </Reveal>
        </div>
      </section>

      {/* Quote */}
      <section id="service-quote" className="scroll-mt-28 bg-card py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Free quote"
              title={`Request a quote for ${service.title.toLowerCase()}`}
              description="Send your details on WhatsApp and we will come back with what is possible and what it involves."
            />
          </Reveal>
          <Reveal delay={100}>
            <QuoteForm id={`${service.slug}-quote`} defaultService={service.title} />
          </Reveal>
        </div>
      </section>

      {/* Related */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading eyebrow="Related services" title="You may also need" />
          </Reveal>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <Reveal as="li" key={r.slug} delay={i * 70} className="h-full">
                <ServiceCard service={r} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
