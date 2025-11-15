import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

export default function Dashboard() {
  // Store student + teacher count
  const [counts, setCounts] = useState({ students: 0, teachers: 0 });

  useEffect(() => {
    // Fetch total numbers from backend
    const fetchCounts = async () => {
      try {
        // Fetch all students
        const students = await axios.get("http://localhost:5000/api/students");
        // Fetch all teachers
        const teachers = await axios.get("http://localhost:5000/api/teachers");

        // Save counts to state
        setCounts({
          students: students.data.length,
          teachers: teachers.data.length,
        });

      } catch (err) {
        console.error("Error fetching counts:", err);
      }
    };

    fetchCounts();
  }, []); // Runs once when component loads

  return (
    <div className="dashboard-page fade-up">

      {/* PAGE HEADER */}
      <h1>Dashboard</h1>
      <p className="subtitle">
        Administrative overview of Sunrise Public School.
      </p>

      {/* STATS CARDS (STUDENTS / TEACHERS) */}
      <div className="stats-grid">

        {/* STUDENT COUNT CARD */}
        <div className="stat-card students fade-up">
          <div className="stat-icon">🎓</div>
          <div>
            <h2>{counts.students}</h2>
            <p>Total Students</p>
          </div>
        </div>

        {/* TEACHER COUNT CARD */}
        <div className="stat-card teachers fade-up">
          <div className="stat-icon">👩‍🏫</div>
          <div>
            <h2>{counts.teachers}</h2>
            <p>Total Teachers</p>
          </div>
        </div>

      </div>

      {/* EXTRA INFORMATION SECTION */}
      <div className="extra-section fade-up">
        <h3>School Overview</h3>
        <p>
          Use this dashboard to manage students, teachers, and keep track of
          school-wide updates efficiently.
        </p>
      </div>

    </div>
  );
}
