import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export function FaqList({
  faqs,
  className,
  idPrefix = "faq",
}: {
  faqs: { q: string; a: string }[];
  className?: string;
  idPrefix?: string;
}) {
  return (
    <Accordion type="single" collapsible className={cn("w-full", className)}>
      {faqs.map((f, i) => (
        <AccordionItem
          key={f.q}
          value={`${idPrefix}-${i}`}
          className="rounded-lg border border-border bg-card px-4 mb-3 shadow-card"
        >
          <AccordionTrigger className="text-left font-display text-base font-semibold text-primary hover:no-underline">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
