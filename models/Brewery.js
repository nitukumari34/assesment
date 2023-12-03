const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brewerySchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String },
    website_url: { type: String },
    current_rating: { type: Number, default: 0 },
    state: { type: String },
    city: { type: String },
    // You can add more fields based on the Open Brewery DB API documentation
});

const Brewery = mongoose.model('Brewery', brewerySchema);

module.exports = Brewery;
