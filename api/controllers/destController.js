const Destination = require('../models/destination.js');

const getDestinations = async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.status(200).json(destinations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getDestinationById = async (req, res) => {
    try {
        const { id } = req.params;
        const destination = await Destination.findById(id);
        if (!destination) {
            return res.status(404).json({ message: 'No se encontró el destino turístico' });
        }
        res.status(200).json(destination);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createDestination = async (req, res) => {
    const destination = new Destination({
        name: req.body.name,
        description: req.body.description,
        images: req.files
    });
    try {
        const newDestination = await destination.save();
        res.status(200).json(newDestination);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateDestination = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description, images } = req.body;
      const destination = await Destination.findById(id);
      if (!destination) {
        return res.status(404).json({ message: 'No se encontró el destino turístico' });
      }
  
      if (name) destination.name = name;
      if (description) destination.description = description;
      if (images) destination.images = images;
  
      const updatedDestination = await destination.save();
      res.status(200).json(updatedDestination);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'Ha ocurrido un error al actualizar el destino turístico' });
    }
  };

const deleteDestination = async (req, res) => {
    try {
        const { id } = req.params
        const destination = await Destination.findByIdAndRemove(id);
        if (!destination) {
            return res.status(404).json({ message: 'No se encontró el destino turístico' });
        }
        //await destination.remove();
        res.status(200).json(destination)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getDestinations,
    getDestinationById,
    createDestination,
    updateDestination,
    deleteDestination
}





/* 
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Directorio donde se guardarán las imágenes
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + '-' + uniqueSuffix); // Nombre del archivo
    },
  });
  
const upload = multer({ storage }); */