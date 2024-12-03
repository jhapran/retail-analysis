import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, AlertTriangle } from 'lucide-react';
import { ProductTrend } from '../../types/analytics';

interface Props {
  trends: ProductTrend[];
}

export const PredictiveTrends: React.FC<Props> = ({ trends }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <TrendingUp className="text-blue-600" />
          Market Trend Predictions
        </h2>
        <div className="flex items-center gap-2 text-amber-600 text-sm">
          <AlertTriangle size={16} />
          AI Confidence: 85%
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {trends.map(trend => (
          <div key={trend.id} className="border rounded-lg p-4">
            <div className="flex justify-between mb-4">
              <h3 className="font-medium">{trend.name}</h3>
              <span className={trend.trend > 0 ? 'text-green-600' : 'text-red-600'}>
                {(trend.trend * 100).toFixed(1)}%
              </span>
            </div>
            <div className="h-[150px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trend.competitorPrices.map((price, index) => ({
                  day: `Day ${index + 1}`,
                  price
                }))}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="price" stroke="#2563eb" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Current Price</span>
                <p className="font-medium">${trend.currentPrice}</p>
              </div>
              <div>
                <span className="text-gray-600">Suggested Price</span>
                <p className="font-medium">${trend.suggestedPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};