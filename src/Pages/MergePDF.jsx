import React, { useState } from 'react';
import PDFPreview from './PDFPreview';

const MergePDF = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    const filesWithPreviews = files.map(file => ({
      file,
      name: file.name,
      preview: URL.createObjectURL(file)
    }));
    setSelectedFiles(filesWithPreviews);
  };

  const handleAddMore = () => {
    document.getElementById('pdf-upload').click();
  };

  const handleMerge = () => {
    // Add your PDF merging logic here
    console.log('Merging PDFs:', selectedFiles);
  };

  return (
    <div className="bg-[#faf5f5] min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-[40px] font-bold text-[#1a1a1a] mb-4">
            Merge PDF files
          </h1>
          <p className="text-[#58595c] text-xl">
            Combine PDFs in the order you want with the easiest PDF merger available.
          </p>
        </div>

        {selectedFiles.length === 0 ? (
          // Upload Section
          <div className="flex items-start justify-center space-x-4">
            <div className="text-center">
              <input 
                type="file"
                accept=".pdf"
                multiple
                className="hidden"
                id="pdf-upload"
                onChange={handleFileSelect}
              />
              <label 
                htmlFor="pdf-upload" 
                className="bg-[#e32427] hover:bg-[#d12124] text-white text-xl font-bold px-20 py-8 rounded-2xl transition-colors mb-4 cursor-pointer inline-block"
              >
                Select PDF files
              </label>
              <p className="text-gray-600 text-base">
                or <span className="text-gray-800">drop PDFs here</span>
              </p>
            </div>

            {/* Right Side Icons */}
            <div className="flex flex-col space-y-2">
              <button className="bg-[#e32427] p-3 rounded-full shadow-md hover:bg-[#d12124] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V16M12 16L15 13M12 16L9 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="bg-[#e32427] p-3 rounded-full shadow-md hover:bg-[#d12124] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 12H16M16 12L13 9M16 12L13 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        ) : (
          // PDF Preview Component
          <PDFPreview 
            selectedFiles={selectedFiles}
            onAddMore={handleAddMore}
            onMerge={handleMerge}
          />
        )}
      </div>
    </div>
  );
};

export default MergePDF;
