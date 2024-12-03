import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BarChart2, 
  Settings, 
  Users, 
  ShoppingBag,
  Mail,
  Bell,
  HelpCircle
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: BarChart2, label: 'Analytics', path: '/analytics' },
  { icon: Users, label: 'Customers', path: '/customers' },
  { icon: ShoppingBag, label: 'Products', path: '/products' },
  { icon: Mail, label: 'Messages', path: '/messages' },
  { icon: Settings, label: 'Settings', path: '/settings' },
  { icon: HelpCircle, label: 'Help', path: '/help' },
];

export const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="w-20 bg-blue-600 h-screen fixed left-0 top-0 flex flex-col items-center py-6">
      <div className="mb-8">
        <span className="text-white text-xl font-bold">ALIX</span>
      </div>
      
      <nav className="flex-1 space-y-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`p-3 rounded-xl transition-colors flex items-center justify-center ${
                isActive 
                  ? 'bg-white text-blue-600' 
                  : 'text-white/70 hover:bg-white/10'
              }`}
              title={item.label}
            >
              <Icon size={24} />
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
      </div>
    </div>
  );
};