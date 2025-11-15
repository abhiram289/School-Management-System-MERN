import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Notices.css";

export default function Notices() {
  const [form, setForm] = useState({ title: "", message: "" });
  const [notices, setNotices] = useState([]);

  const fetch = () =>
    axios
      .get("http://localhost:5000/api/notices")
      .then((res) => setNotices(res.data))
      .catch(() => {});

  useEffect(() => {
    fetch();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.message.trim()) return;
    await axios.post("http://localhost:5000/api/notices", form);
    setForm({ title: "", message: "" });
    fetch();
  };

  return (
    <div className="notices-page fade-up">
      <div className="notices-card fade-up">
        <h2>📢 School Notices</h2>
        <p className="subtitle">
          Stay updated with the latest announcements and news from Sunrise Public School.
        </p>

        <form onSubmit={submit}>
          <input
            placeholder="Notice Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
          <textarea
            placeholder="Notice Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows="4"
            required
          ></textarea>
          <button type="submit">Add Notice</button>
        </form>
      </div>

      <div className="notices-list fade-up">
        <h3>Recent Notices</h3>
        {notices.length === 0 ? (
          <p className="empty">No notices yet.</p>
        ) : (
          <ul>
            {notices.map((n) => (
              <li key={n._id} className="notice-item">
                <div className="notice-header">
                  <h4>{n.title}</h4>
                  <span className="date">
                    {new Date(n.date).toLocaleDateString()}
                  </span>
                </div>
                <p>{n.message}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
