import Link from "next/link";
import { format } from "date-fns";
import { Blog } from "@/types/blog";
import { ArrowRight, Clock } from "lucide-react";

interface BlogCardProps {
  blog: Blog;
  featured?: boolean;
}

export function BlogCard({ blog, featured = false }: BlogCardProps) {
  const isLarge = featured;

  return (
    <Link href={`/blogs/${blog.slug}`} className="group block">
      <article className={`relative flex ${isLarge ? "flex-col lg:flex-row gap-8 lg:gap-16 items-center" : "flex-col gap-6"}`}>
        {/* Image Container */}
        <div className={`relative rounded-[32px] overflow-hidden bg-white ${isLarge ? "w-full lg:w-3/5 aspect-video lg:aspect-[4/3]" : "w-full aspect-[4/3]"}`}>
          {blog.coverImage ? (
            <img 
              src={blog.coverImage} 
              alt={blog.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-white to-white" />
          )}
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
        </div>

        {/* Content Container */}
        <div className={`flex flex-col ${isLarge ? "w-full lg:w-2/5 py-4" : ""}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-enterprise-green bg-enterprise-green/10 px-3 py-1 rounded-full">
              {blog.category}
            </span>
            <span className="text-sm font-medium text-gray-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {blog.readingTime} min read
            </span>
          </div>

          <h3 className={`${isLarge ? "text-3xl md:text-5xl" : "text-2xl"} font-bold text-enterprise-text tracking-tight mb-4 group-hover:text-enterprise-green transition-colors leading-tight`}>
            {blog.title}
          </h3>

          <p className={`${isLarge ? "text-lg md:text-xl" : "text-base"} text-enterprise-text-muted leading-relaxed mb-8 line-clamp-3`}>
            {blog.excerpt}
          </p>

          <div className="mt-auto flex items-center justify-between pt-6 border-t border-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-enterprise-text text-white flex items-center justify-center text-xs font-bold">
                {blog.author.name.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-enterprise-text">{blog.author.name}</span>
                <span className="text-xs font-medium text-gray-500">
                  {blog.createdAt?.toDate ? format(blog.createdAt.toDate(), "MMMM d, yyyy") : "Recently"}
                </span>
              </div>
            </div>

            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-enterprise-text transition-colors duration-300">
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
