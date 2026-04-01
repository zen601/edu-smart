const features = [
  {
    icon: "🟩",
    title: "Easy Lessons",
    text: "Simple and clear lessons for students who are just starting.",
  },
  {
    icon: "🧑‍🏫",
    title: "Friendly Teachers",
    text: "Supportive teachers who explain step by step.",
  },
  {
    icon: "💻",
    title: "Practice Projects",
    text: "Students build real small projects after each lesson.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section" id="teachers">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Us</h2>
          <p>We help students learn with confidence</p>
        </div>

        <div className="features-grid">
          {features.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;