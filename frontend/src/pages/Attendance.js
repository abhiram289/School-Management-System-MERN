import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Attendance.css";

export default function Attendance() {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });

  // Fetch saved attendance for selected date
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/attendance/${date}`
        );

        const saved = {};
        res.data.forEach((rec) => {
          saved[rec.studentId] = rec.present;
        });
        setAttendance(saved);
      } catch (err) {
        console.error("Error fetching attendance:", err);
      }
    };

    fetchAttendance();
  }, [date]);

  const handleCheckbox = (id) => {
    setAttendance((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Fetch students list
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/students");
        setStudents(res.data);
      } catch (err) {
        console.error("Error fetching students:", err);
      }
    };

    fetchStudents();
  }, []);

  const handleSave = async () => {
    try {
      const records = students.map((s) => ({
        studentId: s._id,
        name: s.name,
        roll: s.roll,
        class: s.class,
        section: s.section,
        date,
        present: attendance[s._id] || false,
      }));

      await axios.post("http://localhost:5000/api/attendance", {
        date,
        records,
      });

      alert("Attendance saved successfully!");
    } catch (err) {
      console.error("Error saving attendance:", err);
      alert("Failed to save attendance.");
    }
  };

  return (
    <div className="attendance-page fade-up">
      <header className="attendance-header">
        <h1>Attendance</h1>
        <p className="subtitle">
          Mark and manage student attendance efficiently.
        </p>
      </header>

      <div className="attendance-container">
        {/* Date Picker */}
        <div className="date-form">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="date-input"
          />
          <button onClick={handleSave}>Save Attendance</button>
        </div>

        {/* Students Table */}
        <div className="attendance-table">
          <table>
            <thead>
              <tr>
                <th>Roll</th>
                <th>Name</th>
                <th>Class</th>
                <th>Section</th>
                <th>Present</th>
              </tr>
            </thead>

            <tbody>
              {students.length === 0 ? (
                <tr>
                  <td colSpan="5" className="empty">
                    No students found.
                  </td>
                </tr>
              ) : (
                students.map((s) => (
                  <tr key={s._id}>
                    <td>{s.roll}</td>
                    <td>{s.name}</td>
                    <td>{s.class}</td>
                    <td>{s.section}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={attendance[s._id] || false}
                        onChange={() => handleCheckbox(s._id)}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
