import React from 'react';
import { useNavigate } from 'react-router-dom';
const HeroSection = () => {
  const navigate = useNavigate();

  const handleToolClick = (toolTitle) => {
    switch(toolTitle) {
      case 'Merge PDF':
        navigate('/merge_pdf');
        break;
      case 'Split PDF':
        navigate('/split_pdf');
        break;
      case 'Compress PDF':
        navigate('/compress_pdf');
        break;
      case 'PDF to Word':
        navigate('/pdf_to_word');
        break;
        case 'PDF to PowerPoint':
        navigate('/pdf_to_powerpoint');
        break;
      
    }
  };
  const tools = [
    {
      title: "Merge PDF",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 50 50">
          <g fill="rgb(93.333333%,42.352941%,30.196078%)" fillRule="evenodd">
            <path d="M5.488.363h21.75c1.78 0 2.43.184 3.082.535a3.66 3.66 0 0 1 1.512 1.512c.348.652.535 1.297.535 3.082v21.746c0 1.78-.187 2.43-.535 3.082a3.66 3.66 0 0 1-1.512 1.512c-.652.348-1.3.535-3.082.535H5.488c-1.78 0-2.43-.187-3.082-.535A3.66 3.66 0 0 1 .895 30.32c-.348-.652-.535-1.3-.535-3.082V5.488c0-1.78.188-2.43.535-3.082A3.71 3.71 0 0 1 2.406.895c.652-.348 1.3-.53 3.082-.53zm0 0"/>
            <path d="M44.563 49.69H22.816c-1.78 0-2.43-.184-3.082-.535-.645-.34-1.172-.867-1.512-1.512-.348-.652-.535-1.297-.535-3.082V22.816c0-1.78.184-2.43.535-3.082.34-.645.867-1.172 1.512-1.512.652-.348 1.3-.535 3.082-.535h21.746c1.785 0 2.43.188 3.082.535.645.34 1.172.867 1.512 1.512.352.652.535 1.3.535 3.082v21.746c0 1.785-.184 2.43-.535 3.082-.34.645-.867 1.172-1.512 1.512-.652.352-1.297.535-3.082.535zm0 0"/>
          </g>
          <path fill="white" d="M17.906 10.965c-.484 0-.875.387-.875.86v3.8L9.84 8.523c-.344-.336-.895-.336-1.238 0-.164.16-.254.38-.254.605a.86.86 0 0 0 .254.6l7.195 7.098h-3.875c-.484 0-.875.387-.875.86s.4.86.875.86h5.984a.88.88 0 0 0 .332-.066.86.86 0 0 0 .473-.465.79.79 0 0 0 .066-.328v-5.87c.004-.473-.387-.86-.87-.86zm14.418 28.008c.48 0 .87-.383.87-.86v-3.797l7.195 7.098a.88.88 0 0 0 1.234 0 .85.85 0 0 0 .258-.605c0-.23-.094-.45-.258-.605l-7.2-7.102h3.875c.484 0 .875-.383.875-.86s-.4-.855-.875-.855h-5.984a.92.92 0 0 0-.336.066c-.2.086-.383.25-.473.46a.88.88 0 0 0-.066.328v5.87c0 .477.4.86.875.86z"/>
        </svg>
      ),
      description: "Combine PDFs in the order you want with the easiest PDF merger available."
    },
    {
      title: "Split PDF",
      image: "https://www.ilovepdf.com/img/tools/split.svg",
      description: "Separate one page or a whole set for easy conversion into independent PDF files."
    },
    {
      title: "Compress PDF",
      image: "https://www.ilovepdf.com/img/tools/compress.svg",
      description: "Reduce file size while optimizing for maximal PDF quality."
    },
    {
      title: "PDF to Word",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 50 50">
          <path d="M32.324 15.656h-9.547c-2.477 0-3.375.258-4.28.742a5.04 5.04 0 0 0-2.098 2.102c-.484.902-.742 1.8-.742 4.277v9.547H5.18c-1.8 0-2.45-.187-3.113-.54-.648-.348-1.184-.88-1.527-1.527-.352-.66-.54-1.31-.54-3.113V5.18c0-1.8.188-2.45.54-3.113S1.4.89 2.066.54 3.38 0 5.18 0h21.965c1.8 0 2.453.188 3.113.54.648.344 1.18.88 1.527 1.527.352.66.54 1.313.54 3.113zm0 0" fillRule="evenodd" fill="rgb(86.27451%,89.803922%,98.039216%)"/>
          <path d="M14.477 7.52a.88.88 0 0 0-.883-.867c-.48 0-.883.39-.883.867v3.844L7.566 6.316a.89.89 0 0 0-1.246 0c-.168.16-.258.38-.258.61s.1.453.258.613l5.145 5.05H7.547c-.488 0-.883.387-.883.863s.398.867.883.867h6.055a.92.92 0 0 0 .336-.066c.215-.086.387-.254.477-.47.05-.102.066-.215.066-.328l.004-5.938zm0 0" fill="rgb(16.078431%,34.117647%,58.431373%)"/>
          <path d="M22.855 17.676H44.82c1.8 0 2.45.188 3.113.543a3.68 3.68 0 0 1 1.527 1.523c.352.66.54 1.313.54 3.113V44.82c0 1.8-.187 2.45-.54 3.113s-.867 1.176-1.527 1.527-1.312.54-3.113.54H22.855c-1.8 0-2.453-.187-3.113-.54-.648-.344-1.18-.88-1.527-1.527-.352-.66-.54-1.312-.54-3.113V22.855c0-1.8.188-2.453.54-3.113.348-.648.88-1.18 1.527-1.527.66-.352 1.313-.54 3.113-.54zm0 0" fillRule="evenodd" fill="rgb(37.254902%,51.372549%,77.647059%)"/>
          <path d="M38.996 26.75h2.965l-2.94 14.64h-3.094l-1.777-9.035-1.824 9.035H29.12L26.2 26.75h3.164l1.508 9.363 1.938-9.363h3.004l1.727 9.297zm0 0" fill="rgb(100%,100%,100%)"/>
        </svg>
      ),
      description: "Easily convert your PDF files into easy to edit DOC and DOCX documents. The converted WORD document is almost 100% accurate."
    },
  
    {
      title: "PDF to PowerPoint",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 50 50">
          <path d="M32.324 15.656h-9.547c-2.477 0-3.375.258-4.28.742a5.04 5.04 0 0 0-2.098 2.102c-.484.902-.742 1.8-.742 4.277v9.547H5.18c-1.8 0-2.45-.187-3.113-.54-.648-.348-1.184-.88-1.527-1.527-.352-.66-.54-1.31-.54-3.113V5.18c0-1.8.188-2.45.54-3.113S1.4.89 2.066.54 3.38 0 5.18 0h21.965c1.8 0 2.453.188 3.113.54.648.344 1.18.88 1.527 1.527.352.66.54 1.313.54 3.113zm0 0" fillRule="evenodd" fill="rgb(255, 114, 92)"/>
          <path d="M14.477 7.52a.88.88 0 0 0-.883-.867c-.48 0-.883.39-.883.867v3.844L7.566 6.316a.89.89 0 0 0-1.246 0c-.168.16-.258.38-.258.61s.1.453.258.613l5.145 5.05H7.547c-.488 0-.883.387-.883.863s.398.867.883.867h6.055a.92.92 0 0 0 .336-.066c.215-.086.387-.254.477-.47.05-.102.066-.215.066-.328l.004-5.938zm0 0" fill="rgb(255, 255, 255)"/>
          <path d="M22.855 17.676H44.82c1.8 0 2.45.188 3.113.543a3.68 3.68 0 0 1 1.527 1.523c.352.66.54 1.313.54 3.113V44.82c0 1.8-.187 2.45-.54 3.113s-.867 1.176-1.527 1.527-1.312.54-3.113.54H22.855c-1.8 0-2.453-.187-3.113-.54-.648-.344-1.18-.88-1.527-1.527-.352-.66-.54-1.312-.54-3.113V22.855c0-1.8.188-2.453.54-3.113.348-.648.88-1.18 1.527-1.527.66-.352 1.313-.54 3.113-.54zm0 0" fillRule="evenodd" fill="rgb(255, 114, 92)"/>
          <path d="M36.477 26.973c1.566 0 2.832.305 3.797.914.96.61 1.441 1.695 1.441 3.258 0 1.457-.477 2.527-1.43 3.21-.957.688-2.246 1.032-3.867 1.032h-1.922v5.836h-3.188V26.973zm-.328 6.094c.906 0 1.594-.168 2.062-.504.473-.332.71-.86.71-1.582 0-.707-.237-1.211-.71-1.512-.47-.297-1.157-.445-2.063-.445h-1.79v4.043z" fill="rgb(255, 255, 255)"/>
        </svg>
      ),
      description: "Turn your PDF files into easy to edit PPT and PPTX slideshows."
    },

    {
      title: "PDF to JPG",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 50 50">
          <path fill="#FFC107" d="M32.324 15.656h-9.547c-2.477 0-3.375.258-4.28.742a5.04 5.04 0 0 0-2.098 2.102c-.484.902-.742 1.8-.742 4.277v9.547H5.18c-1.8 0-2.45-.187-3.113-.54-.648-.348-1.184-.88-1.527-1.527-.352-.66-.54-1.31-.54-3.113V5.18c0-1.8.188-2.45.54-3.113S1.4.89 2.066.54 3.38 0 5.18 0h21.965c1.8 0 2.453.188 3.113.54.648.344 1.18.88 1.527 1.527.352.66.54 1.313.54 3.113zm0 0"/>
        </svg>
      ),
      description: "Convert each PDF page into a JPG or extract all images contained in a PDF."
    },
    {
      title: "JPG to PDF",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 50 50">
          <rect width="48" height="48" fill="#FFC107" rx="4"/>
          <text x="12" y="32" fill="white" fontSize="16" fontWeight="bold">JPG</text>
        </svg>
      ),
      description: "Convert JPG images to PDF in seconds. Easily adjust orientation and margins."
    },
    {
      title: "Sign PDF",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 50 50">
          <rect width="48" height="48" fill="#4A90E2" rx="4"/>
          <path d="M16 25 L22 32 L34 18" stroke="white" strokeWidth="4" fill="none"/>
        </svg>
      ),
      description: "Sign yourself or request electronic signatures from others."
    },
    {
      title: "Watermark",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 50 50">
          <rect width="48" height="48" fill="#B36BE1" rx="4"/>
          <text x="14" y="32" fill="white" fontSize="24">W</text>
        </svg>
      ),
      description: "Stamp an image or text over your PDF in seconds. Choose the typography, transparency and position."
    },
    {
      title: "Rotate PDF",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 50 50">
          <rect width="48" height="48" fill="#B36BE1" rx="4"/>
          <path d="M15 25A10 10 0 1 1 35 25" stroke="white" strokeWidth="4" fill="none"/>
          <path d="M35 18L35 25L28 25" stroke="white" strokeWidth="4" fill="none"/>
        </svg>
      ),
      description: "Rotate your PDFs the way you need them. You can even rotate multiple PDFs at once!"
    },
    {
      title: "PDF to Excel",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 50 50">
          <rect x="5" y="5" width="40" height="40" fill="#4CAF50" rx="4"/>
          <text x="18" y="32" fill="white" fontSize="20" fontWeight="bold">X</text>
          <path d="M10 10 L16 5 L16 15 L10 10" fill="#4CAF50"/>
        </svg>
      ),
      description: "Pull data straight from PDFs into Excel spreadsheets in a few short seconds.",
      isNew: false
    },
    {
      title: "Word to PDF",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 50 50">
          <rect x="5" y="5" width="40" height="40" fill="#4285F4" rx="4"/>
          <text x="18" y="32" fill="white" fontSize="20" fontWeight="bold">W</text>
          <path d="M10 10 L16 5 L16 15 L10 10" fill="#4285F4"/>
        </svg>
      ),
      description: "Make DOC and DOCX files easy to read by converting them to PDF.",
      isNew: false
    },
    {
      title: "PowerPoint to PDF",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 50 50">
          <rect x="5" y="5" width="40" height="40" fill="#FF5722" rx="4"/>
          <text x="18" y="32" fill="white" fontSize="20" fontWeight="bold">P</text>
          <path d="M10 10 L16 5 L16 15 L10 10" fill="#FF5722"/>
        </svg>
      ),
      description: "Make PPT and PPTX slideshows easy to view by converting them to PDF.",
      isNew: false
    },
    {
      title: "Excel to PDF",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 50 50">
          <rect x="5" y="5" width="40" height="40" fill="#4CAF50" rx="4"/>
          <text x="18" y="32" fill="white" fontSize="20" fontWeight="bold">X</text>
          <path d="M10 10 L16 5 L16 15 L10 10" fill="#4CAF50"/>
        </svg>
      ),
      description: "Make EXCEL spreadsheets easy to read by converting them to PDF.",
      isNew: false
    },
    {
      title: "Edit PDF",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 50 50">
          <rect x="5" y="5" width="40" height="40" fill="#B36BE1" rx="4"/>
          <path d="M15 25 L25 35 L35 15" stroke="white" strokeWidth="4" fill="none"/>
        </svg>
      ),
      description: "Add text, images, shapes or freehand annotations to a PDF document. Edit the size, font, and color of the added content.",
      isNew: true
    }
  ];
  
 

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Hero Content */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold my-10 text-gray-900 mb-4 md:mb-6">
            Every tool you need to work with PDFs in one place
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use!
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3 lg:gap-4">
          {tools.map((tool) => (
            <div 
              key={tool.title}
              onClick={() => handleToolClick(tool.title)}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-3 md:p-4 cursor-pointer"
            >
              {/* Tool Icon/Image */}
              <div className="flex justify-center mb-2 md:mb-3">
                {tool.icon ? (
                  <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16">
                    {tool.icon}
                  </div>
                ) : (
                  <img 
                    src={tool.image} 
                    alt={`${tool.title} icon`}
                    className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain"
                  />
                )}
              </div>
              
              {/* Tool Title */}
              <h3 className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 mb-1 md:mb-2 text-center truncate">
                {tool.title}
              </h3>
              
              {/* Tool Description - Hidden on mobile */}
              <p className="hidden md:block text-xs lg:text-sm text-gray-600 text-center">
                {tool.description}
              </p>

              {/* New Badge if applicable */}
              {tool.isNew && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  New
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden">
          <div className="flex justify-around py-3">
            <button className="text-xs flex flex-col items-center text-gray-600">
              <span>Home</span>
            </button>
            <button className="text-xs flex flex-col items-center text-gray-600">
              <span>Tools</span>
            </button>
            <button className="text-xs flex flex-col items-center text-gray-600">
              <span>Account</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;