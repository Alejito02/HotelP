const Laptop = require('../models/Laptop');


const createLaptop = async (req, res) => {
  try {
    const laptop = new Laptop(req.body);
    await laptop.save();
    res.status(201).json(laptop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const updateLaptop = async (req, res) => {
  try {
    const laptop = await Laptop.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(laptop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const getLaptops = async (req, res) => {
  try {
    const laptops = await Laptop.find().populate('holder');
    res.json(laptops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getLaptopById = async (req, res) => {
  try {
    const laptop = await Laptop.findById(req.params.id).populate('holder');
    if (!laptop) {
      return res.status(404).json({ message: 'Laptop no encontrado' });
    }
    res.json(laptop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const activateLaptop = async (req, res) => {
  try {
    const laptop = await Laptop.findByIdAndUpdate(req.params.id, { state: '1' }, { new: true });
    res.json(laptop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const deactivateLaptop = async (req, res) => {
  try {
    const laptop = await Laptop.findByIdAndUpdate(req.params.id, { state: '0' }, { new: true });
    res.json(laptop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createLaptop,
  updateLaptop,
  getLaptops,
  getLaptopById,
  activateLaptop,
  deactivateLaptop
};
