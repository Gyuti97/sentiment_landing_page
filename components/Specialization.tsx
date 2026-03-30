
import React from 'react';

interface WorkItemProps {
  imageSrc: string;
  alt: string;
  className?: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ imageSrc, alt, className = '' }) => (
  <div className={`flex flex-col items-center group ${className}`}>
    <div className="overflow-hidden">
      <img 
        src={imageSrc}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        referrerPolicy="no-referrer"
      />
    </div>
  </div>
);

interface SpecializationProps {
  navigate: (page: string, anchor?: string) => void;
  content: {
    tag: string;
    title: string;
    button: string;
    images: {
      url: string;
      alt: string;
    }[];
  }
}

const Specialization: React.FC<SpecializationProps> = ({ navigate, content }) => {
  return (
    <section 
      id="work" 
      className="bg-forest-green/60 text-off-white py-20 md:py-32 border-y border-white/10"
    >
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-off-white/70 mb-2">{content.tag}</p>
        <h2 className="font-serif text-6xl md:text-7xl">{content.title}</h2>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 md:items-end gap-10 md:gap-6">
          {content.images.map((image, index) => (
            <WorkItem 
              key={index}
              imageSrc={image.url}
              alt={image.alt}
              className={index !== 1 ? "md:w-10/12 justify-self-center" : ""}
            />
          ))}
        </div>
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); navigate('gallery'); }}
          className="inline-block mt-16 border border-off-white/50 text-off-white/80 py-3 px-8 text-xs uppercase tracking-widest hover:bg-off-white hover:text-forest-green/60 transition-colors duration-300"
        >
          {content.button}
        </a>
      </div>
    </section>
  );
};

export default Specialization;
