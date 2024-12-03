import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Transform Your Retail Business?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of retailers who are already using RetailAI Analytics to drive growth and efficiency.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
          Start Free Trial
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};