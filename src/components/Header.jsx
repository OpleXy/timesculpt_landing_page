import { useState } from 'react';

const Header = ({ logoWithText }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo-container">
          {logoWithText ? (
            <div dangerouslySetInnerHTML={{ __html: logoWithText }} />
          ) : (
            <div>TimeSculpt</div>
          )}
        </div>
        
        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <a href="#features" className="nav-link">Funksjoner</a>
          <a href="#how-it-works" className="nav-link">Hvordan det fungerer</a>
          <a href="#testimonials" className="nav-link">Tilbakemeldinger</a>
          <a href="https://workspace.timesculpt.no/utforsk" className="nav-link">Utforsk historie</a>
          <a href="https://support.timesculpt.no/faq" className="nav-link">FAQ</a>
          <a href="https://support.timesculpt.no" className="nav-link">Support</a>
          <a href="https://workspace.timesculpt.no" className="btn btn-primary">
            Kom i gang
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="nav-mobile-btn">
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="nav-mobile-menu">
          <div className="container flex flex-col gap-4">
            <a href="#features" className="nav-link" onClick={toggleMenu}>Funksjoner</a>
            <a href="#how-it-works" className="nav-link" onClick={toggleMenu}>Hvordan det fungerer</a>
            <a href="#testimonials" className="nav-link" onClick={toggleMenu}>Tilbakemeldinger</a>
            <a href="https://workspace.timesculpt.no/utforsk" className="nav-link" onClick={toggleMenu}>Utforsk historie</a>
            <a href="https://support.timesculpt.no/faq" className="nav-link" onClick={toggleMenu}>FAQ</a>
            <a href="https://support.timesculpt.no" className="nav-link" onClick={toggleMenu}>Support</a>
            <a href="https://workspace.timesculpt.no" className="btn btn-primary" onClick={toggleMenu}>
              Kom i gang
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;