import {
  Globe,
  Search,
  ShoppingCart,
  LayoutTemplate,
  MapPin,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  desc: string;
  items: string[];
  benefits: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "website-development",
    icon: Globe,
    title: "Website Development",
    short: "Business, corporate & custom web applications built for speed and conversions.",
    desc: "We build premium, mobile-first websites engineered to load fast, rank on Google and convert visitors into leads. Every project is hand-crafted in Indore with conversion strategy baked in.",
    items: ["Business Websites", "Corporate Sites", "Custom Web Apps", "Landing Pages", "Lightning-fast performance", "Conversion-focused design"],
    benefits: [
      { title: "Built for Speed", desc: "Sub-2s load times powered by modern frameworks and edge hosting." },
      { title: "SEO Foundation", desc: "Semantic HTML, schema, and core-web-vitals tuned from day one." },
      { title: "Lead Capture Ready", desc: "Forms, WhatsApp & call CTAs strategically placed across the site." },
    ],
    faqs: [
      { q: "How long does a website take?", a: "Most business websites launch in 2–4 weeks." },
      { q: "What's included in the price?", a: "Design, development, basic SEO, hosting setup and 30 days free support." },
    ],
  },
  {
    slug: "seo",
    icon: Search,
    title: "SEO Services",
    short: "Rank higher on Google with technical, on-page & content SEO.",
    desc: "Our SEO strategy combines technical excellence, keyword-rich content and strong off-page authority to put your business above competitors — and keep it there.",
    items: ["Keyword Research", "On-Page Optimization", "Technical SEO Audits", "Content Strategy", "Link Building", "Monthly Performance Reports"],
    benefits: [
      { title: "Compounding Traffic", desc: "Build an organic asset that grows month over month." },
      { title: "Higher Quality Leads", desc: "Capture buyers actively searching for your services." },
      { title: "Transparent Reporting", desc: "See exactly what's improving each month — no jargon." },
    ],
    faqs: [
      { q: "When will I see results?", a: "Local SEO shows movement in 4–6 weeks; broader SEO compounds within 3–6 months." },
    ],
  },
  {
    slug: "local-seo",
    icon: MapPin,
    title: "Local SEO Indore",
    short: "Dominate 'near me' searches across Indore and rank in Google Maps.",
    desc: "We optimize your digital presence specifically for Indore — from your Google Business Profile to citation building and location pages — so local customers find you first.",
    items: ["Google Business Profile Optimization", "Local Citation Building", "Indore Keyword Targeting", "Map Pack Ranking", "Review Generation Strategy", "Location-Specific Landing Pages"],
    benefits: [
      { title: "Map-Pack Visibility", desc: "Appear in the top 3 Google Maps results for your category in Indore." },
      { title: "More Calls & Walk-Ins", desc: "Customers nearby discover and contact your business directly." },
      { title: "Hyper-Local Trust", desc: "A strong local presence converts at much higher rates than broad SEO." },
    ],
    faqs: [
      { q: "Do you handle reviews?", a: "Yes — we set up automated review request flows and respond on your behalf." },
    ],
  },
  {
    slug: "ecommerce",
    icon: ShoppingCart,
    title: "E-Commerce Development",
    short: "Beautiful, high-converting online stores with secure payments and analytics.",
    desc: "We build Shopify and WooCommerce stores designed to sell — with optimized product pages, secure Indian payment gateways and conversion-tuned checkouts.",
    items: ["Shopify & WooCommerce", "Custom Checkout Flow", "Razorpay / Stripe Integration", "Product SEO", "Inventory & Order Sync", "Abandoned Cart Recovery"],
    benefits: [
      { title: "Built to Sell", desc: "Product pages and checkout designed around real buyer psychology." },
      { title: "India-Ready Payments", desc: "UPI, cards, COD, EMI — all major Indian payment options included." },
      { title: "Scale-Friendly", desc: "Architecture that handles 10 orders/day or 10,000." },
    ],
    faqs: [
      { q: "Shopify or WooCommerce?", a: "We help you choose based on volume, customization needs and budget." },
    ],
  },
  {
    slug: "wordpress",
    icon: LayoutTemplate,
    title: "WordPress Development",
    short: "Pixel-perfect WordPress sites that are fast, secure and easy to manage.",
    desc: "From custom themes to Elementor builds, we craft WordPress websites that look premium, load fast and stay easy for you to update.",
    items: ["Custom Theme Development", "Elementor / Bricks Builds", "Plugin Setup & Customization", "WooCommerce Integration", "Speed & Security Hardening", "Easy CMS Training"],
    benefits: [
      { title: "Edit Anything Yourself", desc: "Visual editor + clear training so you're never stuck waiting on a developer." },
      { title: "Speed Tuned", desc: "Cache, image optimization and lean code for top PageSpeed scores." },
      { title: "Secure by Default", desc: "Hardened against common WordPress vulnerabilities." },
    ],
    faqs: [
      { q: "Can you redesign my existing WordPress site?", a: "Yes — we preserve SEO equity while modernizing design and performance." },
    ],
  },
  {
    slug: "google-business-profile",
    icon: MapPin,
    title: "Google Business Profile Optimization",
    short: "Show up in Maps & local searches across Indore with optimized GBP setup.",
    desc: "Your Google Business Profile is your most powerful local asset. We optimize every field, manage posts and reviews, and use local SEO best practices to make you the obvious choice in Indore.",
    items: ["Profile Setup & Verification", "Category & Keyword Optimization", "Weekly Posts & Photos", "Review Strategy & Replies", "Q&A Management", "Local Citation Sync"],
    benefits: [
      { title: "Higher Map Rankings", desc: "Climb into the Map 3-Pack for your most valuable keywords." },
      { title: "Direct Lead Capture", desc: "Calls, direction requests and messages straight from search." },
      { title: "Reputation Boost", desc: "Build a 5-star review profile that converts trust into customers." },
    ],
    faqs: [
      { q: "Do I need a website for GBP to work?", a: "No, but a strong website + GBP combined drives the best results." },
    ],
  },
  {
    slug: "maintenance",
    icon: Wrench,
    title: "Website Maintenance",
    short: "Stay secure & fast with backups, monitoring and ongoing technical support.",
    desc: "Websites are living assets. Our maintenance plans keep yours secure, updated and performing at its best — so you can focus on your business.",
    items: ["Daily Automated Backups", "Security Monitoring & Updates", "Performance Optimization", "Uptime Monitoring (24/7)", "Content Updates & Edits", "Monthly Health Reports"],
    benefits: [
      { title: "Always Online", desc: "Proactive monitoring prevents downtime before it costs you leads." },
      { title: "Always Secure", desc: "Patches and hardening applied as soon as updates drop." },
      { title: "Always Fast", desc: "We tune speed monthly so your site never slows down." },
    ],
    faqs: [
      { q: "Is there a contract?", a: "No — monthly plans, cancel anytime." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
