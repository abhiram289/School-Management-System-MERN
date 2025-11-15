import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Teachers.css";

export default function Teachers() {
  const [form, setForm] = useState({ name: "", subject: "", email: "" });
  const [teachers, setTeachers] = useState([]);

  const fetchTeachers = async () => {
    const res = await axios.get("http://localhost:5000/api/teachers");
    setTeachers(res.data);
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.subject.trim()) return;
    await axios.post("http://localhost:5000/api/teachers", form);
    setForm({ name: "", subject: "", email: "" });
    fetchTeachers();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/teachers/${id}`);
    fetchTeachers();
  };

  return (
    <div className="teachers-page fade-up">
      <div className="teachers-header">
        <h1>Teachers</h1>
        <p className="subtitle">
          Manage your school’s faculty information and subjects taught.
        </p>
      </div>

      <div className="teachers-form">
        <form onSubmit={handleAdd}>
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <div className="btn-group">
            <button type="submit">Add Teacher</button>
            <button
              type="button"
              className="clear-btn"
              onClick={() => setForm({ name: "", subject: "", email: "" })}
            >
              Clear
            </button>
          </div>
        </form>
      </div>

      <div className="teachers-table">
        <h2>All Teachers</h2>
        {teachers.length === 0 ? (
          <p className="empty">No teachers added yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Subject</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((t) => (
                <tr key={t._id}>
                  <td>{t.name}</td>
                  <td>{t.subject}</td>
                  <td>{t.email}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(t._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
