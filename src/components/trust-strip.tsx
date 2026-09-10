import { Clock, PackageCheck, ShieldCheck, Truck } from "lucide-react";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const items = [
  { icon: ShieldCheck, label: `${site.yearsExperience} years of experience` },
  { icon: PackageCheck, label: "Careful packing materials" },
  { icon: Truck, label: "Local & domestic moves" },
  { icon: Clock, label: site.hoursLabel },
];

export function TrustStrip({ className }: { className?: string }) {
  return (
    <div className={cn("border-y border-border bg-card", className)}>
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-4 px-4 py-6 sm:px-6 lg:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <li key={label} className="flex min-w-0 items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent-soft">
              <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
            </span>
            <span className="min-w-0 text-sm font-semibold text-primary">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
