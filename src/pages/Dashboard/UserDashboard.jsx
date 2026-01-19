import React from 'react';

const UserDashboard = () => {
  const stats = [
    { label: "Active Orders", value: "3", color: "text-onels-orange" },
    { label: "Delivered", value: "24", color: "text-green-600" },
    { label: "Total Spent", value: "₦145k", color: "text-blue-600" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-[1200px] mx-auto">
        <header className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-black">Welcome, Customer!</h1>
            <p className="text-gray-500">Manage your shipments and profile.</p>
          </div>
          
          {/* NEW: Create New Profile Button */}
          <button className="flex items-center gap-2 bg-onels-orange text-white px-6 py-3 rounded-xl font-bold hover:bg-onels-dark transition-all shadow-lg shadow-orange-500/20">
            <i className="fas fa-user-plus"></i>
            Create New Profile
          </button>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 transition-transform hover:scale-105">
              <p className="text-gray-500 font-medium mb-1">{s.label}</p>
              <p className={`text-4xl font-black ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Recent Activity Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-6 border-b flex justify-between items-center">
            <h3 className="text-xl font-bold">Recent Shipments</h3>
            <span className="text-xs font-black uppercase text-gray-400">Live Updates</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-gray-500 uppercase text-xs font-bold">
                <tr>
                  <th className="p-6">Tracking ID</th>
                  <th className="p-6">Destination</th>
                  <th className="p-6">Status</th>
                  <th className="p-6">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[1, 2, 3].map((_, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-mono font-bold">ONL48291{i}</td>
                    <td className="p-6">Lagos, Nigeria</td>
                    <td className="p-6">
                      <span className="bg-orange-100 text-onels-orange px-3 py-1 rounded-full text-xs font-bold">
                        In Transit
                      </span>
                    </td>
                    <td className="p-6">
                      <button className="text-onels-orange font-bold hover:underline">Track Now</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;