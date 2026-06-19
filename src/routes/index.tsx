import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Star,
  Sparkles,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Award,
  Stethoscope,
  GraduationCap,
  Home,
  Factory,
  UtensilsCrossed,
  ShoppingCart,
  Briefcase,
  Rocket,
  Search,
  Globe2,
} from "lucide-react";
import heroImg from "@/assets/hero-dashboard.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clients } from "@/components/site/Clients";
import { LeadForm } from "@/components/site/LeadForm";
import { services } from "@/lib/services-data";

const SITE_URL = "https://akshidigital.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akshi Digital — Website Development & SEO Company in Indore" },
      {
        name: "description",
        content:
          "Website development, SEO, local SEO, e-commerce and lead generation for Indore, India and overseas businesses that want more qualified enquiries.",
      },
      { property: "og:title", content: "Akshi Digital — Website Development & SEO Company in Indore" },
      {
        property: "og:description",
        content:
          "We help Indian and international businesses generate more leads, rank higher on Google, and grow faster.",
      },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: `${SITE_URL}${heroImg}` },
      { name: "twitter:image", content: `${SITE_URL}${heroImg}` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${SITE_URL}/#lead-generation-seo`,
          name: "Website Development, SEO and Lead Generation for India and Global Businesses",
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: [
            { "@type": "City", name: "Indore" },
            { "@type": "Country", name: "India" },
            { "@type": "Place", name: "Worldwide" },
          ],
          serviceType: [
            "Website Development",
            "SEO Services",
            "Local SEO",
            "Google Business Profile Optimization",
            "Lead Generation",
          ],
          description:
            "Conversion-focused website development, SEO, local SEO and lead generation services for Indian and international businesses.",
        }),
      },
    ],
  }),
  component: Index,
});

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
  { icon: MapPin, title: "Based in Indore", desc: "Local market insight with remote delivery for clients worldwide." },
  { icon: TrendingUp, title: "SEO-First Development", desc: "Every site is engineered to rank from day one." },
  { icon: Shield, title: "Transparent Reporting", desc: "Clear monthly reports — no jargon, no surprises." },
  { icon: Zap, title: "Fast Turnaround", desc: "Most websites delivered in 2–4 weeks." },
  { icon: Users, title: "Dedicated Support", desc: "A single point of contact through your whole project." },
  { icon: Award, title: "Affordable Packages", desc: "Premium quality at fair, transparent pricing." },
];

const portfolio = [
  { category: "Healthcare", title: "City Care Clinic", metric: "+312% organic traffic", sub: "Local SEO + new website" },
  { category: "Real Estate", title: "Indore Prime Homes", metric: "+185 monthly leads", sub: "Landing pages + GBP" },
  { category: "Manufacturing", title: "Shree Industries", metric: "#1 ranking for 24 keywords", sub: "Technical SEO overhaul" },
  { category: "Restaurant", title: "Saffron Kitchen", metric: "4.8★ — 320 new reviews", sub: "GBP + WordPress site" },
];

const testimonials = [
  { name: "Dr. Rajeev Sharma", biz: "Healthcare Clinic, Indore", text: "Akshi Digital rebuilt our website and within 3 months our appointment bookings doubled. Truly professional team." },
  { name: "Priya Mehta", biz: "Real Estate Developer", text: "Their local SEO strategy put us on the Indore map — literally. We now rank in the top 3 for our key searches." },
  { name: "Anil Verma", biz: "Manufacturing SME", text: "From concept to launch in 3 weeks. Clean code, great design and traffic is climbing every month." },
];

const processSteps = [
  { step: "01", title: "Discovery Call", desc: "Understand your business, goals and audience." },
  { step: "02", title: "Strategy Planning", desc: "Map a website + SEO blueprint tailored to you." },
  { step: "03", title: "Design & Development", desc: "Craft a premium, fast, mobile-first website." },
  { step: "04", title: "SEO Optimization", desc: "On-page, technical and local SEO baked in." },
  { step: "05", title: "Launch", desc: "Go live with confidence and analytics in place." },
  { step: "06", title: "Growth Support", desc: "Ongoing optimization to keep leads compounding." },
];

const faqs = [
  { q: "How much does a website cost in Indore?", a: "Our business website packages start from ₹19,999 and scale based on features. E-commerce and custom web apps are quoted after a discovery call." },
  { q: "How long does website development take?", a: "Most business websites go live in 2–4 weeks. Larger e-commerce or custom builds typically take 6–10 weeks." },
  { q: "How does local SEO work?", a: "We optimize your Google Business Profile, build local citations, target Indore-specific keywords and create location-aware content so you appear in Maps and local searches." },
  { q: "Do you provide ongoing support?", a: "Yes. Every project includes 30 days of free support, and we offer affordable monthly maintenance & SEO plans after that." },
  { q: "Can you redesign my existing website?", a: "Absolutely. We audit your current site, preserve your SEO equity and rebuild it with a modern, conversion-focused design." },
  { q: "How soon can SEO results be seen?", a: "Local SEO can show movement in 4–6 weeks. Broader organic SEO typically shows strong, compounding results within 3–6 months." },
  { q: "Does Akshi Digital work with clients outside India?", a: "Yes. Akshi Digital works with overseas clients for website development, SEO, content strategy and lead generation. Projects are managed remotely with discovery calls, milestone reviews, shared dashboards and clear delivery timelines." },
];

const answerHighlights = [
  {
    q: "Who is the best fit for Akshi Digital?",
    a: "Akshi Digital is best for Indian and overseas businesses that need a conversion-focused website, stronger Google visibility, and a practical lead generation system.",
  },
  {
    q: "What results does the website focus on?",
    a: "The website is built to generate calls, WhatsApp enquiries, form submissions, map visibility, and qualified sales conversations.",
  },
  {
    q: "Which locations do you target?",
    a: "We target Indore and India search intent, plus international buyer searches for businesses selling services to overseas markets.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. Akshi Digital builds websites, SEO campaigns, and lead generation funnels for overseas clients using remote discovery calls, shared dashboards, async reviews, and clear milestone delivery.",
  },
];

const leadMagnets = [
  "Homepage conversion score",
  "Core Web Vitals and mobile speed check",
  "Google Business Profile visibility review",
  "Top 10 missed keyword opportunities",
  "Competitor gap snapshot for local and global searches",
  "Lead capture and CTA recommendations",
];

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Clients />
      <Services />
      <AnswerEngine />
      <GlobalProjects />
      <WhyChoose />
      <Industries />
      <Portfolio />
      <LocalSEO />
      <Process />
      <Testimonials />
      <LeadMagnet />
      <LeadForm />
      <FAQ />
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero text-white">
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-32">
        <div className="flex flex-col justify-center animate-fade-in">
          <Badge className="w-fit gap-2 border-white/15 bg-white/10 text-white backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-[#06B6D4]" />
            India-based digital agency for local and global growth
          </Badge>
          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[64px]">
            Website Development & SEO for{" "}
            <span className="text-gradient">India and Global Businesses</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75">
            We help local, national, and overseas businesses generate more leads, rank higher on
            Google, and grow faster through strategic website development and SEO solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact">
              <Button size="lg" className="bg-brand-gradient text-white hover:opacity-90 shadow-glow">
                Get Free Consultation <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <a href="#audit">
              <Button size="lg" variant="outline" className="border-white/25 bg-white/5 text-white hover:bg-white/10">
                Request Website Audit
              </Button>
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-[#0F172A] bg-brand-gradient" />
                ))}
              </div>
              <span>100+ businesses growing in India and abroad</span>
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
            <img src={heroImg} alt="Akshi Digital SEO analytics dashboard" width={1536} height={1024} className="h-auto w-full" />
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

function TrustBar() {
  const items = [
    { k: "100+", v: "Projects Delivered" },
    { k: "SEO-First", v: "Development Approach" },
    { k: "100%", v: "Mobile Responsive" },
    { k: "Global", v: "Remote Delivery" },
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

function SectionHeading({ eyebrow, title, desc, light }: { eyebrow: string; title: string; desc?: string; light?: boolean }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Badge className={`gap-2 ${light ? "border-white/15 bg-white/10 text-white" : "border-brand/20 bg-brand/5 text-brand"}`}>{eyebrow}</Badge>
      <h2 className={`mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl ${light ? "text-white" : ""}`}>{title}</h2>
      {desc && <p className={`mt-4 ${light ? "text-white/70" : "text-muted-foreground"}`}>{desc}</p>}
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
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }}>
                <Card className="group relative h-full overflow-hidden border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-glow">
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-gradient opacity-0 blur-3xl transition group-hover:opacity-20" />
                  <div className="relative">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-white shadow-glow">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                    <ul className="mt-5 space-y-2">
                      {s.items.slice(0, 4).map((it) => (
                        <li key={it} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                          {it}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AnswerEngine() {
  return (
    <section className="border-y border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="AI SEO + GEO + AEO"
          title="Built to be understood by Google, AI Overviews and answer engines"
          desc="Clear answers, local entity signals, schema, service pages and proof points help search engines and AI assistants understand what Akshi Digital does, who we serve, and why prospects should contact us."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {answerHighlights.map((item) => (
            <Card key={item.q} className="border-border bg-card p-6 shadow-card">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand">
                <Search className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{item.q}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.a}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10 grid gap-4 rounded-2xl border border-brand/20 bg-brand/5 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
          <div>
            <h3 className="text-2xl font-bold">Answer-first pages convert better.</h3>
            <p className="mt-3 text-muted-foreground">
              Every Akshi Digital page is shaped around buyer questions, local intent, service proof,
              conversion CTAs, and structured data so visitors and AI crawlers get useful answers fast.
            </p>
          </div>
          <div className="grid gap-2 text-sm">
            {["FAQ schema", "LocalBusiness schema", "Organization schema", "Service schema", "Internal service links"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GlobalProjects() {
  const points = [
    "Remote discovery calls and milestone-based delivery",
    "SEO pages for international, national, and local search intent",
    "Lead capture through forms, WhatsApp, calls, CRM-ready enquiries, and analytics",
    "Clear reporting for rankings, traffic, conversions, and next actions",
  ];

  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <Badge className="border-brand/20 bg-brand/5 text-brand">Global Projects</Badge>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Lead generation websites for clients in India and outside India
          </h2>
          <p className="mt-4 text-muted-foreground">
            Akshi Digital works with service businesses, startups, consultants, healthcare brands,
            education companies, and B2B teams that want enquiries from India, the USA, UK, UAE,
            Canada, Australia, and other international markets.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact">
              <Button className="bg-brand-gradient text-white shadow-glow">
                Discuss an Overseas Project <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <a href="#audit">
              <Button variant="outline">Get Global SEO Audit</Button>
            </a>
          </div>
        </div>
        <Card className="border-border bg-background p-7 shadow-card">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-white shadow-glow">
            <Globe2 className="h-6 w-6" />
          </div>
          <h3 className="mt-5 text-xl font-bold">What international clients get</h3>
          <div className="mt-5 grid gap-3">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#10B981]" />
                <span className="text-sm text-muted-foreground">{point}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Why Akshi Digital" title="A premium agency at a price Indore businesses can afford" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w) => (
            <div key={w.title} className="rounded-2xl border border-border bg-background p-7 transition hover:border-brand/40 hover:shadow-card">
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

function LeadMagnet() {
  return (
    <section id="audit" className="bg-hero py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <Badge className="border-white/15 bg-white/10 text-white">Free Lead Gen Audit</Badge>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Turn your website into a lead generation magnet
          </h2>
          <p className="mt-4 text-white/75">
            Get a practical audit that shows what is blocking calls, WhatsApp enquiries, form fills,
            Google rankings, and AI search visibility.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact">
              <Button size="lg" className="bg-brand-gradient text-white shadow-glow">
                Claim Free Audit <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:+919630040607">
              <Button size="lg" variant="outline" className="border-white/25 bg-white/5 text-white hover:bg-white/10">
                Call Now
              </Button>
            </a>
          </div>
        </div>
        <Card className="border-white/10 bg-white/10 p-6 text-white shadow-glow backdrop-blur md:p-8">
          <div className="grid gap-3 sm:grid-cols-2">
            {leadMagnets.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#06B6D4]" />
                <span className="text-sm text-white/85">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/65">
            You get a concise action list, not a generic report. The goal is simple: more qualified local enquiries.
          </p>
        </Card>
      </div>
    </section>
  );
}

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
            <div key={i.name} className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 text-center transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-card">
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

function Portfolio() {
  return (
    <section id="portfolio" className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Portfolio" title="Real results for real Indore businesses" desc="A snapshot of growth we've helped local brands achieve." />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {portfolio.map((p) => (
            <Card key={p.title} className="group relative overflow-hidden border-border bg-background p-8 shadow-card transition hover:shadow-glow">
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
        <div className="mt-10 text-center">
          <Link to="/portfolio">
            <Button variant="outline">View all case studies <ArrowRight className="ml-1 h-4 w-4" /></Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

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
            We target the keywords your customers in Indore actually search for — and put your business in front of them on Google Search and Maps.
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {keywords.map((k) => (
              <li key={k} className="flex items-start gap-2 text-sm text-white/85">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#06B6D4]" />
                {k}
              </li>
            ))}
          </ul>
          <Link to="/services/$slug" params={{ slug: "local-seo" }} className="mt-8 inline-block">
            <Button size="lg" className="bg-brand-gradient text-white shadow-glow">
              Explore Local SEO <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
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
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our Process" title="A proven 6-step path to digital growth" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((p) => (
            <div key={p.step} className="relative rounded-2xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-glow">
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

function Testimonials() {
  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Client Love" title="What Indore businesses say about us" />
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

function FAQ() {
  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" desc="Everything you need to know before working with us." />
        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
