// lib/blog-data.ts

export const categories: string[] = [];


export interface FeaturedPostType {
  image: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  excerpt: string;
}

export const featuredPost: FeaturedPostType = {
  image: "/images/blog/sample.jpg",
  title: "Your Blog Title",
  category: "Web Development",
  readTime: "5 min read",
  date: "April 5, 2026",
  author: "John Doe",
  excerpt: "This is a short description of the blog post...",
};


export interface PostType {
  image: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
}

export const recentPosts: PostType[] = [
  {
    image: "/images/blog/1.jpg",
    title: "Post title",
    category: "Design",
    excerpt: "Short description...",
    date: "April 5, 2026",
    readTime: "5 min read",
    author: "John Doe",
  },
];