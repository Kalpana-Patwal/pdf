import React from 'react';
import pdf from '../assets/pdf.png';
import ISO from '../assets/ISO.png';
import secure from '../assets/Secure.png';

const PdfTrustSection = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white to-pink-50 py-8 sm:py-12 lg:py-16">
      <div className="w-full max-w-[430px] md:max-w-[768px] lg:max-w-[1024px] mx-auto px-4">
        <div className="text-center">
          <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-bold text-gray-800 mb-4 sm:mb-6">
            The PDF software trusted by millions of users
          </h1>
          
          <p className="text-[14px] sm:text-[16px] md:text-[18px] text-gray-600 mx-auto mb-8 sm:mb-12 leading-relaxed">
            iLovePDF is your number one web app for editing PDF with ease. Enjoy all the tools you need to work efficiently with your digital documents while keeping your data safe and secure.
          </p>

          {/* Trust Icons */}
          <div className="flex justify-center items-center gap-8 sm:gap-12 lg:gap-16">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16">
              <img src={pdf} alt="PDF Association" className="w-full h-full object-contain opacity-60"/>
            </div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16">
              <img src={ISO} alt="ISO 27001" className="w-full h-full object-contain opacity-60"/>
            </div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16">
              <img src={secure} alt="Secure" className="w-full h-full object-contain opacity-60"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PremiumSection = () => {
  return (
    <div className="w-full bg-gray-800 py-8 sm:py-12 lg:py-16 overflow-hidden">
      <div className="w-full max-w-[430px] md:max-w-[768px] lg:max-w-[1024px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          {/* Text Content */}
          <div className="max-w-full lg:max-w-[50%] mb-8 lg:mb-0">
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold text-white mb-4">
              Get more with Premium
            </h2>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] text-gray-300 leading-relaxed mb-6">
              Complete projects faster with batch file processing, convert scanned documents with OCR and e-sign your business agreements.
            </p>
            <button className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors">
              Get Premium
            </button>
          </div>

          {/* Illustration - Hidden on mobile, shown on larger screens */}
          <div className="hidden lg:block relative w-full max-w-[400px]">
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-4">
                <div className="bg-white p-4 rounded-lg shadow-lg w-32">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
                <div className="bg-red-500 p-2 rounded-lg shadow-lg w-12 h-12"></div>
              </div>
              
              <div className="relative">
                <div className="w-32 h-16 border-b-4 border-blue-500 transform -rotate-6"></div>
                <div className="absolute top-full right-0 mt-4">
                  <div className="bg-red-500 p-2 rounded-lg shadow-lg w-12 h-12"></div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-lg w-32">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-yellow-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PDFSolutionsPage = () => {
  return (
    <div className="w-full">
      <PdfTrustSection />
      <PremiumSection />
    </div>
  );
};

export default PDFSolutionsPage;