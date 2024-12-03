import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SalesData } from '../../types/analytics';

interface Props {
  data: SalesData[];
}

export const SalesChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold">Sales Overview</h2>
          <p className="text-gray-500 text-sm">Monthly revenue statistics</p>
        </div>
        <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm">
          <option>Last 30 days</option>
          <option>Last 90 days</option>
          <option>Last year</option>
        </select>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="date" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#2563EB" 
              strokeWidth={2}
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="units" 
              stroke="#10B981" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};