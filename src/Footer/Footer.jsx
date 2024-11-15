import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import GoogleStore from '../assets/GooglePlay.png';
import AppleStore from '../assets/AppStore.png';
import TwitterIcon from '../assets/twit.png';
import FacebookIcon from '../assets/facebook.png';
import LinkedInIcon from '../assets/linkedin.png';
import InstagramIcon from '../assets/instagram.png';
import TikTokIcon from '../assets/tiktok.png';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', label: 'English', selected: true },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
    { code: 'it', label: 'Italiano' },
    { code: 'pt', label: 'Português' },
    { code: 'ja', label: '日本語' },
    { code: 'ru', label: 'Русский' },
    { code: 'ko', label: '한국어' },
    { code: 'zh-s', label: '中文 (简体)' },
    { code: 'zh-t', label: '中文 (繁體)' },
    { code: 'ar', label: 'العربية' },
    { code: 'bg', label: 'Български' },
    { code: 'ca', label: 'Català' },
    { code: 'nl', label: 'Nederlands' },
    { code: 'el', label: 'Ελληνικά' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'id', label: 'Bahasa Indonesia' },
    { code: 'ms', label: 'Bahasa Melayu' },
    { code: 'pl', label: 'Polski' },
    { code: 'sv', label: 'Svenska' },
    { code: 'th', label: 'ภาษาไทย' },
    { code: 'tr', label: 'Türkçe' },
    { code: 'uk', label: 'Українська' },
    { code: 'vi', label: 'Tiếng Việt' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 bg-transparent py-1 px-2 rounded-md hover:bg-gray-100"
      >
        <Globe className="w-4 h-4" />
        <span>English</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 bg-white rounded-lg shadow-lg border border-gray-200 w-80 z-50 grid grid-cols-3 p-4 gap-y-2">
          {languages.map((language) => (
            <button
              key={language.code}
              className={`flex items-center gap-2 px-3 py-1.5 text-sm ${
                language.selected 
                  ? 'text-blue-600 hover:text-blue-700 font-medium' 
                  : 'text-gray-700 hover:text-gray-900'
              } hover:bg-gray-50 rounded transition-colors w-full text-left`}
              onClick={() => {
                // Handle language selection
                setIsOpen(false);
              }}
            >
              {language.selected && <Check className="w-4 h-4 flex-shrink-0" />}
              <span className={language.selected ? 'ml-[-4px]' : ''}>
                {language.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Footer = () => {
  const footerSections = [
    {
      title: "ILOVEPDF",
      links: [
        { name: "Home", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Security", href: "#" },
        { name: "Tools", href: "#" },
        { name: "FAQ", href: "#" },
      ]
    },
    {
      title: "PRODUCT",
      links: [
        { name: "iLovePDF Desktop", href: "#" },
        { name: "iLovePDF Mobile", href: "#" },
        { name: "Developers", href: "#" },
        { name: "Features", href: "#" },
        { name: "iloveimg.com", href: "#" },
      ]
    },
    {
      title: "SOLUTIONS",
      links: [
        { name: "Business", href: "#" },
        { name: "Education", href: "#" },
      ]
    },
    {
      title: "COMPANY",
      links: [
        { name: "Our Story", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Press", href: "#" },
        { name: "Legal & Privacy", href: "#" },
        { name: "Contact", href: "#" },
      ]
    }
  ];

  const socialLinks = [
    { 
      name: "Twitter", 
      href: "#", 
      icon: TwitterIcon
    },
    { 
      name: "Facebook", 
      href: "#", 
      icon: FacebookIcon 
    },
    { 
      name: "LinkedIn", 
      href: "#", 
      icon: LinkedInIcon 
    },
    { 
      name: "Instagram", 
      href: "#", 
      icon: InstagramIcon
    },
    { 
      name: "TikTok", 
      href: "#", 
      icon: TikTokIcon
    },
  ];

  return (
    <footer className="w-full bg-white py-16 border-t">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-red-500 font-medium mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* App Store Links */}
        <div className="flex flex-wrap gap-4 mb-8 justify-end">
          <a href="#" className="inline-block">
            <img 
              src={GoogleStore} 
              alt="Get it on Google Play" 
              className="h-[42px]"
            />
          </a>
          <a href="#" className="inline-block">
            <img 
              src={AppleStore} 
              alt="Download on the App Store" 
              className="h-[42px]"
            />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-end gap-8 items-center pt-8 border-t">
          <LanguageSelector />

          <div className="text-gray-600 my-4 md:my-0 md:ml-auto">
            © iLovePDF 2024 ® - Your PDF Editor
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                aria-label={social.name}
              >
                <img 
                  src={social.icon} 
                  alt={social.name}
                  className="w-5 h-5 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;