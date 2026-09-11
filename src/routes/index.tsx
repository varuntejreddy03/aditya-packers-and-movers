import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  ClipboardList,
  Clock,
  Handshake,
  MapPin,
  MessageSquare,
  PackageCheck,
  Phone,
  Truck,
  Users,
} from "lucide-react";

import heroImage from "@/assets/hero-moving-truck.jpg";
import aboutImage from "@/assets/delivery-unpacking.jpg";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { TrustStrip } from "@/components/trust-strip";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { CountUp } from "@/components/count-up";
import { services } from "@/lib/services";
import { mapsSearchUrl, site } from "@/lib/site";

export const Route = createFileRoute("/")({ component: HomePage });

const whyUs = [
  {
    icon: PackageCheck,
    title: "Careful packing",
    text: "Material chosen for each item — bubble wrap, corrugated sheets, edge protectors and strong cartons.",
  },
  {
    icon: Users,
    title: "Trained team",
    text: "Experienced crew who handle furniture, appliances and fragile goods every single day.",
  },
  {
    icon: Clock,
    title: "Timely delivery",
    text: "We agree a plan before we start and keep to the schedule we confirm with you.",
  },
  {
    icon: MessageSquare,
    title: "Transparent communication",
    text: "Clear quotes, honest availability and a phone that gets answered during working hours.",
  },
];

const steps = [
  { icon: ClipboardList, title: "Request a quote", text: "Call or WhatsApp with your item list, both addresses and preferred date." },
  { icon: Boxes, title: "Plan & pack", text: "We plan the sequence, then pack room by room with protective material." },
  { icon: Truck, title: "Load & move", text: "Goods are loaded in a balanced order, secured and transported." },
  { icon: Handshake, title: "Deliver & unpack", text: "Items are unloaded, placed in the right rooms and unpacked if booked." },
];

const homeFaqs = [
  {
    q: "How do I get a quote for shifting in Rajahmundry?",
    a: "Call us or send your details on WhatsApp — the goods you are moving, both addresses, floor level and preferred date. We assess these and share a quote. For larger homes and offices a short visit gives the most accurate figure.",
  },
  {
    q: "Do you handle both local and outstation moves?",
    a: "Yes. We do local shifting in and around Rajahmundry and domestic relocation to other cities in India. Please confirm your destination with us while enquiring.",
  },
  {
    q: "What affects the cost of a move?",
    a: "Mainly the volume of goods, distance, packing material needed, floor level and lift access, and any special handling. We explain the factors that apply to your move before you confirm.",
  },
  {
    q: "Do you provide packing material?",
    a: "Yes, we bring cartons, bubble wrap, stretch film, tape and protectors suited to your items. You can also book packing only, without transport.",
  },
  {
    q: "Can you move on a Sunday or a public holiday?",
    a: "We work all seven days between 7:00 AM and 9:00 PM. Availability depends on bookings already confirmed, so please call to check your date.",
  },
  {
    q: "Will my furniture be dismantled and reassembled?",
    a: "Items such as beds, wardrobes and modular units are dismantled where needed and reassembled at delivery. Tell us the items in advance so we plan the time and tools.",
  },
];

function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-background">
        <div
          className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-primary-soft blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14 lg:pb-24 lg:pt-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-accent">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Rajahmundry&rsquo;s trusted moving team
            </p>
            <h1 className="mt-5 text-balance font-display text-4xl font-extrabold leading-[1.08] text-primary sm:text-5xl lg:text-6xl">
              We Pack Your Dreams &amp; Move Your Trust
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Professional packing and relocation for homes, offices, vehicles and
              businesses&mdash;handled carefully from pickup to delivery.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Backed by our experience with{" "}
              <span className="font-semibold text-primary">Sri Lakshmi Kalyani Packers and Movers</span>
              {" "}— proven expertise, professional handling and reliable relocation on every move.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="cta" size="lg" className="arrow-nudge min-h-12">
                <a href="#quick-quote">
                  Get a Free Quote
                  <ArrowRight />
                </a>
              </Button>
              <Button asChild variant="navy" size="lg" className="min-h-12">
                <a href={site.phonePrimaryTel}>
                  <Phone />
                  Call 85000 83803
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 rounded-xl border border-border bg-card px-5 py-4 shadow-card">
              <div className="text-center">
                <CountUp
                  to={223}
                  suffix="+"
                  duration={1800}
                  className="font-display text-3xl font-extrabold leading-none text-accent"
                />
                <p className="mt-0.5 text-xs font-semibold text-primary">Moves Completed</p>
              </div>
              <div className="h-8 w-px bg-border" aria-hidden="true" />
              <div className="text-center">
                <span className="font-display text-3xl font-extrabold leading-none text-accent">{site.yearsExperience}+</span>
                <p className="mt-0.5 text-xs font-semibold text-primary">Years Experience</p>
              </div>
              <div className="h-8 w-px bg-border" aria-hidden="true" />
              <div className="text-center">
                <span className="font-display text-3xl font-extrabold leading-none text-accent">7</span>
                <p className="mt-0.5 text-xs font-semibold text-primary">Days a Week</p>
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div
              className="absolute -right-6 -top-6 hidden h-40 w-40 rounded-2xl bg-primary/10 lg:block"
              aria-hidden="true"
            />
            <div className="truck-enter relative overflow-hidden rounded-2xl border border-border bg-card shadow-lift">
              <img
                src={heroImage}
                alt="Movers in navy uniforms carrying sealed cartons beside a white moving truck outside a home in Rajahmundry"
                width={1600}
                height={1008}
                className="h-full w-full object-cover"
              />
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 400 250"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M-10 205 C 90 190, 150 235, 250 200 S 360 150, 420 165"
                  stroke="var(--color-accent)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="route-line"
                  opacity="0.9"
                />
              </svg>
            </div>
            <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-lift sm:left-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent-soft">
                <Truck className="h-5 w-5 text-accent" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-display text-sm font-bold text-primary">
                  Pickup to delivery
                </span>
                <span className="block text-xs text-muted-foreground">
                  Packed, secured and tracked by our team
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* ---------- Quick quote ---------- */}
      <section id="quick-quote" className="scroll-mt-28 bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Quick quote"
              title="Tell us about your move and get a quote"
              description="Share a few details and we will open WhatsApp with everything filled in. Prefer to talk? Call either number and we will take it from there."
            />
            <ul className="mt-7 space-y-3 text-sm">
              {[
                "No obligation — a quote is only an estimate until goods and distance are confirmed",
                "We reply during working hours: every day, 7:00 AM to 9:00 PM",
                "Local shifting in Rajahmundry and domestic relocation across India",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-muted-foreground">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="outlineNavy" size="lg">
                <a href={site.phonePrimaryTel}>
                  <Phone />
                  {site.phonePrimaryDisplay}
                </a>
              </Button>
              <Button asChild variant="outlineNavy" size="lg">
                <a href={site.phoneSecondaryTel}>
                  <Phone />
                  {site.phoneSecondaryDisplay}
                </a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <QuoteForm id="home-quote" />
          </Reveal>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Our services"
              title="Nine ways we help you shift"
              description="Homes, offices, shops and vehicles — each service is handled by a team used to that kind of move."
              align="center"
            />
          </Reveal>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 60} className="h-full">
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Button asChild variant="outlineNavy" size="lg" className="arrow-nudge">
              <Link to="/services">
                See all services in detail
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ---------- Why choose us ---------- */}
      <section className="paper-grid bg-primary py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Why choose us"
              tone="dark"
              title="The care that makes a move feel easy"
              description="Ten years of moving households and businesses in Rajahmundry has taught us where things go wrong — and how to prevent it."
            />
          </Reveal>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 70}>
                <div className="h-full rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-accent">
                    <Icon className="h-5 w-5 text-accent-foreground" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="Four steps from first call to unpacked"
              align="center"
            />
          </Reveal>
          <ol className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <span
              className="absolute left-0 right-0 top-6 hidden h-0.5 bg-accent/25 lg:block"
              aria-hidden="true"
            />
            {steps.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 90} className="relative">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-glow">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-accent">
                  Step {i + 1}
                </p>
                <h3 className="mt-1 font-display text-lg font-bold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- About preview ---------- */}
      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-lift">
              <img
                src={aboutImage}
                alt="A family in their new home while movers place sealed boxes and assemble furniture"
                width={1280}
                height={960}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6 flex items-center gap-4 rounded-xl border border-border bg-background p-5">
              <CountUp
                to={site.yearsExperience}
                className="font-display text-5xl font-extrabold leading-none text-accent"
              />
              <p className="text-sm font-semibold text-primary">
                years of moving experience
                <span className="mt-1 block text-xs font-medium text-muted-foreground">
                  Homes, offices, shops and vehicles across Rajahmundry
                </span>
              </p>
            </div>
          </Reveal>
          <Reveal delay={100} className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="About us"
              title="A local team that treats your things like their own"
              description="Aditya Packers and Movers is a trusted moving and relocation service provider in Rajahmundry, with 10 years of experience in the packing and moving industry."
            />
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our experienced and professional team provides safe, reliable, and affordable shifting
              solutions for homes, offices, and other relocation needs. We focus on careful
              handling, secure packing, timely delivery, and customer satisfaction to make every
              move smooth and stress-free.
            </p>
            <Button asChild variant="outlineNavy" size="lg" className="arrow-nudge mt-7">
              <Link to="/about">
                More about us
                <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ---------- Service area ---------- */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Where we work"
              title="Based in Rajahmundry, moving across India"
              description="Our base is Paper Mill Road, Rajahmundry. We handle local shifting in and around the city, and take domestic relocation enquiries for other cities in India."
            />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Rather than list coverage we cannot promise, we ask for your pickup and destination
              first. Share both and we will confirm honestly whether we can take the move.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="cta" size="lg" className="arrow-nudge">
                <Link to="/service-areas">
                  Check your area
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outlineNavy" size="lg">
                <a href={mapsSearchUrl} target="_blank" rel="noopener noreferrer">
                  <MapPin />
                  View on map
                </a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
              <h3 className="font-display text-lg font-bold text-primary">Our office</h3>
              <address className="mt-3 not-italic leading-relaxed text-muted-foreground">
                {site.addressLine}
                <br />
                {site.addressCity}, {site.addressRegion}
              </address>
              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                    Phone
                  </dt>
                  <dd className="mt-1 space-y-1 text-sm font-semibold text-primary">
                    <a href={site.phonePrimaryTel} className="block hover:text-accent">
                      {site.phonePrimaryDisplay}
                    </a>
                    <a href={site.phoneSecondaryTel} className="block hover:text-accent">
                      {site.phoneSecondaryDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                    Hours
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-primary">
                    {site.hoursLabel}
                    <span className="mt-1 block text-xs font-medium text-muted-foreground">
                      7:00 AM – 9:00 PM
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Questions"
              title="Frequently asked questions"
              description="Availability, scope and pricing always depend on your specific move — please call us to confirm."
              align="center"
            />
          </Reveal>
          <Reveal delay={80} className="mt-10 block">
            <FaqList faqs={homeFaqs} idPrefix="home" />
          </Reveal>
        </div>
      </section>

      <CtaBand className="pb-4" />
    </>
  );
}
