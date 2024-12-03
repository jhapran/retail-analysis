import React from 'react';
import { CustomerInsights } from '../Analytics/CustomerInsights';
import { generateCustomerSegments } from '../../utils/mockData';
import { Users } from 'lucide-react';

export const CustomersView: React.FC = () => {
  const customerSegments = generateCustomerSegments();

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-xl p-8 mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-white/10 rounded-xl">
            <Users className="h-8 w-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Customer Management</h2>
            <p className="text-emerald-100">Understand and engage with your customer base effectively.</p>
          </div>
        </div>
      </div>

      <CustomerInsights segments={customerSegments} />
    </div>
  );
};