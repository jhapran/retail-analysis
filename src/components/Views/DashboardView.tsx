import React from 'react';
import { StatCard } from '../Dashboard/StatCard';
import { SalesChart } from '../Dashboard/SalesChart';
import { RecentActivity } from '../Dashboard/RecentActivity';
import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';
import { generateSalesData } from '../../utils/mockData';

export const DashboardView: React.FC = () => {
  const salesData = generateSalesData();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Revenue"
          value="$84,254"
          change={8.2}
          icon={DollarSign}
        />
        <StatCard
          title="Active Customers"
          value="2,420"
          change={12.5}
          icon={Users}
        />
        <StatCard
          title="Total Orders"
          value="1,210"
          change={-3.2}
          icon={ShoppingCart}
        />
        <StatCard
          title="Growth Rate"
          value="15.2%"
          change={2.1}
          icon={TrendingUp}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesChart data={salesData} />
        </div>
        <RecentActivity activities={[
          {
            userName: "Sarah Wilson",
            userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            action: "completed a sale worth $1,290",
            time: "2 minutes ago"
          },
          {
            userName: "Michael Chen",
            userAvatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            action: "added 5 new products",
            time: "15 minutes ago"
          },
          {
            userName: "Emma Davis",
            userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            action: "generated monthly report",
            time: "1 hour ago"
          }
        ]} />
      </div>
    </>
  );
};