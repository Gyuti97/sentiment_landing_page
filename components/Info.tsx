
import React from 'react';
import Contact from './Contact';

const InfoSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-12 last:mb-0 text-left">
    <h3 className="font-serif text-3xl md:text-4xl mb-4">{title}</h3>
    <div className="font-sans text-sm leading-relaxed space-y-2 text-charcoal/80">
      {children}
    </div>
  </div>
);

interface InfoProps {
  content: {
    tag: string;
    title: string;
    sections: {
      title: string;
      content: string[];
    }[];
    footerMessage: string;
  };
  contact: {
    tag: string;
    title: string;
    address: string;
    instagram: string;
    instagramHandle: string;
    email: string;
  };
}

const Info: React.FC<InfoProps> = ({ content, contact }) => {
  return (
    <section className="bg-off-white py-20 md:py-32 border-y border-charcoal/20">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-charcoal/70 mb-2">{content.tag}</p>
        <h2 className="font-serif text-6xl md:text-7xl mb-16">{content.title}</h2>

        <div className="flex flex-col">
          {content.sections.map((section, idx) => (
            <InfoSection key={idx} title={section.title}>
              {section.content.map((p, pIdx) => (
                <p key={pIdx} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </InfoSection>
          ))}
        </div>

        {content.footerMessage && (
          <div className="mt-20 pt-10 border-t border-charcoal/10">
            <p className="font-serif text-xl md:text-2xl italic text-charcoal/90">
              {content.footerMessage}
            </p>
          </div>
        )}

      </div>

      <div className="mt-20 container mx-auto px-6 max-w-3xl">
        <Contact content={contact} isSubpage={true} />
      </div>
    </section>
  );
};

export default Info;
