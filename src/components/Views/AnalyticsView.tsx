import React from 'react';
import { PredictiveTrends } from '../Analytics/PredictiveTrends';
import { LaborEfficiency } from '../Analytics/LaborEfficiency';
import { CustomerInsights } from '../Analytics/CustomerInsights';
import { generateTrends, generateLaborMetrics, generateCustomerSegments } from '../../utils/mockData';
import { TrendingUp } from 'lucide-react';

export const AnalyticsView: React.FC = () => {
  const trends = generateTrends();
  const laborMetrics = generateLaborMetrics();
  const customerSegments = generateCustomerSegments();

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl p-8 mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-white/10 rounded-xl">
            <TrendingUp className="h-8 w-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Analytics Overview</h2>
            <p className="text-purple-100">Track your business performance and identify growth opportunities.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-8">
        <PredictiveTrends trends={trends} />
        <LaborEfficiency metrics={laborMetrics} />
        <CustomerInsights segments={customerSegments} />
      </div>
    </div>
  );
};