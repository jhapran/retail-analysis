import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart2, LogOut } from 'lucide-react';

export const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <BarChart2 className="h-8 w-8 text-blue-600" />
            <h1 className="ml-3 text-2xl font-bold text-gray-900">RetailAI Analytics</h1>
          </div>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <LogOut size={20} />
            <span>Exit Dashboard</span>
          </button>
        </div>
      </div>
    </header>
  );
};