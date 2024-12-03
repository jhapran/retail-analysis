import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: LucideIcon;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon: Icon }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-blue-50 rounded-xl">
          <Icon size={24} className="text-blue-600" />
        </div>
        {change !== undefined && (
          <span className={`text-sm font-medium ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {change >= 0 ? '+' : ''}{change}%
          </span>
        )}
      </div>
      <h3 className="text-3xl font-bold mb-1">{value}</h3>
      <p className="text-gray-500">{title}</p>
    </div>
  );
};