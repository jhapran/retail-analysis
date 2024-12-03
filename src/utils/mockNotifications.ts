import { Notification } from '../types/notifications';

export const generateMockNotifications = (): Notification[] => [
  {
    id: '1',
    title: 'New Sales Record',
    message: 'Your store has reached a new daily sales record of $15,000!',
    type: 'success',
    timestamp: '2 minutes ago',
    read: false
  },
  {
    id: '2',
    title: 'Inventory Alert',
    message: 'Product "Premium Headphones" is running low on stock.',
    type: 'warning',
    timestamp: '1 hour ago',
    read: false
  },
  {
    id: '3',
    title: 'System Update',
    message: 'New features have been added to your dashboard.',
    type: 'info',
    timestamp: '3 hours ago',
    read: true
  }
];