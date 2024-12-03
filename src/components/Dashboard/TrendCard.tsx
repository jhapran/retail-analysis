import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { ProductTrend } from '../../types/analytics';

interface Props {
  trend: ProductTrend;
}

export const TrendCard: React.FC<Props> = ({ trend }) => {
  const isPositive = trend.trend > 0;
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold">{trend.name}</h3>
        <span className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
          {(trend.trend * 100).toFixed(1)}%
        </span>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Current Price</span>
          <span className="font-medium">${trend.currentPrice}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Suggested Price</span>
          <span className="font-medium">${trend.suggestedPrice}</span>
        </div>
      </div>
    </div>
  );
};