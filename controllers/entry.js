const Entry = require('../models/entry');


const createEntry = async (req, res) => {
  try {
    const entry = new Entry(req.body);
    await entry.save();
    res.status(201).json(entry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const getEntriesByHolder = async (req, res) => {
  try {
    const entries = await Entry.find({ holder: req.params.id }).populate('laptop');
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getEntriesByDay = async (req, res) => {
  try {
    const day = new Date(req.params.dia);
    const entries = await Entry.find({
      entrytime: {
        $gte: day.setHours(0, 0, 0, 0),
        $lt: day.setHours(23, 59, 59, 999)
      }
    }).populate('laptop');
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getEntriesBetweenDates = async (req, res) => {
  try {
    const { start, end } = req.query;
    const entries = await Entry.find({
      entrytime: {
        $gte: new Date(start),
        $lte: new Date(end)
      }
    }).populate('laptop');
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const registerCheckout = async (req, res) => {
  try {
    const entry = await Entry.findByIdAndUpdate(req.params.id, { checkout: Date.now() }, { new: true });
    res.json(entry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createEntry,
  getEntriesByHolder,
  getEntriesByDay,
  getEntriesBetweenDates,
  registerCheckout
};
