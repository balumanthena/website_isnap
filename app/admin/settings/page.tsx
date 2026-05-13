export default function AdminSettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Settings</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your platform preferences and integrations.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">General Information</h2>
          <p className="text-sm text-gray-500 mt-1">Basic configuration for the ISNAP platform.</p>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Site Name</label>
            <input 
              type="text" 
              defaultValue="ISNAP Enterprise"
              className="w-full max-w-md px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Support Email</label>
            <input 
              type="email" 
              defaultValue="support@isnap.in"
              className="w-full max-w-md px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition-all"
            />
          </div>
          <div className="pt-4">
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Firebase Configuration</h2>
          <p className="text-sm text-gray-500 mt-1">Your current connection to Firestore and Storage.</p>
        </div>
        <div className="p-6">
          <div className="bg-green-50 text-green-700 border border-green-200 rounded-lg p-4 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
            <p className="text-sm font-medium">System is operational and securely connected to Firebase.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
