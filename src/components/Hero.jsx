const Hero = ({ logo }) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <h1>Reis gjennom historien med TimeSculpt</h1>
            <p className="hero-subtitle">
              Det perfekte læringsverktøyet for historieelever fra barneskolen og oppover. 
              Visualiser, utforsk og forstå historiens gang på en helt ny måte.
            </p>
            <div className="hero-buttons">
              <a href="https://workspace.timesculpt.no" className="btn btn-primary">
                Start workspace
                <svg style={{ marginLeft: '0.5rem' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
              <a href="https://workspace.timesculpt.no/utforsk" className="btn btn-secondary">
                Utforsk historie
                <svg style={{ marginLeft: '0.5rem' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
              <a href="#how-it-works" className="btn btn-outline">
                Hvordan fungerer TimeSculpt?
                <svg style={{ marginLeft: '0.5rem' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 5l7 7-7 7"></path>
                </svg>  
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;