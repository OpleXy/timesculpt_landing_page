const FAQ = () => {
  const faqs = [
    {
      question: "Hvordan kommer jeg i gang med TimeSculpt?",
      answer: (
        <>
          Registrer deg på <a href="https://workspace.timesculpt.no" className="faq-link">workspace.timesculpt.no</a> og følg vår intro-guide. 
          Vi har også utfyllende videoguider tilgjengelig på <a href="https://support.timesculpt.no/tutorials" className="faq-link">support.timesculpt.no/tutorials</a>.
        </>
      )
    },
    {
      question: "Hva er 'Utforsk historie' funksjonen?",
      answer: (
        <>
          'Utforsk historie' lar deg dykke dypt inn i ulike historiske perioder, hendelser og personer gjennom et interaktivt grensesnitt. 
          Prøv det på <a href="https://workspace.timesculpt.no/utforsk" className="faq-link">workspace.timesculpt.no/utforsk</a>.
        </>
      )
    },
    {
      question: "Er TimeSculpt gratis for elever?",
      answer: "Vi tilbyr en gratis prøveversjon for alle brukere. Skoler kan kjøpe lisenser for hele klasser eller trinn."
    },
    {
      question: "Kan jeg bruke TimeSculpt på mobilen?",
      answer: "Ja! TimeSculpt er tilgjengelig på alle enheter med en nettleser, inkludert mobiler og nettbrett."
    },
    {
      question: "Hvordan kan jeg få hjelp hvis jeg står fast?",
      answer: (
        <>
          Besøk <a href="https://support.timesculpt.no" className="faq-link">support.timesculpt.no</a> for tutorials, 
          FAQ og kontaktinformasjon til vårt supportteam.
        </>
      )
    }
  ];

  return (
    <section id="faq" className="section">
      <div className="container">
        <h2 className="section-title">Vanlige spørsmål</h2>
        <p className="section-description">
          Svar på de mest stilte spørsmålene om TimeSculpt
        </p>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
          <div className="faq-more">
            <p>Har du flere spørsmål?</p>
            <a href="https://support.timesculpt.no/faq" className="faq-link">
              Besøk vårt komplette FAQ
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;