import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart2, TrendingUp, Brain, ShoppingBag } from 'lucide-react';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <BarChart2 className="h-16 w-16" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Retail Business with AI
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to optimize pricing, predict trends, and boost your bottom line.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/dashboard')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};