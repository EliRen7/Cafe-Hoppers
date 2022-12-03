const mongoose = require('mongoose');
const Review = require('./review')
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
CafeSchema.post('findOneAndDelete', async function(doc){
    if(doc){
        await Review.deleteMany({
            _id: {
                $in: doc.reviews
            }
        })
    }
})

module.exports = mongoose.model('CoffeeShop', CafeSchema);