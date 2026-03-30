
import React from 'react';

interface GalleryProps {
  content: {
    tag: string;
    title: string;
    images: {
      url: string;
      alt: string;
    }[];
  }
}

const Gallery: React.FC<GalleryProps> = ({ content }) => {
  return (
    <section className="bg-off-white py-20 md:py-32 border-y border-charcoal/20 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-charcoal/70 mb-2">{content.tag}</p>
          <h2 className="font-serif text-6xl md:text-7xl">{content.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {content.images.map((image, index) => (
            <div key={index} className="aspect-[3/4] overflow-hidden bg-charcoal/5 border border-charcoal/10 group">
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
