import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
      <p className="font-display text-6xl font-bold text-accent">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-primary sm:text-3xl">
        This page could not be found
      </h1>
      <p className="mt-3 text-muted-foreground">
        The page may have moved. You can go back to the home page or contact us directly for a
        moving quote in Rajahmundry.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild variant="cta" size="lg">
          <Link to="/">Back to home</Link>
        </Button>
        <Button asChild variant="outlineNavy" size="lg">
          <Link to="/contact">Contact us</Link>
        </Button>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
      <h1 className="font-display text-2xl font-bold text-primary">This page didn't load</h1>
      <p className="mt-3 text-muted-foreground">
        Something went wrong. You can try again, or call us on {site.phonePrimaryDisplay}.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button
          variant="cta"
          size="lg"
          onClick={() => {
            router.invalidate();
            reset();
          }}
        >
          Try again
        </Button>
        <Button asChild variant="outlineNavy" size="lg">
          <a href="/">Go home</a>
        </Button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="pb-24 lg:pb-0">
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
      <MobileActionBar />
    </QueryClientProvider>
  );
}
