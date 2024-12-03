import React from 'react';
import { Search, Bell } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-xl hover:bg-gray-100">
          <Bell size={20} className="text-gray-600" />
        </button>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="font-medium">Alex Johnson</p>
            <p className="text-sm text-gray-500">Admin</p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};