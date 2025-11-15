import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page fade-up">

      <section className="hero">
        <div className="hero-content">
          <h1>Shaping Bright Futures Since 2005</h1>

          <p>
            Welcome to <strong>Sunrise Public School</strong> — where knowledge,
            values, and creativity come together to inspire young minds.
            Education here is not just academics, but personality, confidence,
            compassion, and character.
          </p>

          {/* HERO BUTTONS */}
          <div className="hero-buttons">
            <a href="/about" className="hero-btn primary-btn">Learn More</a>
            <a href="/contact" className="hero-btn secondary-btn">Get in Touch</a>
          </div>
        </div>
      </section>


      <section className="about-section">

        {/* Full-width image */}
        <img
          src="/images/school-about.jpg"
          alt="Sunrise Public School Building"
          className="about-image"
        />

        {/* Title + description */}
        <h2>About Our School</h2>

        <p>
          Sunrise Public School is a center for academic excellence and
          character development. Since our founding, we’ve encouraged students
          to discover their full potential — academically, creatively, and
          personally.
        </p>

      </section>


      <section className="motto fade-up">
        <h2>“Learning Today, Leading Tomorrow.”</h2>
        <p>
          Education at Sunrise inspires curiosity, compassion, and confidence —
          shaping students who grow into thoughtful, capable future leaders.
        </p>
      </section>

    </div>
  );
}
