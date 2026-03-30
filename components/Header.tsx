
import React, { useState } from 'react';

interface HeaderProps {
  navigate: (page: string, anchor?: string) => void;
  content: {
    topBanner: string;
    nav: {
      info: string;
      booking: string;
      about: string;
      gallery: string;
    }
  };
  setLanguage: (lang: 'en' | 'hu') => void;
  currentLanguage: 'en' | 'hu';
}

const Header: React.FC<HeaderProps> = ({ navigate, content, setLanguage, currentLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const buttonStyle = "text-xs text-center uppercase tracking-widest border border-forest-green/60 text-forest-green/60 px-5 py-2 hover:bg-forest-green/60 hover:text-off-white transition-colors duration-300 w-full md:w-auto";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string, anchor?: string) => {
    e.preventDefault();
    navigate(page, anchor);
    setMenuOpen(false);
  };
  
  const LanguageSwitcher: React.FC = () => (
    <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-charcoal/70">
      <button 
        onClick={() => setLanguage('en')} 
        className={`hover:text-charcoal transition-colors ${currentLanguage === 'en' ? 'text-charcoal font-semibold' : ''}`}
      >
        EN
      </button>
      <span>/</span>
      <button 
        onClick={() => setLanguage('hu')} 
        className={`hover:text-charcoal transition-colors ${currentLanguage === 'hu' ? 'text-charcoal font-semibold' : ''}`}
      >
        HU
      </button>
    </div>
  );

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-charcoal text-off-white text-center p-2 text-xs uppercase tracking-widest">
        {content.topBanner}
      </div>
      <header className="bg-off-white/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" onClick={(e) => handleNavClick(e, 'main')} className="text-lg font-serif font-medium tracking-wider uppercase">
            Sentiment
          </a>
          <nav className="hidden md:flex items-center space-x-4">
            <a href="#info" onClick={(e) => handleNavClick(e, 'info')} className={buttonStyle}>{content.nav.info}</a>
            <a href="#booking" onClick={(e) => handleNavClick(e, 'booking')} className={buttonStyle}>{content.nav.booking}</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className={buttonStyle}>{content.nav.about}</a>
            <a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')} className={buttonStyle}>{content.nav.gallery}</a>
            <div className="pl-4">
              <LanguageSwitcher />
            </div>
          </nav>
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              <svg className="w-6 h-6 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-off-white pb-4">
            <nav className="flex flex-col items-center space-y-4 pt-2 px-4">
              <a href="#info" onClick={(e) => handleNavClick(e, 'info')} className={buttonStyle}>{content.nav.info}</a>
              <a href="#booking" onClick={(e) => handleNavClick(e, 'booking')} className={buttonStyle}>{content.nav.booking}</a>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className={buttonStyle}>{content.nav.about}</a>
              <a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')} className={buttonStyle}>{content.nav.gallery}</a>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
