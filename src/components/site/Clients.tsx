import { Badge } from "@/components/ui/badge";

const clients = [
  { name: "Valstem", logo: "https://akshidigital.com/wp-content/uploads/2026/02/valstem-2.webp" },
  { name: "Ninapharm", logo: "https://akshidigital.com/wp-content/uploads/2026/04/ninapharm.webp" },
  { name: "Tanishree Beauty", logo: "https://akshidigital.com/wp-content/uploads/2026/02/Tanishree-Beauty-logo.webp" },
  { name: "Gozen Samurai Tokyo", logo: "https://akshidigital.com/wp-content/uploads/2026/02/gozen-samurai-tokyo-150x150.webp" },
  { name: "Corporate", logo: "https://akshidigital.com/wp-content/uploads/2026/02/corporate.webp" },
  { name: "Intovito", logo: "https://akshidigital.com/wp-content/uploads/2026/02/intovito.webp" },
  { name: "Forte Healthcare", logo: "https://www.forte-healthcare.com/wp-content/uploads/2023/08/logo.webp" },
];

export function Clients() {
  return (
    <section id="clients" className="border-y border-border bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="gap-2 border-brand/20 bg-brand/5 text-brand">Our Clients</Badge>
          <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Trusted by ambitious brands across India
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            From healthcare to lifestyle and manufacturing — these brands trust Akshi Digital with
            their growth.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {clients.map((c) => (
            <div
              key={c.name}
              className="group flex h-24 items-center justify-center rounded-2xl border border-border bg-card p-4 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-card"
              title={c.name}
            >
              <img
                src={c.logo}
                alt={`${c.name} logo`}
                loading="lazy"
                className="max-h-14 w-auto max-w-full object-contain opacity-80 transition group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
