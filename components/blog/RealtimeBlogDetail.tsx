"use client";

import { useEffect, useState } from "react";
import { useRealtimeBlog } from "@/lib/firebase/hooks";
import { RichTextRenderer } from "@/components/blog/RichTextRenderer";
import { Blog } from "@/types/blog";
import { format } from "date-fns";
import { Clock, ArrowLeft, Mail, Share2, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface RealtimeBlogDetailProps {
  slug: string;
  initialBlog: Blog;
}

export function RealtimeBlogDetail({ slug, initialBlog }: RealtimeBlogDetailProps) {
  const blog = useRealtimeBlog(slug, initialBlog);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const currentProgress = (scrollTop / documentHeight) * 100;
      setProgress(Math.min(currentProgress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!blog || !blog.published) {
    return (
      <div className="text-center py-32">
        <h2 className="text-2xl font-bold text-gray-900">Blog not found or no longer published.</h2>
      </div>
    );
  }

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-[100]">
        <div 
          className="h-full bg-enterprise-green transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <article className="relative">
        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-6 md:px-12 mb-16 pt-8">
          <div className="flex items-center gap-4 mb-8">
            <Link 
              href="/blogs" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-enterprise-text transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Editorial
            </Link>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-enterprise-green bg-enterprise-green/10 px-3 py-1 rounded-full">
              {blog.category}
            </span>
            <span className="text-sm font-medium text-gray-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {blog.readingTime} min read
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-enterprise-text leading-[1.05] mb-8">
            {blog.title}
          </h1>

          <p className="text-xl md:text-2xl text-enterprise-text-muted leading-relaxed mb-12 max-w-3xl">
            {blog.excerpt}
          </p>

          <div className="flex items-center gap-4 py-6 border-y border-gray-100">
            <div className="w-12 h-12 rounded-full bg-enterprise-text text-white flex items-center justify-center font-bold text-lg">
              {blog.author.name.charAt(0)}
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-enterprise-text">{blog.author.name}</span>
              <span className="text-sm font-medium text-gray-500">
                {blog.createdAt?.toDate ? format(blog.createdAt.toDate(), "MMMM d, yyyy") : "Recently"}
              </span>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        {blog.coverImage && (
          <div className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
            <div className="aspect-video w-full rounded-[40px] overflow-hidden bg-gray-100 shadow-premium">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={blog.coverImage} 
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Article Body with Sticky Sidebar */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 mb-32 flex flex-col md:flex-row gap-12 relative">
          
          {/* Sticky Social Share (Left) */}
          <div className="hidden md:block w-16 shrink-0">
            <div className="sticky top-32 flex flex-col gap-4 items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 rotate-180" style={{ writingMode: 'vertical-rl' }}>
                Share
              </span>
              <div className="w-px h-12 bg-gray-200 my-2" />
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-enterprise-text hover:text-enterprise-text hover:shadow-md transition-all">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-enterprise-text hover:text-enterprise-text hover:shadow-md transition-all">
                <Mail className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-enterprise-text hover:text-enterprise-text hover:shadow-md transition-all">
                <LinkIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 max-w-3xl">
            <RichTextRenderer content={blog.content} />
            
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap gap-2">
                {blog.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-gray-50 text-gray-600 text-sm font-medium border border-gray-100 hover:border-gray-300 transition-colors cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          
        </div>
      </article>
    </>
  );
}
