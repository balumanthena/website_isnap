"use client";

import { useRealtimeBlogs, useRealtimeFeaturedBlogs } from "@/lib/firebase/hooks";
import { BlogCard } from "@/components/blog/BlogCard";
import { Blog } from "@/types/blog";

interface RealtimeBlogIndexProps {
  initialFeaturedBlogs: Blog[];
  initialRegularBlogs: Blog[];
}

export function RealtimeBlogIndex({ initialFeaturedBlogs, initialRegularBlogs }: RealtimeBlogIndexProps) {
  const featuredBlogs = useRealtimeFeaturedBlogs(initialFeaturedBlogs);
  const allBlogs = useRealtimeBlogs([...initialFeaturedBlogs, ...initialRegularBlogs], 50);

  // Filter out featured blogs from the main list to avoid duplication
  const regularBlogs = allBlogs.filter(
    (blog) => !featuredBlogs.find((fb) => fb.id === blog.id)
  );

  return (
    <>
      {/* Featured Section */}
      {featuredBlogs.length > 0 && (
        <section className="mb-32">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-12 border-b border-gray-100 pb-4">
            Featured Story
          </h2>
          <BlogCard blog={featuredBlogs[0]} featured />
        </section>
      )}

      {/* Recent Posts Grid */}
      <section className="mb-32">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-12">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
            Latest Articles
          </h2>
          {/* Category tabs could go here */}
        </div>
        
        {regularBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {regularBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center text-gray-500">
            <p>No articles published yet. Check back soon!</p>
          </div>
        )}
      </section>
    </>
  );
}
