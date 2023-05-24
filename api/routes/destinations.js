const express = require('express');
const router = express.Router();
const Destination = require('../models/destination');

    // ruta para mostrar todos los destinos
router.get('/', async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.render('index', { destinations });
    } catch (error) {
        console.error('Error al obtener los destinos:', error);
        res.status(500).send('Error del servidor');
    }
});

    // ruta para mostrar el formulario de creacion
router.get('/new', (req, res) => {
    res.render('add');
});

    // ruta para crear un nuevo destino
router.post('/', async (req, res) => {
    try {
        await Destination.create(req.body);
        res.redirect('/');
    } catch (error) {
        console.error('Error al crear destino:', error);
        res.status(500).send('Error del servidor');
    }
});

    // ruta para buscar destino por nombre
router.get('/search', async (req, res) => {
    try {
        const { searchQuery } = req.query;
        const destinations = await Destination.find({
            name: { $regex: new RegExp(searchQuery, 'i') },
        });
        res.render('search', { destinations, searchQuery });
    } catch (error) {
        console.error('Error al buscar destino:', error);
        res.status(500).send('Error del servidor');
    }
});

module.exports = router;