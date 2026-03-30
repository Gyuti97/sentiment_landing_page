
import React from 'react';

interface PhilosophyProps {
  navigate: (page: string, anchor?: string) => void;
  content: {
    tag: string;
    title: string;
    quote: string;
    body: string;
    button: string;
    image: string;
  }
}

const Philosophy: React.FC<PhilosophyProps> = ({ navigate, content }) => {
  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('about');
  };

  return (
    <section id="philosophy" className="bg-forest-green/60 text-off-white py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-5/12">
            {/* 
                TO CHANGE THE IMAGE BELOW:
                Go to App.tsx and update the 'image' field in the 'philosophy' section.
            */}
            <img 
              src={content.image} 
              alt="A person's face partially obscured by lush green leaves" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full md:w-6/12 text-left md:text-left">
            <p className="text-xs uppercase tracking-widest text-off-white/70 mb-4">{content.tag}</p>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight">{content.title}</h2>
            <p className="font-garamond text-2xl italic my-6 text-off-white/80">{content.quote}</p>
            <p className="font-sans text-sm leading-relaxed max-w-md text-off-white/90">
              {content.body}
            </p>
            <a 
              href="#about" 
              onClick={handleAboutClick}
              className="inline-block mt-8 border border-off-white/50 text-off-white/80 py-3 px-8 text-xs uppercase tracking-widest hover:bg-off-white hover:text-forest-green/60 transition-colors duration-300"
            >
              {content.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
