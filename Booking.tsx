
import React from 'react';

interface BookingProps {
  content: {
    tag: string;
    title: string;
    body: string;
    buttonText: string;
    formUrl: string;
  }
}

const Booking: React.FC<BookingProps> = ({ content }) => {
  // --- USER CUSTOMIZATION ---
  // To change the background image, replace the URL in the quotes below.
  // Use a direct link to an image (e.g., from Unsplash, Pexels, or your own hosting).
  const marbleImageUrl = "https://plus.unsplash.com/premium_photo-1706838707784-6eb835aa5a72?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section 
      id="booking" 
      className="relative text-off-white overflow-hidden min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${marbleImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-charcoal/75 z-0"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl py-20 md:py-32">
        <p className="text-xs uppercase tracking-widest text-off-white/70 mb-2">{content.tag}</p>
        <h2 className="font-serif text-6xl md:text-7xl mb-8">{content.title}</h2>
        <p className="font-sans text-base max-w-3xl mx-auto leading-relaxed mb-12 text-off-white/90">
          {content.body}
        </p>
        
        <div className="flex justify-center">
          <a 
            href={content.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-off-white/50 text-off-white py-4 px-10 text-sm uppercase tracking-widest hover:bg-off-white hover:text-charcoal transition-all duration-300 shadow-xl backdrop-blur-sm"
          >
            {content.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Booking;
