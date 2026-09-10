import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeCheck,
  Boxes,
  HeartHandshake,
  IndianRupee,
  PackageCheck,
  ShieldCheck,
  Timer,
} from "lucide-react";

import teamImage from "@/assets/household-shifting.jpg";
import packingImage from "@/assets/packing-detail.jpg";
import { CountUp } from "@/components/count-up";
import { CtaBand } from "@/components/cta-band";
import { PageBreadcrumb } from "@/components/page-breadcrumb";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export const Route = createFileRoute("/about")({ component: AboutPage });

const values = [
  { icon: ShieldCheck, title: "Safety", text: "Protective packing and correct handling so goods reach in the condition they left." },
  { icon: Timer, title: "Reliability", text: "A plan agreed before we start, and a team that turns up when we say we will." },
  { icon: IndianRupee, title: "Affordability", text: "Quotes based on your actual goods and distance, explained before you confirm." },
  { icon: HeartHandshake, title: "Customer care", text: "Straight answers on the phone and respect for your home while we work in it." },
];

const expectations = [
  "A quote that explains what is included, based on your item list, distance and access",
  "Packing material brought with the crew, not bought at the last minute",
  "Cartons marked room by room so unpacking is orderly",
  "Furniture dismantled and reassembled where required",
  "A confirmed date and time window, and a call if anything changes",
  "Someone who answers the phone during working hours, every day",
];

const workflow = [
  { title: "Survey and quote", text: "We understand what is being moved, from where, to where and on which floor." },
  { title: "Material planning", text: "Cartons, wrap, film and protectors are prepared in the quantities your goods need." },
  { title: "Room-wise packing", text: "One room is finished and marked before the next is opened." },
  { title: "Fragile handling", text: "Glass, crockery and electronics get individual wrapping and cushioning." },
  { title: "Load and secure", text: "Heavy first, fragile on top, everything strapped before the doors close." },
  { title: "Deliver and place", text: "Goods unloaded, placed in the correct rooms and unpacked if you booked it." },
];

function AboutPage() {
  return (
    <>
      <section className="paper-grid bg-primary py-14 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <PageBreadcrumb tone="dark" items={[{ label: "Home", to: "/" }, { label: "About Us" }]} />
          <SectionHeading
            as="h1"
            tone="dark"
            className="mt-6 max-w-3xl"
            eyebrow="About us"
            title="Ten years of careful moving in Rajahmundry"
            description="A local moving team that has grown by doing the small things properly — wrapping before lifting, marking before sealing, and calling before you have to ask."
          />
        </div>
      </section>

      {/* Story */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">Our story</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Aditya Packers and Movers is a trusted moving and relocation service provider in
              Rajahmundry, with 10 years of experience in the packing and moving industry. Our
              experienced and professional team provides safe, reliable, and affordable shifting
              solutions for homes, offices, and other relocation needs.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We focus on careful handling, secure packing, timely delivery, and customer
              satisfaction to make every move smooth and stress-free.
            </p>

            <div className="mt-8 flex items-center gap-5 rounded-xl border border-border bg-card p-6 shadow-card">
              <CountUp
                to={site.yearsExperience}
                className="font-display text-6xl font-extrabold leading-none text-accent"
              />
              <p className="text-sm font-semibold text-primary">
                years in the packing and moving industry
                <span className="mt-1 block text-xs font-medium text-muted-foreground">
                  Household, office, shop and vehicle relocation
                </span>
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-hidden rounded-2xl border border-border shadow-lift">
              <img
                src={teamImage}
                alt="Movers carefully wrapping furniture inside a home before a shift"
                width={1280}
                height={960}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="What we stand for"
              title="Four values we hold to on every job"
              align="center"
            />
          </Reveal>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 70}>
                <div className="card-lift h-full rounded-xl border border-border bg-background p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-accent-soft">
                    <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Expectations */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="What to expect"
              title="What clients can expect from us"
              description="No surprises, no vague answers. Here is what we commit to on a normal booking."
            />
            <ul className="mt-8 space-y-4">
              {expectations.map((e) => (
                <li key={e} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <BadgeCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent" aria-hidden="true" />
                  {e}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-2xl border border-border shadow-card">
              <img
                src={packingImage}
                alt="Hands wrapping fragile items in bubble wrap on a packing table"
                width={1280}
                height={960}
                loading="lazy"
                className="h-64 w-full object-cover sm:h-80"
              />
            </div>
            <div className="mt-6 rounded-xl border border-border bg-card p-6">
              <h3 className="flex items-center gap-2 font-display text-lg font-bold text-primary">
                <PackageCheck className="h-5 w-5 text-accent" aria-hidden="true" />
                Materials we bring
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Multi-layer cartons in several sizes, bubble wrap, foam sheets, stretch film, edge
                protectors and strong packing tape — matched to the items in your home or office.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Packing workflow */}
      <section className="paper-grid bg-primary py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Our workflow"
              title="How a packing day actually runs"
              align="center"
            />
          </Reveal>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {workflow.map((w, i) => (
              <Reveal as="li" key={w.title} delay={i * 60}>
                <div className="h-full rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent font-display text-sm font-bold text-accent-foreground">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
                    {w.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
          <p className="mx-auto mt-10 flex max-w-xl items-center justify-center gap-2 text-center text-sm text-primary-foreground/70">
            <Boxes className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            Every move is different — we adjust this workflow to your home, timing and access.
          </p>
        </div>
      </section>

      <CtaBand
        className="mt-16"
        title="Want to talk through your move?"
        text="Call us with your questions. We will tell you what is possible, what it involves and what it is likely to cost."
      />
    </>
  );
}
