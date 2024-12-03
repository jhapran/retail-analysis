import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { EfficiencyMetric as EfficiencyMetricType } from '../../types/analytics';

interface Props {
  metric: EfficiencyMetricType;
}

export const EfficiencyMetric: React.FC<Props> = ({ metric }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">{metric.category}</h3>
      <div className="flex items-end gap-2">
        <span className="text-3xl font-bold">{metric.score}%</span>
        <span className="text-green-600 flex items-center text-sm mb-1">
          <ArrowUpRight size={16} />
          +{metric.improvement}%
        </span>
      </div>
    </div>
  );
};