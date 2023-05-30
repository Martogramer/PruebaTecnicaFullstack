const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');
const ObjectId = mongoose.Schema.Types.ObjectId;

const destinationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        requided: true,
    },
    images: [
        {
            type: String,
        }
    ],
});

const Destination = mongoose.model('destination', destinationSchema)

module.exports = Destination;