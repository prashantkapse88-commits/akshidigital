import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import logoAsset from "@/assets/akshi-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <img
                src={logoAsset.url}
                alt="Akshi Digital"
                className="h-10 w-auto"
              />
            </div>
            <p className="mt-4 max-w-md text-sm text-white/70">
              Indore's premium digital agency for website development, SEO and lead generation. We
              help local businesses grow online with measurable results.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/75">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#06B6D4]"/> Indore, Madhya Pradesh, India</div>
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4 text-[#06B6D4]"/> +91 98765 43210</a>
              <a href="mailto:hello@akshidigital.com" className="flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4 text-[#06B6D4]"/> hello@akshidigital.com</a>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-white/90">Services</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link to="/services/website-development" className="hover:text-white">Website Development</Link></li>
              <li><Link to="/services/seo" className="hover:text-white">SEO Services</Link></li>
              <li><Link to="/services/local-seo" className="hover:text-white">Local SEO Indore</Link></li>
              <li><Link to="/services/ecommerce" className="hover:text-white">E-Commerce</Link></li>
              <li><Link to="/services/wordpress" className="hover:text-white">WordPress Development</Link></li>
              <li><Link to="/services/google-business-profile" className="hover:text-white">Google Business Profile</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-white/90">Company</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
              <li><Link to="/services" className="hover:text-white">All Services</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Akshi Digital. All rights reserved.</div>
          <div>Built with care in Indore, India.</div>
        </div>
      </div>
    </footer>
  );
}
