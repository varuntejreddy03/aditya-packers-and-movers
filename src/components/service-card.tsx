import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import type { Service } from "@/lib/services";
import { cn } from "@/lib/utils";

export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  const Icon = service.icon;
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className={cn(
        "card-lift arrow-nudge group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card",
        className,
      )}
    >
      {/* Orange accent bar on hover */}
      <span
        className="absolute inset-x-0 top-0 z-10 h-1 scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden="true"
      />

      {/* Image */}
      <div className="relative h-44 w-full shrink-0 overflow-hidden bg-white">
        <img
          src={service.cardImage}
          alt={service.imageAlt}
          width={1280}
          height={960}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-soft text-primary transition-colors group-hover:bg-accent-soft group-hover:text-accent">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="mt-3 font-display text-base font-bold text-primary">{service.title}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
          View details
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
