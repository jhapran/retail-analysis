import React from 'react';
import { Header } from '../components/Layout/Header';
import { SalesChart } from '../components/Dashboard/SalesChart';
import { TrendCard } from '../components/Dashboard/TrendCard';
import { EfficiencyMetric } from '../components/Dashboard/EfficiencyMetric';
import { PredictiveTrends } from '../components/Analytics/PredictiveTrends';
import { LaborEfficiency } from '../components/Analytics/LaborEfficiency';
import { CustomerInsights } from '../components/Analytics/CustomerInsights';
import { 
  generateSalesData, 
  generateTrends, 
  generateEfficiencyMetrics,
  generateLaborMetrics,
  generateCustomerSegments
} from '../utils/mockData';

export const Dashboard: React.FC = () => {
  const salesData = generateSalesData();
  const trends = generateTrends();
  const metrics = generateEfficiencyMetrics();
  const laborMetrics = generateLaborMetrics();
  const customerSegments = generateCustomerSegments();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <SalesChart data={salesData} />
          
          <PredictiveTrends trends={trends} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trends.map(trend => (
              <TrendCard key={trend.id} trend={trend} />
            ))}
          </div>
          
          <LaborEfficiency metrics={laborMetrics} />
          
          <CustomerInsights segments={customerSegments} />
          
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