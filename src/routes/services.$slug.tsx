import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clients } from "@/components/site/Clients";
import { LeadForm } from "@/components/site/LeadForm";
import { getService, services } from "@/lib/services-data";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = getService(params.slug);
    const title = s ? `${s.title} in Indore — Akshi Digital` : "Service — Akshi Digital";
    const desc = s?.short ?? "Premium digital services in Indore.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-4 py-32 text-center">
      <h1 className="text-3xl font-bold">Service not found</h1>
      <Link to="/services" className="mt-6 inline-block text-brand">← Back to all services</Link>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const Icon = service.icon;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero text-white">
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="flex flex-col items-start gap-6">
            <Link to="/services" className="text-sm text-white/70 hover:text-white">← All Services</Link>
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow">
              <Icon className="h-7 w-7" />
            </div>
            <Badge className="border-white/15 bg-white/10 text-white">Indore · India</Badge>
            <h1 className="text-balance text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              {service.title} <span className="text-gradient">in Indore</span>
            </h1>
            <p className="max-w-2xl text-lg text-white/75">{service.desc}</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact">
                <Button size="lg" className="bg-brand-gradient text-white shadow-glow">
                  Get Free Consultation <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <a href="tel:+919876543210">
                <Button size="lg" variant="outline" className="border-white/25 bg-white/5 text-white hover:bg-white/10">
                  <Phone className="mr-2 h-4 w-4" /> +91 98765 43210
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Badge className="border-brand/20 bg-brand/5 text-brand">What's Included</Badge>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Everything you need, nothing you don't</h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {service.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#10B981]" /> {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4">
              {service.benefits.map((b) => (
                <Card key={b.title} className="border-border p-6 shadow-card">
                  <div className="font-semibold">{b.title}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{b.desc}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Clients />

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <section className="bg-card py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="border-brand/20 bg-brand/5 text-brand">FAQ</Badge>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Common questions</h2>
            </div>
            <Accordion type="single" collapsible className="mt-10 w-full">
              {service.faqs.map((f, i) => (
                <AccordionItem key={i} value={`f-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      <LeadForm title={`Get a Free ${service.title} Quote`} defaultService={service.title} />

      {/* Related */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Explore more services</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => {
              const OIcon = o.icon;
              return (
                <Link key={o.slug} to="/services/$slug" params={{ slug: o.slug }}>
                  <Card className="group h-full border-border p-6 transition hover:-translate-y-1 hover:shadow-glow">
                    <div className="grid h-11 w-11 place-items-center rounded-lg bg-brand/10 text-brand">
                      <OIcon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 font-semibold">{o.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{o.short}</div>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand">
                      Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
