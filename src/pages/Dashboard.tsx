import React from 'react';
import { useLocation } from 'react-router-dom';
import { Sidebar } from '../components/Layout/Sidebar';
import { Header } from '../components/Dashboard/Header';
import { DashboardView } from '../components/Views/DashboardView';
import { AnalyticsView } from '../components/Views/AnalyticsView';
import { AdminView } from '../components/Views/AdminView';
import { CustomersView } from '../components/Views/CustomersView';
import { ProductsView } from '../components/Views/ProductsView';

export const Dashboard: React.FC = () => {
  const location = useLocation();
  
  const getActiveView = () => {
    switch (location.pathname) {
      case '/analytics':
        return <AnalyticsView />;
      case '/admin':
        return <AdminView />;
      case '/customers':
        return <CustomersView />;
      case '/products':
        return <ProductsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-20 p-8">
        <div className="max-w-[1600px] mx-auto">
          <Header />
          {getActiveView()}
        </div>
      </div>
    </div>
  );
};