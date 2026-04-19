import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogBodies } from "@/lib/blog-content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(blogBodies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogBodies[slug];
  if (!post) return { title: "Not found" };
  const desc = post.content.split("\n\n")[0] ?? post.title;
  return {
    title: post.title,
    description: desc.slice(0, 160),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogBodies[slug];
  if (!post) notFound();

  const paragraphs = post.content.split(/\n\n+/).filter(Boolean);

  return (
    <article className="mx-auto max-w-3xl">
      <Link
        href="/blog"
        className="text-sm text-[var(--color-muted)] transition hover:text-white"
      >
        ← Insights
      </Link>
      <header className="mt-6">
        <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--color-muted)]">
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-[var(--color-silver)]">
            {post.category}
          </span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="mt-5 font-[family-name:var(--font-clash)] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {post.title}
        </h1>
      </header>

      <div className="mt-10 space-y-6">
        {paragraphs.map((block) => (
          <p
            key={block.slice(0, 48)}
            className="text-base leading-relaxed text-[var(--color-muted)] [&_strong]:font-semibold [&_strong]:text-[var(--color-silver)]"
            dangerouslySetInnerHTML={{ __html: formatInline(block) }}
          />
        ))}
      </div>

      <footer className="mt-16 border-t border-white/10 pt-10">
        <p className="text-sm text-[var(--color-muted)]">
          Enjoyed this?{" "}
          <Link href="/contact" className="text-white underline-offset-4 hover:underline">
            Reach out
          </Link>{" "}
          — I read every thoughtful message.
        </p>
      </footer>
    </article>
  );
}

function formatInline(text: string) {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return escaped.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}
