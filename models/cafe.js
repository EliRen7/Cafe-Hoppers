const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CafeSchema = new Schema({
    name: String,
    image: String,
    description: String,
    location: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
});

module.exports = mongoose.model('CoffeeShop', CafeSchema);