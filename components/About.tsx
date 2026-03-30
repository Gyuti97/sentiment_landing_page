
import React from 'react';

interface AboutProps {
  content: {
    tag: string;
    title: string;
    artistName: string;
    artistBio: string;
    artistImage: string;
  }
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section 
      id="about" 
      className="bg-off-white py-20 md:py-32 relative"
      style={{
        /* 
           TO ADD A TEXTURE BACKGROUND:
           1. Uncomment the lines below
           2. Replace the URL with your texture image link
        */
         backgroundImage: 'url("https://www.transparenttextures.com/patterns/concrete-wall.png")',
         backgroundRepeat: 'repeat',
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-5/12">
            {/* 
                TO CHANGE THE IMAGE BELOW:
                Go to App.tsx and update the 'artistImage' field in the 'about' section.
            */}
            <div className="aspect-[4/5] overflow-hidden border border-charcoal/10 bg-white">
              <img 
                src={content.artistImage} 
                alt={content.artistName} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="w-full md:w-6/12 text-left">
            <p className="text-xs uppercase tracking-widest text-charcoal/70 mb-4">{content.tag}</p>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight mb-8">{content.title}</h2>
            
            <div className="space-y-6 text-charcoal/90 leading-relaxed font-sans">
              <div className="whitespace-pre-line">
                {content.artistBio}
              </div>
            </div>
            
            <div className="mt-12 pt-12 border-t border-charcoal/10">
              <p className="font-garamond text-2xl italic text-charcoal/70">
                "Art is not what you see, but what you make others see."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
