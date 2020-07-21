const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true  
    },
    longitude: {
        type: Number,
        required: true  
    },
    rating: {
        type: Number,
        required: true
    },
    pictureURL: {
        type: String,
        required: true
    },
})
module.exports = Restaurant = mongoose.model('Restaurant', RestaurantSchema);