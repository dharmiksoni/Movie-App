const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema(
    {
        name: {type: String, required: true},
        time: {type: [String], required: true},
        rating: {type: Number, required: true},
        url: {type: String, required: true},
    },
    {timeStamps: true},
)

module.exports = mongoose.model('movies', Movie);