import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

export type Crumb = { label: string; to?: string; params?: Record<string, string> };

export function PageBreadcrumb({
  items,
  tone = "light",
  className,
}: {
  items: Crumb[];
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-xs sm:text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.to && !last ? (
                <Link
                  to={item.to}
                  params={item.params as never}
                  className={cn(
                    "font-medium hover:underline",
                    tone === "dark"
                      ? "text-primary-foreground/75 hover:text-accent"
                      : "text-muted-foreground hover:text-primary",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={last ? "page" : undefined}
                  className={cn(
                    "font-semibold",
                    tone === "dark" ? "text-primary-foreground" : "text-primary",
                  )}
                >
                  {item.label}
                </span>
              )}
              {!last ? (
                <ChevronRight
                  className={cn(
                    "h-3.5 w-3.5",
                    tone === "dark" ? "text-primary-foreground/50" : "text-muted-foreground",
                  )}
                  aria-hidden="true"
                />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
