
import React from 'react';

interface InquiryProps {
  navigate: (page: string, anchor?: string) => void;
  content: {
    title: string;
    body: string;
    button: string;
  }
}

const Inquiry: React.FC<InquiryProps> = ({ navigate, content }) => {
  const handleBookClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('booking');
  };

  return (
    <section 
      id="inquire" 
      className="text-charcoal py-20 md:py-32 relative"
      style={{
        /* 
           TO ADD A TEXTURE BACKGROUND:
           1. Uncomment the lines below
           2. Replace the URL with your texture image link
        */
         backgroundImage: 'url("https://www.transparenttextures.com/patterns/concrete-wall.png")',
         backgroundRepeat: 'repeat',
        backgroundColor: '#F5F2ED', // Fallback to warm-neutral color
      }}
    >
      <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
        <h2 className="font-serif text-5xl md:text-6xl">{content.title}</h2>
        <p className="font-sans text-base mt-6 leading-relaxed">
          {content.body}
        </p>
        <a 
          href="#booking" 
          onClick={handleBookClick}
          className="inline-block mt-10 bg-forest-green/60 text-off-white py-4 px-12 text-sm uppercase tracking-widest hover:bg-charcoal transition-colors duration-300"
        >
          {content.button}
        </a>
      </div>
    </section>
  );
};

export default Inquiry;
