import { BlogCategories } from "@/components/blog/BlogCategories";
import { BlogHero } from "@/components/blog/BlogHero";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { RecentPosts } from "@/components/blog/RecentPosts";
import { REVALIDATE_TIME_BLOG } from "@/lib/config/site";
import { getBlogCategories } from "@/lib/data/blog/blogCategoriesData";
import { getBlogHero } from "@/lib/data/blog/blogHeroData";
import { getFeaturedPost } from "@/lib/data/blog/featuredPostData";
import { getRecentPosts } from "@/lib/data/blog/recentPostData";

export const metadata = {
  title: "Ainorax Blog – Insights on AI & Development",
  description:
    "Read insights on AI, web development, and digital innovation from Ainorax.",
};

export const revalidate = 604800;

export default async function BlogPage() {
  const [
    hero,
    categories,
    post,
    recent
  ] = await Promise.all([
    getBlogHero(),
    getBlogCategories(),
    getFeaturedPost(),
    getRecentPosts()
  ]);

  return (
    <div className="min-h-screen pt-20">
      {hero && <BlogHero data={hero} />}
      {categories && <BlogCategories data={categories} />}
      {post && <FeaturedPost data={post} />}
      {recent && <RecentPosts data={recent} />}
    </div>
  );
}