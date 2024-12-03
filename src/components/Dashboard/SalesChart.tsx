import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SalesData } from '../../types/analytics';

interface Props {
  data: SalesData[];
}

export const SalesChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Sales Overview
          </h2>
          <p className="text-gray-500 text-sm">Monthly revenue statistics</p>
        </div>
        <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm bg-white shadow-sm">
          <option>Last 30 days</option>
          <option>Last 90 days</option>
          <option>Last year</option>
        </select>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorUnits" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="date" 
              stroke="#9CA3AF"
              tick={{ fill: '#6B7280' }}
            />
            <YAxis 
              stroke="#9CA3AF"
              tick={{ fill: '#6B7280' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                borderRadius: '8px',
                border: 'none',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#3B82F6"
              strokeWidth={3}
              dot={false}
              fill="url(#colorRevenue)"
            />
            <Line 
              type="monotone" 
              dataKey="units" 
              stroke="#10B981"
              strokeWidth={3}
              dot={false}
              fill="url(#colorUnits)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};