const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// GET all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find().sort({createdAt: -1});
    res.json(students);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// POST create student
router.post('/', async (req, res) => {
  try {
    const { name, roll, class: cls, section } = req.body;
    const student = new Student({ name, roll, class: cls, section });
    await student.save();
    res.json(student);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// PUT update
router.put('/:id', async (req, res) => {
  try {
    const { name, roll, class: cls, section } = req.body;
    const student = await Student.findByIdAndUpdate(req.params.id, { name, roll, class: cls, section }, { new: true });
    res.json(student);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Student removed' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
