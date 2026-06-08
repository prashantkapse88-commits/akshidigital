import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone, Sparkles, Star, Users, Zap } from "lucide-react";
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
import { getService, services, type Service } from "@/lib/services-data";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = getService(params.slug);
    const title = s
      ? `${s.title} in Indore — Pricing, Process & Results | Akshi Digital`
      : "Service — Akshi Digital";
    const desc = s?.hero ?? s?.short ?? "Premium digital services in Indore.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  loader: ({ params }): { service: Service } => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-4 py-32 text-center">
      <h1 className="text-3xl font-bold">Service not found</h1>
      <Link to="/services" className="mt-6 inline-block text-brand">
        ← Back to all services
      </Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="mx-auto max-w-xl px-4 py-32 text-center">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <button onClick={reset} className="mt-6 text-brand">Try again</button>
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
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero text-white">
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand/30 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <Link to="/services" className="text-sm text-white/70 hover:text-white">
                ← All Services
              </Link>
              <div className="mt-4 flex items-center gap-3">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                  <Icon className="h-7 w-7" />
                </div>
                <Badge className="border-white/15 bg-white/10 text-white">
                  <Sparkles className="mr-1 h-3 w-3 text-[#06B6D4]" /> Indore · India
                </Badge>
              </div>
              <h1 className="mt-6 text-balance text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                {service.title} <span className="text-gradient">in Indore</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-white/75">{service.hero}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#audit">
                  <Button size="lg" className="bg-brand-gradient text-white shadow-glow">
                    Get Free Consultation <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </a>
                <a href="tel:+919876543210">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/25 bg-white/5 text-white hover:bg-white/10"
                  >
                    <Phone className="mr-2 h-4 w-4" /> +91 98765 43210
                  </Button>
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> 4.9/5 client rating
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-accent" /> 150+ Indore clients
                </span>
                <span className="flex items-center gap-1">
                  <Zap className="h-4 w-4 text-accent" /> 24-hour response
                </span>
              </div>
            </div>

            {/* Stats card */}
            <div className="lg:col-span-2">
              <Card className="border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8 text-white">
                <div className="text-sm font-medium uppercase tracking-wider text-white/60">
                  Real results, real numbers
                </div>
                <div className="mt-5 grid grid-cols-2 gap-5">
                  {service.stats.map((s) => (
                    <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="text-2xl font-bold text-gradient sm:text-3xl">{s.value}</div>
                      <div className="mt-1 text-xs text-white/70">{s.label}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED + BENEFITS */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Badge className="border-brand/20 bg-brand/5 text-brand">What's Included</Badge>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Everything you need, nothing you don't
              </h2>
              <p className="mt-4 text-muted-foreground">
                Every {service.title.toLowerCase()} engagement includes the full set of capabilities
                below — no upsells, no surprises.
              </p>
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
                <Card
                  key={b.title}
                  className="border-border bg-gradient-to-br from-white to-secondary/40 p-6 shadow-card"
                >
                  <div className="font-semibold">{b.title}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{b.desc}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-card py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="border-brand/20 bg-brand/5 text-brand">Who it's for</Badge>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Built for Indore businesses serious about growth
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {service.whoFor.map((w) => (
              <Card key={w} className="flex items-start gap-3 border-border p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span className="text-sm">{w}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="border-brand/20 bg-brand/5 text-brand">Our Process</Badge>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              A clear path from kickoff to results
            </h2>
            <p className="mt-4 text-muted-foreground">
              Transparent, milestone-based delivery so you always know what's happening and what's next.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <Card
                key={p.step}
                className="relative overflow-hidden border-border p-6 transition hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="absolute -right-4 -top-6 text-7xl font-black text-brand/5">
                  {p.step}
                </div>
                <div className="relative">
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand">
                    Step {i + 1}
                  </div>
                  <div className="mt-2 text-lg font-bold">{p.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES + TECH */}
      <section className="bg-card py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Badge className="border-brand/20 bg-brand/5 text-brand">Deliverables</Badge>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">What you'll receive</h2>
              <ul className="mt-8 space-y-3">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-gradient text-white">
                      <CheckCircle2 className="h-3 w-3" />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {service.techStack && service.techStack.length > 0 && (
                <>
                  <Badge className="border-brand/20 bg-brand/5 text-brand">Tech & Tools</Badge>
                  <h3 className="mt-4 text-2xl font-bold">Modern, proven stack</h3>
                  <p className="mt-3 text-muted-foreground">
                    We use industry-leading tools to ensure your project is fast, secure and easy to scale.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.techStack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium shadow-card"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              )}
              {service.caseStudy && (
                <Card className="mt-8 border-border bg-gradient-to-br from-brand/5 to-accent/5 p-6 shadow-card">
                  <Badge className="border-brand/20 bg-white text-brand">Case Study</Badge>
                  <div className="mt-3 font-semibold">{service.caseStudy.client}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{service.caseStudy.result}</div>
                  <blockquote className="mt-4 border-l-2 border-brand pl-4 text-sm italic text-foreground">
                    "{service.caseStudy.quote}"
                  </blockquote>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="border-brand/20 bg-brand/5 text-brand">Transparent Pricing</Badge>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Simple plans, no hidden fees
            </h2>
            <p className="mt-4 text-muted-foreground">
              Pick a plan or talk to us for a custom-tailored proposal. All prices in INR, exclusive of GST.
            </p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {service.pricing.map((p) => (
              <Card
                key={p.name}
                className={`relative flex h-full flex-col border-border p-7 ${
                  p.highlight
                    ? "border-brand/30 bg-gradient-to-b from-brand/5 to-transparent shadow-glow"
                    : "shadow-card"
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white shadow-glow">
                    Most Popular
                  </span>
                )}
                <div className="text-sm font-semibold uppercase tracking-wider text-brand">
                  {p.name}
                </div>
                <div className="mt-3 text-4xl font-bold">{p.price}</div>
                <div className="mt-2 text-sm text-muted-foreground">{p.tagline}</div>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#10B981]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#audit" className="mt-7">
                  <Button
                    className={`w-full ${
                      p.highlight ? "bg-brand-gradient text-white shadow-glow" : ""
                    }`}
                    variant={p.highlight ? "default" : "outline"}
                  >
                    Get Started <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </a>
              </Card>
            ))}
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
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      <LeadForm title={`Get a Free ${service.title} Quote`} defaultService={service.title} />

      {/* RELATED */}
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
