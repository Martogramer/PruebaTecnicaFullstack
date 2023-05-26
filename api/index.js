const app = require("./app.js");
const connectToDataBase = require("./db.js")

const port = 3001;

connectToDataBase()
    .then(() => {
        app.listen(port, () => {
            console.log(`Servidor escuchando en el puerto ${port}`);
        });
    })
    .catch((error) => {
        console.error('Error al iniciar el servidor:', error);
    });