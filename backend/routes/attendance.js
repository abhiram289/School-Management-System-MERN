const express = require("express");
const router = express.Router();
const Attendance = require("../models/Attendance");

// Save attendance
router.post("/", async (req, res) => {
  try {
    const { date, records } = req.body;
    if (!date || !records) return res.status(400).json({ message: "Missing data" });

    // Remove old attendance for that date before saving new
    await Attendance.deleteMany({ date });

    // Save all attendance records
    await Attendance.insertMany(records);

    res.json({ message: "Attendance saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to save attendance" });
  }
});

// Fetch attendance (for viewing later)
router.get("/:date", async (req, res) => {
  try {
    const records = await Attendance.find({ date: req.params.date });
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch attendance" });
  }
});

//  Get ALL attendance records (for Student Dashboard)
router.get("/", async (req, res) => {
  try {
    const all = await Attendance.find();
    res.json(all);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch attendance records" });
  }
});


module.exports = router;
