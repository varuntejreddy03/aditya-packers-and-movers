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
        "card-lift arrow-nudge group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-6 shadow-card",
        className,
      )}
    >
      <span
        className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden="true"
      />
      <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary-soft text-primary transition-colors group-hover:bg-accent-soft group-hover:text-accent">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-4 font-display text-lg font-bold text-primary">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
        View details
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </Link>
  );
}
