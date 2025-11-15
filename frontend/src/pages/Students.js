import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Students.css";

export default function Students() {
  const [form, setForm] = useState({ name: "", roll: "", class: "", section: "" });
  const [students, setStudents] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:5000/api/students");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.class.trim()) return;

    if (editingId) {
      await axios.put(`http://localhost:5000/api/students/${editingId}`, form);
      setEditingId(null);
    } else {
      await axios.post("http://localhost:5000/api/students", form);
    }

    setForm({ name: "", roll: "", class: "", section: "" });
    fetchStudents();
  };

  const handleEdit = (student) => {
    setForm({
      name: student.name,
      roll: student.roll,
      class: student.class,
      section: student.section,
    });
    setEditingId(student._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/students/${id}`);
    fetchStudents();
  };

  return (
    <div className="students-page fade-up">
      <div className="students-header">
        <h1>Students</h1>
        <p className="subtitle">
          Manage all enrolled students — add, edit, or remove records easily.
        </p>
      </div>

      <div className="students-form">
        <form onSubmit={handleAdd}>
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Roll"
            value={form.roll}
            onChange={(e) => setForm({ ...form, roll: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Class"
            value={form.class}
            onChange={(e) => setForm({ ...form, class: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Section"
            value={form.section}
            onChange={(e) => setForm({ ...form, section: e.target.value })}
            required
          />

          <div className="btn-group">
            <button type="submit">{editingId ? "Update Student" : "Add Student"}</button>
            <button
              type="button"
              className="clear-btn"
              onClick={() => {
                setForm({ name: "", roll: "", class: "", section: "" });
                setEditingId(null);
              }}
            >
              Clear
            </button>
          </div>
        </form>
      </div>

      <div className="students-table">
        <h2>All Students</h2>
        {students.length === 0 ? (
          <p className="empty">No students added yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll</th>
                <th>Class</th>
                <th>Section</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s._id}>
                  <td>{s.name}</td>
                  <td>{s.roll}</td>
                  <td>{s.class}</td>
                  <td>{s.section}</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleEdit(s)}>
                      Edit
                    </button>
                    <button className="delete-btn" onClick={() => handleDelete(s._id)}>
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
