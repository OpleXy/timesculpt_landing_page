const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-inner">
          <div>
            <h2 className="cta-title">Klar til å komme i gang?</h2>
            <p className="cta-subtitle">Begynn din historiske reise i dag.</p>
          </div>
          <div className="cta-buttons">
            <a
              href="https://workspace.timesculpt.no"
              className="btn btn-white"
            >
              Kom i gang
            </a>
            <a
              href="https://workspace.timesculpt.no/utforsk"
              className="btn btn-white"
            >
              Utforsk historie
            </a>
            <a
              href="https://support.timesculpt.no/tutorials"
              className="btn btn-transparent"
            >
              Se våre guider
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;