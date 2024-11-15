import React from 'react';

const SplitPDFPreview = ({ selectedFile, onSplit }) => {
  return (
    <div className="relative">
      {/* Top Info Bar */}
      <div className="bg-[#e6f3ff] p-4 rounded-lg mb-4">
        <p className="text-gray-700">
          Choose how you want to split your PDF file
        </p>
      </div>

      {/* PDF Preview */}
      <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center mb-6">
        <div className="w-full h-48 bg-gray-100 rounded-lg mb-2 overflow-hidden">
          <img 
            src={selectedFile.preview}
            alt={selectedFile.name}
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-sm text-gray-600 truncate w-full text-center">
          {selectedFile.name}
        </p>
      </div>

      {/* Split Options */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button className="bg-white p-6 rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-left">
          <h3 className="font-semibold mb-2">Split by pages</h3>
          <p className="text-sm text-gray-600">Select pages to extract (e.g., 1-3,5-7)</p>
        </button>

        <button className="bg-white p-6 rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-left">
          <h3 className="font-semibold mb-2">Split into individual pages</h3>
          <p className="text-sm text-gray-600">Create one PDF for each page</p>
        </button>
      </div>

      {/* Split Button */}
      <button 
        onClick={onSplit}
        className="w-full bg-[#e32427] hover:bg-[#d12124] text-white text-xl font-bold py-4 rounded-lg transition-colors"
      >
        Split PDF →
      </button>
    </div>
  );
};

export default SplitPDFPreview;