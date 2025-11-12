import React from "react";
import "./BatmanAbout.css";

export const About=()=>{
  return (
    <div className="about-container">
      {/* Header Section */}
      <header className="about-header">
        <h1 className="about-title">About The Batman Universe 🦇</h1>
        <p className="about-subtitle">
          Dive deep into the shadows of Gotham City — a world of justice,
          vengeance, and hope. Discover the story, creators, and vision behind
          this cinematic experience.
        </p>
      </header>

      {/* Main Content */}
      <main className="about-main">
        <img
          src="https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?q=80&w=1200&auto=format&fit=crop"
          alt="Batman Silhouette"
          className="about-image"
        />

        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            This project is crafted by passionate fans who wanted to bring the
            Dark Knight’s cinematic world to life. Every page, every image, and
            every detail pays tribute to Batman’s enduring legacy — the symbol
            of hope in a city consumed by chaos.
          </p>

          <h3>Vision</h3>
          <p>
            We aim to create a digital home for every Batman enthusiast —
            featuring movies, behind-the-scenes details, and fan-driven
            insights. It's more than a website; it's a Bat-Signal calling fans
            across the globe.
          </p>
        </div>
      </main>

      {/* Team Section */}
      {/* <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {[1, 2, 3].map((member) => (
            <div key={member} className="team-card">
              <img
                src={`https://picsum.photos/seed/team${member}/200`}
                alt="Team Member"
                className="team-photo"
              />
              <h3>Member {member}</h3>
              <p>Web Developer</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Footer */}
      <footer className="about-footer">
        <p>
          © 2025 The Batman Project — Designed with 🦇 by{" "}
          <span>Fardeen Khan</span>
        </p>
      </footer>
    </div>
  );
}
