import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { SalesData } from '../../types/analytics';

interface Props {
  data: SalesData[];
}

export const SalesChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Sales Performance</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#2563eb" name="Revenue ($)" />
            <Line yAxisId="right" type="monotone" dataKey="units" stroke="#16a34a" name="Units Sold" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};