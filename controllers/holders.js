const Holder = require('../models/Holder');


const createHolder = async (req, res) => {
  try {
    const holder = new Holder(req.body);
    await holder.save();
    res.status(201).json(holder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const updateHolder = async (req, res) => {
  try {
    const holder = await Holder.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(holder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const getHolders = async (req, res) => {
  try {
    const holders = await Holder.find();
    res.json(holders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getHolderById = async (req, res) => {
  try {
    const holder = await Holder.findById(req.params.id);
    if (!holder) {
      return res.status(404).json({ message: 'Holder no encontrado' });
    }
    res.json(holder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const activateHolder = async (req, res) => {
  try {
    const holder = await Holder.findByIdAndUpdate(req.params.id, { state: '1' }, { new: true });
    res.json(holder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const deactivateHolder = async (req, res) => {
  try {
    const holder = await Holder.findByIdAndUpdate(req.params.id, { state: '0' }, { new: true });
    res.json(holder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createHolder,
  updateHolder,
  getHolders,
  getHolderById,
  activateHolder,
  deactivateHolder
};
