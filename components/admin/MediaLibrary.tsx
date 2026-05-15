"use client";

import { useState, useEffect } from "react";
import { 
  X, Upload, Search, Image as ImageIcon, 
  Trash2, Copy, Check, Filter, Grid, List as ListIcon,
  Loader2, MoreVertical, ExternalLink, HardDrive,
  LayoutGrid, FolderPlus, SortAsc, RefreshCw, Command, Plus, ShieldCheck
} from "lucide-react";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface MediaLibraryProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (url: string) => void;
}

interface CloudinaryAsset {
  public_id: string;
  secure_url: string;
  format: string;
  width: number;
  height: number;
  created_at: string;
  bytes: number;
}

export function MediaLibrary({ isOpen, onClose, onSelect }: MediaLibraryProps) {
  const [assets, setAssets] = useState<CloudinaryAsset[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const fetchAssets = async () => {
    setLoading(true);
    try {
      // Simulation of fetching assets from Cloudinary
    } catch (error) {
      console.error("Failed to fetch media:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) fetchAssets();
  }, [isOpen]);

  const handleUploadSuccess = (result: any) => {
    if (result.event === "success") {
      const newAsset = result.info as CloudinaryAsset;
      setAssets(prev => [newAsset, ...prev]);
      onSelect(newAsset.secure_url);
    }
  };

  const copyToClipboard = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredAssets = assets.filter(asset => 
    asset.public_id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 overflow-hidden">
          <motion.div
            {...({
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              onClick: onClose,
              className: "absolute inset-0 bg-black/5 backdrop-blur-3xl"
            } as any)}
          />
          
          <motion.div
            {...({
              initial: { opacity: 0, scale: 0.98, y: 20 },
              animate: { opacity: 1, scale: 1, y: 0 },
              exit: { opacity: 0, scale: 0.98, y: 20 },
              transition: { type: "spring", damping: 30, stiffness: 300 },
              className: "relative w-full max-w-6xl h-full bg-white rounded-[3rem] shadow-[0_50px_150px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden border border-zinc-100"
            } as any)}
          >
            {/* MINIMAL MEDIA HEADER */}
            <header className="px-10 py-8 flex items-center justify-between border-b border-zinc-50 sticky top-0 bg-white z-20">
               <div className="flex items-center gap-8 flex-1">
                  <div className="flex items-center gap-3">
                     <div className="h-10 w-10 bg-black rounded-2xl flex items-center justify-center text-white shadow-xl shadow-black/10">
                        <FolderPlus className="w-5 h-5" />
                     </div>
                     <div>
                        <h2 className="text-sm font-black tracking-tight text-zinc-900 uppercase">Asset Cloud</h2>
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5">Media Infrastructure</p>
                     </div>
                  </div>

                  <div className="h-6 w-px bg-zinc-100 hidden lg:block" />

                  <div className="relative flex-1 max-w-md hidden lg:block group">
                     <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-300 group-focus-within:text-black transition-colors" />
                     <input 
                       type="text" 
                       placeholder="Search global assets..."
                       value={search}
                       onChange={(e) => setSearch(e.target.value)}
                       className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-transparent rounded-2xl text-[11px] font-bold outline-none focus:bg-white focus:border-zinc-100 transition-all placeholder:text-zinc-300"
                     />
                  </div>
               </div>

               <div className="flex items-center gap-4">
                  <div className="hidden md:flex items-center p-1 bg-zinc-50 rounded-xl border border-zinc-100 mr-4">
                     <button 
                      onClick={() => setViewMode("grid")}
                      className={cn("p-2.5 rounded-lg transition-all", viewMode === "grid" ? "bg-white text-black shadow-sm" : "text-zinc-300 hover:text-zinc-500")}
                     >
                        <Grid className="w-4 h-4" />
                     </button>
                     <button 
                      onClick={() => setViewMode("list")}
                      className={cn("p-2.5 rounded-lg transition-all", viewMode === "list" ? "bg-white text-black shadow-sm" : "text-zinc-300 hover:text-zinc-500")}
                     >
                        <ListIcon className="w-4 h-4" />
                     </button>
                  </div>

                  <CldUploadWidget 
                    uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                    onSuccess={handleUploadSuccess}
                  >
                    {({ open }) => (
                      <button 
                        onClick={() => open()}
                        className="flex items-center gap-3 px-8 py-3.5 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-zinc-800 transition-all shadow-2xl shadow-black/10 active:scale-95"
                      >
                        <Plus className="w-4 h-4" />
                        Injest Media
                      </button>
                    )}
                  </CldUploadWidget>

                  <button 
                    onClick={onClose} 
                    className="h-10 w-10 flex items-center justify-center rounded-xl bg-zinc-50 text-zinc-400 hover:text-black transition-all ml-2"
                  >
                     <X className="w-5 h-5" />
                  </button>
               </div>
            </header>

            {/* ASSET GRID AREA */}
            <div className="flex-1 overflow-y-auto p-10 custom-scrollbar bg-white">
               {loading ? (
                 <div className="h-full flex flex-col items-center justify-center gap-6">
                    <Loader2 className="w-12 h-12 animate-spin text-black" />
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300">Synchronizing CDN</p>
                 </div>
               ) : assets.length === 0 ? (
                 <div className="h-full flex flex-col items-center justify-center gap-8 text-center opacity-60">
                    <div className="h-32 w-32 bg-white rounded-[3rem] flex items-center justify-center border border-zinc-100">
                       <ImageIcon className="w-12 h-12 text-zinc-200" />
                    </div>
                    <div className="space-y-2">
                       <h3 className="text-sm font-black uppercase tracking-widest text-zinc-900">Archive Manifest Empty</h3>
                       <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest max-w-[240px]">No high-fidelity assets detected in the global repository.</p>
                    </div>
                 </div>
               ) : (
                 <div className={cn(
                   "grid gap-8",
                   viewMode === "grid" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" : "grid-cols-1"
                 )}>
                    {filteredAssets.map((asset, i) => (
                      <motion.div
                        key={asset.public_id}
                        {...({
                          initial: { opacity: 0, y: 20 },
                          animate: { opacity: 1, y: 0 },
                          transition: { delay: i * 0.05 },
                          className: cn(
                            "group relative bg-white transition-all duration-700",
                            viewMode === "list" && "flex items-center gap-8 p-6 bg-zinc-50/30 rounded-[2rem] border border-transparent hover:border-zinc-100 hover:bg-white hover:shadow-2xl hover:shadow-black/5"
                          )
                        } as any)}
                      >
                         <div className={cn(
                           "relative overflow-hidden bg-white rounded-[2rem] border border-zinc-100 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-black/10 group-hover:-translate-y-2",
                           viewMode === "grid" ? "aspect-square" : "h-20 w-20 shrink-0"
                         )}>
                            <CldImage 
                              src={asset.public_id} 
                              width={400}
                              height={400}
                              alt={asset.public_id}
                              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                               <button 
                                onClick={() => onSelect(asset.secure_url)}
                                className="px-5 py-2.5 bg-white text-black text-[9px] font-black uppercase tracking-widest rounded-xl hover:scale-105 active:scale-95 transition-all shadow-2xl"
                               >
                                 Select Asset
                               </button>
                            </div>
                         </div>

                         <div className={cn("mt-4 px-2", viewMode === "list" && "mt-0 flex-1 flex items-center justify-between px-0")}>
                            <div className="min-w-0">
                               <p className="text-[10px] font-black text-zinc-900 truncate uppercase tracking-widest group-hover:text-black transition-colors">{asset.public_id.split('/').pop()}</p>
                               <p className="text-[8px] font-black text-zinc-400 mt-1 uppercase tracking-widest flex items-center gap-2">
                                  {asset.format} • {(asset.bytes / 1024).toFixed(0)} KB
                               </p>
                            </div>
                            <div className={cn(
                              "flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0",
                              viewMode === "list" && "mt-0 opacity-100 translate-y-0"
                            )}>
                               <button 
                                onClick={() => copyToClipboard(asset.secure_url, asset.public_id)}
                                className="h-9 w-9 bg-zinc-50 rounded-xl flex items-center justify-center text-zinc-400 hover:text-black hover:bg-zinc-100 transition-all border border-zinc-100"
                               >
                                 {copiedId === asset.public_id ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                               </button>
                               <button className="h-9 w-9 bg-zinc-50 rounded-xl flex items-center justify-center text-zinc-400 hover:text-red-500 hover:bg-red-50 transition-all border border-zinc-100">
                                 <Trash2 className="w-4 h-4" />
                               </button>
                            </div>
                         </div>
                      </motion.div>
                    ))}
                 </div>
               )}
            </div>

            {/* MINIMAL SYSTEM STATUS FOOTER */}
            <footer className="h-20 px-10 border-t border-zinc-50 flex items-center justify-between bg-zinc-50/30">
               <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
                     <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Cloudinary Edge Node: Singapore_Region</span>
                  </div>
                  <div className="h-3 w-px bg-zinc-200" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-zinc-300">{assets.length} Total Institutional Assets</span>
               </div>
               <div className="flex items-center gap-2 text-[9px] font-black text-zinc-400 uppercase tracking-widest">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Enterprise Grade Security
               </div>
            </footer>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
