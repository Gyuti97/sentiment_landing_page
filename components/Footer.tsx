
import React from 'react';

interface FooterProps {
  content: {
    copyright: string;
  }
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-off-white text-charcoal py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <p className="font-serif text-xl">SENTIMENT</p>
          <p className="text-xs text-charcoal/60 mt-1">{content.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
