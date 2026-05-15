"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // If not loading and no user, redirect to login unless already on login page
    if (!loading && !user && pathname !== "/admin/login") {
      router.push("/admin/login");
    }
    // If logged in and on login page, redirect to admin dashboard
    if (!loading && user && pathname === "/admin/login") {
      router.push("/admin");
    }
  }, [user, loading, router, pathname]);

  // Show nothing or a strict loader while checking auth state to prevent flash of content
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 rounded-md bg-white text-black flex items-center justify-center font-semibold text-[11px] tracking-tight animate-pulse">
            IS
          </div>
          <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  // If not logged in and not on login page, don't render children (redirect is happening)
  if (!user && pathname !== "/admin/login") {
    return null;
  }

  return <>{children}</>;
}
