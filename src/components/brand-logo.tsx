import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  showText = true,
  tone = "light",
}: {
  className?: string;
  showText?: boolean;
  tone?: "light" | "dark";
}) {
  return (
    <Link
      to="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label={`${site.name} — home`}
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md bg-card p-1 shadow-card sm:h-14 sm:w-14">
        <img
          src="/logo.jpg"
          alt={`${site.name} logo`}
          width={56}
          height={56}
          className="h-full w-full object-contain"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/favicon.png";
          }}
        />
      </span>
      {showText ? (
        <span className="min-w-0">
          <span
            className={cn(
              "block truncate font-display text-base font-bold leading-tight sm:text-lg",
              tone === "dark" ? "text-primary-foreground" : "text-primary",
            )}
          >
            Aditya Packers and Movers
          </span>
          <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
            {site.tagline}
          </span>
        </span>
      ) : null}
    </Link>
  );
}
