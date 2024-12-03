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
}

export interface EfficiencyMetric {
  category: string;
  score: number;
  improvement: number;
}