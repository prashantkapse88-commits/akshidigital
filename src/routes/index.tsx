import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Search,
  Wrench,
  ShoppingCart,
  LayoutTemplate,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Star,
  Sparkles,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Award,
  Building2,
  GraduationCap,
  Stethoscope,
  Home,
  Factory,
  UtensilsCrossed,
  Briefcase,
  Rocket,
  ChevronDown,
} from "lucide-react";
import heroImg from "@/assets/hero-dashboard.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akshi Digital — Website Development & SEO Company in Indore" },
      {
        name: "description",
        content:
          "Indore's trusted website development & SEO agency. Custom websites, local SEO, e-commerce, WordPress & Google Business Profile services that grow leads.",
      },
      { property: "og:title", content: "Akshi Digital — Website Development & SEO Company in Indore" },
      {
        property: "og:description",
        content:
          "We help Indore businesses generate more leads, rank higher on Google, and grow faster.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Business, corporate & custom web applications built for speed and conversions.",
    items: ["Business Websites", "Corporate Sites", "Custom Web Apps", "Landing Pages"],
  },
  {
    icon: Search,
    title: "SEO Services",
    desc: "Rank higher on Google with technical, on-page & local SEO that drives traffic.",
    items: ["Local SEO Indore", "Technical SEO", "On-Page SEO", "Keyword Research"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Stores",
    desc: "Beautiful, high-converting online stores with secure payments and analytics.",
    items: ["Shopify & WooCommerce", "Custom Checkout", "Product SEO", "Inventory Sync"],
  },
  {
    icon: LayoutTemplate,
    title: "WordPress Development",
    desc: "Pixel-perfect WordPress sites that are fast, secure and easy to manage.",
    items: ["Custom Themes", "Elementor Builds", "Plugin Setup", "Speed Tuning"],
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    desc: "Show up in Maps & local searches across Indore with optimized GBP setup.",
    items: ["Profile Optimization", "Review Strategy", "Local Citations", "Posts & Photos"],
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    desc: "Stay secure & fast with backups, monitoring and ongoing technical support.",
    items: ["Security Updates", "Daily Backups", "Speed Optimization", "24/7 Support"],
  },
];

const industries = [
  { icon: Stethoscope, name: "Healthcare" },
  { icon: GraduationCap, name: "Education" },
  { icon: Home, name: "Real Estate" },
  { icon: Factory, name: "Manufacturing" },
  { icon: UtensilsCrossed, name: "Hospitality" },
  { icon: ShoppingCart, name: "Retail" },
  { icon: Briefcase, name: "Professional Services" },
  { icon: Rocket, name: "Startups" },
];

const whyChoose = [
  { icon: MapPin, title: "Based in Indore", desc: "On-ground team that understands the local market." },
  { icon: TrendingUp, title: "SEO-First Development", desc: "Every site is engineered to rank from day one." },
  { icon: Shield, title: "Transparent Reporting", desc: "Clear monthly reports — no jargon, no surprises." },
  { icon: Zap, title: "Fast Turnaround", desc: "Most websites delivered in 2–4 weeks." },
  { icon: Users, title: "Dedicated Support", desc: "A single point of contact through your whole project." },
  { icon: Award, title: "Affordable Packages", desc: "Premium quality at fair, transparent pricing." },
];

const portfolio = [
  {
    category: "Healthcare",
    title: "City Care Clinic",
    metric: "+312% organic traffic",
    sub: "Local SEO + new website",
  },
  {
    category: "Real Estate",
    title: "Indore Prime Homes",
    metric: "+185 monthly leads",
    sub: "Landing pages + GBP",
  },
  {
    category: "Manufacturing",
    title: "Shree Industries",
    metric: "#1 ranking for 24 keywords",
    sub: "Technical SEO overhaul",
  },
  {
    category: "Restaurant",
    title: "Saffron Kitchen",
    metric: "4.8★ — 320 new reviews",
    sub: "GBP + WordPress site",
  },
];

const testimonials = [
  {
    name: "Dr. Rajeev Sharma",
    biz: "Healthcare Clinic, Indore",
    text: "Akshi Digital rebuilt our website and within 3 months our appointment bookings doubled. Truly professional team.",
  },
  {
    name: "Priya Mehta",
    biz: "Real Estate Developer",
    text: "Their local SEO strategy put us on the Indore map — literally. We now rank in the top 3 for our key searches.",
  },
  {
    name: "Anil Verma",
    biz: "Manufacturing SME",
    text: "From concept to launch in 3 weeks. Clean code, great design and traffic is climbing every month.",
  },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "Understand your business, goals and audience." },
  { step: "02", title: "Strategy Planning", desc: "Map a website + SEO blueprint tailored to you." },
  { step: "03", title: "Design & Development", desc: "Craft a premium, fast, mobile-first website." },
  { step: "04", title: "SEO Optimization", desc: "On-page, technical and local SEO baked in." },
  { step: "05", title: "Launch", desc: "Go live with confidence and analytics in place." },
  { step: "06", title: "Growth Support", desc: "Ongoing optimization to keep leads compounding." },
];

const faqs = [
  {
    q: "How much does a website cost in Indore?",
    a: "Our business website packages start from ₹19,999 and scale based on features. E-commerce and custom web apps are quoted after a discovery call.",
  },
  {
    q: "How long does website development take?",
    a: "Most business websites go live in 2–4 weeks. Larger e-commerce or custom builds typically take 6–10 weeks.",
  },
  {
    q: "How does local SEO work?",
    a: "We optimize your Google Business Profile, build local citations, target Indore-specific keywords and create location-aware content so you appear in Maps and local searches.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes. Every project includes 30 days of free support, and we offer affordable monthly maintenance & SEO plans after that.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. We audit your current site, preserve your SEO equity and rebuild it with a modern, conversion-focused design.",
  },
  {
    q: "How soon can SEO results be seen?",
    a: "Local SEO can show movement in 4–6 weeks. Broader organic SEO typically shows strong, compounding results within 3–6 months.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <WhyChoose />
      <Industries />
      <Portfolio />
      <LocalSEO />
      <Process />
      <Testimonials />
      <AuditCTA />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#industries", label: "Industries" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-brand-gradient text-white font-bold shadow-glow">
            A
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-bold tracking-tight">AKSHI DIGITAL</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Indore · India
            </div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition hover:text-brand"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a href="#audit">
            <Button className="bg-brand-gradient text-white hover:opacity-90">
              Free Audit <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </a>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-md border border-border p-2"
        >
          <ChevronDown className={`h-5 w-5 transition ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <a href="#audit" onClick={() => setOpen(false)}>
              <Button className="mt-2 w-full bg-brand-gradient text-white">Free Audit</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero text-white">
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-32">
        <div className="flex flex-col justify-center animate-fade-in">
          <Badge className="w-fit gap-2 border-white/15 bg-white/10 text-white backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-[#06B6D4]" />
            Indore's Trusted Digital Agency
          </Badge>
          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[64px]">
            Indore's Trusted Website Development &{" "}
            <span className="text-gradient">SEO Agency</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75">
            We help local businesses generate more leads, rank higher on Google, and grow faster
            through strategic website development and SEO solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact">
              <Button size="lg" className="bg-brand-gradient text-white hover:opacity-90 shadow-glow">
                Get Free Consultation <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
            <a href="#audit">
              <Button
                size="lg"
                variant="outline"
                className="border-white/25 bg-white/5 text-white hover:bg-white/10"
              >
                Request Website Audit
              </Button>
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-[#0F172A] bg-brand-gradient"
                  />
                ))}
              </div>
              <span>100+ businesses growing</span>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-[#06B6D4] text-[#06B6D4]" />
              ))}
              <span className="ml-2">4.9 average rating</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-brand-gradient opacity-20 blur-3xl" />
          <div className="relative animate-float overflow-hidden rounded-2xl border border-white/10 glass shadow-glow">
            <img
              src={heroImg}
              alt="Akshi Digital SEO analytics dashboard showing website traffic and lead growth"
              width={1536}
              height={1024}
              className="h-auto w-full"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-xl glass p-4 text-sm shadow-glow sm:block">
            <div className="text-white/60">Organic Traffic</div>
            <div className="text-2xl font-bold text-[#10B981]">+312%</div>
          </div>
          <div className="absolute -top-6 -right-4 hidden rounded-xl glass p-4 text-sm shadow-glow sm:block">
            <div className="text-white/60">Avg. Page Speed</div>
            <div className="text-2xl font-bold text-[#06B6D4]">98/100</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRUST ---------------- */
function TrustBar() {
  const items = [
    { k: "100+", v: "Projects Delivered" },
    { k: "SEO-First", v: "Development Approach" },
    { k: "100%", v: "Mobile Responsive" },
    { k: "Indore", v: "Local Expertise" },
  ];
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        {items.map((i) => (
          <div key={i.v} className="text-center">
            <div className="font-display text-3xl font-bold text-foreground sm:text-4xl">{i.k}</div>
            <div className="mt-1 text-sm text-muted-foreground">{i.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function SectionHeading({
  eyebrow,
  title,
  desc,
  light,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Badge
        className={`gap-2 ${
          light ? "border-white/15 bg-white/10 text-white" : "border-brand/20 bg-brand/5 text-brand"
        }`}
      >
        {eyebrow}
      </Badge>
      <h2
        className={`mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl ${
          light ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p className={`mt-4 ${light ? "text-white/70" : "text-muted-foreground"}`}>{desc}</p>
      )}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything you need to grow online"
          desc="From custom website development to full-funnel SEO — built specifically for Indore businesses."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card
              key={s.title}
              className="group relative overflow-hidden border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-gradient opacity-0 blur-3xl transition group-hover:opacity-20" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-white shadow-glow">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 space-y-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY CHOOSE ---------------- */
function WhyChoose() {
  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Akshi Digital"
          title="A premium agency at a price Indore businesses can afford"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w) => (
            <div
              key={w.title}
              className="rounded-2xl border border-border bg-background p-7 transition hover:border-brand/40 hover:shadow-card"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-brand/10 text-brand">
                <w.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INDUSTRIES ---------------- */
function Industries() {
  return (
    <section id="industries" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Trusted across Indore's business landscape"
          desc="Tailored digital strategies for the industries shaping our city."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((i) => (
            <div
              key={i.name}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 text-center transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-card"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow transition group-hover:scale-110">
                <i.icon className="h-7 w-7" />
              </div>
              <div className="font-semibold">{i.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PORTFOLIO ---------------- */
function Portfolio() {
  return (
    <section id="portfolio" className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Real results for real Indore businesses"
          desc="A snapshot of growth we've helped local brands achieve."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {portfolio.map((p) => (
            <Card
              key={p.title}
              className="group relative overflow-hidden border-border bg-background p-8 shadow-card transition hover:shadow-glow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <Badge className="border-brand/20 bg-brand/5 text-brand">{p.category}</Badge>
                  <h3 className="mt-3 text-2xl font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.sub}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-[#10B981]" />
              </div>
              <div className="mt-8 rounded-xl bg-brand-gradient p-5 text-white shadow-glow">
                <div className="text-xs uppercase tracking-wider opacity-80">Result</div>
                <div className="mt-1 text-2xl font-bold">{p.metric}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- LOCAL SEO ---------------- */
function LocalSEO() {
  const keywords = [
    "Website Development Company in Indore",
    "Web Design Company in Indore",
    "SEO Company in Indore",
    "Local SEO Services Indore",
    "WordPress Development Indore",
    "Digital Marketing Agency Indore",
  ];
  return (
    <section className="relative overflow-hidden bg-hero py-20 text-white sm:py-28">
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <Badge className="gap-2 border-white/15 bg-white/10 text-white">
            <MapPin className="h-3.5 w-3.5 text-[#06B6D4]" /> Local SEO Indore
          </Badge>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Rank Higher in Google Searches Across <span className="text-gradient">Indore</span>
          </h2>
          <p className="mt-4 text-white/75">
            We target the keywords your customers in Indore actually search for — and put your
            business in front of them on Google Search and Maps.
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {keywords.map((k) => (
              <li key={k} className="flex items-start gap-2 text-sm text-white/85">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#06B6D4]" />
                {k}
              </li>
            ))}
          </ul>
          <a href="#audit" className="mt-8 inline-block">
            <Button size="lg" className="bg-brand-gradient text-white shadow-glow">
              Get My Free Local SEO Audit <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </a>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-brand-gradient opacity-20 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 glass">
            <iframe
              title="Indore Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=75.78%2C22.65%2C75.97%2C22.80&layer=mapnik&marker=22.7196%2C75.8577"
              className="h-[420px] w-full"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-xl glass p-4 text-sm shadow-glow">
            <div className="flex items-center gap-2 text-white/70">
              <MapPin className="h-4 w-4 text-[#06B6D4]" /> Indore, MP
            </div>
            <div className="mt-1 font-semibold">Serving local businesses across the city</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
function Process() {
  return (
    <section id="process" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title="A proven 6-step path to digital growth"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((p) => (
            <div
              key={p.step}
              className="relative rounded-2xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="font-display text-5xl font-bold text-gradient">{p.step}</div>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Love"
          title="What Indore businesses say about us"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-border bg-background p-7 shadow-card">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-[#06B6D4] text-[#06B6D4]" />
                ))}
              </div>
              <p className="mt-4 text-foreground/85">"{t.text}"</p>
              <div className="mt-6 border-t border-border pt-4">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.biz}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- AUDIT CTA ---------------- */
function AuditCTA() {
  const [loading, setLoading] = useState(false);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Audit request received!", {
        description: "Our team will reach out within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 700);
  }
  return (
    <section id="audit" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-hero p-8 text-white shadow-glow sm:p-14">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
          <div className="relative grid gap-10 lg:grid-cols-2">
            <div>
              <Badge className="gap-2 border-white/15 bg-white/10 text-white">
                <Sparkles className="h-3.5 w-3.5 text-[#06B6D4]" /> Free for Indore Businesses
              </Badge>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Get a <span className="text-gradient">FREE Website & SEO Audit</span>
              </h2>
              <p className="mt-4 max-w-md text-white/75">
                We'll audit your current website, identify SEO opportunities, and send a personalized
                growth roadmap — at no cost.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/85">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> 25-point technical SEO review
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Local keyword opportunities in Indore
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Speed & mobile experience report
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Conversion improvement ideas
                </li>
              </ul>
            </div>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl glass p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" required />
                <Field label="Business Name" name="business" placeholder="Acme Pvt Ltd" required />
                <Field label="Phone" name="phone" placeholder="+91 9876543210" type="tel" required />
                <Field label="Email" name="email" placeholder="you@email.com" type="email" required />
                <Field
                  label="Website URL"
                  name="website"
                  placeholder="https://yoursite.com"
                  className="sm:col-span-2"
                />
                <div className="sm:col-span-2">
                  <Label htmlFor="service" className="text-white/85">
                    Service Required
                  </Label>
                  <select
                    id="service"
                    name="service"
                    className="mt-1.5 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-[#06B6D4]"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled className="text-foreground">
                      Choose a service
                    </option>
                    <option className="text-foreground">Website Development</option>
                    <option className="text-foreground">SEO Services</option>
                    <option className="text-foreground">Local SEO Indore</option>
                    <option className="text-foreground">E-Commerce Store</option>
                    <option className="text-foreground">WordPress Development</option>
                    <option className="text-foreground">Website Maintenance</option>
                  </select>
                </div>
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="mt-6 w-full bg-brand-gradient text-white shadow-glow hover:opacity-90"
              >
                {loading ? "Sending..." : "Get My Free Audit"}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <p className="mt-3 text-center text-xs text-white/60">
                No spam. We respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required,
  className,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label htmlFor={name} className="text-white/85">
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-1.5 border-white/15 bg-white/5 text-white placeholder:text-white/40 focus-visible:border-[#06B6D4] focus-visible:ring-0"
      />
    </div>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          desc="Everything you need to know before working with us."
        />
        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's grow your business online"
          desc="Talk to our Indore team today — choose whichever channel works best."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <ContactCard
            icon={Phone}
            title="Call Us"
            value="+91 98765 43210"
            href="tel:+919876543210"
          />
          <ContactCard
            icon={MessageCircle}
            title="WhatsApp"
            value="Chat with our team"
            href="https://wa.me/919876543210"
          />
          <ContactCard
            icon={Mail}
            title="Email"
            value="hello@akshidigital.com"
            href="mailto:hello@akshidigital.com"
          />
        </div>
        <div className="mt-8 flex items-center justify-center gap-3 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
          <Building2 className="h-5 w-5 text-brand" />
          <span>Akshi Digital · Indore, Madhya Pradesh, India</span>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: typeof Phone;
  title: string;
  value: string;
  href: string;
}) {
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
      <ArrowRight className="ml-auto h-5 w-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-brand" />
    </a>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-brand-gradient font-bold shadow-glow">
                A
              </div>
              <div>
                <div className="font-display text-base font-bold tracking-tight">AKSHI DIGITAL</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                  Indore · India
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm text-white/70">
              Building websites that grow businesses. Custom development, SEO and digital growth
              services for Indore and beyond.
            </p>
          </div>
          <FooterCol
            title="Company"
            links={[
              { l: "Home", h: "#top" },
              { l: "Services", h: "#services" },
              { l: "Portfolio", h: "#portfolio" },
              { l: "Contact", h: "#contact" },
            ]}
          />
          <FooterCol
            title="Services"
            links={[
              { l: "Website Development", h: "#services" },
              { l: "SEO Services", h: "#services" },
              { l: "Local SEO Indore", h: "#services" },
              { l: "WordPress", h: "#services" },
            ]}
          />
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row">
          <div>© {new Date().getFullYear()} Akshi Digital. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { l: string; h: string }[] }) {
  return (
    <div>
      <div className="text-sm font-semibold uppercase tracking-wider text-white/80">{title}</div>
      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {links.map((l) => (
          <li key={l.l}>
            <a href={l.h} className="hover:text-white">
              {l.l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
