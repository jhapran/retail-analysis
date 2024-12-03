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
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  Database
} from 'lucide-react';

interface Props {
  isExpanded: boolean;
  onToggle: (expanded: boolean) => void;
}

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Database, label: 'Data Management', path: '/data-management' },
  { icon: BarChart2, label: 'Analytics', path: '/analytics' },
  { icon: Users, label: 'Customers', path: '/customers' },
  { icon: ShoppingBag, label: 'Products', path: '/products' },
  { icon: Mail, label: 'Messages', path: '/messages' },
  { icon: Settings, label: 'Settings', path: '/settings' },
  { icon: HelpCircle, label: 'Help', path: '/help' },
];

export const Sidebar: React.FC<Props> = ({ isExpanded, onToggle }) => {
  const location = useLocation();

  return (
    <div 
      className={`${
        isExpanded ? 'w-64' : 'w-20'
      } bg-blue-600 fixed left-0 top-0 h-screen flex flex-col items-center py-6 transition-all duration-300 z-50`}
    >
      <div className="mb-8 flex items-center justify-center">
        <span className="text-white text-xl font-bold">
          {isExpanded ? 'ALIX ADMIN' : 'ALIX'}
        </span>
      </div>
      
      <nav className="flex-1 w-full px-3 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`p-3 rounded-xl transition-colors flex items-center ${
                isActive 
                  ? 'bg-white text-blue-600' 
                  : 'text-white/70 hover:bg-white/10'
              } ${isExpanded ? 'justify-start' : 'justify-center'}`}
              title={!isExpanded ? item.label : undefined}
            >
              <Icon size={24} />
              {isExpanded && (
                <span className="ml-3 font-medium">{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>

      <button
        onClick={() => onToggle(!isExpanded)}
        className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
      >
        {isExpanded ? (
          <ChevronLeft size={20} className="text-blue-600" />
        ) : (
          <ChevronRight size={20} className="text-blue-600" />
        )}
      </button>

      <div className="mt-auto px-3">
        <div className={`flex items-center ${isExpanded ? 'gap-3' : 'justify-center'}`}>
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          {isExpanded && (
            <div className="text-white">
              <p className="font-medium">Alex Johnson</p>
              <p className="text-sm text-white/70">Admin</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};