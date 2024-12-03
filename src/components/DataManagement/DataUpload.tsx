import React, { useState, useRef } from 'react';
import { Upload, Database, FileText, X, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

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

    const files = Array.from(e.dataTransfer.files);
    if (files && files.length > 0) {
      handleFiles(files);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      handleFiles(files);
    }
  };

  const handleFiles = (files: File[]) => {
    setUploadStatus({ status: 'uploading', message: 'Uploading files...' });

    // Simulate file upload
    setTimeout(() => {
      const validFiles = files.filter(file => {
        const validExtensions = ['.csv', '.json', '.xlsx', '.xls'];
        return validExtensions.some(ext => file.name.toLowerCase().endsWith(ext));
      });

      if (validFiles.length === files.length) {
        setUploadStatus({
          status: 'success',
          message: `Successfully uploaded ${files.length} file${files.length > 1 ? 's' : ''}`
        });
      } else {
        setUploadStatus({
          status: 'error',
          message: 'Some files have invalid formats. Please upload CSV, JSON, or Excel files only.'
        });
      }
    }, 2000);
  };

  const handleDbConnect = (e: React.FormEvent) => {
    e.preventDefault();
    setUploadStatus({ status: 'uploading', message: 'Connecting to database...' });

    // Simulate database connection
    setTimeout(() => {
      setUploadStatus({
        status: 'success',
        message: 'Successfully connected to database'
      });
      setShowDbConnect(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-600 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-white mb-2">Data Management</h2>
        <p className="text-blue-100 text-lg">Import your data through file upload or connect directly to your database.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* File Upload Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-100 rounded-xl">
              <Upload className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold">Upload Data Files</h3>
          </div>
          
          <div
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
              dragActive 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
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
              multiple
            />
            
            <Upload className="mx-auto h-16 w-16 text-blue-500 mb-4" />
            <p className="text-lg text-gray-600 mb-2">
              Drag and drop your files here
            </p>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              Browse Files
              <ArrowRight size={20} />
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Supports CSV, JSON, and Excel files
            </p>
          </div>
        </div>

        {/* Database Connection Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-100 rounded-xl">
              <Database className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold">Connect Database</h3>
          </div>

          {!showDbConnect ? (
            <div className="text-center py-8">
              <Database className="mx-auto h-16 w-16 text-blue-500 mb-6" />
              <p className="text-lg text-gray-600 mb-6">
                Connect directly to your existing database
              </p>
              <button
                onClick={() => setShowDbConnect(true)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              >
                Connect Now
                <ArrowRight size={20} />
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
              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowDbConnect(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                >
                  Connect Database
                  <ArrowRight size={20} />
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