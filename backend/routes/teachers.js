const express = require('express');
const router = express.Router();
const Teacher = require('../models/Teacher');

router.get('/', async (req, res) => {
  try {
    const teachers = await Teacher.find().sort({createdAt: -1});
    res.json(teachers);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, subject, email } = req.body;
    const teacher = new Teacher({ name, subject, email });
    await teacher.save();
    res.json(teacher);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { name, subject, email } = req.body;
    const teacher = await Teacher.findByIdAndUpdate(req.params.id, { name, subject, email }, { new: true });
    res.json(teacher);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Teacher.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Teacher removed' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
