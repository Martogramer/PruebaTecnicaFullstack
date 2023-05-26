const express = require('express');
const destinationRoutes = require('./routes/destinations');

const app = express();

// configuracion para permitir cambiar HTML con metodo POST
// a partir de la versión 4.16 de Express ha integrado su propia versión del analizador
// por lo que no es necesario instalar body-parser como dependencia
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // configuracion archivos estaticos
app.use(express.json()); //  middleware para procesar datos JSON enviados desde el cliente.

app.use('/destinations', destinationRoutes);

export default app;