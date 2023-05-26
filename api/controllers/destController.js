const Destination = require('../models/destination.js');

const getDestinations = async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.json(destinations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getDestinationById = async (req, res) => {
    try {
        const destination = await Destination.findById(req.params.id);
        if (destination == null) {
            return res.status(404).json({ message: 'No se encontró el destino turístico' });
        }
        res.json(destination);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createDestination = async (req, res) => {
    const destination = new Destination({
        name: req.body.name,
        description: req.body.description,
        images: req.body.images,
    });

    try {
        const newDestination = await destination.save();
        res.status(201).json(newDestination);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateDestination = async (req, res) => {
    try {
        const destination = await Destination.findById(req.params.id);
        if (destination == null) {
            return res.status(404).json({ message: 'No se encontró el destino turístico' });
        }

        if (req.body.name != null) {
            destination.name = req.body.name;
        }

        if (req.body.description != null) {
            destination.description = req.body.description;
        }

        if (req.body.images != null) {
            destination.images = req.body.images;
        }

        const updatedDestination = await destination.save();
        res.json(updatedDestination);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteDestination = async (req, res) => {
    try {
        const destination = await Destination.findById(req.params.id);
        if (destination == null) {
            return res.status(404).json({ message: 'No se encontró el destino turístico' });
        }

        await destination.remove();
        res.json({ message: 'Destino eliminado correctamente' });
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