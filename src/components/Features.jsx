const Features = () => {
  const features = [
    {
      title: "Interaktiv Tidslinje",
      description: "Utforsk historiske hendelser på en visuelt engasjerende måte",
      image: "/interaktiv.png"
    },
    {
      title: "Utforsk historie",
      description: "Dykk dypt inn i historiske perioder med vårt dedikerte utforskningsverktøy",
      image: "/utforsk.png",

    },
    {
      title: "Generer Tidslinjer med AI",
      description: "Generer tidslinjer og hendelser",
      image: "/generer.png"
    },
    {
      title: "På et klikk",
      description: "Bruk vår AI til å lage en tidslinje på et klikk, eller tweek den selv til du er fornøyd",
      image: "/ai.png"
    }
  ];

  return (
    <section id="features" className="section">
      <div className="container">
        <h2 className="section-title">Kraftige verktøy for historieutforskning</h2>
        <p className="section-description">
          TimeSculpt gir deg alt du trenger for å mestre historiepensumet ditt
        </p>

        <div className="grid grid-2">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              {feature.link ? (
                <a href={feature.link} className="feature-link">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="feature-image" 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400' preserveAspectRatio='none'%3E%3Crect fill='%23f5f5f5' width='800' height='400' /%3E%3Ctext fill='%23aaa' font-family='system-ui, sans-serif' font-size='30' text-anchor='middle' x='400' y='200'%3E" + feature.title + "%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </a>
              ) : (
                <>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="feature-image" 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400' preserveAspectRatio='none'%3E%3Crect fill='%23f5f5f5' width='800' height='400' /%3E%3Ctext fill='%23aaa' font-family='system-ui, sans-serif' font-size='30' text-anchor='middle' x='400' y='200'%3E" + feature.title + "%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;