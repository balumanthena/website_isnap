import Link from "next/link";
import { FileText, Users, ArrowRight, BarChart3, Activity } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">Welcome to the ISNAP Enterprise Management Portal.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Metric Cards */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
          <div className="flex items-center gap-3 text-gray-500 mb-4">
            <FileText className="w-5 h-5 text-enterprise-green" />
            <span className="text-sm font-medium uppercase tracking-wider">Total Blogs</span>
          </div>
          <div className="text-4xl font-bold text-gray-900">12</div>
          <div className="mt-4 flex items-center text-sm text-green-600 font-medium">
            <Activity className="w-4 h-4 mr-1" />
            +3 this week
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
          <div className="flex items-center gap-3 text-gray-500 mb-4">
            <Users className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-medium uppercase tracking-wider">Subscribers</span>
          </div>
          <div className="text-4xl font-bold text-gray-900">1,248</div>
          <div className="mt-4 flex items-center text-sm text-green-600 font-medium">
            <Activity className="w-4 h-4 mr-1" />
            +12% growth
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
          <div className="flex items-center gap-3 text-gray-500 mb-4">
            <BarChart3 className="w-5 h-5 text-purple-500" />
            <span className="text-sm font-medium uppercase tracking-wider">Total Views</span>
          </div>
          <div className="text-4xl font-bold text-gray-900">48.2k</div>
          <div className="mt-4 flex items-center text-sm text-green-600 font-medium">
            <Activity className="w-4 h-4 mr-1" />
            +5.4k this month
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Quick Actions */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="space-y-4">
            <Link 
              href="/admin/blogs/create"
              className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-enterprise-green hover:bg-enterprise-green/5 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-600 group-hover:text-enterprise-green group-hover:bg-white transition-colors">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Write New Blog</h3>
                  <p className="text-sm text-gray-500">Create and publish an article</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-enterprise-green transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
