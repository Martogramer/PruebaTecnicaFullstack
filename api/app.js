const express = require('express');
const destinationRoutes = require('./routes/destinations');
const cors = require('cors')
const app = express();

// a partir de la versión 4.16 de Express ha integrado su propia versión del analizador
// por lo que no es necesario instalar body-parser como dependencia
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.use('/destinations', destinationRoutes);

module.exports = app;