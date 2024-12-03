import React from 'react';
import { Users, Shield, Key } from 'lucide-react';

interface UserRole {
  id: number;
  name: string;
  email: string;
  role: string;
  lastActive: string;
  status: 'active' | 'inactive';
}

const mockUsers: UserRole[] = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    role: 'Admin',
    lastActive: '2 minutes ago',
    status: 'active'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    role: 'Manager',
    lastActive: '1 hour ago',
    status: 'active'
  },
  {
    id: 3,
    name: 'Michael Brown',
    email: 'm.brown@example.com',
    role: 'Analyst',
    lastActive: '3 days ago',
    status: 'inactive'
  }
];

export const AdminView: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-50 rounded-xl">
              <Users className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold">Total Users</h3>
              <p className="text-2xl font-bold">1,234</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-50 rounded-xl">
              <Shield className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold">Security Level</h3>
              <p className="text-2xl font-bold">High</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-50 rounded-xl">
              <Key className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold">Active Sessions</h3>
              <p className="text-2xl font-bold">48</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold">User Roles & Permissions</h2>
        </div>
        <div className="p-6">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="pb-4">Name</th>
                <th className="pb-4">Email</th>
                <th className="pb-4">Role</th>
                <th className="pb-4">Last Active</th>
                <th className="pb-4">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {mockUsers.map((user) => (
                <tr key={user.id} className="border-t border-gray-100">
                  <td className="py-4">{user.name}</td>
                  <td className="py-4">{user.email}</td>
                  <td className="py-4">{user.role}</td>
                  <td className="py-4">{user.lastActive}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      user.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};