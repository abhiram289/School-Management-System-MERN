import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page fade-up">
      <header className="about-header">
        <h1>About Sunrise Public School</h1>
        <p>Shaping bright futures with excellence and values.</p>
      </header>

      <div className="about-container">
        {/* Welcome Section */}
        <section className="about-section">
          <h2>Welcome to Sunrise Public School</h2>
          <p>
            Sunrise Public School is a leading institution dedicated to holistic
            education. Since our establishment in 2005, we have been nurturing
            students to think critically, act responsibly, and grow into
            compassionate global citizens.
          </p>
          <img
            src="/images/school-front.jpg"
            alt="School Building"
            className="about-img"
          />
        </section>

        {/* History Section */}
        <section className="about-section">
          <h2>Our History</h2>
          <p>
            What began as a small initiative by a group of passionate educators
            has now become a trusted name in quality education. Over the years,
            we have built a legacy of academic achievement, discipline, and
            character development.
          </p>
          <img
            src="/images/school-history.jpg"
            alt="Students in classroom"
            className="about-img"
          />
        </section>

        {/* Vision & Mission */}
        <section className="about-section">
          <h2>Vision & Mission</h2>
          <p>
            Our vision is to empower young minds to discover their potential
            through creativity, curiosity, and community engagement. Our mission
            is to deliver value-based education that prepares students for both
            professional and personal success.
          </p>
          <img
            src="/images/vision-mission.jpg"
            alt="School Vision"
            className="about-img"
          />
        </section>

        {/* Core Values */}
        <section className="about-section">
          <h2>Our Core Values</h2>
          <ul className="about-values">
            <li>Academic Excellence</li>
            <li>Innovation and Creativity</li>
            <li>Respect and Empathy</li>
            <li>Social Responsibility</li>
            <li>Community Service</li>
          </ul>
          <img
            src="/images/values.png"
            alt="School Values"
            className="about-img"
          />
        </section>
      </div>
    </div>
  );
}
