import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Clients } from "@/components/site/Clients";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Akshi Digital Indore Case Studies" },
      {
        name: "description",
        content:
          "Real results from Indore businesses we've helped grow online with web development & SEO.",
      },
      { property: "og:title", content: "Akshi Digital Portfolio" },
      { property: "og:description", content: "Case studies of Indore brands we've grown online." },
    ],
  }),
  component: PortfolioPage,
});

const portfolio = [
  { category: "Healthcare", title: "City Care Clinic", metric: "+312% organic traffic", sub: "Local SEO + new website" },
  { category: "Real Estate", title: "Indore Prime Homes", metric: "+185 monthly leads", sub: "Landing pages + GBP" },
  { category: "Manufacturing", title: "Shree Industries", metric: "#1 ranking for 24 keywords", sub: "Technical SEO overhaul" },
  { category: "Restaurant", title: "Saffron Kitchen", metric: "4.8★ — 320 new reviews", sub: "GBP + WordPress site" },
  { category: "Pharma", title: "Ninapharm", metric: "+220% qualified leads", sub: "Custom website + SEO" },
  { category: "Beauty", title: "Tanishree Beauty", metric: "3x salon bookings", sub: "Local SEO + GBP" },
];

function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero py-20 text-white sm:py-28">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Badge className="border-white/15 bg-white/10 text-white">Portfolio</Badge>
          <h1 className="mt-4 text-balance text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Real results for <span className="text-gradient">real Indore businesses</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
            A snapshot of growth we've helped local brands achieve.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((p) => (
              <Card key={p.title} className="group relative overflow-hidden border-border p-7 shadow-card transition hover:shadow-glow">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge className="border-brand/20 bg-brand/5 text-brand">{p.category}</Badge>
                    <h3 className="mt-3 text-xl font-bold">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.sub}</p>
                  </div>
                  <TrendingUp className="h-7 w-7 text-[#10B981]" />
                </div>
                <div className="mt-6 rounded-xl bg-brand-gradient p-5 text-white shadow-glow">
                  <div className="text-xs uppercase tracking-wider opacity-80">Result</div>
                  <div className="mt-1 text-2xl font-bold">{p.metric}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Clients />
      <LeadForm title="Want results like these? Get a free audit." />
    </>
  );
}
