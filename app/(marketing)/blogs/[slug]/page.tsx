import { notFound } from "next/navigation";
import { getBlogBySlug, getPublishedBlogs } from "@/lib/firebase/blogs";
import { RealtimeBlogDetail } from "@/components/blog/RealtimeBlogDetail";
import { CTASection } from "@/components/sections/CTASection";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";

interface Props {
  params: { slug: string };
}

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${blog.seoTitle || blog.title} | ISNAP`,
    description: blog.seoDescription || blog.excerpt,
    openGraph: {
      title: blog.seoTitle || blog.title,
      description: blog.seoDescription || blog.excerpt,
      images: blog.coverImage ? [blog.coverImage, ...previousImages] : previousImages,
      type: "article",
      publishedTime: blog.createdAt?.toDate ? blog.createdAt.toDate().toISOString() : undefined,
      authors: [blog.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.seoTitle || blog.title,
      description: blog.seoDescription || blog.excerpt,
      images: blog.coverImage ? [blog.coverImage] : [],
    },
  };
}

export async function generateStaticParams() {
  const blogs = await getPublishedBlogs(100);
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog || !blog.published) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen pt-32">
      <RealtimeBlogDetail slug={params.slug} initialBlog={blog} />

      <CTASection />
    </main>
  );
}
