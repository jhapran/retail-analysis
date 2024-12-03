import React from 'react';
import { Users, Zap, DollarSign } from 'lucide-react';
import { LaborMetrics } from '../../types/analytics';

interface Props {
  metrics: LaborMetrics[];
}

export const LaborEfficiency: React.FC<Props> = ({ metrics }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <Users className="text-blue-600" />
        Workforce Analytics
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {metrics.map((metric) => (
          <div key={metric.department} className="border rounded-lg p-4">
            <h3 className="font-medium mb-4">{metric.department}</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Efficiency Score</span>
                <div className="flex items-center gap-2">
                  <Zap className="text-yellow-500" size={16} />
                  {metric.efficiency}%
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Monthly Cost</span>
                <div className="flex items-center gap-2">
                  <DollarSign className="text-green-500" size={16} />
                  ${metric.cost.toLocaleString()}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Automation Potential</span>
                <div className="flex items-center gap-2">
                  <span className={metric.automationPotential > 50 ? 'text-blue-600' : 'text-gray-600'}>
                    {metric.automationPotential}%
                  </span>
                </div>
              </div>
              
              <div className="mt-4">
                <span className="text-sm text-gray-600">Peak Hours</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {metric.peakHours.map((hour) => (
                    <span key={hour} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {hour}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};