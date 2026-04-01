function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-small-title">Start learning today</p>
          <h2>Improve your skills with online courses</h2>
          <p className="hero-description">
            Learn programming, design, and teamwork with simple projects and
            clear lessons for beginners.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary large">Get Started</button>
            <button className="btn btn-gray large">View Courses</button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
            alt="Students learning together"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;