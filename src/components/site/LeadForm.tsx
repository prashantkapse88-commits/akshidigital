import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export function LeadForm({
  title = "Get a FREE Website & SEO Audit",
  defaultService,
}: {
  title?: string;
  defaultService?: string;
}) {
  const [loading, setLoading] = useState(false);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Request received!", {
        description: "Our Indore team will reach out within 24 hours.",
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
                {title}
              </h2>
              <p className="mt-4 max-w-md text-white/75">
                We'll audit your current website, identify SEO opportunities, and send a personalized
                growth roadmap — at no cost.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/85">
                {[
                  "25-point technical SEO review",
                  "Local keyword opportunities in Indore",
                  "Speed & mobile experience report",
                  "Conversion improvement ideas",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <form onSubmit={onSubmit} className="rounded-2xl glass p-6 sm:p-8">
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
                    defaultValue={defaultService ?? ""}
                  >
                    <option value="" disabled className="text-foreground">
                      Choose a service
                    </option>
                    {[
                      "Website Development",
                      "SEO Services",
                      "Local SEO Indore",
                      "E-Commerce Store",
                      "WordPress Development",
                      "Google Business Profile",
                      "Website Maintenance",
                    ].map((s) => (
                      <option key={s} className="text-foreground">
                        {s}
                      </option>
                    ))}
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
