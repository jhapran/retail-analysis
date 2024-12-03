import React from 'react';
import { PredictiveTrends } from '../Analytics/PredictiveTrends';
import { LaborEfficiency } from '../Analytics/LaborEfficiency';
import { CustomerInsights } from '../Analytics/CustomerInsights';
import { generateTrends, generateLaborMetrics, generateCustomerSegments } from '../../utils/mockData';

export const AnalyticsView: React.FC = () => {
  const trends = generateTrends();
  const laborMetrics = generateLaborMetrics();
  const customerSegments = generateCustomerSegments();

  return (
    <div className="space-y-8">
      <PredictiveTrends trends={trends} />
      <LaborEfficiency metrics={laborMetrics} />
      <CustomerInsights segments={customerSegments} />
    </div>
  );
};