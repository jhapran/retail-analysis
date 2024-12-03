import { SystemSetting, SecurityLog } from '../types/settings';

export const generateMockSettings = (): SystemSetting[] => [
  {
    id: '1',
    category: 'general',
    name: 'Company Name',
    description: 'Display name for your organization',
    value: 'RetailAI Analytics',
    type: 'text'
  },
  {
    id: '2',
    category: 'general',
    name: 'Time Zone',
    description: 'Default time zone for reports and analytics',
    value: 'UTC',
    type: 'select',
    options: ['UTC', 'EST', 'PST', 'GMT']
  },
  {
    id: '3',
    category: 'security',
    name: 'Two-Factor Authentication',
    description: 'Require 2FA for all admin accounts',
    value: true,
    type: 'boolean'
  },
  {
    id: '4',
    category: 'security',
    name: 'Session Timeout',
    description: 'Automatically log out users after inactivity (minutes)',
    value: 30,
    type: 'number'
  },
  {
    id: '5',
    category: 'notifications',
    name: 'Email Notifications',
    description: 'Send email alerts for important system events',
    value: true,
    type: 'boolean'
  },
  {
    id: '6',
    category: 'customization',
    name: 'Theme Color',
    description: 'Primary color for the interface',
    value: 'blue',
    type: 'select',
    options: ['blue', 'green', 'purple', 'red']
  }
];

export const generateSecurityLogs = (): SecurityLog[] => [
  {
    id: '1',
    action: 'Login Attempt',
    user: 'john.smith@example.com',
    timestamp: '2024-03-15 14:30:22',
    ipAddress: '192.168.1.100',
    status: 'success'
  },
  {
    id: '2',
    action: 'Password Change',
    user: 'sarah.j@example.com',
    timestamp: '2024-03-15 13:45:10',
    ipAddress: '192.168.1.101',
    status: 'success'
  },
  {
    id: '3',
    action: 'Login Attempt',
    user: 'unknown@example.com',
    timestamp: '2024-03-15 12:15:45',
    ipAddress: '192.168.1.102',
    status: 'failed'
  }
];