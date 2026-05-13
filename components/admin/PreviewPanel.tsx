"use client";

import { motion } from "framer-motion";
import { 
  X, Smartphone, Monitor, Share2, Globe, 
  Send, Camera, ExternalLink,
  ShieldCheck, Zap, BarChart3, Clock,
  CheckCircle2, Laptop, Tablet, Eye,
  Maximize2, Share, Link as LinkIcon, Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { BlogFormValues } from "@/lib/schemas/blog";
import { calculateReadingTime } from "@/lib/utils/reading-time";

interface PreviewPanelProps {
  data: Partial<BlogFormValues>;
  onClose: () => void;
}

export function PreviewPanel({ data, onClose }: PreviewPanelProps) {
  const [viewport, setViewport] = useState<"mobile" | "tablet" | "desktop">("desktop");
  const [activeSocial, setActiveSocial] = useState<"linkedin" | "x" | "meta">("linkedin");

  return (
    <motion.div
      {...({
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-[100] bg-white flex flex-col"
      } as any)}
    >
      {/* CINEMATIC PREVIEW HEADER */}
      <header className="h-24 border-b border-zinc-100 flex items-center justify-between px-12 bg-white/80 backdrop-blur-3xl sticky top-0 z-50">
         <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
               <div className="h-10 w-10 bg-black rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-black/20">
                  <Eye className="w-5 h-5" />
               </div>
               <div className="hidden md:block">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900">Content Simulation Lab</h3>
                  <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5">Institutional Preview Mode</p>
               </div>
            </div>
            
            <div className="h-6 w-px bg-zinc-100" />

            <div className="flex items-center p-1 bg-zinc-50 rounded-2xl border border-zinc-100">
               {[
                 { id: "mobile", icon: Smartphone },
                 { id: "tablet", icon: Tablet },
                 { id: "desktop", icon: Laptop },
               ].map((v) => (
                 <button 
                  key={v.id}
                  onClick={() => setViewport(v.id as any)}
                  className={cn(
                    "px-5 py-2.5 rounded-xl flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all", 
                    viewport === v.id ? "bg-white text-black shadow-xl shadow-black/5" : "text-zinc-400 hover:text-zinc-600"
                  )}
                 >
                    <v.icon className="w-4 h-4" />
                    <span className="hidden lg:block">{v.id}</span>
                 </button>
               ))}
            </div>
         </div>

         <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-3 mr-6">
               <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-7 w-7 rounded-full border-2 border-white bg-zinc-100" />
                  ))}
               </div>
               <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">3 Stakeholders Reviewing</span>
            </div>
            
            <button 
              onClick={onClose} 
              className="h-12 w-12 flex items-center justify-center rounded-2xl bg-zinc-50 text-zinc-900 hover:bg-black hover:text-white transition-all group"
            >
               <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
            </button>
         </div>
      </header>

      <div className="flex-1 flex overflow-hidden bg-zinc-50/50">
         {/* THE STAGE */}
         <div className="flex-1 overflow-y-auto p-12 lg:p-20 flex justify-center custom-scrollbar">
            <motion.div
              {...({
                layout: true,
                transition: { type: "spring", damping: 30, stiffness: 300 },
                className: cn(
                  "bg-white shadow-[0_100px_150px_-50px_rgba(0,0,0,0.15)] overflow-hidden relative transition-all duration-700",
                  viewport === "desktop" ? "w-full max-w-[1280px] rounded-[3rem]" : 
                  viewport === "tablet" ? "w-[768px] rounded-[3rem] border-[12px] border-zinc-950 aspect-[4/3]" : 
                  "w-[393px] rounded-[4rem] border-[12px] border-zinc-950 aspect-[9/19.5]"
                )
              } as any)}
            >
               {/* Device Bezels / Indicators */}
               {viewport !== "desktop" && (
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-zinc-950 rounded-b-3xl z-50 flex items-center justify-center">
                    <div className="w-12 h-1 bg-zinc-800 rounded-full" />
                 </div>
               )}

               <div className="h-full overflow-y-auto overflow-x-hidden custom-scrollbar bg-white">
                  {/* Hero Experience */}
                  <div className="aspect-[21/9] w-full bg-zinc-50 relative overflow-hidden">
                     {data.coverImage ? (
                        <img src={data.coverImage} alt="Cover" className="w-full h-full object-cover" />
                     ) : (
                        <div className="h-full w-full flex items-center justify-center bg-zinc-100">
                           <Globe className="w-16 h-16 text-zinc-200" />
                        </div>
                     )}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                     <div className="absolute bottom-12 left-12 right-12 text-white">
                        <div className="flex items-center gap-6 mb-6">
                           <span className="px-4 py-1.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest">{data.category}</span>
                           <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-60">
                              <Clock className="w-3.5 h-3.5" />
                              {calculateReadingTime(data.content || "")} Min Read
                           </div>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter max-w-4xl">{data.title || "Untitled Masterpiece"}</h1>
                     </div>
                  </div>

                  {/* Editorial Content */}
                  <div className="max-w-[840px] mx-auto py-24 px-8 lg:px-0">
                     <div className="flex items-center gap-6 mb-16 pb-12 border-b border-zinc-100">
                        <img src={data.author?.avatar} className="h-16 w-16 rounded-[2rem] object-cover shadow-2xl shadow-black/10" alt="Author" />
                        <div>
                           <p className="text-lg font-black text-zinc-950 tracking-tight">{data.author?.name}</p>
                           <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mt-1">{data.author?.role}</p>
                        </div>
                        <div className="ml-auto flex items-center gap-2">
                           <button className="h-10 w-10 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-400 hover:text-black transition-all">
                              <Share className="w-4 h-4" />
                           </button>
                           <button className="h-10 w-10 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-400 hover:text-black transition-all">
                              <LinkIcon className="w-4 h-4" />
                           </button>
                        </div>
                     </div>

                     <p className="text-2xl font-medium text-zinc-400 italic mb-16 leading-relaxed tracking-tight">{data.excerpt}</p>
                     
                     <div 
                        className="prose prose-zinc max-w-none prose-headings:font-black prose-p:text-zinc-800 prose-p:leading-[1.8] prose-p:text-xl"
                        dangerouslySetInnerHTML={{ __html: data.content || "" }} 
                     />
                  </div>
               </div>
            </motion.div>
         </div>

         {/* DISTRIBUTION ANALYTICS PANEL */}
         <aside className="w-[480px] border-l border-zinc-100 bg-white p-12 flex flex-col gap-12 overflow-y-auto custom-scrollbar">
            <div className="space-y-6">
               <div className="flex items-center justify-between">
                  <p className="text-[10px] font-black text-zinc-900 uppercase tracking-[0.2em]">Distribution Intelligence</p>
                  <Sparkles className="w-4 h-4 text-yellow-400" />
               </div>
               
               <div className="grid grid-cols-3 gap-2 p-1 bg-zinc-50 rounded-2xl border border-zinc-100">
                  {["linkedin", "x", "meta"].map((p) => (
                    <button 
                      key={p}
                      onClick={() => setActiveSocial(p as any)}
                      className={cn(
                        "py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all", 
                        activeSocial === p ? "bg-white text-black shadow-xl shadow-black/5" : "text-zinc-400 hover:text-zinc-600"
                      )}
                    >
                      {p}
                    </button>
                  ))}
               </div>

               {/* HIGH-FIDELITY SOCIAL MOCKUP */}
               <div className="bg-white rounded-[2.5rem] overflow-hidden border border-zinc-100 shadow-2xl shadow-black/5">
                  <div className="p-6 flex items-center gap-4">
                     <div className="h-10 w-10 bg-zinc-100 rounded-full shrink-0" />
                     <div className="space-y-1.5 flex-1">
                        <div className="h-2.5 w-1/3 bg-zinc-100 rounded-full" />
                        <div className="h-2 w-1/4 bg-zinc-50 rounded-full" />
                     </div>
                  </div>
                  <div className="px-6 pb-4">
                     <p className="text-xs text-zinc-600 line-clamp-3 leading-relaxed">{data.excerpt}</p>
                  </div>
                  <div className="aspect-[1.91/1] w-full bg-zinc-50 relative group cursor-pointer">
                     {data.coverImage && <img src={data.coverImage} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />}
                     <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                     <div className="absolute bottom-0 left-0 right-0 p-5 bg-white/90 backdrop-blur-xl border-t border-zinc-100">
                        <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">isnap.in</p>
                        <p className="text-sm font-black text-zinc-900 line-clamp-1 tracking-tight">{data.title}</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="space-y-6">
               <p className="text-[10px] font-black text-zinc-900 uppercase tracking-[0.2em]">Institutional QA Checklist</p>
               <div className="space-y-4">
                  {[
                    { label: "Semantic Integrity Audit", done: true },
                    { label: "Asset Compression (WebP/AVIF)", done: true },
                    { label: "OpenGraph Metadata Sync", done: true },
                    { label: "Global Edge Propogation", done: false },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-default">
                       <div className={cn(
                         "h-5 w-5 rounded-lg flex items-center justify-center transition-all duration-500", 
                         item.done ? "bg-green-500 text-white shadow-lg shadow-green-200" : "bg-zinc-100 text-zinc-300 group-hover:bg-zinc-200"
                       )}>
                          {item.done ? <CheckCircle2 className="w-3.5 h-3.5" /> : <ShieldCheck className="w-3.5 h-3.5" />}
                       </div>
                       <span className={cn(
                         "text-[10px] font-black uppercase tracking-widest transition-colors", 
                         item.done ? "text-zinc-900" : "text-zinc-300"
                       )}>
                         {item.label}
                       </span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="mt-auto pt-8">
               <button className="w-full py-5 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-[2rem] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-2xl shadow-black/20">
                  <Zap className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  Approve for Global Distribution
               </button>
            </div>
         </aside>
      </div>
    </motion.div>
  );
}
