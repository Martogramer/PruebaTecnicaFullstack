const mongoose = require('mongoose')
const config = require('./dbconfig.js')

const connectToDataBase = async () => {
    try {
        const dbOptions = await mongoose.connect(config.mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        dbOptions.connection.on('connected', () => {
            console.log('Conexión exitosa a MongoDB');
          });
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    };
};

export default connectToDataBase;