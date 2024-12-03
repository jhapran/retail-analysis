import React from 'react';
import { PredictiveTrends } from '../Analytics/PredictiveTrends';
import { generateTrends } from '../../utils/mockData';

export const ProductsView: React.FC = () => {
  const trends = generateTrends();

  return (
    <div className="space-y-8">
      <PredictiveTrends trends={trends} />
    </div>
  );
};