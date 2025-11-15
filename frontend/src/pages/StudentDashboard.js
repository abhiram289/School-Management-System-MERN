import React, { useEffect, useState } from "react";
import axios from "axios";
import "./StudentDashboard.css";

export default function StudentDashboard() {
  const roll = localStorage.getItem("studentRoll");

  const [student, setStudent] = useState(null);
  const [notices, setNotices] = useState([]);

  // Hardcoded exams (you can later move this to MongoDB)
  const upcomingExams = [
    { subject: "Mathematics", date: "2025-11-20", time: "10:00 AM" },
    { subject: "Science", date: "2025-11-22", time: "9:30 AM" },
    { subject: "English", date: "2025-11-24", time: "11:00 AM" },
  ];

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/students");
        const match = res.data.find((s) => String(s.roll) === String(roll));
        setStudent(match);
      } catch (err) {
        console.error("Error fetching student:", err);
      }
    };

    const fetchNotices = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/notices");
        setNotices(res.data);
      } catch (err) {
        console.error("Error loading notices:", err);
      }
    };

    fetchStudent();
    fetchNotices();
  }, [roll]);

  return (
    <div className="student-dashboard fade-up">
      <h1 className="title">Student Dashboard</h1>

      {/* PROFILE CARD */}
      {student && (
        <div className="profile-card">
          <img
            src="/images/default-avatar.png"
            alt="Profile"
            className="profile-pic"
          />

          <h2>{student.name}</h2>

          <div className="details">
            <p><strong>Roll Number:</strong> {student.roll}</p>
            <p><strong>Class:</strong> {student.class}</p>
            <p><strong>Section:</strong> {student.section}</p>
          </div>
        </div>
      )}

      {/* UPCOMING EXAMS */}
      <div className="section">
        <h2 className="section-title">Upcoming Exams</h2>

        <div className="big-card">
          {upcomingExams.map((exam, i) => (
            <div key={i} className="exam-card">
              <h3>{exam.subject}</h3>
              <p><strong>Date:</strong> {exam.date}</p>
              <p><strong>Time:</strong> {exam.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ANNOUNCEMENTS */}
      <div className="section">
        <h2 className="section-title">Announcements</h2>

        <div className="big-card">
          {notices.length === 0 ? (
            <p className="empty">No announcements available.</p>
          ) : (
            notices.map((n) => (
              <div key={n._id} className="notice">
                <div className="notice-head">
                  <h3>{n.title}</h3>
                </div>
                <p>{n.message}</p>
              </div>
            ))
          )}
        </div>
      </div>

    </div>
  );
}
