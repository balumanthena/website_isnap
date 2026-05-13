"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  ArrowLeft, Loader2, Eye, ChevronRight, Send,
  CheckCircle2, Sparkles, Target, PanelRight, X,
  FolderOpen, Command, Clock, Image as ImageIcon
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { slugify } from "@/lib/utils/slugify";
import { calculateReadingTime } from "@/lib/utils/reading-time";
import { createBlog, updateBlog } from "@/lib/firebase/blogs";
import { Blog, BlogStatus } from "@/types/blog";
import { RichTextEditor } from "@/components/admin/RichTextEditor";
import { ImageUploader } from "@/components/admin/ImageUploader";
import { PreviewPanel } from "@/components/admin/PreviewPanel";
import { MediaLibrary } from "@/components/admin/MediaLibrary";
import { blogSchema, BlogFormValues } from "@/lib/schemas/blog";

interface BlogFormProps {
  initialData?: Blog | null;
}

export default function BlogForm({ initialData }: BlogFormProps) {
  const router = useRouter();
  const [isMediaLibraryOpen, setIsMediaLibraryOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isInspectorOpen, setIsInspectorOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [activeInspectorTab, setActiveInspectorTab] = useState<"settings" | "seo" | "analytics">("settings");

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<BlogFormValues>({
    resolver: zodResolver(blogSchema),
    defaultValues: (initialData as unknown as BlogFormValues) || {
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      coverImage: "",
      category: "Marketplace Insights",
      tags: [],
      author: {
        name: "ISNAP Editorial",
        role: "Strategic Analyst",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop"
      },
      status: "draft",
      featured: false,
      published: false,
      readingTime: 0,
      seoScore: 0,
      metrics: {
        views: 0,
        completion: 0,
        engagement: 0
      }
    }
  });

  const title = watch("title");
  const content = watch("content");
  const status = watch("status");
  const readingTime = watch("readingTime");

  useEffect(() => {
    if (title && !initialData) {
      setValue("slug", slugify(title), { shouldValidate: true });
    }
  }, [title, setValue, initialData]);

  useEffect(() => {
    if (content) {
      const minutes = calculateReadingTime(content);
      setValue("readingTime", minutes);
    }
  }, [content, setValue]);

  const onSubmit = async (values: BlogFormValues) => {
    setIsSaving(true);
    setSaveError(null);
    try {
      const blogData = {
        ...values,
        published: values.status === "published",
        updatedAt: new Date(),
      } as Blog;

      if (initialData?.id) {
        await updateBlog(initialData.id, blogData);
      } else {
        await createBlog(blogData);
      }
      router.push("/admin/blogs");
      router.refresh();
    } catch (error: any) {
      console.error("Error saving blog:", error);
      setSaveError(error?.message || "Failed to save. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const onFormError = (formErrors: any) => {
    const firstError = Object.values(formErrors)?.[0] as any;
    const msg = firstError?.message || firstError?.root?.message || "Please fix the form errors.";
    setSaveError(msg);
    console.error("Form validation errors:", formErrors);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* FIXED TOOLBAR — tight, professional, corporate */}
      <header className="h-12 border-b border-gray-200 flex items-center justify-between px-5 bg-white sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => router.push("/admin/blogs")}
            className="flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-gray-900 transition-colors font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </button>
          <div className="w-px h-4 bg-gray-200" />
          <span className="text-[13px] font-medium text-gray-900 truncate max-w-[300px]">
            {title || "Untitled"}
          </span>
          <div className="flex items-center gap-1.5 ml-2">
            <div className={cn(
              "w-1.5 h-1.5 rounded-full",
              status === "published" ? "bg-green-500" : "bg-amber-400"
            )} />
            <span className="text-[11px] font-medium text-gray-400 capitalize">{status}</span>
          </div>
          {readingTime > 0 && (
            <>
              <div className="w-px h-3 bg-gray-200 ml-1" />
              <span className="text-[11px] text-gray-400 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {readingTime} min read
              </span>
            </>
          )}
        </div>

        <div className="flex items-center gap-1">
          <button 
            onClick={() => setIsPreviewOpen(true)}
            className="h-7 px-3 text-[12px] font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors flex items-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            Preview
          </button>
          
          <button 
            onClick={() => setIsInspectorOpen(true)}
            className="h-7 px-3 text-[12px] font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors flex items-center gap-1.5"
          >
            <PanelRight className="w-3.5 h-3.5" />
            Settings
          </button>

          <div className="w-px h-4 bg-gray-200 mx-1" />

          <button 
            onClick={handleSubmit(onSubmit, onFormError)}
            disabled={isSubmitting || isSaving}
            className="h-7 px-4 bg-gray-900 text-white text-[12px] font-medium rounded-md hover:bg-black transition-colors disabled:opacity-40 flex items-center gap-1.5"
          >
            {isSubmitting || isSaving ? <Loader2 className="w-3 h-3 animate-spin" /> : <Send className="w-3 h-3" />}
            {status === "published" ? "Update" : "Publish"}
          </button>
        </div>
      </header>

      {/* Error notification */}
      {saveError && (
        <div className="bg-red-50 border-b border-red-200 px-5 py-2 flex items-center justify-between">
          <p className="text-[13px] text-red-600 font-medium">{saveError}</p>
          <button onClick={() => setSaveError(null)} className="text-red-400 hover:text-red-600 text-[12px] font-medium">Dismiss</button>
        </div>
      )}

      {/* EDITORIAL CANVAS */}
      <main className="overflow-y-auto" style={{ height: "calc(100vh - 48px)" }}>
        <div className="max-w-[720px] mx-auto py-16 px-6">
          {/* Cover Image */}
          <div className="mb-10">
            <Controller
              name="coverImage"
              control={control}
              render={({ field }) => (
                <ImageUploader 
                  value={field.value} 
                  onChange={field.onChange}
                />
              )}
            />
            {errors.coverImage && <p className="mt-2 text-xs text-red-500">{errors.coverImage.message}</p>}
          </div>

          {/* Title */}
          <textarea 
            {...register("title")}
            placeholder="Post title"
            className="w-full text-[42px] font-bold text-gray-900 border-none outline-none placeholder:text-gray-200 resize-none leading-[1.15] tracking-[-0.02em] bg-transparent mb-3"
            rows={2}
          />

          {/* Excerpt */}
          <textarea 
            {...register("excerpt")}
            placeholder="Write a brief summary..."
            className="w-full text-[17px] text-gray-400 border-none outline-none placeholder:text-gray-200 resize-none leading-[1.6] bg-transparent mb-8"
            rows={2}
          />

          <div className="h-px w-full bg-gray-100 mb-8" />

          {/* Rich Text Editor */}
          <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <RichTextEditor 
                content={field.value} 
                onChange={field.onChange}
              />
            )}
          />
        </div>
      </main>

      {/* INSPECTOR DRAWER */}
      <AnimatePresence>
        {isInspectorOpen && (
          <>
            <motion.div 
              {...({
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                onClick: () => setIsInspectorOpen(false),
                className: "fixed inset-0 bg-black/20 z-[60]"
              } as any)}
            />
            <motion.aside 
              {...({
                initial: { x: 380 },
                animate: { x: 0 },
                exit: { x: 380 },
                transition: { type: "spring", damping: 30, stiffness: 300 },
                className: "fixed right-0 top-0 h-full w-[380px] bg-white border-l border-gray-200 z-[70] flex flex-col shadow-xl"
              } as any)}
            >
              {/* Inspector Header */}
              <div className="h-12 border-b border-gray-200 flex items-center justify-between px-4">
                <span className="text-[13px] font-semibold text-gray-900">Document settings</span>
                <button 
                  onClick={() => setIsInspectorOpen(false)}
                  className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 transition-colors"
                >
                  <X className="w-3.5 h-3.5 text-gray-400" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-gray-200">
                {(["settings", "seo", "analytics"] as const).map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setActiveInspectorTab(tab)}
                    className={cn(
                      "flex-1 py-2.5 text-[12px] font-medium capitalize transition-colors",
                      activeInspectorTab === tab 
                        ? "text-gray-900 border-b-2 border-gray-900" 
                        : "text-gray-400 hover:text-gray-600"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="flex-1 overflow-y-auto p-5 space-y-6">
                {activeInspectorTab === "settings" && (
                  <div className="space-y-6">
                    {/* Status */}
                    <div>
                      <label className="text-[12px] font-medium text-gray-500 mb-2 block">Status</label>
                      <div className="grid grid-cols-2 gap-1.5">
                        {(["draft", "review", "approved", "published"] as const).map((s) => (
                          <button 
                            key={s}
                            onClick={() => setValue("status", s)}
                            className={cn(
                              "px-3 py-2 rounded-md text-[12px] font-medium capitalize border transition-colors",
                              status === s 
                                ? "bg-gray-900 text-white border-gray-900" 
                                : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
                            )}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Category */}
                    <div>
                      <label className="text-[12px] font-medium text-gray-500 mb-2 block">Category</label>
                      <select 
                        {...register("category")}
                        className="w-full bg-white border border-gray-200 rounded-md px-3 py-2 text-[13px] font-medium text-gray-900 outline-none focus:border-gray-400 transition-colors"
                      >
                        <option>Marketplace Insights</option>
                        <option>Growth Strategy</option>
                        <option>Enterprise Tech</option>
                      </select>
                    </div>

                    {/* Featured */}
                    <div className="flex items-center justify-between py-2">
                      <label className="text-[13px] font-medium text-gray-700">Featured post</label>
                      <input 
                        type="checkbox" 
                        {...register("featured")} 
                        className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 focus:ring-offset-0" 
                      />
                    </div>

                    {/* Slug */}
                    <div>
                      <label className="text-[12px] font-medium text-gray-500 mb-2 block">URL Slug</label>
                      <input 
                        {...register("slug")}
                        className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-[13px] font-mono text-gray-600 outline-none focus:border-gray-400 transition-colors"
                      />
                    </div>
                  </div>
                )}

                {activeInspectorTab === "seo" && (() => {
                  const coverImage = watch("coverImage");
                  const excerpt = watch("excerpt");
                  const slug = watch("slug");
                  const wordCount = content ? content.replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length : 0;
                  const hasHeadings = /<h[1-6]/i.test(content || "");
                  const hasImages = /<img /i.test(content || "") || !!coverImage;
                  const hasLinks = /<a /i.test(content || "");
                  const hasExcerpt = (excerpt || "").length >= 20;
                  const hasCoverImage = !!coverImage;
                  const hasSlug = (slug || "").length >= 5;
                  const hasMinWords = wordCount >= 300;

                  const checks = [
                    { label: "Title filled", done: (title || "").length >= 5 },
                    { label: "URL slug set", done: hasSlug },
                    { label: "Cover image added", done: hasCoverImage },
                    { label: "Excerpt / summary", done: hasExcerpt },
                    { label: "Has headings (H1–H6)", done: hasHeadings },
                    { label: "Has images", done: hasImages },
                    { label: "Has internal links", done: hasLinks },
                    { label: "300+ words", done: hasMinWords },
                  ];

                  const passedCount = checks.filter(c => c.done).length;
                  const seoScore = Math.round((passedCount / checks.length) * 100);
                  const scoreColor = seoScore >= 80 ? "text-green-400 bg-green-400/10" : seoScore >= 50 ? "text-amber-400 bg-amber-400/10" : "text-red-400 bg-red-400/10";
                  const suggestion = seoScore >= 80
                    ? "Great editorial health. Your content is well-optimized."
                    : seoScore >= 50
                    ? "Decent start. Complete the remaining checks to improve."
                    : "Needs work. Fill in the basics to improve discoverability.";

                  return (
                    <div className="space-y-5">
                      <div className="p-4 bg-gray-900 rounded-lg text-white">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[12px] font-medium text-gray-400">SEO Score</span>
                          <span className={cn("text-[12px] font-semibold px-2 py-0.5 rounded", scoreColor)}>{seoScore}/100</span>
                        </div>
                        <p className="text-[12px] text-gray-400 leading-relaxed">{suggestion}</p>
                      </div>
                      <div className="space-y-1">
                        {checks.map((item, i) => (
                          <div key={i} className="flex items-center gap-2.5 py-2 px-3 rounded-md hover:bg-gray-50 transition-colors">
                            <div className={cn(
                              "w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0",
                              item.done ? "bg-green-500 text-white" : "border-2 border-gray-200"
                            )}>
                              {item.done && <CheckCircle2 className="w-2.5 h-2.5" />}
                            </div>
                            <span className={cn("text-[13px]", item.done ? "text-gray-700" : "text-gray-400")}>{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()}

                {activeInspectorTab === "analytics" && (() => {
                  const plainText = (content || "").replace(/<[^>]*>/g, " ");
                  const words = plainText.split(/\s+/).filter(Boolean).length;
                  const chars = plainText.replace(/\s/g, "").length;
                  const headings = ((content || "").match(/<h[1-6]/gi) || []).length;
                  const images = ((content || "").match(/<img /gi) || []).length + (watch("coverImage") ? 1 : 0);
                  const links = ((content || "").match(/<a /gi) || []).length;
                  const paragraphs = ((content || "").match(/<p>/gi) || []).length;

                  return (
                    <div className="space-y-4">
                      <p className="text-[12px] font-medium text-gray-500 mb-1">Content analysis</p>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { label: "Words", value: words.toLocaleString() },
                          { label: "Characters", value: chars.toLocaleString() },
                          { label: "Headings", value: headings.toString() },
                          { label: "Images", value: images.toString() },
                          { label: "Links", value: links.toString() },
                          { label: "Paragraphs", value: paragraphs.toString() },
                          { label: "Reading time", value: `${readingTime || Math.ceil(words / 200)} min` },
                          { label: "Status", value: status || "draft" },
                        ].map((stat) => (
                          <div key={stat.label} className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                            <p className="text-[11px] font-medium text-gray-400 mb-0.5">{stat.label}</p>
                            <p className="text-lg font-semibold text-gray-900 capitalize">{stat.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Media Library */}
      <MediaLibrary 
        isOpen={isMediaLibraryOpen} 
        onClose={() => setIsMediaLibraryOpen(false)} 
        onSelect={(url) => {
          setIsMediaLibraryOpen(false);
        }}
      />

      {/* Preview */}
      <AnimatePresence>
        {isPreviewOpen && (
          <PreviewPanel 
            data={watch()} 
            onClose={() => setIsPreviewOpen(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
