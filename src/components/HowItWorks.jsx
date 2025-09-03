const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Opprett din konto",
      description: "Registrer deg på workspace.timesculpt.no og få umiddelbar tilgang"
    },
    {
      number: 2,
      title: "Velg historisk periode",
      description: "Utforsk vårt omfattende bibliotek av historiske tidslinjer"
    },
    {
      number: 3,
      title: "Begynn å lære",
      description: "Dykk ned i historiens dybder med våre interaktive verktøy"
    }
  ];

  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <h2 className="section-title">Se TimeSculpt i aksjon</h2>
        <p className="section-description">
          Opplev hvordan TimeSculpt kan transformere måten du lærer historie på
        </p>

        <div className="video-container">
          <iframe 
            style={{ width: '100%', height: '100%', border: 'none' }}
            src="https://www.youtube.com/embed/VmaE6k6dzvM" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>

        <div className="steps-container grid grid-3">
          {steps.map((step) => (
            <div key={step.number} className="step">
              <div className="step-circle">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;