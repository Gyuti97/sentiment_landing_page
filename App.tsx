
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Specialization from './components/Specialization';
import Contact from './components/Contact';
import Inquiry from './components/Inquiry';
import Footer from './components/Footer';
import Info from './components/Info';
import Booking from './components/Booking';
import About from './components/About';
import Gallery from './components/Gallery';

/**
 * HOW TO CHANGE PICTURES:
 * 1. Find the section you want to update (e.g., philosophy, about, gallery).
 * 2. Replace the 'url' or 'image' string with your own image link.
 * 3. You can use services like postimg.cc or imgur.com to host your pictures.
 */

const content = {
  en: {
    header: {
      topBanner: "Let's create something permanent, shall we?",
      nav: {
        info: 'Info',
        booking: 'Booking',
        about: 'About Me',
        gallery: 'Gallery',
      }
    },
    hero: {
      title: 'SENTIMENT',
      subtitle: 'Ink as intimate as memory.',
      image: 'https://i.postimg.cc/1zcT63ty/IMG-7542.jpg',
    },
    philosophy: {
      tag: 'Our Approach',
      title: 'A Canvas for Feeling',
      quote: 'Where every line holds a story you want to tell.',
      body: "You've come to the right place. We believe a tattoo is more than ink; it's a permanent reflection of a moment, a feeling, a part of you. Our process is a quiet collaboration, designed to translate your inner world into a piece of art that feels both timeless and deeply personal.",
      button: 'About Me',
      image: 'https://i.postimg.cc/XvpLNNCR/IMG-5783.jpg',
    },
    specialization: {
      tag: 'Specializing In',
      title: 'OUR CRAFT',
      button: 'Gallery',
      images: [
        { url: 'https://i.postimg.cc/9fkw1hPM/IMG_0666.jpg', alt: 'Delicate tattoo work' },
        { url: 'https://i.postimg.cc/W4yqSvmR/Full_Size_Render.jpg', alt: 'Studio atmosphere' },
        { url: 'https://i.postimg.cc/gc84wSdz/IMG_2159_Bn_W.jpg', alt: 'Fine line details' },
      ]
    },
    contact: {
      tag: 'Find Us',
      title: 'Location',
      address: '9028 Győr, József Attila utca 99.',
      instagram: 'https://www.instagram.com/sentimentsocialclub/',
      instagramHandle: '@sentimentsocialclub',
      email: 'sentimentink@gmail.com',
    },
    inquiry: {
      title: 'Begin a Conversation',
      body: 'Your story is unique, and your tattoo should be too. We invite you to share your vision with us. Whether a fully formed concept or a fleeting feeling, let\'s begin the collaborative process of creating a piece of art that will resonate for a lifetime.',
      button: 'Book Now',
    },
    info: {
      tag: 'The Essentials',
      title: 'INFORMATION',
      sections: [
        {
          title: 'Booking Deposit',
          content: [
            'A deposit is mandatory in all cases. I will send a link once we have found a suitable appointment. This will be deducted from the final price.',
            'Your appointment is valid from the moment the deposit arrives.',
            '• small design: 8,000 HUF',
            '• from 10 cm: 10,000 HUF',
            '• large tattoo: 40% of the pre-agreed price'
          ]
        },
        {
          title: 'General Pricing',
          content: [
            '<strong>minis:</strong> from 18,000 HUF base price',
            '<strong>small up to 10cm:</strong> 18,000 - 40,000 HUF depending on complexity (from fine line to portrait)',
            '<strong>large:</strong> for designs covering almost or entirely a body part over 10 cm, the price will be discussed individually.',
            'I can give a more specific quote once we have finalized the specific design.'
          ]
        },
        {
          title: 'Custom Tattoo & Design',
          content: [
            '<strong>Design Consultation (approx. 40-60 mins):</strong> Want a tattoo but don\'t know what? It\'s my job to realize it for you. Book an appointment to sit down and together we\'ll figure out from a half-baked idea or just a style you like what will truly suit you.',
            '6,000 HUF / session + the design process fee depending on how many hours it takes.',
            'Small "found online" tattoos: I redesign these by default, I don\'t tattoo copies of other artists\' work – this is done at no extra charge.'
          ]
        },
        {
          title: 'Fine, Faded, Forever',
          content: [
            '<strong>fineline:</strong> it has a quality of looking amazing, but also a tendency to fade. I\'m happy to touch it up for the cost of materials; I think it\'s worth coming back 1-2 times, then it stays in and we end up with a beautiful fine-line tattoo for life.'
          ]
        },
        {
          title: 'Attendance & Rescheduling',
          content: [
            'Deposits are non-refundable. In case of illness or extreme circumstances, I will apply it to your new appointment.',
            'If you simply cannot make it, don\'t feel like it, etc., and want to book a new time because it\'s more convenient, that requires a new deposit.',
            'We discuss and fix the design in advance. I send the design three days before, and only minor modifications are possible on the day.',
            '<strong>Important!</strong> If you think of more designs you want, I can only give a new appointment for those; I cannot take on random ideas on the day.'
          ]
        }
      ],
      footerMessage: 'LET\'S CREATE SOMETHING BEAUTIFUL, PROFESSIONAL AND ETERNAL ❤️'
    },
    booking: {
      tag: 'The First Step',
      title: 'BOOKING INQUIRY',
      body: 'Thank you for your interest in creating with us. Please fill out the form below with as much detail as possible. This is the first step in our collaborative process. We review submissions periodically and will respond within 5-7 business days if your project aligns with our artistic direction.',
      formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfrAmnBiQ6C4_2Vpj1rmJWTSZanVBizE9F1T7fBcBChyhKuSw/viewform?embedded=true'
    },
    about: {
      tag: 'Meet the Artist: Regina Árvai',
      title: 'ABOUT ME',
      artistName: 'Regina Árvai',
      artistBio: "My journey with ink began as a search for a way to make the intangible permanent. I specialize in delicate, meaningful pieces that resonate with the individual's story.\n\nEvery tattoo I create is a collaborative effort. I believe in taking the time to understand the sentiment behind the request, ensuring that the final piece is not just art on skin, but a part of who you are.",
      artistImage: 'https://i.postimg.cc/KjwFV8tb/IMG-7126.jpg',
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Sentiment Tattoo Studio. All Rights Reserved.`,
    },
    gallery: {
      tag: 'The Portfolio',
      title: 'GALLERY',
      images: [
        { url: 'https://i.postimg.cc/KYW3Q27B/IMG_9123.jpg', alt: 'Tattoo work 1' },
        { url: 'https://i.postimg.cc/pdS5kHQd/IMG_0474.jpg', alt: 'Tattoo work 2' },
        { url: 'https://i.postimg.cc/YSPL8HN4/IMG_4797.jpg', alt: 'Tattoo work 3' },
        { url: 'https://i.postimg.cc/N0n2bc8T/IMG_5530.jpg', alt: 'Tattoo work 4' },
        { url: 'https://i.postimg.cc/gc84wSdz/IMG_2159_Bn_W.jpg', alt: 'Tattoo work 5' },
        { url: 'https://i.postimg.cc/bYkLGC8n/IMG_8936_Bn_W.jpg', alt: 'Tattoo work 6' },
      ]
    },
  },
  hu: {
    header: {
      topBanner: 'Alkossunk valami maradandót, rendben?',
      nav: {
        info: 'Infó',
        booking: 'Foglalás',
        about: 'Rólam',
        gallery: 'Galéria',
      }
    },
    hero: {
      title: 'SENTIMENT',
      subtitle: 'Tinta, oly meghitt, mint egy emlék.',
      image: 'https://i.postimg.cc/1zcT63ty/IMG-7542.jpg',
    },
    philosophy: {
      tag: 'Megközelítésünk',
      title: 'Vászon az Érzéseknek',
      quote: 'Ahol minden vonal egy történetet rejt, amit el akarsz mesélni.',
      body: 'A legjobb helyen jársz. Hisszük, hogy egy tetoválás több, mint tinta; egy pillanat, egy érzés, egy részed maradandó tükörképe. Folyamatunk egy csendes együttműködés, melynek célja, hogy belső világodat egy olyan műalkotássá alakítsuk, ami időtlennek és mélyen személyesnek érződik.',
      button: 'Rólam',
      image: 'https://i.postimg.cc/XvpLNNCR/IMG-5783.jpg',
    },
    specialization: {
      tag: 'Szakterületünk',
      title: 'PORTFOLIO',
      button: 'Galéria',
      images: [
        { url: 'https://i.postimg.cc/9fkw1hPM/IMG_0666.jpg', alt: 'Finom tetoválás' },
        { url: 'https://i.postimg.cc/W4yqSvmR/Full_Size_Render.jpg', alt: 'Stúdió hangulat' },
        { url: 'https://i.postimg.cc/gc84wSdz/IMG_2159_Bn_W.jpg', alt: 'Részletgazdag munka' },
      ]
    },
    contact: {
      tag: 'Találj ránk',
      title: 'Helyszín',
      address: '9028 Győr, József Attila utca 99.',
      instagram: 'https://www.instagram.com/sentimentsocialclub/',
      instagramHandle: '@sentimentsocialclub',
      email: 'sentimentink@gmail.com',
    },
    inquiry: {
      title: 'Kezdeményezz Beszélgetést',
      body: 'A te történeted egyedi, és a tetoválásodnak is annak kell lennie. Meghívunk, hogy oszd meg velünk elképzelésedet. Legyen szó egy teljesen kidolgozott koncepcióról vagy egy röpke érzésről, kezdjük el együtt egy olyan műalkotás megteremtésének folyamatát, amely egy életen át visszhangra talál.',
      button: 'Foglalás Most',
    },
    info: {
      tag: 'A Lényeg',
      title: 'INFORMÁCIÓ',
      sections: [
        {
          title: 'Foglaló',
          content: [
            'Foglaló minden esetben kötelező. Küldök linket, amikor megtaláltuk a megfelelő időpontodat. Ez levonódik a végösszegből.',
            'Amint megérkezik hozzám, onnantól érvényes az időpontod.',
            '• kis minta: 8.000 Ft',
            '• 10 cm-től: 10.000 Ft',
            '• nagy tetkó: az előre megbeszélt ár 40%-a'
          ]
        },
        {
          title: 'Árazás általában',
          content: [
            '<strong>minik:</strong> 18.000 Ft alapártól',
            '<strong>kicsik 10cm-ig:</strong> 18-40.000 Ft komplexitástól függően (egyvonalastól portréig)',
            '<strong>nagyok:</strong> 10 cm felett egy testrészedet majdnem vagy teljesen lefedő minták árát egyénileg beszéljük meg.',
            'Ennél konkrétabbat akkor tudok mondani, ha kitaláltuk a konkrét tetkód.'
          ]
        },
        {
          title: 'Egyedi Tetkó és Tervezés',
          content: [
            '<strong>Megtervezős Összeülés (kb. 40-60 perc):</strong> Szeretnél tetkót de nem tudod mit? Ezt az én dolgom Neked megvalósítani. Foglalj egy időpontot arra, hogy leüljünk és együtt kitaláljuk a félkész ötletből vagy csak tetsző stílusból, hogy mi lesz az igazán Neked való.',
            '6.000 Ft / alkalom + a tervezési folyamat díja attól függően, hány órát vesz majd igénybe.',
            'Kis "kinéztem online" tetkók: ezeket alapból áttervezem, nem varrok fel olyat, amit csak lemásolunk – felár nélkül.'
          ]
        },
        {
          title: 'Vékonyan, halványan, tartósan',
          content: [
            '<strong>fineline:</strong> van egy olyan tulajdonsága, hogy bombajól néz ki, meg egy olyan, hogy szeret kikopni. Anyagárban átütöm szívesen, szerintem megéri 1-2-szer visszajönni, utána bennemarad és ugyanott kötünk ki, hogy egész életedre van egy szép finomvonalas tetkód.'
          ]
        },
        {
          title: 'Megjelenés és Halasztás',
          content: [
            'A foglaló nem jár vissza. Betegség és extrém esetekben az új időpontodhoz hozzárakom.',
            'Ha csak nem tudsz eljönni, nincs kedved, egyéb, és újat foglalnál mert máskor kényelmesebb, az új foglalót jelent.',
            'Előre megbeszéljük és fixáljuk mi lesz a minta. Három nappal előtte küldöm a tervet, aznap egy picit még lehet módosítani.',
            '<strong>Fontos!</strong> Ha még eszedbe jut pár minta amit szeretnél, arra majd új időpontot fogok tudni adni, aznap nem tudok még random ötleteket vállalni.'
          ]
        }
      ],
      footerMessage: 'HOZZUNK LÉTRE VALAMI GYÖNYÖRŰT, PROFIT ÉS ÖRÖKKÉVALÓT ❤️'
    },
    booking: {
      tag: 'Az Első Lépés',
      title: 'FOGLALÁS',
      body: 'Köszönjük érdeklődésedet, hogy velünk szeretnél alkotni. Kérjük, töltsd ki az alábbi űrlapot a lehető legrészletesebben. Ez a közös folyamatunk első lépése. Az ajánlatkéréseket időszakosan bíráljuk el, és 5-7 munkanapon belül válaszolunk, ha a projekt illeszkedik művészi irányzatunkhoz.',
      formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfrAmnBiQ6C4_2Vpj1rmJWTSZanVBizE9F1T7fBcBChyhKuSw/viewform?embedded=true' // IMPORTANT: Replace with your Hungarian Google Form URL
    },
    about: {
      tag: 'Ismerd meg a művészt: Árvai Regina',
      title: 'RÓLAM',
      artistName: 'Árvai Regina',
      artistBio: "A tintával való utazásom keresésként indult, hogy megtaláljam a módját a megfoghatatlan maradandóvá tételének. Finom, jelentőségteljes alkotásokra specializálódtam, amelyek rezonálnak az egyén történetével.\n\nMinden tetoválás, amit készítek, egy közös munka eredménye. Hiszek abban, hogy időt kell szánni a kérés mögötti érzés megértésére, biztosítva, hogy a végső darab ne csak művészet legyen a bőrön, hanem részeddé váljon.",
      artistImage: 'https://i.postimg.cc/KjwFV8tb/IMG-7126.jpg',
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Sentiment Tattoo Studio. Minden jog fenntartva.`,
    },
    gallery: {
      tag: 'A Portfólió',
      title: 'GALÉRIA',
      images: [
        { url: 'https://i.postimg.cc/KYW3Q27B/IMG_9123.jpg', alt: 'Tetoválás 1' },
        { url: 'https://i.postimg.cc/pdS5kHQd/IMG_0474.jpg', alt: 'Tetoválás 2' },
        { url: 'https://i.postimg.cc/YSPL8HN4/IMG_4797.jpg', alt: 'Tetoválás 3' },
        { url: 'https://i.postimg.cc/N0n2bc8T/IMG_5530.jpg', alt: 'Tetoválás 4' },
        { url: 'https://i.postimg.cc/gc84wSdz/IMG_2159_Bn_W.jpg', alt: 'Tetoválás 5' },
        { url: 'https://i.postimg.cc/bYkLGC8n/IMG_8936_Bn_W.jpg', alt: 'Tetoválás 6' },
      ]
    },
  }
};


const App: React.FC = () => {
  const [page, setPage] = useState('main');
  const [language, setLanguage] = useState<'en' | 'hu'>('en');
  const [scrollToAnchor, setScrollToAnchor] = useState('');

  // Effect to handle scrolling to anchors on the main page
  useEffect(() => {
    if (page === 'main' && scrollToAnchor) {
      // Use a short timeout to ensure the main page components are rendered
      setTimeout(() => {
        const element = document.getElementById(scrollToAnchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setScrollToAnchor(''); // Reset after scrolling
      }, 100);
    }
  }, [page, scrollToAnchor]);
  
  const currentContent = content[language];

  const navigate = (targetPage: string, anchor: string = '') => {
    if (targetPage !== page) {
      setPage(targetPage);
      window.scrollTo(0, 0); // Scroll to top on page change
    } else if (anchor) { // if on the same page, just scroll
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    if (anchor && targetPage === 'main') {
      setScrollToAnchor(anchor);
    }
  };

  const renderMainPage = () => (
    <>
      <Hero content={currentContent.hero} />
      <Philosophy navigate={navigate} content={currentContent.philosophy} />
      <Inquiry navigate={navigate} content={currentContent.inquiry} />
      <Specialization navigate={navigate} content={currentContent.specialization}/>
      <Contact content={currentContent.contact} />
    </>
  );
  
  const renderPage = () => {
    switch (page) {
      case 'info':
        return <Info content={currentContent.info} contact={currentContent.contact} />;
      case 'booking':
        return <Booking content={currentContent.booking} />;
      case 'about':
        return <About content={currentContent.about} />;
      case 'gallery':
        return <Gallery content={currentContent.gallery} />;
      default:
        return renderMainPage();
    }
  }

  return (
    <div className="bg-off-white font-sans text-charcoal overflow-x-clip">
      <Header 
        navigate={navigate} 
        content={currentContent.header} 
        setLanguage={setLanguage}
        currentLanguage={language}
      />
      <main>
        {renderPage()}
      </main>
      <Footer content={currentContent.footer} />
    </div>
  );
};

export default App;
