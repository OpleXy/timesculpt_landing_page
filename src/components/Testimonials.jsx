const Testimonials = () => {
    const testimonials = [
      {
        quote: "Jeg har begynt å ta i bruk TimeSculpt aktivt i alt fra planleggingsprossesser og til når jeg skal lære meg historie.",
        author: "Oliver Kabicek, Universitetet i Sørøst-Norge"
      },
      {
        quote: "Fin og rask tjeneste som hjelper med å holde styr over prosjekter, gruppearbeid og mer.",
        author: "Leon Ace Robinson, Handelshøyskolen BI"
      }
    ];
    return (
      <section id="testimonials" className="section">
        <div className="container">
          <h2 className="section-title">Hva våre brukere sier</h2>
          <p className="section-description">
            Hør fra studenter og elever som bruker TimeSculpt daglig
          </p>
  
          <div className="grid grid-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="quote-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="quote">{testimonial.quote}</p>
                <p className="author">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;