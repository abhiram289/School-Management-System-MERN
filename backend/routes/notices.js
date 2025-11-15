const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Notice Schema
const noticeSchema = new mongoose.Schema({
  title: String,
  message: String,
  date: { type: Date, default: Date.now },
});

// Notice Model
const Notice = mongoose.model("Notice", noticeSchema);

// GET all notices
router.get("/", async (req, res) => {
  try {
    const notices = await Notice.find().sort({ date: -1 });
    res.json(notices);
  } catch (err) {
    console.error("Error fetching notices:", err);
    res.status(500).send("Error fetching notices");
  }
});

// POST a new notice
router.post("/", async (req, res) => {
  try {
    const { title, message } = req.body;
    const newNotice = new Notice({ title, message });
    await newNotice.save();
    res.json(newNotice);
  } catch (err) {
    console.error("Error adding notice:", err);
    res.status(500).send("Error adding notice");
  }
});

module.exports = router;
