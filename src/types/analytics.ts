export interface SalesData {
  date: string;
  revenue: number;
  units: number;
}

export interface ProductTrend {
  id: string;
  name: string;
  trend: number;
  currentPrice: number;
  suggestedPrice: number;
  confidence: number;
  competitorPrices: number[];
}

export interface EfficiencyMetric {
  category: string;
  score: number;
  improvement: number;
  details: {
    label: string;
    value: number;
  }[];
}

export interface CustomerSegment {
  id: string;
  name: string;
  size: number;
  averageSpend: number;
  loyalty: number;
  preferences: string[];
}

export interface LaborMetrics {
  department: string;
  efficiency: number;
  cost: number;
  headcount: number;
  automationPotential: number;
  peakHours: string[];
}

export interface Activity {
  userName: string;
  userAvatar: string;
  action: string;
  time: string;
}

export interface GlobalMarketData {
  region: string;
  marketSize: number;
  growth: number;
  topProducts: string[];
  localPreferences: string[];
}

export interface CompetitorAnalysis {
  name: string;
  marketShare: number;
  pricePosition: 'premium' | 'mid-range' | 'budget';
  strengths: string[];
  weaknesses: string[];
}