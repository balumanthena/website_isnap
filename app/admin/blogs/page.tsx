"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Search, Edit, Trash2, ArrowUpRight, Clock, CheckCircle2, FileText, Globe, ExternalLink } from "lucide-react";
import { getAllBlogsForAdmin, deleteBlog } from "@/lib/firebase/blogs";
import { Blog } from "@/types/blog";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "published" | "drafts">("all");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const data = await getAllBlogsForAdmin();
      setBlogs(data);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    
    try {
      await deleteBlog(id);
      setBlogs(blogs.filter(b => b.id !== id));
    } catch (error) {
      console.error("Failed to delete blog:", error);
    }
  };

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "all" ? true : activeTab === "published" ? blog.published : !blog.published;
    return matchesSearch && matchesTab;
  });

  const publishedCount = blogs.filter(b => b.published).length;
  const draftCount = blogs.filter(b => !b.published).length;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6 pt-6">
        <div>
          <h1 className="text-[22px] font-semibold text-gray-900 tracking-tight">Posts</h1>
          <p className="text-[13px] text-gray-500 mt-0.5">{blogs.length} total posts</p>
        </div>
        <Link 
          href="/admin/blogs/create"
          className="h-8 px-3.5 bg-gray-900 text-white text-[12px] font-medium rounded-md hover:bg-black transition-colors flex items-center gap-1.5"
        >
          <Plus className="w-3.5 h-3.5" />
          New post
        </Link>
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-0.5 bg-gray-100 p-0.5 rounded-md">
          {([
            { key: "all", label: "All", count: blogs.length },
            { key: "published", label: "Published", count: publishedCount },
            { key: "drafts", label: "Drafts", count: draftCount },
          ] as const).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={cn(
                "px-3 py-1.5 rounded text-[12px] font-medium transition-colors",
                activeTab === tab.key 
                  ? "bg-white text-gray-900 shadow-sm" 
                  : "text-gray-500 hover:text-gray-700"
              )}
            >
              {tab.label}
              <span className="ml-1.5 text-[11px] text-gray-400">{tab.count}</span>
            </button>
          ))}
        </div>
        
        <div className="relative w-64">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 bg-white border border-gray-200 rounded-md text-[13px] focus:outline-none focus:border-gray-400 transition-colors placeholder:text-gray-300"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <th className="px-4 py-2.5 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-4 py-2.5 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-2.5 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-4 py-2.5 text-[11px] font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Date</th>
              <th className="px-4 py-2.5 text-[11px] font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading ? (
              <tr>
                <td colSpan={5} className="px-4 py-16 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-5 h-5 border-2 border-gray-200 border-t-gray-600 rounded-full animate-spin" />
                    <p className="text-[13px] text-gray-400">Loading posts...</p>
                  </div>
                </td>
              </tr>
            ) : filteredBlogs.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-16 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <FileText className="w-8 h-8 text-gray-200" />
                    <p className="text-[13px] text-gray-400">No posts found</p>
                  </div>
                </td>
              </tr>
            ) : (
              filteredBlogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      {blog.coverImage ? (
                        <div className="w-10 h-10 rounded bg-gray-100 overflow-hidden shrink-0 border border-gray-200">
                          <img src={blog.coverImage} alt="" className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
                          <FileText className="w-4 h-4 text-gray-300" />
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="text-[13px] font-medium text-gray-900 truncate">{blog.title}</p>
                        <p className="text-[12px] text-gray-400 mt-0.5">{blog.author.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={cn(
                      "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium",
                      blog.published 
                        ? "bg-green-50 text-green-700" 
                        : "bg-amber-50 text-amber-700"
                    )}>
                      <div className={cn("w-1 h-1 rounded-full", blog.published ? "bg-green-500" : "bg-amber-500")} />
                      {blog.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-[13px] text-gray-500">{blog.category}</span>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    <span className="text-[13px] text-gray-400 whitespace-nowrap">
                      {blog.createdAt?.toDate ? format(blog.createdAt.toDate(), "MMM d, yyyy") : "—"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link 
                        href={`/blogs/${blog.slug}`}
                        target="_blank"
                        className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                      <Link 
                        href={`/admin/blogs/${blog.id}/edit`}
                        className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </Link>
                      <button 
                        onClick={() => blog.id && handleDelete(blog.id)}
                        className="w-7 h-7 flex items-center justify-center rounded hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
