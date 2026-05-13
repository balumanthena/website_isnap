"use client";

import { BarChart3, TrendingUp, Users, Eye, ArrowUpRight, ArrowDownRight, Globe, MousePointer2, Clock, Share2, Search, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AdminAnalyticsPage() {
  const stats = [
    { label: "Studio Reach", value: "142,805", trend: "+18.2%", icon: Eye, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Deep Engagement", value: "48.2%", trend: "+5.4%", icon: Zap, color: "text-amber-500", bg: "bg-amber-50" },
    { label: "Active Readers", value: "12,450", trend: "-2.1%", icon: Users, color: "text-purple-500", bg: "bg-purple-50" },
    { label: "Avg. Attention", value: "4m 12s", trend: "+12s", icon: Clock, color: "text-emerald-500", bg: "bg-emerald-50" },
  ];

  const topContent = [
    { title: "Building Scalable SaaS Infrastructure in 2026", category: "Engineering", views: "24.5k", completion: "78%", trend: "up" },
    { title: "The Future of AI-Driven Marketplace Logistics", category: "Insights", views: "18.2k", completion: "62%", trend: "up" },
    { title: "ISNAP Quarterly Product Vision & Ecosystem", category: "Company", views: "12.8k", completion: "91%", trend: "down" },
    { title: "Why Micro-Frontends are the New Standard", category: "Product", views: "8.4k", completion: "54%", trend: "up" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-10 py-6">
      <motion.div 
        {...({
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          className: "flex flex-col md:flex-row md:items-end justify-between gap-4"
        } as any)}
      >
        <div>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight leading-tight">Editorial Intelligence</h1>
          <p className="text-gray-500 mt-2 font-medium">Real-time performance metrics across your publishing ecosystem.</p>
        </div>
        <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-xl border border-gray-100">
           {["24h", "7d", "30d", "90d"].map((period) => (
             <button 
              key={period}
              className={cn(
                "px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all",
                period === "30d" ? "bg-white text-black shadow-sm" : "text-gray-400 hover:text-gray-600"
              )}
             >
               {period}
             </button>
           ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            {...({
              key: i,
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              transition: { delay: i * 0.1 },
              className: "bg-white p-6 rounded-[2rem] border border-gray-100 shadow-xl shadow-black/[0.02] flex flex-col group hover:border-black/10 transition-all cursor-default"
            } as any)}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={cn("p-3 rounded-2xl", stat.bg)}>
                <stat.icon className={cn("w-5 h-5", stat.color)} />
              </div>
              <div className={cn(
                "flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest",
                stat.trend.startsWith("+") ? "text-emerald-500" : "text-rose-500"
              )}>
                {stat.trend.startsWith("+") ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.trend}
              </div>
            </div>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-none">{stat.label}</p>
            <div className="text-3xl font-bold text-gray-900 mt-3 tabular-nums">{stat.value}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Performance Chart (Visual Simulation) */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl p-8 relative overflow-hidden group">
           <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Traffic Distribution</h3>
                <p className="text-xs text-gray-400 font-medium mt-1">Acquisition channels across global nodes.</p>
              </div>
              <BarChart3 className="w-6 h-6 text-gray-200" />
           </div>
           
           <div className="h-64 flex items-end justify-between gap-2 px-4 relative">
              {/* Fake Bar Chart */}
              {[60, 45, 80, 55, 90, 70, 40, 85, 65, 50, 75, 95].map((height, i) => (
                <motion.div 
                  {...({
                    key: i,
                    initial: { height: 0 },
                    animate: { height: `${height}%` },
                    transition: { delay: 0.5 + (i * 0.05), type: "spring", damping: 12 },
                    className: cn(
                      "flex-1 rounded-t-xl transition-all duration-500 group-hover:scale-105",
                      i % 3 === 0 ? "bg-black" : i % 3 === 1 ? "bg-blue-500" : "bg-gray-200"
                    )
                  } as any)}
                />
              ))}
              <div className="absolute bottom-0 left-0 w-full h-px bg-gray-100" />
           </div>

           <div className="grid grid-cols-3 mt-8 pt-8 border-t border-gray-50 gap-4">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-black" />
                 <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Search Engine</span>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-blue-500" />
                 <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Direct Traffic</span>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-gray-200" />
                 <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Referrals</span>
              </div>
           </div>
        </div>

        {/* Side Metrics */}
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl p-8 space-y-8">
           <h3 className="text-xl font-bold text-gray-900">Referral Sources</h3>
           <div className="space-y-6">
              {[
                { source: "Google Search", icon: Search, value: "42%", color: "bg-blue-500" },
                { source: "LinkedIn", icon: Share2, value: "28%", color: "bg-blue-700" },
                { source: "Direct Access", icon: Globe, value: "15%", color: "bg-black" },
                { source: "Twitter / X", icon: MousePointer2, value: "10%", color: "bg-sky-500" },
                { source: "Newsletters", icon: Users, value: "5%", color: "bg-emerald-500" },
              ].map((src, i) => (
                <div key={i} className="space-y-2">
                   <div className="flex items-center justify-between text-xs font-bold">
                      <div className="flex items-center gap-2">
                         <src.icon className="w-3.5 h-3.5 text-gray-400" />
                         <span className="uppercase tracking-widest">{src.source}</span>
                      </div>
                      <span className="text-gray-900">{src.value}</span>
                   </div>
                   <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                      <motion.div 
                        {...({
                          initial: { width: 0 },
                          animate: { width: src.value },
                          transition: { delay: 1 + (i * 0.1), duration: 1 },
                          className: cn("h-full rounded-full", src.color)
                        } as any)} 
                      />
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Top Performing Content Table */}
      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl overflow-hidden">
         <div className="p-8 border-b border-gray-50 flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">Top Performing Content</h3>
            <button className="text-xs font-bold uppercase tracking-widest text-blue-500 hover:text-blue-600 transition-colors">Export Report</button>
         </div>
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="bg-gray-50/50">
                     <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Article Title</th>
                     <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Category</th>
                     <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 text-center">Views</th>
                     <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 text-center">Completion</th>
                     <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 text-right">Trend</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-50">
                  {topContent.map((item, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors group cursor-pointer">
                       <td className="px-8 py-6">
                          <p className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{item.title}</p>
                       </td>
                       <td className="px-8 py-6">
                          <span className="px-3 py-1 bg-gray-100 text-[10px] font-bold uppercase tracking-widest rounded-full">{item.category}</span>
                       </td>
                       <td className="px-8 py-6 text-center tabular-nums text-sm font-medium">{item.views}</td>
                       <td className="px-8 py-6 text-center">
                          <div className="flex flex-col items-center gap-1.5">
                             <span className="text-sm font-bold">{item.completion}</span>
                             <div className="w-16 h-1 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500" style={{ width: item.completion }} />
                             </div>
                          </div>
                       </td>
                       <td className="px-8 py-6 text-right">
                          <div className={cn(
                            "inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider",
                            item.trend === "up" ? "text-emerald-600 bg-emerald-50" : "text-rose-600 bg-rose-50"
                          )}>
                             {item.trend === "up" ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                             {item.trend === "up" ? "+14%" : "-2%"}
                          </div>
                       </td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
    </div>
  );
}
