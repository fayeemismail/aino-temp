import { BlogCategories } from "@/components/blog/BlogCategories";
import { BlogHero } from "@/components/blog/BlogHero";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { RecentPosts } from "@/components/blog/RecentPosts";
import { getBlogCategories } from "@/lib/data/blog/blogCategoriesData";
import { getBlogHero } from "@/lib/data/blog/blogHeroData";
import { getFeaturedPost } from "@/lib/data/blog/featuredPostData";
import { getRecentPosts } from "@/lib/data/blog/recentPostData";

export const metadata = {
  title: "Blog – Ainorax",
  description:
    "Insights, stories, and ideas from the Ainorax team on web development, AI, cloud, and digital innovation.",
};

export default async function BlogPage() {
  const hero = await getBlogHero();
  const categories = await getBlogCategories();
  const post = await getFeaturedPost();
  const recent = await getRecentPosts();

  return (
    <div className="min-h-screen pt-20">
      {hero && <BlogHero data={hero} />}
      {categories && <BlogCategories data={categories} />}
      {post && <FeaturedPost data={post} />}
      {recent && <RecentPosts data={recent} />}
    </div>
  );
}