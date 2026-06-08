import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, MapPin, Shield, TrendingUp, Users, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clients } from "@/components/site/Clients";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Akshi Digital — Indore's Premier Digital Agency" },
      {
        name: "description",
        content:
          "Akshi Digital is a full-service digital agency in Indore helping local businesses grow with websites, SEO and lead generation.",
      },
      { property: "og:title", content: "About Akshi Digital" },
      { property: "og:description", content: "Indore-based digital agency focused on measurable growth." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: MapPin, title: "Indore-Rooted", desc: "We understand the local market, the buyer psychology and the language that converts." },
  { icon: TrendingUp, title: "Growth-Obsessed", desc: "Every decision we make is judged by one metric: did it generate more leads?" },
  { icon: Shield, title: "Transparent", desc: "Clear pricing, monthly reports, no jargon. You always know exactly what's happening." },
  { icon: Zap, title: "Fast Execution", desc: "Most websites launch in 2–4 weeks. SEO sprints start within 7 days." },
  { icon: Users, title: "Partner Mindset", desc: "We win when you win. Long-term relationships over one-off projects." },
  { icon: Award, title: "Premium Craft", desc: "Agency-grade design and engineering at prices Indore businesses can afford." },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero py-20 text-white sm:py-28">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Badge className="border-white/15 bg-white/10 text-white">About Us</Badge>
          <h1 className="mt-4 text-balance text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            We turn websites into <span className="text-gradient">lead-generating machines</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
            Akshi Digital is a premium digital agency in Indore. We blend strategy, design, engineering
            and SEO to help local businesses dominate their categories online.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge className="border-brand/20 bg-brand/5 text-brand">Our Story</Badge>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Built in Indore, for Indore businesses</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  We started Akshi Digital with one belief: local businesses deserve agency-grade
                  websites and SEO without metro-city pricing. Today, we partner with healthcare,
                  real-estate, manufacturing, retail and service businesses across Indore — and
                  consistently deliver measurable growth.
                </p>
                <p>
                  Our team blends senior engineers, SEO specialists and conversion designers under one
                  roof. That means strategy, execution and reporting all happen in-house — fast.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <Stat k="100+" v="Projects Delivered" />
                <Stat k="4.9★" v="Average Rating" />
                <Stat k="24h" v="Response Time" />
              </div>
              <Link to="/contact" className="mt-8 inline-block">
                <Button size="lg" className="bg-brand-gradient text-white shadow-glow">
                  Start your project <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 font-semibold">{v.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Clients />
      <LeadForm />
    </>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="font-display text-2xl font-bold">{k}</div>
      <div className="mt-1 text-xs text-muted-foreground">{v}</div>
    </div>
  );
}
