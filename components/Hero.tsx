
import React from 'react';

interface HeroProps {
  content: {
    title: string;
    subtitle: string;
    image: string;
  }
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-off-white">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <img
        src={content.image}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      
      <div className="relative z-20 text-center px-4">
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium leading-none tracking-tight">
          {content.title}
        </h1>
        <p className="font-sans text-sm md:text-base uppercase tracking-widest text-off-white/90 mt-4">
          {content.subtitle}
        </p>
      </div>
    </section>
  );
};

export default Hero;
