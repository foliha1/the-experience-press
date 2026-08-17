import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LenisProvider } from "../components/lenis-provider";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Oleeha & Co. — The Experience Design Sprint" },
      {
        name: "description",
        content:
          "A fixed-scope sprint for operators of high-stakes gatherings. One coherent identity and experience system — invite to exit — in weeks, not months.",
      },
      { name: "author", content: "Oleeha & Co." },
      { property: "og:title", content: "Oleeha & Co. — The Experience Design Sprint" },
      {
        property: "og:description",
        content:
          "One coherent identity and experience system for premium in-person gatherings. Four to six weeks. Fixed price.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..700,0..100;1,9..144,300..700,0..100&family=Inter+Tight:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/95 backdrop-blur-[2px]">
      <div className="mx-auto flex max-w-[84rem] items-center justify-between px-6 py-5 md:px-10">
        <Link
          to="/"
          className="font-display text-base tracking-[-0.01em] text-ink md:text-lg"
        >
          Oleeha &amp; Co.
        </Link>
        <nav className="flex items-center gap-6 md:gap-9">
          <Link
            to="/work"
            className="link-spot hover:link-spot-hover label flex min-h-11 items-center"
          >
            Work
          </Link>
          <Link
            to="/sprint"
            className="link-spot hover:link-spot-hover label flex min-h-11 items-center"
          >
            Studio
          </Link>
          <a
            href="mailto:felix@oleeha.co"
            className="link-spot hover:link-spot-hover label flex min-h-11 items-center"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-[84rem] flex-col gap-4 px-6 py-10 md:flex-row md:items-baseline md:justify-between md:px-10">
        <a
          href="mailto:felix@oleeha.co"
          className="link-spot hover:link-spot-hover font-display text-base"
        >
          felix@oleeha.co
        </a>
        <p className="numeral">Oleeha &amp; Co. — Experience Design</p>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const bare = pathname.startsWith("/partners");

  return (
    <QueryClientProvider client={queryClient}>
      <LenisProvider>
        {bare ? (
          /* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */
          <Outlet />
        ) : (
          <div className="flex min-h-screen flex-col bg-paper text-ink">
            <SiteHeader />
            <div className="flex-1">
              {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
              <Outlet />
            </div>
            <SiteFooter />
          </div>
        )}
      </LenisProvider>
    </QueryClientProvider>
  );
}

