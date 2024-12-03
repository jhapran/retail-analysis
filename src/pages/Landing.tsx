import React from 'react';
import { Hero } from '../components/Landing/Hero';
import { Features } from '../components/Landing/Features';
import { Stats } from '../components/Landing/Stats';
import { CTA } from '../components/Landing/CTA';
import { Footer } from '../components/Layout/Footer';

export const Landing: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
};