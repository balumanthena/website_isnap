"use client";

import { useEffect, useState } from "react";
import BlogForm from "@/components/admin/BlogForm";
import { getBlogById } from "@/lib/firebase/blogs";
import { Blog } from "@/types/blog";
import { Loader2 } from "lucide-react";

export default function EditBlogPage({ params }: { params: { id: string } }) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlog() {
      try {
        const data = await getBlogById(params.id);
        setBlog(data);
      } catch (error) {
        console.error("Failed to load blog:", error);
      } finally {
        setLoading(false);
      }
    }
    loadBlog();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900">Blog not found</h2>
        <p className="mt-2 text-gray-500">The blog post you are trying to edit does not exist.</p>
      </div>
    );
  }

  return <BlogForm initialData={blog} />;
}
