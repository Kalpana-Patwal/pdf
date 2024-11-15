import React, { useState } from 'react';
import { Menu, X, Download, ChevronDown, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);


  
  // Define menu items
  const menuItems = [
    { name: 'MERGE PDF', href: '/merge-pdf' },
    { name: 'SPLIT PDF', href: '/split-pdf' },
    { name: 'COMPRESS PDF', href: '/compress-pdf' },
    {
      name: 'CONVERT PDF',
      href: '#',
      hasDropdown: true
    },
    {
      name: 'ALL PDF TOOLS',
      href: '#',
      hasDropdown: true
    }
  ];

  // Define convert options
  const convertOptions = {
    'CONVERT TO PDF': [
      { name: 'JPG to PDF', icon: '📷', href: '/jpg-to-pdf' },
      { name: 'WORD to PDF', icon: '📝', href: '/word-to-pdf' },
      { name: 'POWERPOINT to PDF', icon: '📊', href: '/powerpoint-to-pdf' },
      { name: 'EXCEL to PDF', icon: '📈', href: '/excel-to-pdf' },
      { name: 'HTML to PDF', icon: '🌐', href: '/html-to-pdf' },
    ],
    'CONVERT FROM PDF': [
      { name: 'PDF to JPG', icon: '🖼️', href: '/pdf-to-jpg' },
      { name: 'PDF to WORD', icon: '📄', href: '/pdf-to-word' },
      { name: 'PDF to POWERPOINT', icon: '📑', href: '/pdf-to-powerpoint' },
      { name: 'PDF to EXCEL', icon: '📊', href: '/pdf-to-excel' },
      { name: 'PDF to PDF/A', icon: '📋', href: '/pdf-to-pdfa' },
    ]
  };

  const toggleDropdown = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navbar Container */}
        <div className="flex justify-between items-center h-[56px] sm:h-[64px] lg:h-[72px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-red-500 whitespace-nowrap">
              I❤️PDF
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-4">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md group">
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="ml-1 h-4 w-4 group-hover:transform group-hover:rotate-180 transition-transform" />
                  )}
                </button>

                {/* Desktop Mega Dropdown */}
                {item.name === 'CONVERT PDF' && (
                  <div className="hidden group-hover:block absolute left-0 w-[600px] bg-white rounded-lg shadow-lg border border-gray-100 mt-1">
                    <div className="grid grid-cols-2 gap-6 p-6">
                      {Object.entries(convertOptions).map(([section, items]) => (
                        <div key={section}>
                          <h3 className="text-sm font-semibold text-gray-900 mb-3">{section}</h3>
                          <div className="space-y-2">
                            {items.map((option) => (
                              <a
                                key={option.name}
                                href={option.href}
                                className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                              >
                                <span className="text-xl">{option.icon}</span>
                                <span>{option.name}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
              <Download className="h-5 w-5 mr-2" />
              Download
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
              Login
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600">
              Sign up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[56px] sm:top-[64px] bg-white z-50 overflow-y-auto">
          <div className="px-4 py-2 space-y-1">
            {menuItems.map((item) => (
              <div key={item.name} className="border-b border-gray-100">
                <button
                  onClick={() => item.hasDropdown && toggleDropdown(item.name)}
                  className="w-full flex items-center justify-between py-4 text-base font-medium text-gray-700"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronRight 
                      className={`h-5 w-5 transition-transform duration-200 
                        ${activeDropdown === item.name ? 'rotate-90' : ''}`}
                    />
                  )}
                </button>

                {/* Mobile Dropdown Content */}
                {item.name === 'CONVERT PDF' && activeDropdown === item.name && (
                  <div className="pl-4 pb-4">
                    {Object.entries(convertOptions).map(([section, items]) => (
                      <div key={section} className="mb-4">
                        <h3 className="text-sm font-medium text-gray-500 py-2">
                          {section}
                        </h3>
                        <div className="space-y-2">
                          {items.map((option) => (
                            <a
                              key={option.name}
                              href={option.href}
                              className="flex items-center gap-3 px-2 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                            >
                              <span className="text-xl">{option.icon}</span>
                              <span>{option.name}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Action Buttons */}
            <div className="py-4 space-y-3">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100">
                <Download className="h-5 w-5" />
                Download
              </button>
              <button className="w-full px-4 py-3 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
                Login
              </button>
              <button className="w-full px-4 py-3 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600">
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;