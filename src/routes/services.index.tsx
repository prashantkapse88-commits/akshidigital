import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clients } from "@/components/site/Clients";
import { LeadForm } from "@/components/site/LeadForm";
import { services } from "@/lib/services-data";

const SITE_URL = "https://akshidigital.com";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Digital Services in Indore — Web Development & SEO | Akshi Digital" },
      {
        name: "description",
        content:
          "Explore our full range of services: website development, SEO, e-commerce, WordPress, Google Business Profile and more — for Indore businesses.",
      },
      { property: "og:title", content: "Digital Services — Akshi Digital Indore" },
      { property: "og:description", content: "Premium digital services to grow your Indore business online." },
      { property: "og:url", content: `${SITE_URL}/services` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/services` }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero py-20 text-white sm:py-28">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Badge className="border-white/15 bg-white/10 text-white">Our Services</Badge>
          <h1 className="mt-4 text-balance text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Premium digital services <span className="text-gradient">built for growth</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
            Strategy, design, development and SEO — everything Indore businesses need to attract more
            customers and grow online.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Card key={s.slug} className="group flex h-full flex-col border-border p-7 shadow-card transition hover:-translate-y-1 hover:shadow-glow">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-white shadow-glow">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                  <ul className="mt-5 space-y-2">
                    {s.items.slice(0, 4).map((it) => (
                      <li key={it} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> {it}
                      </li>
                    ))}
                  </ul>
                  <Link to="/services/$slug" params={{ slug: s.slug }} className="mt-6">
                    <Button variant="outline" className="w-full">
                      Explore {s.title} <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Clients />
      <LeadForm title="Not sure where to start? Get a free strategy call" />
    </>
  );
}
