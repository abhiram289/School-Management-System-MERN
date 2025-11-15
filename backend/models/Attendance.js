const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  date: { type: String, required: true },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  name: String,
  roll: Number,
  class: String,
  section: String,
  present: Boolean,
});

module.exports = mongoose.model("Attendance", attendanceSchema);
