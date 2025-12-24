import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "Articles and insights about software development, DevOps, and modern web technologies.",
};

const BLUR_FADE_DELAY = 0.04;

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="max-w-3xl mx-auto">
      {/* Header */}
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="mb-10">
          <div className="flex items-end justify-between gap-4">
            <h1 className="font-semibold text-3xl tracking-tighter">
              Blog
            </h1>
            <span className="text-xs text-muted-foreground">
              {posts.length} {posts.length === 1 ? "article" : "articles"}
            </span>
          </div>
          <p className="text-muted-foreground text-sm mt-2">
            Articles techniques, retours d'expérience et bonnes pratiques pour des projets professionnels.
          </p>
        </div>
      </BlurFade>

      {/* Blog posts */}
      <div className="space-y-6">
        {posts
          .sort(
            (a, b) =>
              new Date(b.metadata.publishedAt).getTime() -
              new Date(a.metadata.publishedAt).getTime()
          )
          .map((post, index) => (
            <BlurFade
              key={post.slug}
              delay={BLUR_FADE_DELAY * 2 + index * 0.06}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-lg border border-border p-4 transition-all hover:bg-muted/40 hover:translate-x-1"
              >
                <div className="flex items-start gap-4">
                  {post.metadata.image && (
                    <img
                      src={post.metadata.image}
                      alt=""
                      className="h-16 w-16 rounded object-cover border"
                    />
                  )}
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <h2 className="font-medium tracking-tight">
                        {post.metadata.title}
                      </h2>
                      <span className="text-[11px] text-muted-foreground">
                        {formatDate(post.metadata.publishedAt)}
                      </span>
                    </div>
                    {post.metadata.summary && (
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {post.metadata.summary}
                      </p>
                    )}
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">
                        {(() => {
                          const words = post.source
                            .replace(/<[^>]+>/g, " ")
                            .split(/\s+/)
                            .filter(Boolean).length;
                          const minutes = Math.max(1, Math.round(words / 200));
                          return `${minutes} min read`;
                        })()}
                      </span>
                      <span className="text-[11px] text-muted-foreground">Lire →</span>
                    </div>
                  </div>
                </div>
              </Link>
            </BlurFade>
          ))}
      </div>
    </section>
  );
}
