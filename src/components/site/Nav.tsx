import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoUrl from "@/assets/akshi-logo-transparent.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center">
          <img
            src={logoUrl}
            alt="Akshi Digital"
            className="h-14 w-auto drop-shadow-[0_8px_18px_rgba(37,99,235,0.18)] sm:h-16 md:h-20"
            width={188}
            height={120}
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-brand" }}
              className="text-sm font-medium text-foreground/80 transition hover:text-brand"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link to="/contact">
            <Button className="bg-brand-gradient text-white hover:opacity-90">
              Free Audit <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="rounded-md border border-border p-2 md:hidden"
        >
          <ChevronDown className={`h-5 w-5 transition ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)}>
              <Button className="mt-2 w-full bg-brand-gradient text-white">Free Audit</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
