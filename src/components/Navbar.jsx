function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-content">
        <h1 className="logo">EduSmart</h1>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#courses">Courses</a>
          <a href="#teachers">Teachers</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-buttons">
          <button className="btn btn-light">Sign Up</button>
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;