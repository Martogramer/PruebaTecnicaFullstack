const express = require('express');
const router = express.Router();
const Destination = require('../controllers/destController');

// Ruta para obtener todos los destinos turísticos
router.get('/', Destination.getDestinations);

// Ruta para obtener un destino turístico por su ID
router.get('/:id', Destination.getDestinationById);

// Ruta para crear un nuevo destino turístico
router.post('/', Destination.createDestination);

// Ruta para actualizar un destino turístico
router.patch('/:id', Destination.updateDestination);

// Ruta para eliminar un destino
router.delete('/:id', Destination.deleteDestination);


module.exports = router;