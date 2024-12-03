export interface SystemSetting {
  id: string;
  category: 'general' | 'security' | 'notifications' | 'customization';
  name: string;
  description: string;
  value: string | boolean | number;
  type: 'text' | 'boolean' | 'select' | 'number';
  options?: string[];
}

export interface SecurityLog {
  id: string;
  action: string;
  user: string;
  timestamp: string;
  ipAddress: string;
  status: 'success' | 'failed';
}