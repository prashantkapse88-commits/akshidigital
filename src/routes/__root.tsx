import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import logoUrl from "@/assets/akshi-logo-transparent.png";

const SITE_URL = "https://akshidigital.com";

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
      { title: "Akshi Digital — Website Development & SEO Agency in Indore" },
      {
        name: "description",
        content:
          "Akshi Digital is an Indore-based website development and SEO agency serving Indian and overseas clients with fast, SEO-optimized lead generation websites.",
      },
      { name: "author", content: "Akshi Digital" },
      { property: "og:title", content: "Akshi Digital — Website Development & SEO Agency in Indore" },
      {
        property: "og:description",
        content:
          "Custom website development, local SEO, global SEO, and digital growth services for Indian and international businesses.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Akshi Digital" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0F172A" },
      { name: "twitter:title", content: "Akshi Digital — Website Development & SEO Agency in Indore" },
      { name: "twitter:description", content: "Akshi Digital builds conversion-focused websites and SEO strategies for Indian and overseas businesses." },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "format-detection", content: "telephone=yes" },
      { name: "geo.region", content: "IN-MP" },
      { name: "geo.placename", content: "Indore" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: logoUrl },
      { rel: "apple-touch-icon", href: logoUrl },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${SITE_URL}/#organization`,
          name: "Akshi Digital",
          image: `${SITE_URL}${logoUrl}`,
          logo: `${SITE_URL}${logoUrl}`,
          description:
            "Website development, SEO, and digital growth agency based in Indore, serving Indian and international clients.",
          areaServed: [
            { "@type": "City", name: "Indore" },
            { "@type": "Country", name: "India" },
            { "@type": "Place", name: "Worldwide" },
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Indore",
            addressRegion: "Madhya Pradesh",
            addressCountry: "IN",
          },
          url: SITE_URL,
          telephone: "+91-96300-40607",
          email: "hello@akshidigital.com",
          priceRange: "₹₹",
          sameAs: [
            "https://akshidigital.com",
            "https://www.linkedin.com/company/akshi-digital/",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "Akshi Digital",
          url: SITE_URL,
          logo: `${SITE_URL}${logoUrl}`,
          image: `${SITE_URL}${logoUrl}`,
          description:
            "Akshi Digital is an Indore-based website development, SEO, local SEO, and digital lead generation agency serving Indian and overseas clients.",
          email: "hello@akshidigital.com",
          telephone: "+91-96300-40607",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Indore",
            addressRegion: "Madhya Pradesh",
            addressCountry: "IN",
          },
          sameAs: [
            "https://akshidigital.com",
            "https://www.linkedin.com/company/akshi-digital/",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: SITE_URL,
          name: "Akshi Digital",
          publisher: { "@id": `${SITE_URL}/#organization` },
        }),
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

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Nav />
        <main className="flex-1"><Outlet /></main>
        <Footer />
      </div>
      <FloatingCTA />
      <Toaster richColors position="top-center" />
    </QueryClientProvider>
  );
}
