import React from 'react';
import { Brain, TrendingUp, ShoppingBag, Users } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Advanced machine learning algorithms analyze your data to provide actionable insights and predictions.'
  },
  {
    icon: TrendingUp,
    title: 'Dynamic Pricing',
    description: 'Optimize your pricing strategy in real-time based on market demand and competitor analysis.'
  },
  {
    icon: ShoppingBag,
    title: 'Inventory Management',
    description: 'Smart inventory forecasting to ensure optimal stock levels and reduce carrying costs.'
  },
  {
    icon: Users,
    title: 'Customer Behavior',
    description: 'Deep understanding of customer patterns and preferences to enhance shopping experiences.'
  }
];

export const Features: React.FC = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Retail
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to make data-driven decisions and stay ahead of the competition.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};