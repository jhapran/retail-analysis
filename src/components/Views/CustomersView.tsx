import React from 'react';
import { CustomerInsights } from '../Analytics/CustomerInsights';
import { generateCustomerSegments } from '../../utils/mockData';

export const CustomersView: React.FC = () => {
  const customerSegments = generateCustomerSegments();

  return (
    <div className="space-y-8">
      <CustomerInsights segments={customerSegments} />
    </div>
  );
};