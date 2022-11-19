const mongoose = require('mongoose');
const CafeData = require('./cafedata');
const CoffeeShop = require("../models/cafe");
const cloudinary = require('cloudinary');


mongoose.connect('mongodb://localhost:27017/cafe-hopping', {
    useNewURLParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async() =>{
    await CoffeeShop.deleteMany({});
    for(let i = 0; i < 30; i++){ 
        const random34 = Math.floor(Math.random() * 34);
        const cafe = new CoffeeShop({
            location: `${CafeData[random34].city}, ${CafeData[random34].province}`,
            name: `${CafeData[random34].name}`,
            image: 'https://api.cloudinary.com/v1_1/diarrmhtt/resources/image',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatibus aut distinctio beatae suscipit eos atque id, eaque soluta! Consequatur perspiciatis eveniet alias voluptate ipsum reiciendis ex error corporis nesciunt?'
        })
        await cafe.save();
    }
}


seedDB().then(() =>{
    mongoose.connection.close();
})
