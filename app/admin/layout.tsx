"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileText, Settings, ChevronLeft, ChevronRight, Globe, BarChart, ExternalLink, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const navigation = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard, exact: true },
    { name: "Editorial", href: "/admin/blogs", icon: FileText, exact: false },
    { name: "Analytics", href: "/admin/analytics", icon: BarChart, exact: false },
    { name: "Settings", href: "/admin/settings", icon: Settings, exact: false },
  ];

  const currentSection = navigation.find(n => {
    if (n.exact) return pathname === n.href;
    return pathname.startsWith(n.href);
  })?.name || "Overview";

  return (
    <div className="min-h-screen bg-white flex font-sans antialiased">
      {/* CORPORATE SIDEBAR */}
      <aside 
        className={cn(
          "bg-[#0a0a0a] flex flex-col fixed h-full z-20 transition-all duration-200 ease-out",
          isCollapsed ? "w-[60px]" : "w-[200px]"
        )}
      >
        {/* Brand */}
        <div className="h-14 flex items-center px-3.5 border-b border-white/[0.06]">
          <Link href="/admin" className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-8 h-8 shrink-0 rounded-md bg-white text-black flex items-center justify-center font-semibold text-[11px] tracking-tight">
              IS
            </div>
            {!isCollapsed && <span className="text-[13px] font-semibold text-white truncate">ISNAP Studio</span>}
          </Link>
        </div>
        
        {/* Navigation */}
        <div className="flex-1 px-2 py-3">
          <nav className="space-y-0.5">
            {navigation.map((item) => {
              const isActive = item.exact 
                ? pathname === item.href 
                : pathname.startsWith(item.href);
                
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2.5 px-2.5 py-[7px] rounded-md text-[13px] font-medium transition-colors duration-100",
                    isActive
                      ? "bg-white/[0.08] text-white"
                      : "text-[#888] hover:bg-white/[0.04] hover:text-[#ccc]"
                  )}
                  title={isCollapsed ? item.name : ""}
                >
                  <item.icon className="h-[15px] w-[15px] shrink-0" />
                  {!isCollapsed && <span className="truncate">{item.name}</span>}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer */}
        <div className="px-2 pb-2 space-y-0.5 border-t border-white/[0.06] pt-2">
          <Link 
            href="/blogs"
            target="_blank"
            className="flex items-center gap-2.5 px-2.5 py-[7px] rounded-md text-[13px] font-medium text-[#888] hover:bg-white/[0.04] hover:text-[#ccc] transition-colors overflow-hidden"
            title="View Live Site"
          >
            <Globe className="h-[15px] w-[15px] shrink-0" />
            {!isCollapsed && <span className="truncate">Live Site</span>}
            {!isCollapsed && <ExternalLink className="h-3 w-3 ml-auto opacity-40" />}
          </Link>
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex items-center gap-2.5 px-2.5 py-[7px] rounded-md text-[13px] font-medium text-[#888] hover:bg-white/[0.04] hover:text-[#ccc] w-full transition-colors overflow-hidden"
          >
            {isCollapsed ? <ChevronRight className="h-[15px] w-[15px] shrink-0" /> : <ChevronLeft className="h-[15px] w-[15px] shrink-0" />}
            {!isCollapsed && <span className="truncate">Collapse</span>}
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main 
        className={cn(
          "flex-1 flex flex-col min-h-screen transition-all duration-200 ease-out",
          isCollapsed ? "ml-[60px]" : "ml-[200px]"
        )}
      >
        <div className="flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}
