import app from "./app.js";
import connectToDataBase from "./db.js"

const port = 3000;

connectToDataBase()
    .then(() => {
        app.listen(port, () => {
            console.log(`Servidor escuchando en el puerto ${port}`);
        });
    })
    .catch((error) => {
        console.error('Error al iniciar el servidor:', error);
    });