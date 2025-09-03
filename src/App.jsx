import { useState, useEffect } from 'react';
import './index.css';
import './styles/App.css';
import './styles/components.css';

// Import komponenter
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

// Import logoer
import logoSvg from './assets/timesculpt_logo_page.svg';
import logoWithTextSvg from './assets/timesculpt_logo_w_text.svg';

const App = () => {
  const [logo, setLogo] = useState(null);
  const [logoWithText, setLogoWithText] = useState(null);

  useEffect(() => {
    // Funksjon for å laste inn logoer
    const loadLogos = async () => {
      try {
        // Bruk de importerte logofilene
        setLogo(`<img src="${logoSvg}" alt="TimeSculpt" />`);
        setLogoWithText(`<img src="${logoWithTextSvg}" alt="TimeSculpt" />`);
      } catch (error) {
        console.error('Feil ved lasting av logoer:', error);
        
        // Fallback logoer hvis SVG-filene ikke kan lastes
        setLogo('<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#1ABCCF" /></svg>');
        setLogoWithText('<svg viewBox="0 0 200 50"><circle cx="25" cy="25" r="20" fill="#1ABCCF" /><text x="60" y="30" fill="#111827" font-size="20">TimeSculpt</text></svg>');
      }
    };
    
    // Kjør funksjonen for å laste inn logoer
    loadLogos();
  }, []);

  return (
    <div className="app">
      {/* Header/navigasjon */}
      <Header logoWithText={logoWithText} />
      
      {/* Hovedinnhold */}
      <main>
        {/* Hero-seksjon */}
        <Hero logo={logo} />
        
        {/* Funksjoner-seksjon */}
        <Features />
        
        {/* Hvordan det fungerer-seksjon med video */}
        <HowItWorks />
        
        {/* Tilbakemeldinger fra brukere */}
        <Testimonials />
        
        {/* Vanlige spørsmål */}
        <FAQ />
        
        {/* Call to action */}
        <CTA />
      </main>
      
      {/* Footer */}
      <Footer logoWithText={logoWithText} />
    </div>
  );
};

export default App;