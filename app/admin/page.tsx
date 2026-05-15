"use client";

import React, { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, limit, onSnapshot, Timestamp } from "firebase/firestore";
import { 
  FileText, 
  Users, 
  ArrowRight, 
  Activity, 
  Inbox, 
  Clock, 
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface OnboardingRequest {
  id: string;
  fullName: string;
  email: string;
  brandName: string;
  monthlyVolume: string;
  createdAt: any;
  status: string;
}

export default function AdminDashboardPage() {
  const [requests, setRequests] = useState<OnboardingRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, "onboarding_requests"),
      orderBy("createdAt", "desc"),
      limit(5)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as OnboardingRequest[];
      setRequests(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const formatTime = (timestamp: any) => {
    if (!timestamp) return "...";
    const date = timestamp.toDate();
    return new Intl.DateTimeFormat('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: 'short'
    }).format(date);
  };

  const MotionDiv = motion.div as any;

  return (
    <div className="space-y-10 max-w-7xl mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Enterprise Terminal</h1>
          <p className="text-gray-500 mt-2">Real-time oversight of global marketplace onboarding protocols.</p>
        </div>
        <div className="flex items-center gap-3 bg-enterprise-green/10 text-enterprise-green px-4 py-2 rounded-full border border-enterprise-green/20">
          <Activity className="w-4 h-4 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest">System Real-time Active</span>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Inbox className="w-24 h-24" />
           </div>
           <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">Total Inquiries</p>
           <div className="text-5xl font-bold text-gray-900 tracking-tighter">{requests.length}</div>
           <p className="mt-4 text-xs text-enterprise-green font-bold flex items-center">
              <CheckCircle2 className="w-3 h-3 mr-1" /> All systems operational
           </p>
        </div>

        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <FileText className="w-24 h-24" />
           </div>
           <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">Editorial Posts</p>
           <div className="text-5xl font-bold text-gray-900 tracking-tighter">12</div>
           <Link href="/admin/blogs" className="mt-4 text-xs text-blue-600 font-bold flex items-center hover:underline">
              Manage Content <ArrowRight className="w-3 h-3 ml-1" />
           </Link>
        </div>

        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Users className="w-24 h-24" />
           </div>
           <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">Active Partners</p>
           <div className="text-5xl font-bold text-gray-900 tracking-tighter">200+</div>
           <p className="mt-4 text-xs text-purple-600 font-bold flex items-center">
              <Activity className="w-3 h-3 mr-1" /> Scaling global channels
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Real-time Leads Section */}
        <div className="lg:col-span-8 bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-8 border-b border-gray-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-enterprise-green/10 rounded-lg">
                <Inbox className="w-5 h-5 text-enterprise-green" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 tracking-tight">Recent Onboarding Requests</h2>
            </div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Real-time Feed</span>
          </div>

          <div className="flex-1">
            <AnimatePresence mode="popLayout">
              {loading ? (
                <div className="p-20 text-center text-gray-400 flex flex-col items-center gap-4">
                  <div className="w-10 h-10 border-4 border-enterprise-green/20 border-t-enterprise-green rounded-full animate-spin" />
                  <p className="text-sm font-medium">Synchronizing with node...</p>
                </div>
              ) : requests.length === 0 ? (
                <div className="p-20 text-center text-gray-400">
                  <Inbox className="w-12 h-12 mx-auto mb-4 opacity-20" />
                  <p className="text-sm font-medium">No incoming protocol requests detected.</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-50">
                  {requests.map((request, i) => (
                    <MotionDiv
                      key={request.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-6 hover:bg-gray-50 transition-colors flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-6">
                        <div className="h-12 w-12 rounded-full bg-enterprise-bg border border-enterprise-border flex items-center justify-center font-bold text-enterprise-text group-hover:bg-enterprise-green group-hover:text-white transition-all">
                          {request.fullName[0]}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{request.brandName}</h3>
                          <div className="flex items-center gap-4 mt-1">
                            <span className="text-[12px] text-gray-500 flex items-center">
                              <Users className="w-3 h-3 mr-1" /> {request.fullName}
                            </span>
                            <span className="text-[12px] text-gray-500 flex items-center">
                              <Clock className="w-3 h-3 mr-1" /> {formatTime(request.createdAt)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="px-3 py-1 rounded-full bg-blue-50 text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                          {request.monthlyVolume}
                        </div>
                        <Link 
                          href={`#`} 
                          className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-enterprise-green hover:bg-enterprise-green/10 transition-all"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </MotionDiv>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="p-6 bg-gray-50/50 border-t border-gray-50">
            <Link href="#" className="text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-enterprise-green transition-colors flex items-center justify-center gap-2">
              Access Full CRM Hub <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Quick Actions & Status */}
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-enterprise-text p-8 rounded-[32px] text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 grid-subtle opacity-[0.1] pointer-events-none" />
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                 <AlertCircle className="w-5 h-5 text-enterprise-green" />
                 System Status
              </h3>
              <div className="space-y-4">
                 {[
                   { label: "Core Node", status: "Operational", color: "bg-enterprise-green" },
                   { label: "Mail Engine", status: "Active", color: "bg-enterprise-green" },
                   { label: "Auth Gateway", status: "Secure", color: "bg-blue-400" }
                 ].map(item => (
                   <div key={item.label} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                      <span className="text-xs font-medium text-white/60">{item.label}</span>
                      <div className="flex items-center gap-2">
                         <div className={`h-1.5 w-1.5 rounded-full ${item.color} animate-pulse`} />
                         <span className="text-[10px] font-bold uppercase tracking-widest">{item.status}</span>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h3>
              <div className="space-y-4">
                 <Link 
                   href="/admin/blogs/create"
                   className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-transparent hover:border-enterprise-green hover:bg-white transition-all group"
                 >
                    <div className="flex items-center gap-4">
                       <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center text-gray-900 shadow-sm">
                          <FileText className="w-5 h-5" />
                       </div>
                       <span className="font-bold text-gray-900 text-sm">Write Blog</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-enterprise-green" />
                 </Link>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
