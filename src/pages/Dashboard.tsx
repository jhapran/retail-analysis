import React from 'react';
import { useLocation } from 'react-router-dom';
import { Sidebar } from '../components/Layout/Sidebar';
import { Header } from '../components/Dashboard/Header';
import { DashboardView } from '../components/Views/DashboardView';
import { AnalyticsView } from '../components/Views/AnalyticsView';
import { DataManagementView } from '../components/Views/DataManagementView';
import { CustomersView } from '../components/Views/CustomersView';
import { ProductsView } from '../components/Views/ProductsView';
import { MessagesView } from '../components/Views/MessagesView';
import { SettingsView } from '../components/Views/SettingsView';
import { HelpView } from '../components/Views/HelpView';

export const Dashboard: React.FC = () => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  const getActiveView = () => {
    switch (location.pathname) {
      case '/analytics':
        return <AnalyticsView />;
      case '/data-management':
        return <DataManagementView />;
      case '/customers':
        return <CustomersView />;
      case '/products':
        return <ProductsView />;
      case '/messages':
        return <MessagesView />;
      case '/settings':
        return <SettingsView />;
      case '/help':
        return <HelpView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar isExpanded={isExpanded} onToggle={setIsExpanded} />
      <div className={`flex-1 transition-all duration-300 ${isExpanded ? 'ml-64' : 'ml-20'}`}>
        <div className="min-h-screen">
          <div className="p-8 max-w-[1600px] mx-auto">
            <Header />
            {getActiveView()}
          </div>
        </div>
      </div>
    </div>
  );
};