import { createFileRoute } from "@tanstack/react-router";
import { Building2, Mail, MessageCircle, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Clients } from "@/components/site/Clients";
import { LeadForm } from "@/components/site/LeadForm";

const SITE_URL = "https://akshi-grow-indore.lovable.app";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Akshi Digital — Indore Website & SEO Agency" },
      {
        name: "description",
        content:
          "Talk to Akshi Digital. Get a free website & SEO audit for India or overseas projects. Call, WhatsApp or email our team today.",
      },
      { property: "og:title", content: "Contact Akshi Digital" },
      { property: "og:description", content: "Get a free audit and growth roadmap from Indore's trusted digital agency." },
      { property: "og:url", content: `${SITE_URL}/contact` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero py-20 text-white sm:py-28">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Badge className="border-white/15 bg-white/10 text-white">Contact</Badge>
          <h1 className="mt-4 text-balance text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Let's grow your business <span className="text-gradient">online</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
            Talk to our India-based team for local, national, or overseas projects. Choose whichever channel works best.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <ContactCard icon={Phone} title="Call Us" value="+91 96300 40607" href="tel:+919630040607" />
            <ContactCard icon={MessageCircle} title="WhatsApp" value="Chat with our team" href="https://wa.me/919630040607" />
            <ContactCard icon={Mail} title="Email" value="hello@akshidigital.com" href="mailto:hello@akshidigital.com" />
          </div>
          <div className="mt-8 flex items-center justify-center gap-3 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
            <Building2 className="h-5 w-5 text-brand" />
            <span>Akshi Digital · Indore, Madhya Pradesh, India</span>
          </div>
        </div>
      </section>

      <LeadForm />
      <Clients />
    </>
  );
}

function ContactCard({ icon: Icon, title, value, href }: { icon: typeof Phone; title: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-glow"
    >
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-white shadow-glow">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="mt-0.5 font-semibold text-foreground">{value}</div>
      </div>
    </a>
  );
}
