import React from 'react';
import { PredictiveTrends } from '../Analytics/PredictiveTrends';
import { generateTrends } from '../../utils/mockData';
import { ShoppingBag } from 'lucide-react';

export const ProductsView: React.FC = () => {
  const trends = generateTrends();

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 rounded-xl p-8 mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-white/10 rounded-xl">
            <ShoppingBag className="h-8 w-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Product Management</h2>
            <p className="text-orange-100">Monitor and optimize your product portfolio performance.</p>
          </div>
        </div>
      </div>

      <PredictiveTrends trends={trends} />
    </div>
  );
};