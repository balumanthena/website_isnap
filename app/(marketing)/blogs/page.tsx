import { getPublishedBlogs, getFeaturedBlogs } from "@/lib/firebase/blogs";
import { RealtimeBlogIndex } from "@/components/blog/RealtimeBlogIndex";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = {
  title: "Insights & Engineering | ISNAP",
  description: "Explore the latest insights on enterprise commerce orchestration, AI cataloging, and marketplace automation.",
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogsIndexPage() {
  const featuredBlogs = await getFeaturedBlogs();
  const allBlogs = await getPublishedBlogs(50);

  // Filter out featured blogs from the main list to avoid duplication
  const regularBlogs = allBlogs.filter(
    (blog) => !featuredBlogs.find((fb) => fb.id === blog.id)
  );

  return (
    <main className="bg-white pt-32 pb-20 min-h-screen">
      <div className="max-container">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-enterprise-border bg-enterprise-bg px-4 py-1.5 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-enterprise-green" />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-enterprise-text">Editorial</p>
          </div>
          <h1 className="hero-heading mb-8">
            Insights & <br/><span className="text-enterprise-green">Engineering.</span>
          </h1>
          <p className="text-2xl text-enterprise-text-muted leading-relaxed">
            Thoughts, strategies, and technical deep-dives on scaling enterprise commerce across global marketplaces.
          </p>
        </div>

        <RealtimeBlogIndex 
          initialFeaturedBlogs={featuredBlogs} 
          initialRegularBlogs={regularBlogs} 
        />
      </div>

      <CTASection />
    </main>
  );
}
