const express = require('express');
const mongoose = require('mongoose')

const app = express();

    // configuracion archivos estaticos
app.use(express.static('public'));

    // configuracion de logger para mostrar el request en consola
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
}); 

    // configuracion para permitir cambiar HTML con metodo POST
    // a partir de la versión 4.16 de Express ha integrado su propia versión del analizador
    // por lo que no es necesario instalar body-parser como dependencia
app.use(express.urlencoded({ extended: true }));

    // configuracion DELETE y PUT
app.use((req, res, next) => {
    if (req.method === 'POST' && req.query._method) {
        req.method = req.query._method;
    }
    next();
});

    // ruta POST
app.post('/post', (req, res) => {
    res.send(`¡El HTML ha sido cambiado mediante una petición ${req.method}!`);
});

    // ruta DELETE
app.delete('/delete', (req, res) => {
    res.send('DELETE request')
});

    // ruta PUT
app.put('/put', (req, res) => {
    res.send('PUT request');
});

    // Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});


    // Conexión con Mongo
const connectToDataBase = async () => {
    try {
        const dbUrl = 'mongodb://localhost:27017//databasename';

        // configuracion mongose
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        };

        await mongoose.connect(dbUrl, dbOptions);
        console.log('Conexión establecida a MongoDB');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    };
};

    // Puerto en el que se ejecutará el servidor
const port = 3000;

    // Inicia el servidor una vez que se haya establecido la conexión a la base de datos
connectToDataBase()
    .then(() => {
        app.listen(port, () => {
            console.log(`Servidor escuchando en el puerto ${port}`);
        });
    })
    .catch((error) => {
        console.error('Error al iniciar el servidor:', error);
    });