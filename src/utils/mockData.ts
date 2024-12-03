import { SalesData, ProductTrend, EfficiencyMetric } from '../types/analytics';

export const generateSalesData = (): SalesData[] => {
  const last30Days = [...Array(30)].map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return {
      date: date.toISOString().split('T')[0],
      revenue: 10000 + Math.random() * 5000,
      units: 100 + Math.random() * 50
    };
  }).reverse();
  
  return last30Days;
};

export const generateTrends = (): ProductTrend[] => [
  {
    id: '1',
    name: 'Premium Headphones',
    trend: 0.15,
    currentPrice: 199.99,
    suggestedPrice: 219.99
  },
  {
    id: '2',
    name: 'Smart Watch',
    trend: 0.25,
    currentPrice: 299.99,
    suggestedPrice: 329.99
  },
  {
    id: '3',
    name: 'Wireless Earbuds',
    trend: -0.05,
    currentPrice: 149.99,
    suggestedPrice: 139.99
  }
];

export const generateEfficiencyMetrics = (): EfficiencyMetric[] => [
  {
    category: 'Inventory Turnover',
    score: 85,
    improvement: 12
  },
  {
    category: 'Labor Efficiency',
    score: 92,
    improvement: 8
  },
  {
    category: 'Customer Satisfaction',
    score: 88,
    improvement: 5
  }
];