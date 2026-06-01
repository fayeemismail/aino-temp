// app/blog/[slug]/page.tsx
import { client } from "@/lib/sanity";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { blogImageUrl } from "@/lib/sanity.image";

interface Props {
    params: Promise<{ slug: string }>;
}

const query = groq`
*[_type == "home"][0].blogPreview.posts[slug.current == $slug][0]{
  title,
  excerpt,
  category,
  readTime,
  "slug": slug.current,
  "image": image.asset->url,
  "imageWidth": image.asset->metadata.dimensions.width,
  "imageHeight": image.asset->metadata.dimensions.height,
}
`;

export async function generateStaticParams() {
    const slugs = await client.fetch<{ slug: string }[]>(
        groq`*[_type == "home"][0].blogPreview.posts[defined(slug.current)]{ "slug": slug.current }`
    );
    return slugs.map((s) => ({ slug: s.slug }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await client.fetch(query, { slug });



    if (!post) notFound();

    return (
        <main className="min-h-screen pt-20 bg-[#0d1a2e]">
            <article className="max-w-6xl mx-auto px-4 sm:px-6 py-16">

                {/* ── Hero: image left, meta right ── */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-16">

                    {/* Image — renders at its actual Sanity dimensions, no forced aspect ratio */}
                    <div className="w-full lg:w-2/5 shrink-0">
                        {post.image && (
                            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                                <Image
                                    src={blogImageUrl(post.image, 1200)}
                                    alt={post.title ?? ""}
                                    width={post.imageWidth}
                                    height={post.imageHeight}
                                    className="w-full h-auto"
                                    quality={100}
                                    unoptimized
                                />
                            </div>
                        )}
                    </div>

                    {/* Meta */}
                    <div className="flex flex-col justify-center flex-1">
                        {post.category && (
                            <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-amber-400/20 text-amber-400 mb-4 w-fit">
                                {post.category}
                            </span>
                        )}

                        <h1 className="text-3xl lg:text-4xl xl:text-5xl text-white leading-tight mb-6">
                            {post.title}
                        </h1>

                        {post.excerpt && (
                            <p className="text-white/60 text-lg leading-relaxed mb-8 border-l-2 border-amber-400 pl-4">
                                {post.excerpt}
                            </p>
                        )}

                        <div className="flex flex-wrap items-center gap-4 text-sm text-white/40">
                            {post.author && (
                                <span className="text-white/60 font-medium">{post.author}</span>
                            )}
                            {post.publishedAt && (
                                <span>
                                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </span>
                            )}
                            {post.readTime && (
                                <span className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
                                    </svg>
                                    {post.readTime}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* ── Body content ── */}
                {post.content && (
                    <div className="max-w-3xl mx-auto prose prose-invert prose-amber prose-lg">
                        <PortableText value={post.content} />
                    </div>
                )}

            </article>
        </main>
    );
}