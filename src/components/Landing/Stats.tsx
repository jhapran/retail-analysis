import React from 'react';

const stats = [
  { value: '85%', label: 'Revenue Increase' },
  { value: '2.5x', label: 'ROI Improvement' },
  { value: '60%', label: 'Time Saved' },
  { value: '24/7', label: 'Real-time Analytics' }
];

export const Stats: React.FC = () => {
  return (
    <div className="bg-blue-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};