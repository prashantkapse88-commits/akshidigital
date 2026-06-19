import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, CheckCircle2, Clock, UserRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LeadForm } from "@/components/site/LeadForm";
import { blogPosts, getBlogPost, type BlogPost } from "@/lib/blog-data";

const SITE_URL = "https://akshi-grow-indore.lovable.app";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = getBlogPost(params.slug);
    const title = post ? `${post.title} | Akshi Digital Blog` : "Blog | Akshi Digital";
    const description = post?.excerpt ?? "Akshi Digital blog article.";
    const url = `${SITE_URL}/blog/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: post?.keywords.join(", ") ?? "" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: post?.publishedAt ?? "" },
        { property: "article:modified_time", content: post?.updatedAt ?? "" },
        { property: "article:author", content: post?.author ?? "Akshi Digital" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: post
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: post.title,
                description: post.excerpt,
                datePublished: post.publishedAt,
                dateModified: post.updatedAt,
                author: {
                  "@type": "Organization",
                  name: post.author,
                  url: SITE_URL,
                },
                publisher: { "@id": `${SITE_URL}/#organization` },
                mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
                keywords: post.keywords,
              }),
            },
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: post.faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.a,
                  },
                })),
              }),
            },
          ]
        : [],
    };
  },
  loader: ({ params }): { post: BlogPost } => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  component: BlogDetail,
});

function BlogDetail() {
  const { post } = Route.useLoaderData() as { post: BlogPost };
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <section className="relative overflow-hidden bg-hero py-20 text-white sm:py-28">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link to="/blog" className="text-sm text-white/70 hover:text-white">
              Back to blog
            </Link>
            <Badge className="mt-5 border-white/15 bg-white/10 text-white">{post.category}</Badge>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-white/75">{post.hero}</p>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-white/70">
              <span className="flex items-center gap-2"><UserRound className="h-4 w-4" /> {post.author}</span>
              <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {post.publishedAt}</span>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> {post.readTime}</span>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
            <div className="prose prose-slate max-w-none">
              <div className="rounded-2xl border border-brand/20 bg-brand/5 p-6">
                <h2 className="m-0 text-2xl font-bold">Quick answer</h2>
                <p className="mb-0 mt-3 text-muted-foreground">{post.excerpt}</p>
              </div>

              {post.sections.map((section) => (
                <section key={section.heading} className="mt-10">
                  <h2 className="text-3xl font-bold tracking-tight">{section.heading}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="mt-4 leading-8 text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>

            <aside className="space-y-5">
              <Card className="border-border p-6 shadow-card">
                <h2 className="text-lg font-bold">Need more leads?</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Get a free website and SEO audit for your Indore business.
                </p>
                <Link to="/contact" className="mt-5 block">
                  <Button className="w-full bg-brand-gradient text-white">
                    Request audit <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
              <Card className="border-border p-6 shadow-card">
                <h2 className="text-lg font-bold">SEO checklist</h2>
                <ul className="mt-4 space-y-3 text-sm">
                  {["Search intent", "Schema markup", "Local signals", "Fast mobile UX", "Clear conversion CTA"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </aside>
          </div>
        </section>

        {post.faqs.length > 0 && (
          <section className="bg-card py-16 sm:py-20">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <Badge className="border-brand/20 bg-brand/5 text-brand">Article FAQ</Badge>
              <h2 className="mt-4 text-3xl font-bold">Common questions</h2>
              <Accordion type="single" collapsible className="mt-8">
                {post.faqs.map((faq, index) => (
                  <AccordionItem key={faq.q} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        )}
      </article>

      {related.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold">Related articles</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <Link key={item.slug} to="/blog/$slug" params={{ slug: item.slug }}>
                  <Card className="h-full border-border p-6 shadow-card transition hover:-translate-y-1 hover:shadow-glow">
                    <Badge className="border-brand/20 bg-brand/5 text-brand">{item.category}</Badge>
                    <h3 className="mt-4 font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.excerpt}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <LeadForm title="Get a free website and SEO audit" />
    </>
  );
}
