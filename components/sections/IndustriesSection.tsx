"use client";

const industryIndex = [
  "Handlooms", "FMCG", "Apparel", "Cosmetics",
  "B2B Components", "Eco Products", "Food & Bev", "Electronics",
  "Furniture", "Pharma", "Industrial", "Digital Goods"
];

export function IndustriesSection() {
  return (
    <section id="industries" className="relative section-spacing overflow-hidden bg-white">
      <div className="absolute inset-0 grid-subtle opacity-[0.5] pointer-events-none" />
      
      <div className="max-container relative z-10">
        <div className="flex flex-col gap-24">
          {/* Header Layer: Strategic Positioning */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-enterprise-border bg-enterprise-bg px-4 py-1.5 mb-10">
                <span className="h-1.5 w-1.5 rounded-full bg-enterprise-green" />
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-enterprise-text">Industry Vertical Coverage</p>
              </div>
              <h2 className="section-heading mb-10">
                Categories <br/><span className="text-enterprise-green">We Work With.</span>
              </h2>
              <p className="text-xl text-enterprise-text-muted leading-relaxed max-w-2xl">
                From artisan crafts to global enterprise FMCG, we handle the complex catalog logic for every major product category.
              </p>
            </div>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
             {/* Left: Category Index */}
             <div className="lg:col-span-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                   {industryIndex.map((sector) => (
                     <div
                       key={sector}
                       className="group p-8 rounded-[24px] border border-enterprise-border bg-white hover:border-enterprise-green hover:shadow-premium transition-all duration-500 cursor-default"
                     >
                        <p className="text-sm font-bold text-enterprise-text tracking-tight group-hover:text-enterprise-green transition-colors">{sector}</p>
                     </div>
                   ))}
                </div>
             </div>

             {/* Right: Scale Summary */}
             <div className="lg:col-span-4 flex flex-col gap-8">
                <div className="p-10 rounded-[32px] bg-enterprise-text text-white relative overflow-hidden shadow-2xl">
                   <div className="absolute inset-0 grid-subtle opacity-[0.1] pointer-events-none" />
                   <p className="text-[11px] font-bold text-enterprise-green uppercase tracking-widest mb-12">Operational Scale</p>
                   <div className="space-y-12">
                      <div>
                         <p className="text-5xl font-bold tracking-tighter">200+</p>
                         <p className="mt-3 text-[12px] font-bold uppercase tracking-widest text-white/70">Global Brand Portfolios</p>
                      </div>
                      <div>
                         <p className="text-5xl font-bold tracking-tighter">12+</p>
                         <p className="mt-3 text-[12px] font-bold uppercase tracking-widest text-white/70">Core Industry Verticals</p>
                      </div>
                   </div>
                </div>
                
                <div className="p-10 rounded-[32px] border border-enterprise-border bg-enterprise-bg/20">
                   <p className="text-lg font-bold text-enterprise-text leading-tight mb-4">
                      Marketplace-specific catalog logic for cross-category scale.
                   </p>
                   <p className="text-sm text-enterprise-text-muted leading-relaxed">
                      Our platform adapts to the specific data requirements of each category, ensuring 100% compliance.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
