import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import HeroSection from './Hero/HeroSection';
import SolutionOptions from './SolutionOption/SolutionOptions';
import PdfTrustSection from './PdfTrust/PdfTrustSection';
import Footer from './Footer/Footer';
import MergePDF from './Pages/MergePDF'; 
import SplitPDF from './Pages/SplitPDF';
import CompressPDF from './Pages/CompressPDF';
import PDFToWord from './Pages/PDFToWord';
import PDFToPowerPoint from './Pages/PDFToPowerpoint';


const HomePage = () => {
  return (
    <>
      <HeroSection />
      <SolutionOptions />
      <PdfTrustSection />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/merge_pdf" element={<MergePDF />} />
          <Route path="/split_pdf" element={<SplitPDF />} />
          <Route path="/compress_pdf" element={<CompressPDF />} />
          <Route path="/pdf_to_wordf" element={<PDFToWord />} />
          <Route path="/pdf_to_powerpoint" element={<PDFToPowerPoint/>}/>
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;