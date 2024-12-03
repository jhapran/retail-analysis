import React from 'react';
import { Users, Heart, ShoppingBag } from 'lucide-react';
import { CustomerSegment } from '../../types/analytics';

interface Props {
  segments: CustomerSegment[];
}

export const CustomerInsights: React.FC<Props> = ({ segments }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <Users className="text-blue-600" />
        Customer Segments
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {segments.map((segment) => (
          <div key={segment.id} className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">{segment.name}</h3>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                {segment.size.toLocaleString()} customers
              </span>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Average Spend</span>
                <span className="font-medium">${segment.averageSpend}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Loyalty Score</span>
                <div className="flex items-center gap-1">
                  <Heart className="text-red-500" size={16} />
                  {segment.loyalty}%
                </div>
              </div>
              
              <div>
                <span className="text-sm text-gray-600">Top Preferences</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {segment.preferences.map((pref) => (
                    <span key={pref} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      {pref}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};