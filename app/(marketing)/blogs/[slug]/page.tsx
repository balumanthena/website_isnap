import { notFound } from "next/navigation";
import { getBlogBySlug, getPublishedBlogs } from "@/lib/firebase/blogs";
import { RealtimeBlogDetail } from "@/components/blog/RealtimeBlogDetail";
import { CTASection } from "@/components/sections/CTASection";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";

interface Props {
  params: { slug: string };
}

export const dynamic = "force-dynamic";
export const revalidate = 0; // Disable revalidation for dynamic pages

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
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

export default async function BlogPostPage(props: Props) {
  const { slug } = await props.params;
  const blog = await getBlogBySlug(slug);

  // Bypass server-side notFound to allow client-side Firebase SDK to fetch
  // if (!blog || !blog.published) {
  //   notFound();
  // }

  return (
    <main className="bg-white min-h-screen pt-32">
      <RealtimeBlogDetail slug={slug} initialBlog={blog as any} />
      <CTASection />
    </main>
  );
}
