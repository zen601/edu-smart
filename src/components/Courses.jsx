const courses = [
  {
    level: "Beginner",
    title: "Frontend Basics",
    description: "Learn HTML, CSS, JavaScript and React basics.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    level: "Intermediate",
    title: "UI Design Essentials",
    description: "Understand layout, colors, spacing and user experience.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    level: "All Levels",
    title: "Team Project Practice",
    description: "Build small projects with your classmates step by step.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
];

function Courses() {
  return (
    <section className="courses-section" id="courses">
      <div className="container">
        <div className="section-header">
          <h2>Popular Courses</h2>
          <p>Choose a course and start building your skills</p>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <img src={course.image} alt={course.title} className="course-image" />
              <div className="course-content">
                <span className="course-level">{course.level}</span>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <button className="btn btn-primary small">Join Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;