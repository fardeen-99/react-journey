import {NavLink} from React
export const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Gotham</h1>
          <p className="hero-subtitle">
            Step into the shadows and explore the cinematic legacy of the Dark
            Knight. Discover his journey, his allies, and his enemies.
          </p>
          <NavLink to="/movie" className="hero-btn">
            Explore Movies
          </NavLink>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Join the Night?</h2>
        <p>
          Explore Gotham’s greatest stories and experience the legend of Batman
          like never before.
        </p>
        <NavLink to="/about" className="cta-btn">
          Learn More
        </NavLink>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>© 2025 Gotham Studio — Made with 🦇 by <span>Fardeen Khan</span></p>
      </footer>
    </div>
  );
};
