import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page fade-up">

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p className="subtitle">
          We’re here to help! Reach out to the right department for assistance
          or information.
        </p>
      </div>
      <div className="contact-details fade-up">

        {/* Address */}
        <div className="contact-card">
          <h2>🏫 School Address</h2>
          <p>Sunrise Public School</p>
          <p>12, Green Meadows Road, Jayanagar, Bangalore - 560041</p>
        </div>

        {/* Reception */}
        <div className="contact-card">
          <h2>☎️ Front Office / Reception</h2>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> frontdesk@sunrise.edu.in</p>
          <p>Available on weekdays from 8:00 AM to 4:00 PM.</p>
        </div>

        {/* Admissions */}
        <div className="contact-card">
          <h2>📝 Admissions Office</h2>
          <p><strong>Phone:</strong> +91 91234 56789</p>
          <p><strong>Email:</strong> admissions@sunrise.edu.in</p>
          <p>For new student enrollment and admission-related queries.</p>
        </div>

        {/* General inquiries */}
        <div className="contact-card">
          <h2>💬 General Inquiries</h2>
          <p><strong>Email:</strong> info@sunrise.edu.in</p>
          <p><strong>Website:</strong> www.sunrise.edu.in</p>
        </div>

      </div>

      <div className="contact-footer">
        <p>
          📍 <strong>Office Hours:</strong> Monday to Friday, 8:00 AM – 4:00 PM
        </p>
        <p>We look forward to hearing from you!</p>
      </div>

    </div>
  );
}
