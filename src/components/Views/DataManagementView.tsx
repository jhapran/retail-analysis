import React from 'react';
import { DataUpload } from '../DataManagement/DataUpload';

export const DataManagementView: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <DataUpload />
    </div>
  );
};