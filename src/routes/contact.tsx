import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";

import banner from "@/assets/contact-banner.jpg";
import logo from "@/assets/logo.asset.json";
import { FaqList } from "@/components/faq-list";
import { PageBreadcrumb } from "@/components/page-breadcrumb";
import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import {
  mapsEmbedUrl,
  mapsSearchUrl,
  quickEnquiryMessage,
  site,
  whatsappUrl,
} from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Free Quote | Aditya Packers and Movers Rajahmundry" },
      {
        name: "description",
        content:
          "Call +91 85000 83803 or send a WhatsApp quote enquiry to Aditya Packers and Movers, Paper Mill Road, Rajahmundry. Open every day, 7:00 AM – 9:00 PM.",
      },
      { property: "og:title", content: "Contact Aditya Packers and Movers, Rajahmundry" },
      {
        property: "og:description",
        content:
          "Phone, WhatsApp, email and address for moving enquiries in Rajahmundry. Open every day, 7 AM–9 PM.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const contactFaqs = [
  {
    q: "What happens after I send the WhatsApp enquiry?",
    a: "We read your details, then reply or call to ask anything missing — volume of goods, floor, access and date. After that we share a quote. Enquiries are handled during our working hours, 7:00 AM to 9:00 PM.",
  },
  {
    q: "Is a site visit needed before booking?",
    a: "For small local moves a phone conversation is usually enough. For full households, offices and shops a short visit gives a much more accurate quote.",
  },
  {
    q: "Can I get a firm price online?",
    a: "No. A free quote is an estimate based on what you tell us. The final figure depends on the actual goods, distance, access and packing needed — we confirm it with you before starting.",
  },
  {
    q: "Which number should I call?",
    a: `Either works. ${site.phonePrimaryDisplay} is also our WhatsApp number, and ${site.phoneSecondaryDisplay} is our alternate line.`,
  },
];

function ContactPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img
          src={banner}
          alt="Moving truck parked on a Rajahmundry street at golden hour with stacked boxes in the foreground"
          width={1680}
          height={720}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/55" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <PageBreadcrumb tone="dark" items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
          <div className="mt-6 flex items-center gap-4">
            <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-card p-1.5 shadow-lift sm:flex">
              <img src={logo.url} alt={`${site.name} logo`} width={64} height={64} className="h-full w-full object-contain" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Contact & free quote
              </p>
              <h1 className="mt-2 text-balance font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Let&rsquo;s plan your move
              </h1>
            </div>
          </div>
          <p className="mt-5 max-w-xl leading-relaxed text-primary-foreground/85">
            Call, WhatsApp or email us with what you are shifting. We are open every day from 7:00 AM
            to 9:00 PM.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="cta" size="lg" className="min-h-12">
              <a href={site.phonePrimaryTel}>
                <Phone />
                Call {site.phonePrimaryDisplay}
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="lg" className="min-h-12">
              <a href={whatsappUrl(quickEnquiryMessage)} target="_blank" rel="noopener noreferrer">
                <MessageCircle />
                WhatsApp us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal as="li">
              <ContactCard
                icon={<Phone className="h-5 w-5 text-accent" aria-hidden="true" />}
                title="Phone"
              >
                <a href={site.phonePrimaryTel} className="block font-semibold text-primary hover:text-accent">
                  {site.phonePrimaryDisplay}
                </a>
                <a href={site.phoneSecondaryTel} className="mt-1 block font-semibold text-primary hover:text-accent">
                  {site.phoneSecondaryDisplay}
                </a>
              </ContactCard>
            </Reveal>
            <Reveal as="li" delay={60}>
              <ContactCard
                icon={<MessageCircle className="h-5 w-5 text-accent" aria-hidden="true" />}
                title="WhatsApp"
              >
                <a
                  href={whatsappUrl(quickEnquiryMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:text-accent"
                >
                  {site.whatsappDisplay}
                </a>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fastest way to share photos of your goods.
                </p>
              </ContactCard>
            </Reveal>
            <Reveal as="li" delay={120}>
              <ContactCard
                icon={<Mail className="h-5 w-5 text-accent" aria-hidden="true" />}
                title="Email"
              >
                <a
                  href={site.emailHref}
                  className="break-all font-semibold text-primary hover:text-accent"
                >
                  {site.email}
                </a>
              </ContactCard>
            </Reveal>
            <Reveal as="li" delay={180}>
              <ContactCard
                icon={<MapPin className="h-5 w-5 text-accent" aria-hidden="true" />}
                title="Address"
              >
                <address className="not-italic text-sm leading-relaxed text-muted-foreground">
                  {site.addressLine},<br />
                  {site.addressCity}, {site.addressRegion}
                </address>
                <a
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                >
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  Get directions
                </a>
              </ContactCard>
            </Reveal>
            <Reveal as="li" delay={240}>
              <ContactCard
                icon={<Clock className="h-5 w-5 text-accent" aria-hidden="true" />}
                title="Business hours"
              >
                <p className="font-semibold text-primary">{site.hoursLabel}</p>
                <p className="mt-1 text-sm text-muted-foreground">{site.hoursDetail}</p>
              </ContactCard>
            </Reveal>
            <Reveal as="li" delay={300}>
              <ContactCard
                icon={<Instagram className="h-5 w-5 text-accent" aria-hidden="true" />}
                title="Instagram"
              >
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:text-accent"
                >
                  @aditya_packers_and_movers_rjy
                </a>
              </ContactCard>
            </Reveal>
          </ul>
        </div>
      </section>

      {/* Quote form + map */}
      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <Reveal>
            <QuoteForm id="contact-quote" />
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Visit us"
              title="Paper Mill Road, Rajahmundry"
              description="Near Krishna Temple, Lalitha Nagar 1st Street. Call before visiting so someone is available to sit with you."
            />
            <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-card">
              <iframe
                title="Map showing Aditya Packers and Movers, Paper Mill Road, Rajahmundry"
                src={mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full sm:h-80"
              />
            </div>
            <Button asChild variant="outlineNavy" size="lg" className="mt-5">
              <a href={mapsSearchUrl} target="_blank" rel="noopener noreferrer">
                <Navigation />
                Open in Google Maps
              </a>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Before you enquire"
              title="What to expect from your enquiry"
              align="center"
            />
          </Reveal>
          <Reveal delay={80} className="mt-10 block">
            <FaqList faqs={contactFaqs} idPrefix="contact" />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-lift h-full rounded-xl border border-border bg-card p-6 shadow-card">
      <span className="flex h-11 w-11 items-center justify-center rounded-md bg-accent-soft">
        {icon}
      </span>
      <h2 className="mt-4 font-display text-base font-bold text-primary">{title}</h2>
      <div className="mt-2">{children}</div>
    </div>
  );
}
