import { useState } from "react";
import { CalendarDays, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { serviceOptions } from "@/lib/services";
import { buildQuoteMessage, site, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80, "Name is too long"),
  mobile: z
    .string()
    .trim()
    .regex(/^[0-9+\s-]{10,15}$/, "Enter a valid mobile number (10 digits)"),
  movingFrom: z.string().trim().min(2, "Where are you moving from?").max(120, "Too long"),
  movingTo: z.string().trim().min(2, "Where are you moving to?").max(120, "Too long"),
  service: z.string().trim().min(2, "Please choose a service"),
  date: z.string().trim().min(1, "Please pick a preferred date"),
  details: z.string().trim().max(600, "Please keep details under 600 characters").optional(),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const empty = {
  name: "",
  mobile: "",
  movingFrom: "",
  movingTo: "",
  service: "",
  date: "",
  details: "",
};

export function QuoteForm({
  variant = "full",
  defaultService,
  className,
  id = "quote",
}: {
  variant?: "full" | "compact";
  defaultService?: string;
  className?: string;
  id?: string;
}) {
  const [values, setValues] = useState({ ...empty, service: defaultService ?? "" });
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);

  const set = (key: keyof typeof empty, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof Errors;
        if (key && !next[key]) next[key] = issue.message;
      });
      setErrors(next);
      return;
    }
    const { details, ...rest } = parsed.data;
    const message = buildQuoteMessage(details ? { ...rest, details } : rest);
    setOpened(true);
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  const field = (key: keyof typeof empty, label: string, extra?: React.ReactNode) => (
    <div className="space-y-1.5">
      <Label htmlFor={`${id}-${key}`} className="text-sm font-semibold text-primary">
        {label}
      </Label>
      {extra}
      {errors[key as keyof Errors] ? (
        <p id={`${id}-${key}-error`} className="text-xs font-medium text-destructive">
          {errors[key as keyof Errors]}
        </p>
      ) : null}
    </div>
  );

  const inputProps = (key: keyof typeof empty) => ({
    id: `${id}-${key}`,
    value: values[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      set(key, e.target.value),
    "aria-invalid": Boolean(errors[key as keyof Errors]),
    "aria-describedby": errors[key as keyof Errors] ? `${id}-${key}-error` : undefined,
    className: "bg-card",
  });

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      noValidate
      className={cn(
        "rounded-xl border border-border bg-card p-5 shadow-card sm:p-6",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent-soft">
          <MessageCircle className="h-4.5 w-4.5 text-accent" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h2 className="font-display text-lg font-bold text-primary">Get a Free Quote</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill this in and we will open WhatsApp with your details ready to send. A price is
            confirmed only after we understand your goods and distance.
          </p>
        </div>
      </div>

      <div className={cn("mt-5 grid gap-4", variant === "full" && "sm:grid-cols-2")}>
        {field(
          "name",
          "Full name",
          <Input {...inputProps("name")} placeholder="Your name" autoComplete="name" />,
        )}
        {field(
          "mobile",
          "Mobile number",
          <Input
            {...inputProps("mobile")}
            type="tel"
            inputMode="tel"
            placeholder="10-digit mobile number"
            autoComplete="tel"
          />,
        )}
        {field(
          "movingFrom",
          "Moving from",
          <Input {...inputProps("movingFrom")} placeholder="Area, city" />,
        )}
        {field(
          "movingTo",
          "Moving to",
          <Input {...inputProps("movingTo")} placeholder="Area, city" />,
        )}
        {field(
          "service",
          "Service needed",
          <select
            id={`${id}-service`}
            value={values.service}
            onChange={(e) => set("service", e.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? `${id}-service-error` : undefined}
            className="flex h-9 w-full rounded-md border border-input bg-card px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <option value="">Select a service</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
            <option value="Other / not sure">Other / not sure</option>
          </select>,
        )}
        {field(
          "date",
          "Preferred moving date",
          <div className="relative">
            <Input {...inputProps("date")} type="date" className="bg-card pr-9" />
            <CalendarDays
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
          </div>,
        )}
        <div className={cn(variant === "full" && "sm:col-span-2")}>
          {field(
            "details",
            "Brief details (optional)",
            <Textarea
              {...inputProps("details")}
              rows={variant === "full" ? 4 : 3}
              placeholder="Number of rooms, floor, lift availability, items needing extra care…"
            />,
          )}
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <Button type="submit" variant="whatsapp" size="lg" className="w-full sm:w-auto">
          <MessageCircle />
          Send on WhatsApp
        </Button>
        <Button asChild variant="outlineNavy" size="lg" className="w-full sm:w-auto">
          <a href={site.phonePrimaryTel}>
            <Phone />
            Or call {site.phonePrimaryDisplay}
          </a>
        </Button>
      </div>

      <p aria-live="polite" className="mt-3 text-xs text-muted-foreground">
        {opened
          ? "WhatsApp should have opened with your details. If it did not, please call us instead — nothing is stored on this website."
          : "Your details are not stored on this website. Submitting opens WhatsApp so you can send them to us directly."}
      </p>

      <p className="mt-3 flex items-center gap-2 text-xs font-medium text-primary">
        <ShieldCheck className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
        {site.hoursLabel} · 7:00 AM – 9:00 PM
      </p>
    </form>
  );
}
