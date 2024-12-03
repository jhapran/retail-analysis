import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: LucideIcon;
  color: 'blue' | 'purple' | 'green' | 'orange';
}

const colorClasses = {
  blue: {
    bg: 'bg-blue-500',
    text: 'text-blue-600',
    light: 'bg-blue-50',
    gradient: 'from-blue-500 to-blue-600'
  },
  purple: {
    bg: 'bg-purple-500',
    text: 'text-purple-600',
    light: 'bg-purple-50',
    gradient: 'from-purple-500 to-purple-600'
  },
  green: {
    bg: 'bg-emerald-500',
    text: 'text-emerald-600',
    light: 'bg-emerald-50',
    gradient: 'from-emerald-500 to-emerald-600'
  },
  orange: {
    bg: 'bg-orange-500',
    text: 'text-orange-600',
    light: 'bg-orange-50',
    gradient: 'from-orange-500 to-orange-600'
  }
};

export const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon: Icon, color }) => {
  const colors = colorClasses[color];
  
  return (
    <div className={`rounded-xl p-6 bg-gradient-to-br ${colors.gradient} text-white shadow-lg hover:shadow-xl transition-shadow`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 ${colors.light} rounded-xl`}>
          <Icon size={24} className={colors.text} />
        </div>
        {change !== undefined && (
          <span className={`text-sm font-medium px-2 py-1 rounded-lg ${
            change >= 0 ? 'bg-green-400/20' : 'bg-red-400/20'
          }`}>
            {change >= 0 ? '+' : ''}{change}%
          </span>
        )}
      </div>
      <h3 className="text-3xl font-bold mb-1">{value}</h3>
      <p className="text-white/80">{title}</p>
    </div>
  );
};