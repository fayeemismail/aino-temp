import { BlogCategories } from "@/components/blog/BlogCategories";
import { BlogHero } from "@/components/blog/BlogHero";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { RecentPosts } from "@/components/blog/RecentPosts";


export const metadata = {
  title: "Blog – Ainorax",
  description:
    "Insights, stories, and ideas from the Ainorax team on web development, AI, cloud, and digital innovation.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20">
      <BlogHero />
      <BlogCategories />
      <FeaturedPost />
      <RecentPosts />
    </div>
  );
}
