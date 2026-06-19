import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { blogPosts } from "@/lib/blog-data";

const SITE_URL = "https://akshidigital.com";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog - Website Development, SEO & Lead Generation | Akshi Digital" },
      {
        name: "description",
        content:
          "Read Akshi Digital insights on website development, SEO, local SEO, AI SEO, GEO, AEO, and lead generation for Indore businesses.",
      },
      { property: "og:title", content: "Akshi Digital Blog" },
      {
        property: "og:description",
        content:
          "Actionable website development, SEO and lead generation advice for Indore businesses.",
      },
      { property: "og:url", content: `${SITE_URL}/blog` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/blog` }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero py-20 text-white sm:py-28">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Badge className="border-white/15 bg-white/10 text-white">Akshi Digital Blog</Badge>
          <h1 className="mt-4 text-balance text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            SEO-friendly growth guides for Indore businesses
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
            Practical articles on websites, local SEO, AI search visibility, content strategy, and lead generation.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="flex h-full flex-col border-border p-7 shadow-card transition hover:-translate-y-1 hover:shadow-glow">
                <Badge className="w-fit border-brand/20 bg-brand/5 text-brand">{post.category}</Badge>
                <h2 className="mt-4 text-xl font-bold">{post.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
                <div className="mt-5 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> {post.publishedAt}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
                </div>
                <Link to="/blog/$slug" params={{ slug: post.slug }} className="mt-6">
                  <Button variant="outline" className="w-full">
                    Read article <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
