import {
  Globe,
  Search,
  ShoppingCart,
  LayoutTemplate,
  MapPin,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type ProcessStep = { step: string; title: string; desc: string };
export type PricingTier = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  highlight?: boolean;
};
export type Stat = { value: string; label: string };

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  hero: string;
  desc: string;
  items: string[];
  benefits: { title: string; desc: string }[];
  stats: Stat[];
  whoFor: string[];
  process: ProcessStep[];
  deliverables: string[];
  techStack?: string[];
  pricing: PricingTier[];
  caseStudy?: { client: string; result: string; quote: string };
  faqs: { q: string; a: string }[];
};

const defaultProcess = (custom?: ProcessStep[]): ProcessStep[] =>
  custom ?? [
    { step: "01", title: "Discovery Call", desc: "We understand your business, goals, target audience and competitors in Indore." },
    { step: "02", title: "Strategy & Proposal", desc: "Receive a clear scope, timeline and fixed-price proposal — no surprises." },
    { step: "03", title: "Design & Build", desc: "Our team designs, develops and reviews everything with you in weekly sprints." },
    { step: "04", title: "Launch & Optimize", desc: "We launch, track conversions and continuously improve performance." },
  ];

export const services: Service[] = [
  {
    slug: "website-development",
    icon: Globe,
    title: "Website Development",
    short: "Business, corporate & custom web applications built for speed and conversions.",
    hero: "Premium business websites engineered for Indore brands that want to look world-class and convert visitors into qualified leads — not just look pretty.",
    desc: "We build premium, mobile-first websites engineered to load fast, rank on Google and convert visitors into leads. Every project is hand-crafted in Indore with conversion strategy baked in.",
    items: [
      "Business & Corporate Websites",
      "Custom Web Applications",
      "High-converting Landing Pages",
      "Sub-2s Load Times",
      "Mobile-first Responsive Design",
      "Schema, Sitemap & SEO Setup",
      "Lead Forms + WhatsApp CTAs",
      "Analytics & Conversion Tracking",
    ],
    benefits: [
      { title: "Built for Speed", desc: "Sub-2s load times powered by modern frameworks and edge hosting." },
      { title: "SEO Foundation", desc: "Semantic HTML, schema, and core-web-vitals tuned from day one." },
      { title: "Lead Capture Ready", desc: "Forms, WhatsApp & call CTAs strategically placed across the site." },
    ],
    stats: [
      { value: "150+", label: "Websites delivered" },
      { value: "<2s", label: "Avg. load time" },
      { value: "98", label: "PageSpeed score" },
      { value: "3.2x", label: "More leads vs old site" },
    ],
    whoFor: [
      "Established Indore businesses upgrading from an outdated website",
      "Startups launching a brand-new web presence",
      "Service businesses (clinics, law firms, consultants) needing more leads",
      "Manufacturers & exporters needing a credible corporate site",
    ],
    process: defaultProcess([
      { step: "01", title: "Discovery & Brand Workshop", desc: "We map your offer, audience, competitors and conversion goals." },
      { step: "02", title: "Wireframes & UI Design", desc: "High-fidelity Figma designs reviewed and approved before development." },
      { step: "03", title: "Development & QA", desc: "Pixel-perfect responsive build, cross-browser tested and speed-optimized." },
      { step: "04", title: "Launch & Growth", desc: "Go-live, analytics, training and 30 days of free post-launch support." },
    ]),
    deliverables: [
      "Custom UI/UX design in Figma",
      "Fully responsive, mobile-first website",
      "On-page SEO + schema markup",
      "Google Analytics 4 + Search Console setup",
      "1-year hosting & SSL configuration",
      "Training video + 30 days free support",
    ],
    techStack: ["React", "Next.js", "WordPress", "Tailwind CSS", "Vercel", "Cloudflare"],
    pricing: [
      {
        name: "Starter",
        price: "₹35,000",
        tagline: "Up to 5 pages — perfect for new businesses",
        features: ["5 custom pages", "Mobile responsive", "Contact + WhatsApp", "Basic SEO setup", "2 weeks delivery"],
      },
      {
        name: "Business",
        price: "₹75,000",
        tagline: "Most popular for growing Indore brands",
        features: ["Up to 10 pages", "Custom UI design", "Lead capture forms", "Blog / CMS setup", "Advanced SEO", "Analytics + GTM", "30 days support"],
        highlight: true,
      },
      {
        name: "Premium",
        price: "₹1,50,000+",
        tagline: "Corporate sites & custom web apps",
        features: ["Unlimited pages", "Custom integrations", "CRM / API hookup", "Multi-language ready", "Conversion strategy", "60 days support"],
      },
    ],
    caseStudy: {
      client: "Ninapharm — Indore",
      result: "Generated 3.4× more inbound enquiries within 90 days of launch.",
      quote: "Akshi Digital rebuilt our website from scratch and the difference is night and day. Our enquiries tripled.",
    },
    faqs: [
      { q: "How long does a website take?", a: "Most business websites launch in 2–4 weeks. Larger custom builds take 6–8 weeks." },
      { q: "What's included in the price?", a: "Design, development, basic SEO, hosting setup, training and 30 days of free post-launch support." },
      { q: "Do you provide content & images?", a: "Yes — our copywriters and design team can produce SEO-ready content and source premium imagery." },
      { q: "Will I be able to update the site myself?", a: "Absolutely. We hand over a friendly CMS and a training video so non-technical teams can edit easily." },
    ],
  },
  {
    slug: "seo",
    icon: Search,
    title: "SEO Services",
    short: "Rank higher on Google with technical, on-page & content SEO.",
    hero: "Compounding organic growth for Indore brands — combining technical SEO, content and authority building to put you above your competitors and keep you there.",
    desc: "Our SEO strategy combines technical excellence, keyword-rich content and strong off-page authority to put your business above competitors — and keep it there.",
    items: [
      "In-depth Keyword Research",
      "Technical SEO Audits",
      "On-Page Optimization",
      "Content Strategy & Writing",
      "Authority Link Building",
      "Schema & Rich Results",
      "Core Web Vitals Tuning",
      "Monthly Performance Reports",
    ],
    benefits: [
      { title: "Compounding Traffic", desc: "Build an organic asset that grows month over month — and never stops." },
      { title: "Higher Quality Leads", desc: "Capture buyers actively searching for your services in Indore and beyond." },
      { title: "Transparent Reporting", desc: "Monthly dashboards showing rankings, traffic, leads and revenue impact." },
    ],
    stats: [
      { value: "+312%", label: "Avg. organic traffic in 6 months" },
      { value: "Top 3", label: "Rankings for primary keywords" },
      { value: "60+", label: "Active SEO clients" },
      { value: "4.9/5", label: "Client satisfaction" },
    ],
    whoFor: [
      "Businesses tired of paying for ads with no organic growth",
      "Service companies wanting steady inbound leads",
      "E-commerce stores looking to scale organic revenue",
      "Brands competing in tough Indore & national niches",
    ],
    process: defaultProcess([
      { step: "01", title: "SEO Audit", desc: "Full technical + on-page audit of your current site to find the highest-impact wins." },
      { step: "02", title: "Keyword & Content Strategy", desc: "Map opportunities, search intent and a 6-month content roadmap." },
      { step: "03", title: "Implementation", desc: "Technical fixes, on-page optimization, content publishing and link building." },
      { step: "04", title: "Track & Scale", desc: "Monthly reports, ranking tracking and continuous optimization." },
    ]),
    deliverables: [
      "Comprehensive technical SEO audit",
      "Keyword strategy & content calendar",
      "Monthly optimized blog content",
      "Backlink acquisition reports",
      "Monthly performance dashboard",
      "Quarterly strategy review calls",
    ],
    pricing: [
      { name: "Local SEO", price: "₹15,000/mo", tagline: "Best for single-location businesses", features: ["10 target keywords", "GBP optimization", "4 blogs/month", "Local citations", "Monthly report"] },
      { name: "Growth SEO", price: "₹35,000/mo", tagline: "Scale traffic & leads nationwide", features: ["30 target keywords", "8 blogs/month", "Authority link building", "Technical SEO", "Conversion tracking", "Bi-weekly calls"], highlight: true },
      { name: "Enterprise SEO", price: "₹75,000/mo+", tagline: "Aggressive growth & high-competition niches", features: ["Unlimited keywords", "Dedicated team", "PR + Digital outreach", "Programmatic SEO", "Weekly strategy"] },
    ],
    caseStudy: {
      client: "Valstem — Industrial Indore",
      result: "Ranked Page 1 for 24 high-intent keywords; +287% organic leads in 5 months.",
      quote: "We finally have a predictable lead engine. SEO is now our #1 channel.",
    },
    faqs: [
      { q: "When will I see results?", a: "Local SEO shows movement in 4–6 weeks; broader SEO compounds within 3–6 months." },
      { q: "Do you guarantee #1 rankings?", a: "Nobody honest can guarantee #1 — but we guarantee strategy, execution and transparent monthly reporting." },
      { q: "Do you write the content too?", a: "Yes — our content team writes SEO-ready, human-quality content monthly." },
      { q: "Can I cancel anytime?", a: "Yes. SEO is a month-to-month engagement with no long lock-in." },
    ],
  },
  {
    slug: "local-seo",
    icon: MapPin,
    title: "Local SEO Indore",
    short: "Dominate 'near me' searches across Indore and rank in Google Maps.",
    hero: "Show up in the Google Map 3-Pack across Vijay Nagar, Palasia, Bhawarkuan and every Indore locality your customers search from — and turn searches into walk-ins, calls and bookings.",
    desc: "We optimize your digital presence specifically for Indore — from your Google Business Profile to citation building and location pages — so local customers find you first.",
    items: [
      "Google Business Profile Optimization",
      "Indore Keyword Targeting",
      "Local Citation Building",
      "Map Pack Ranking Strategy",
      "Review Generation Automation",
      "Geo-targeted Landing Pages",
      "Voice & 'Near Me' Search",
      "Hyper-local Content",
    ],
    benefits: [
      { title: "Map-Pack Visibility", desc: "Appear in the top 3 Google Maps results for your category in Indore." },
      { title: "More Calls & Walk-Ins", desc: "Customers nearby discover and contact your business directly." },
      { title: "Hyper-Local Trust", desc: "A strong local presence converts at much higher rates than broad SEO." },
    ],
    stats: [
      { value: "10x", label: "Map-pack impressions" },
      { value: "+240%", label: "Direction requests" },
      { value: "5★", label: "Avg. review rating" },
      { value: "30 days", label: "First map-pack wins" },
    ],
    whoFor: [
      "Clinics, dentists, salons & spas in Indore",
      "Restaurants, cafés and retail stores",
      "Coaching institutes & academies",
      "Service providers (plumbers, electricians, gyms, real estate)",
    ],
    process: defaultProcess([
      { step: "01", title: "Local Audit", desc: "We audit your GBP, NAP citations, reviews and current map rankings." },
      { step: "02", title: "GBP Optimization", desc: "Fully optimize every field, category, attribute, photo and post." },
      { step: "03", title: "Citations & Reviews", desc: "Build local citations and launch review generation campaigns." },
      { step: "04", title: "Rank & Maintain", desc: "Weekly posts, Q&A management and ongoing map-pack optimization." },
    ]),
    deliverables: [
      "GBP audit + full optimization",
      "50+ local citations on Indian directories",
      "Review request automation setup",
      "Weekly Google posts & photos",
      "Geo-targeted landing pages",
      "Monthly local ranking report",
    ],
    pricing: [
      { name: "Starter Local", price: "₹8,000/mo", tagline: "Single location, getting started", features: ["GBP optimization", "10 citations", "2 posts/week", "Monthly report"] },
      { name: "Local Dominator", price: "₹18,000/mo", tagline: "Outrank competitors in your area", features: ["Full GBP management", "50+ citations", "Review automation", "4 posts/week", "2 landing pages", "Bi-weekly calls"], highlight: true },
      { name: "Multi-Location", price: "₹40,000/mo+", tagline: "For chains & multi-branch businesses", features: ["Unlimited locations", "Dedicated manager", "Custom strategy", "Weekly reports"] },
    ],
    caseStudy: {
      client: "Tanishree Beauty — Vijay Nagar Indore",
      result: "Ranked #1 in Map Pack for 'beauty parlour Vijay Nagar'; +320% calls in 60 days.",
      quote: "Our walk-ins doubled. We can barely keep up with bookings.",
    },
    faqs: [
      { q: "Do you handle reviews?", a: "Yes — we set up automated review request flows and respond on your behalf." },
      { q: "How fast will I rank in Maps?", a: "Most clients see top-3 movement within 30–60 days." },
      { q: "What if my business is new with no reviews?", a: "We launch a structured review-generation campaign to get you to 25+ genuine 5-star reviews fast." },
    ],
  },
  {
    slug: "ecommerce",
    icon: ShoppingCart,
    title: "E-Commerce Development",
    short: "Beautiful, high-converting online stores with secure payments and analytics.",
    hero: "Sell more online with stores designed around buyer psychology — optimized product pages, frictionless Indian checkout (UPI, COD, EMI) and analytics that show exactly where the money is.",
    desc: "We build Shopify and WooCommerce stores designed to sell — with optimized product pages, secure Indian payment gateways and conversion-tuned checkouts.",
    items: [
      "Shopify & WooCommerce",
      "Custom Checkout Flow",
      "Razorpay / Stripe / PayU",
      "Product SEO & Schema",
      "Inventory & Order Sync",
      "Abandoned Cart Recovery",
      "Email & WhatsApp Marketing",
      "Conversion Rate Optimization",
    ],
    benefits: [
      { title: "Built to Sell", desc: "Product pages and checkout designed around real buyer psychology." },
      { title: "India-Ready Payments", desc: "UPI, cards, COD, EMI — all major Indian payment options included." },
      { title: "Scale-Friendly", desc: "Architecture that handles 10 orders/day or 10,000." },
    ],
    stats: [
      { value: "40+", label: "Stores launched" },
      { value: "3.8%", label: "Avg. conversion rate" },
      { value: "₹2Cr+", label: "Tracked GMV generated" },
      { value: "-22%", label: "Cart abandonment" },
    ],
    whoFor: [
      "D2C brands launching their first online store",
      "Existing brick-and-mortar stores going online",
      "Manufacturers wanting direct-to-consumer sales",
      "Multi-product brands scaling on Shopify or WooCommerce",
    ],
    process: defaultProcess([
      { step: "01", title: "Store Strategy", desc: "Catalog audit, platform selection, payment & shipping planning." },
      { step: "02", title: "Design & Build", desc: "Custom-designed storefront, product templates, cart and checkout flow." },
      { step: "03", title: "Integrations", desc: "Payments, shipping (Shiprocket/Delhivery), inventory and analytics." },
      { step: "04", title: "Launch & Grow", desc: "SEO, abandoned-cart flows, retargeting and ongoing CRO." },
    ]),
    deliverables: [
      "Custom Shopify or WooCommerce store",
      "Product page templates with schema",
      "Indian payment + shipping setup",
      "Abandoned cart email/WhatsApp flows",
      "Analytics + revenue tracking",
      "Launch marketing checklist",
    ],
    techStack: ["Shopify", "WooCommerce", "Razorpay", "Shiprocket", "Klaviyo", "Meta Pixel"],
    pricing: [
      { name: "Launch", price: "₹65,000", tagline: "Up to 50 products, ready in 3 weeks", features: ["Shopify or WooCommerce", "Payment + shipping setup", "5 product templates", "Basic SEO", "Launch checklist"] },
      { name: "Grow", price: "₹1,25,000", tagline: "Custom design + marketing automation", features: ["Custom UI design", "Up to 500 products", "Abandoned cart flows", "Email marketing setup", "Advanced SEO", "30 days support"], highlight: true },
      { name: "Scale", price: "₹2,50,000+", tagline: "Custom apps, B2B portals, ERP sync", features: ["Custom apps & integrations", "ERP/CRM sync", "Multi-store / multi-language", "B2B portal", "Dedicated CRO sprints"] },
    ],
    caseStudy: {
      client: "Intovito — D2C lifestyle brand",
      result: "Scaled from ₹0 to ₹18 lakh/month in 7 months with our store + CRO sprints.",
      quote: "The store looks premium and just keeps converting. Best investment we've made.",
    },
    faqs: [
      { q: "Shopify or WooCommerce?", a: "We help you choose based on volume, customization needs and budget." },
      { q: "Do you handle product photography?", a: "Yes — through our Indore studio partners, or we can guide your team." },
      { q: "Do you offer post-launch marketing?", a: "Yes — performance ads, email, WhatsApp and SEO retainers are available." },
    ],
  },
  {
    slug: "wordpress",
    icon: LayoutTemplate,
    title: "WordPress Development",
    short: "Pixel-perfect WordPress sites that are fast, secure and easy to manage.",
    hero: "Custom WordPress websites that look premium, load lightning-fast and are genuinely easy for your team to update — without breaking anything.",
    desc: "From custom themes to Elementor builds, we craft WordPress websites that look premium, load fast and stay easy for you to update.",
    items: [
      "Custom Theme Development",
      "Elementor / Bricks / Gutenberg",
      "Plugin Setup & Customization",
      "WooCommerce Integration",
      "Speed & Security Hardening",
      "Multi-language (WPML/Polylang)",
      "Easy CMS Training",
      "Migration from old sites",
    ],
    benefits: [
      { title: "Edit Anything Yourself", desc: "Visual editor + clear training so you're never stuck waiting on a developer." },
      { title: "Speed Tuned", desc: "Cache, image optimization and lean code for top PageSpeed scores." },
      { title: "Secure by Default", desc: "Hardened against common WordPress vulnerabilities." },
    ],
    stats: [
      { value: "200+", label: "WP sites delivered" },
      { value: "95+", label: "Avg. PageSpeed" },
      { value: "0", label: "Sites ever hacked" },
      { value: "4.9/5", label: "Client rating" },
    ],
    whoFor: [
      "Businesses wanting full content control",
      "Bloggers and media brands",
      "Service businesses with frequent content updates",
      "Anyone migrating from a slow, outdated WP site",
    ],
    process: defaultProcess([
      { step: "01", title: "Discovery", desc: "Understand brand, content structure and editor workflow needs." },
      { step: "02", title: "Design & Theme Build", desc: "Custom design and theme/builder setup tailored to your team." },
      { step: "03", title: "Speed & Security", desc: "Hardening, caching, CDN and image optimization." },
      { step: "04", title: "Training & Handover", desc: "Hands-on training so your team can confidently manage everything." },
    ]),
    deliverables: [
      "Custom WP theme or builder setup",
      "Speed + security hardening",
      "Backup & monitoring setup",
      "SEO + schema configuration",
      "Editor training video",
      "30 days post-launch support",
    ],
    techStack: ["WordPress", "Elementor", "Bricks", "WooCommerce", "WP Rocket", "Cloudflare"],
    pricing: [
      { name: "Essential", price: "₹30,000", tagline: "Up to 5 pages", features: ["Premium theme setup", "Responsive design", "Basic SEO", "1 contact form", "2 weeks delivery"] },
      { name: "Pro", price: "₹65,000", tagline: "Custom design + builder", features: ["Up to 10 pages", "Custom design", "Elementor / Bricks", "Speed optimization", "Blog setup", "30 days support"], highlight: true },
      { name: "Custom", price: "₹1,20,000+", tagline: "Custom theme & integrations", features: ["Custom theme dev", "Custom plugins", "Multi-language", "CRM integrations", "60 days support"] },
    ],
    caseStudy: {
      client: "Corporate Indore client",
      result: "Migrated a slow legacy site to custom WordPress — PageSpeed jumped from 42 to 96.",
      quote: "Our site is finally fast, beautiful, and our team can update it without calling anyone.",
    },
    faqs: [
      { q: "Can you redesign my existing WordPress site?", a: "Yes — we preserve SEO equity while modernizing design and performance." },
      { q: "Do you use page builders or custom code?", a: "Both — depending on your team's editing comfort and customization needs." },
      { q: "Will my site be secure?", a: "Yes. We harden every site with WAF, login protection, daily backups and monitoring." },
    ],
  },
  {
    slug: "google-business-profile",
    icon: MapPin,
    title: "Google Business Profile Optimization",
    short: "Show up in Maps & local searches across Indore with optimized GBP setup.",
    hero: "Turn your Google Business Profile into your highest-ROI marketing asset. We optimize every signal Google cares about so Indore customers find, trust and call you first.",
    desc: "Your Google Business Profile is your most powerful local asset. We optimize every field, manage posts and reviews, and use local SEO best practices to make you the obvious choice in Indore.",
    items: [
      "Profile Setup & Verification",
      "Category & Keyword Optimization",
      "Weekly Posts & Photos",
      "Review Strategy & Replies",
      "Q&A Management",
      "Local Citation Sync (NAP)",
      "Service & Product Listings",
      "Performance Insights",
    ],
    benefits: [
      { title: "Higher Map Rankings", desc: "Climb into the Map 3-Pack for your most valuable keywords." },
      { title: "Direct Lead Capture", desc: "Calls, direction requests and messages straight from search." },
      { title: "Reputation Boost", desc: "Build a 5-star review profile that converts trust into customers." },
    ],
    stats: [
      { value: "+450%", label: "Profile views" },
      { value: "+280%", label: "Calls from GBP" },
      { value: "100+", label: "Profiles managed" },
      { value: "Top 3", label: "Map pack rankings" },
    ],
    whoFor: [
      "Local Indore businesses with a physical location",
      "Service-area businesses (SABs)",
      "Multi-branch businesses needing consistent local presence",
      "Anyone losing customers to competitors ranked above them",
    ],
    process: defaultProcess([
      { step: "01", title: "Profile Audit", desc: "Find missed fields, duplicate listings, suspension risks and ranking gaps." },
      { step: "02", title: "Full Optimization", desc: "Categories, services, photos, attributes, products — every signal optimized." },
      { step: "03", title: "Ongoing Activity", desc: "Weekly posts, photo uploads, review management and Q&A monitoring." },
      { step: "04", title: "Insights & Tuning", desc: "Monthly reporting and iterative refinement based on Google insights." },
    ]),
    deliverables: [
      "Profile audit + cleanup",
      "Optimized listing across every field",
      "Weekly posts + 2 photos/week",
      "Review request automation",
      "Q&A monitoring & responses",
      "Monthly insights report",
    ],
    pricing: [
      { name: "Setup", price: "₹6,000 one-time", tagline: "Full GBP optimization + verification", features: ["Profile setup", "Full optimization", "10 photos", "Review template", "Owner handover"] },
      { name: "Managed", price: "₹7,500/mo", tagline: "We run your GBP for you", features: ["Weekly posts", "Photo uploads", "Review responses", "Q&A management", "Monthly report"], highlight: true },
      { name: "Multi-Location", price: "₹20,000/mo+", tagline: "Chains & branches", features: ["Up to 10 locations", "Bulk posting", "Centralized reporting", "Dedicated manager"] },
    ],
    caseStudy: {
      client: "Gozen Samurai — Indore",
      result: "Reached top-3 map pack for primary keywords in 45 days; calls up 4×.",
      quote: "We had no idea GBP could drive this much business. Wish we'd done it earlier.",
    },
    faqs: [
      { q: "Do I need a website for GBP to work?", a: "No, but a strong website + GBP combined drives the best results." },
      { q: "Can you fix a suspended GBP?", a: "Yes — we handle reinstatement requests and clean up the underlying issues." },
      { q: "How often do you post?", a: "Weekly posts plus 2 fresh photos per week, plus rapid review responses." },
    ],
  },
  {
    slug: "maintenance",
    icon: Wrench,
    title: "Website Maintenance",
    short: "Stay secure & fast with backups, monitoring and ongoing technical support.",
    hero: "Treat your website like the revenue asset it is. Monthly maintenance keeps it secure, lightning-fast and always online — so you never lose a lead to downtime or a hack.",
    desc: "Websites are living assets. Our maintenance plans keep yours secure, updated and performing at its best — so you can focus on your business.",
    items: [
      "Daily Automated Backups",
      "Security Monitoring & Updates",
      "Performance Optimization",
      "Uptime Monitoring (24/7)",
      "Content Updates & Edits",
      "Plugin & Theme Updates",
      "Broken Link Monitoring",
      "Monthly Health Reports",
    ],
    benefits: [
      { title: "Always Online", desc: "Proactive monitoring prevents downtime before it costs you leads." },
      { title: "Always Secure", desc: "Patches and hardening applied as soon as updates drop." },
      { title: "Always Fast", desc: "We tune speed monthly so your site never slows down." },
    ],
    stats: [
      { value: "99.99%", label: "Average uptime" },
      { value: "0", label: "Successful hacks" },
      { value: "<1hr", label: "Response time" },
      { value: "120+", label: "Sites under care" },
    ],
    whoFor: [
      "Businesses without an in-house tech team",
      "WordPress / WooCommerce store owners",
      "Anyone who's been hacked or hit by downtime before",
      "Brands treating their site as a real revenue channel",
    ],
    process: defaultProcess([
      { step: "01", title: "Health Audit", desc: "Full audit of speed, security, backups and uptime status." },
      { step: "02", title: "Stabilize & Secure", desc: "Patch vulnerabilities, harden security and set up daily backups." },
      { step: "03", title: "Optimize Monthly", desc: "Updates, speed tuning, link checks and edits as needed." },
      { step: "04", title: "Report & Improve", desc: "Monthly health report with recommendations and resolved issues." },
    ]),
    deliverables: [
      "Daily off-site backups",
      "Security monitoring + WAF",
      "Plugin / theme / core updates",
      "Monthly speed tune-up",
      "Up to X content edit hours",
      "Monthly health report",
    ],
    pricing: [
      { name: "Care", price: "₹2,500/mo", tagline: "Essential coverage", features: ["Weekly backups", "Security monitoring", "Uptime monitoring", "Monthly updates", "1 hr edits/mo"] },
      { name: "Care+", price: "₹5,000/mo", tagline: "Most popular for SMBs", features: ["Daily backups", "WAF + malware scan", "Bi-weekly updates", "Speed optimization", "3 hrs edits/mo", "Priority support"], highlight: true },
      { name: "Enterprise Care", price: "₹12,000/mo+", tagline: "E-com & high-traffic sites", features: ["Real-time backups", "24/7 monitoring", "Weekly updates", "Dedicated engineer", "Unlimited edits"] },
    ],
    caseStudy: {
      client: "Forte Healthcare",
      result: "Cleaned up a hacked site, restored speed to 95+ PageSpeed, zero incidents since.",
      quote: "Total peace of mind. We never worry about the website anymore.",
    },
    faqs: [
      { q: "Is there a contract?", a: "No — monthly plans, cancel anytime." },
      { q: "What if my site gets hacked?", a: "We restore from clean backups and harden security at no extra cost on Care+ and above." },
      { q: "Do you handle non-WordPress sites?", a: "Yes — Shopify, custom React/Next.js and static sites all supported." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
