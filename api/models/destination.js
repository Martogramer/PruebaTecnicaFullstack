const mongoose = require('mongoose')

const destinationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        requided: true,
    },
    image: String,
});

const Destination = mongoose.model('Destination', destinationSchema)

module.exports = Destination;