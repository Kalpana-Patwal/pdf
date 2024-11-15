import React, { useState } from 'react';
import { Check, Crown } from 'lucide-react';

const PDFToPowerPoint = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const FilePreviewBox = ({ file }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-4 w-64">
      <img 
        src={filePreview || "/api/placeholder/240/320"} 
        alt="PDF preview" 
        className="w-full h-48 object-contain mb-3"
      />
      <p className="text-gray-700 text-sm truncate">{file?.name}</p>
    </div>
  );

  const FileUploadView = () => (
    <div className="flex flex-col items-center pt-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">PDF to PowerPoint Converter</h1>
      <p className="text-xl text-gray-700 mb-2">
        Convert your PDF to PowerPoint presentations with incredible accuracy.
      </p>
      <p className="mb-8">
        Powered by <span className="text-red-500">Solid Documents</span>.
      </p>
      <input
        type="file"
        accept=".pdf"
        className="hidden"
        id="pdf-upload"
        onChange={handleFileSelect}
      />
      <label
        htmlFor="pdf-upload"
        className="bg-red-500 hover:bg-red-600 text-white text-xl font-medium px-16 py-4 rounded-lg cursor-pointer mb-4"
      >
        Select PDF file
      </label>
    </div>
  );

  const ConversionOptionsView = () => (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 p-8 flex justify-center">
        <FilePreviewBox file={selectedFile} />
      </div>
      
      <div className="w-96 bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">PDF to PowerPoint</h2>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Check className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <h3 className="font-medium text-red-500">NO OCR</h3>
              <p className="text-gray-600">Convert PDFs with selectable text into editable PowerPoint slides.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Crown className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-medium">OCR</h3>
                <span className="bg-yellow-100 text-yellow-800 text-sm px-2 py-1 rounded">Premium</span>
              </div>
              <p className="text-gray-600">Convert scanned PDFs with non-selectable text into editable PowerPoint slides.</p>
            </div>
          </div>
          
          <button className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-lg transition-colors">
            Convert to PowerPoint
          </button>
        </div>
      </div>
    </div>
  );

  return selectedFile ? <ConversionOptionsView /> : <FileUploadView />;
};

export default PDFToPowerPoint;