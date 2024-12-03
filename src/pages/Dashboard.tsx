import React from 'react';
import { Header } from '../components/Layout/Header';
import { SalesChart } from '../components/Dashboard/SalesChart';
import { TrendCard } from '../components/Dashboard/TrendCard';
import { EfficiencyMetric } from '../components/Dashboard/EfficiencyMetric';
import { generateSalesData, generateTrends, generateEfficiencyMetrics } from '../utils/mockData';

export const Dashboard: React.FC = () => {
  const salesData = generateSalesData();
  const trends = generateTrends();
  const metrics = generateEfficiencyMetrics();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <SalesChart data={salesData} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trends.map(trend => (
              <TrendCard key={trend.id} trend={trend} />
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map(metric => (
              <EfficiencyMetric key={metric.category} metric={metric} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};