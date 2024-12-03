import React from 'react';
import { BarChart2 } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center">
          <BarChart2 className="h-8 w-8 text-blue-600" />
          <h1 className="ml-3 text-2xl font-bold text-gray-900">RetailAI Analytics</h1>
        </div>
      </div>
    </header>
  );
};