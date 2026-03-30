
import React from 'react';
import { Instagram, Mail, MapPin } from 'lucide-react';

interface ContactProps {
  content: {
    tag: string;
    title: string;
    address: string;
    instagram: string;
    instagramHandle: string;
    email: string;
  };
  isSubpage?: boolean;
}

const Contact: React.FC<ContactProps> = ({ content, isSubpage }) => {
  // Google Maps Embed URL for the address
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.API_KEY || ''}&q=9028+Győr,+József+Attila+utca+99`;
  
  // Since I don't have an API key for the embed API in the prompt, I'll use a standard iframe src that doesn't strictly require a key for basic display if possible, 
  // or just a generic search embed. Actually, the best way for a simple interactive map without a key is the "share" embed link.
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.123456789!2d17.654321!3d47.654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476bc00000000001%3A0x0000000000000000!2zR3nFmXIsIErDs3pzsZWYIEF0dGlsYSB1dGNhIDk5LCA5MDI4!5e0!3m2!1sen!2shu!4v1700000000000!5m2!1sen!2shu";
  // I will use a more reliable way to generate the embed URL for that specific address.
  const addressQuery = encodeURIComponent("9028 Győr, József Attila utca 99");
  const fallbackEmbedUrl = `https://maps.google.com/maps?q=${addressQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className={`${isSubpage ? '' : 'bg-off-white py-20 md:py-32'}`}>
      <div className={isSubpage ? '' : 'container mx-auto px-6'}>
        <div className={`${isSubpage ? 'text-left mb-8' : 'text-center mb-16'}`}>
          {!isSubpage && <p className="text-xs uppercase tracking-widest text-charcoal/70 mb-2">{content.tag}</p>}
          <h2 className={`font-serif ${isSubpage ? 'text-3xl md:text-4xl' : 'text-6xl md:text-7xl'}`}>{content.title}</h2>
        </div>

        <div className={`grid grid-cols-1 ${isSubpage ? '' : 'lg:grid-cols-2'} gap-12 items-stretch`}>
          {/* Google Map */}
          <div className={`w-full ${isSubpage ? 'h-[300px]' : 'min-h-[300px] lg:h-full'} bg-charcoal/5 overflow-hidden border border-charcoal/10 grayscale contrast-125 brightness-90`}>
            <iframe
              title="Sentiment Tattoo Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src={fallbackEmbedUrl}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Details */}
          <div className={`flex flex-col justify-between space-y-8 ${isSubpage ? '' : 'lg:pl-12'}`}>
            <div className="w-full max-w-md">
              <h3 className="text-xs uppercase tracking-widest text-charcoal mb-3 flex items-center font-semibold">
                <MapPin className="w-4 h-4 mr-2" /> {content.tag === 'The Essentials' || isSubpage ? 'Location' : 'Helyszín'}
              </h3>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(content.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-forest-green/60 text-off-white py-4 px-8 text-xs uppercase tracking-widest leading-relaxed w-full text-center md:text-left hover:bg-charcoal transition-all duration-300"
              >
                {content.address}
              </a>
            </div>

            <div className="w-full max-w-md">
              <h3 className="text-xs uppercase tracking-widest text-charcoal mb-3 flex items-center font-semibold">
                <Instagram className="w-4 h-4 mr-2" /> Instagram
              </h3>
              <a 
                href={content.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-forest-green/60 text-off-white py-4 px-8 text-xs uppercase tracking-widest hover:bg-charcoal transition-all duration-300 w-full text-center md:text-left"
              >
                {content.instagramHandle}
              </a>
            </div>

            <div className="w-full max-w-md">
              <h3 className="text-xs uppercase tracking-widest text-charcoal mb-3 flex items-center font-semibold">
                <Mail className="w-4 h-4 mr-2" /> Email
              </h3>
              <a 
                href={`mailto:${content.email}`}
                className="block bg-forest-green/60 text-off-white py-4 px-8 text-xs uppercase tracking-widest hover:bg-charcoal transition-all duration-300 w-full text-center md:text-left"
              >
                {content.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
