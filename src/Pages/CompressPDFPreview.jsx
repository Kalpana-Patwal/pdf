import React, { useState } from 'react';

const CompressPDFPreview = ({ selectedFile, onCompress }) => {
  const [compressionLevel, setCompressionLevel] = useState('recommended'); // recommended, extreme, low

  return (
    <div className="relative">
      {/* Top Info Bar */}
      <div className="bg-[#e6f3ff] p-4 rounded-lg mb-4">
        <p className="text-gray-700">
          Choose your compression options
        </p>
      </div>

      {/* PDF Preview with Size Info */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <svg className="w-8 h-8 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
            </svg>
            <div>
              <p className="font-semibold text-gray-900">{selectedFile.name}</p>
              <p className="text-sm text-gray-500">{selectedFile.size} MB</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">Original size</p>
            <p className="text-sm text-gray-500">{selectedFile.size} MB</p>
          </div>
        </div>
      </div>

      {/* Compression Options */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <button 
          onClick={() => setCompressionLevel('low')}
          className={`p-4 rounded-lg text-left transition-colors ${
            compressionLevel === 'low' 
              ? 'bg-red-50 border-2 border-red-500' 
              : 'bg-white border border-gray-200 hover:bg-gray-50'
          }`}
        >
          <h3 className="font-semibold mb-1">Low Compression</h3>
          <p className="text-sm text-gray-600">Minor size reduction, best quality</p>
        </button>

        <button 
          onClick={() => setCompressionLevel('recommended')}
          className={`p-4 rounded-lg text-left transition-colors ${
            compressionLevel === 'recommended' 
              ? 'bg-red-50 border-2 border-red-500' 
              : 'bg-white border border-gray-200 hover:bg-gray-50'
          }`}
        >
          <h3 className="font-semibold mb-1">Recommended</h3>
          <p className="text-sm text-gray-600">Balanced size and quality</p>
        </button>

        <button 
          onClick={() => setCompressionLevel('extreme')}
          className={`p-4 rounded-lg text-left transition-colors ${
            compressionLevel === 'extreme' 
              ? 'bg-red-50 border-2 border-red-500' 
              : 'bg-white border border-gray-200 hover:bg-gray-50'
          }`}
        >
          <h3 className="font-semibold mb-1">Extreme Compression</h3>
          <p className="text-sm text-gray-600">Maximum size reduction</p>
        </button>
      </div>

      {/* Compress Button */}
      <button 
        onClick={onCompress}
        className="w-full bg-[#e32427] hover:bg-[#d12124] text-white text-xl font-bold py-4 rounded-lg transition-colors"
      >
        Compress PDF →
      </button>

      {/* Add More Button (same as your other components) */}
      <button 
        className="absolute -right-16 top-0 bg-[#e32427] p-3 rounded-full shadow-md hover:bg-[#d12124] transition-colors"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6v12M6 12h12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
};

export default CompressPDFPreview;