import React, { useState, useRef } from 'react';
import { Upload, Database, FileText, X, CheckCircle, AlertCircle } from 'lucide-react';

interface UploadStatus {
  status: 'idle' | 'uploading' | 'success' | 'error';
  message?: string;
}

export const DataUpload: React.FC = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>({ status: 'idle' });
  const [showDbConnect, setShowDbConnect] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      handleFiles(files);
    }
  };

  const handleFiles = (files: FileList) => {
    setUploadStatus({ status: 'uploading' });
    
    // Simulate file upload
    setTimeout(() => {
      const validTypes = ['text/csv', 'application/json', 'application/vnd.ms-excel'];
      const file = files[0];
      
      if (!validTypes.includes(file.type)) {
        setUploadStatus({
          status: 'error',
          message: 'Invalid file type. Please upload CSV, JSON, or Excel files.'
        });
        return;
      }

      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        setUploadStatus({
          status: 'error',
          message: 'File size exceeds 10MB limit.'
        });
        return;
      }

      setUploadStatus({
        status: 'success',
        message: `Successfully uploaded ${file.name}`
      });
    }, 1500);
  };

  const handleDbConnect = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Simulate database connection
    setUploadStatus({ status: 'uploading' });
    setTimeout(() => {
      setUploadStatus({
        status: 'success',
        message: `Successfully connected to database at ${formData.get('host')}`
      });
      setShowDbConnect(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* File Upload Section */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Upload Data</h3>
          <div
            className={`border-2 border-dashed rounded-xl p-8 text-center ${
              dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={handleFileInput}
              accept=".csv,.json,.xlsx,.xls"
            />
            
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-sm text-gray-600 mb-2">
              Drag and drop your files here, or{' '}
              <button
                onClick={() => fileInputRef.current?.click()}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                browse
              </button>
            </p>
            <p className="text-xs text-gray-500">
              Supports CSV, JSON, and Excel files (max 10MB)
            </p>
          </div>
        </div>

        {/* Database Connection Section */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Connect Database</h3>
          {!showDbConnect ? (
            <div className="text-center">
              <Database className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-sm text-gray-600 mb-4">
                Connect to your existing database to import data
              </p>
              <button
                onClick={() => setShowDbConnect(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Connect Database
              </button>
            </div>
          ) : (
            <form onSubmit={handleDbConnect} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Database Type
                </label>
                <select
                  name="type"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                >
                  <option value="mysql">MySQL</option>
                  <option value="postgresql">PostgreSQL</option>
                  <option value="mongodb">MongoDB</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Host
                </label>
                <input
                  type="text"
                  name="host"
                  placeholder="e.g., localhost:3306"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Database Name
                </label>
                <input
                  type="text"
                  name="database"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowDbConnect(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Connect
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Status Messages */}
      {uploadStatus.status !== 'idle' && (
        <div
          className={`fixed bottom-4 right-4 max-w-md p-4 rounded-lg shadow-lg ${
            uploadStatus.status === 'success'
              ? 'bg-green-50 text-green-800'
              : uploadStatus.status === 'error'
              ? 'bg-red-50 text-red-800'
              : 'bg-blue-50 text-blue-800'
          }`}
        >
          <div className="flex items-center gap-3">
            {uploadStatus.status === 'uploading' && (
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-600 border-t-transparent" />
            )}
            {uploadStatus.status === 'success' && <CheckCircle size={20} />}
            {uploadStatus.status === 'error' && <AlertCircle size={20} />}
            <p className="flex-1">{uploadStatus.message}</p>
            <button
              onClick={() => setUploadStatus({ status: 'idle' })}
              className="p-1 hover:bg-black/5 rounded"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};