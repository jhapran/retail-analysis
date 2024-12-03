import React from 'react';
import { Activity } from '../../types/analytics';

interface Props {
  activities: Activity[];
}

export const RecentActivity: React.FC<Props> = ({ activities }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-4">
            <img
              src={activity.userAvatar}
              alt={activity.userName}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm">
                <span className="font-medium">{activity.userName}</span>{' '}
                {activity.action}
              </p>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};