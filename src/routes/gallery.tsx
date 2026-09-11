import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X, ZoomIn } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { PageBreadcrumb } from "@/components/page-breadcrumb";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { galleryCategories, galleryImages } from "@/lib/services";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({ component: GalleryPage });

function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = galleryImages.filter((g) => active === "All" || g.category === active);
  const open = lightbox !== null ? galleryImages[lightbox] : undefined;

  return (
    <>
      <section className="paper-grid bg-primary py-14 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <PageBreadcrumb tone="dark" items={[{ label: "Home", to: "/" }, { label: "Gallery" }]} />
          <SectionHeading
            as="h1"
            tone="dark"
            className="mt-6 max-w-3xl"
            eyebrow="Moving gallery"
            title="A look at the care behind every move"
            description="Most photos below are from real moves we have completed. A small number are representative visuals for services where we have not yet published project photos."
          />
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            role="group"
            aria-label="Filter gallery by category"
            className="flex flex-wrap gap-2"
          >
            {galleryCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                aria-pressed={active === c}
                className={cn(
                  "min-h-11 rounded-md border px-4 text-sm font-semibold transition-colors",
                  active === c
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border bg-card text-primary hover:bg-primary-soft",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((g, i) => {
              const index = galleryImages.indexOf(g);
              return (
                <Reveal
                  as="li"
                  key={g.caption}
                  delay={i * 50}
                  className={cn(i % 5 === 0 && "lg:row-span-2")}
                >
                  <button
                    type="button"
                    onClick={() => setLightbox(index)}
                    className="card-lift group relative block h-full w-full overflow-hidden rounded-xl border border-border bg-card text-left shadow-card"
                  >
                    <img
                      src={g.src}
                      alt={g.alt}
                      width={1280}
                      height={960}
                      loading="lazy"
                      className={cn(
                        "w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]",
                        i % 5 === 0 ? "h-64 lg:h-[520px]" : "h-64",
                      )}
                    />
                    {g.realPhoto && (
                      <span className="absolute left-3 top-3 rounded-md bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-accent-foreground shadow">
                        Actual Move
                      </span>
                    )}
                    <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-md bg-card/90 text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      <ZoomIn className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="block p-4">
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
                        {g.category}
                      </span>
                      <span className="mt-1 block font-display text-sm font-semibold text-primary">
                        {g.caption}
                      </span>
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <Dialog open={lightbox !== null} onOpenChange={(o) => !o && setLightbox(null)}>
        <DialogContent className="max-w-4xl overflow-hidden p-0">
          <DialogTitle className="sr-only">{open?.caption ?? "Gallery image"}</DialogTitle>
          {open ? (
            <figure>
              <img src={open.src} alt={open.alt} className="max-h-[70vh] w-full object-contain bg-primary" />
              <figcaption className="flex items-center justify-between gap-4 border-t border-border bg-card px-5 py-4">
                <span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
                    {open.category}
                  </span>
                  {open.realPhoto && (
                    <span className="ml-2 rounded bg-accent px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-accent-foreground">
                      Actual Move
                    </span>
                  )}
                  <span className="mt-1 block font-display text-sm font-semibold text-primary">
                    {open.caption}
                  </span>
                </span>
                <button
                  type="button"
                  aria-label="Close image"
                  onClick={() => setLightbox(null)}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border text-primary hover:bg-primary-soft"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </figcaption>
            </figure>
          ) : null}
        </DialogContent>
      </Dialog>

      <CtaBand
        title="Want your move handled like this?"
        text="Call or WhatsApp us with your item list and dates. We will plan the packing, vehicle and crew around it."
      />
    </>
  );
}
