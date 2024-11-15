
import React from 'react';

const PDFPreview = ({ selectedFiles, onAddMore, onMerge }) => {
  return (
    <div className="relative">
      {/* Top Info Bar */}
      <div className="bg-[#e6f3ff] p-4 rounded-lg mb-4">
        <p className="text-gray-700">
          To change the order of your PDFs, drag and drop the files as you want.
        </p>
      </div>

      {/* PDF Previews */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {selectedFiles.map((file, index) => (
          <div 
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center"
          >
            <div className="w-full h-48 bg-gray-100 rounded-lg mb-2 overflow-hidden">
              <img 
                src={file.preview} 
                alt={file.name}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm text-gray-600 truncate w-full text-center">
              {file.name}
            </p>
          </div>
        ))}
      </div>

      {/* Add More Button */}
      <button 
        onClick={onAddMore}
        className="absolute -right-16 top-0 bg-[#e32427] p-3 rounded-full shadow-md hover:bg-[#d12124] transition-colors"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6v12M6 12h12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Merge Button */}
      <button 
        onClick={onMerge}
        className="w-full bg-[#e32427] hover:bg-[#d12124] text-white text-xl font-bold py-4 rounded-lg transition-colors"
      >
        Merge PDF →
      </button>
    </div>
  );
};

export default PDFPreview;
