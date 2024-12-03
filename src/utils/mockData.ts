import { 
  SalesData, 
  ProductTrend, 
  EfficiencyMetric,
  CustomerSegment,
  LaborMetrics,
  GlobalMarketData,
  CompetitorAnalysis
} from '../types/analytics';

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
    suggestedPrice: 219.99,
    confidence: 0.85,
    competitorPrices: [195.99, 198.99, 201.99, 199.99, 204.99]
  },
  {
    id: '2',
    name: 'Smart Watch',
    trend: 0.25,
    currentPrice: 299.99,
    suggestedPrice: 329.99,
    confidence: 0.92,
    competitorPrices: [289.99, 299.99, 309.99, 319.99, 329.99]
  },
  {
    id: '3',
    name: 'Wireless Earbuds',
    trend: -0.05,
    currentPrice: 149.99,
    suggestedPrice: 139.99,
    confidence: 0.78,
    competitorPrices: [159.99, 154.99, 149.99, 144.99, 139.99]
  }
];

export const generateLaborMetrics = (): LaborMetrics[] => [
  {
    department: 'Sales Floor',
    efficiency: 87,
    cost: 45000,
    headcount: 12,
    automationPotential: 35,
    peakHours: ['11:00 AM', '2:00 PM', '5:00 PM']
  },
  {
    department: 'Warehouse',
    efficiency: 92,
    cost: 38000,
    headcount: 8,
    automationPotential: 65,
    peakHours: ['9:00 AM', '1:00 PM', '4:00 PM']
  },
  {
    department: 'Customer Service',
    efficiency: 84,
    cost: 32000,
    headcount: 6,
    automationPotential: 45,
    peakHours: ['10:00 AM', '3:00 PM', '7:00 PM']
  }
];

export const generateCustomerSegments = (): CustomerSegment[] => [
  {
    id: '1',
    name: 'Premium Buyers',
    size: 2500,
    averageSpend: 750,
    loyalty: 92,
    preferences: ['High-end Electronics', 'Accessories', 'Extended Warranty']
  },
  {
    id: '2',
    name: 'Value Seekers',
    size: 5800,
    averageSpend: 250,
    loyalty: 75,
    preferences: ['Discounted Items', 'Bundle Deals', 'Seasonal Sales']
  },
  {
    id: '3',
    name: 'Tech Enthusiasts',
    size: 3200,
    averageSpend: 500,
    loyalty: 85,
    preferences: ['Latest Gadgets', 'Gaming', 'Smart Home']
  }
];

export const generateEfficiencyMetrics = (): EfficiencyMetric[] => [
  {
    category: 'Inventory Turnover',
    score: 85,
    improvement: 12,
    details: [
      { label: 'Days in Stock', value: 15 },
      { label: 'Reorder Rate', value: 92 }
    ]
  },
  {
    category: 'Labor Efficiency',
    score: 92,
    improvement: 8,
    details: [
      { label: 'Productivity', value: 94 },
      { label: 'Cost Savings', value: 15 }
    ]
  },
  {
    category: 'Customer Satisfaction',
    score: 88,
    improvement: 5,
    details: [
      { label: 'Response Time', value: 95 },
      { label: 'Resolution Rate', value: 89 }
    ]
  }
];