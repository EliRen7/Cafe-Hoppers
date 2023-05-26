// const mongoose = require('mongoose');
// const CafeData = require('./cafedata');
// const CoffeeShop = require("../models/cafe");
// const cloudinary = require('cloudinary');


// mongoose.connect('mongodb://localhost:27017/cafe-hopping', {
//     useNewURLParser: true,
//     useUnifiedTopology: true 
// })

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//     console.log("Database connected");
// });

// const seedDB = async() =>{
//     await CoffeeShop.deleteMany({});
//     for(let i = 0; i < 20; i++){ 
//         const random34 = Math.floor(Math.random() * 34);
//         const cafe = new CoffeeShop({
//             // USER ID for AUTHOR
//             author: '6399addadb9b8ebf301c583f',
//             location: `${CafeData[random34].city}, ${CafeData[random34].province}`,
//             name: `${CafeData[random34].name}`,
//             description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatibus aut distinctio beatae suscipit eos atque id, eaque soluta! Consequatur perspiciatis eveniet alias voluptate ipsum reiciendis ex error corporis nesciunt?',
//             geometry: {
//                  "type" : "Point",
//                   "coordinates" : [ 
//                     CafeData[random34].longitude,
//                     CafeData[random34].latitude
//                 ],
//             },
//             images: [
//                 {
//                     url: 'https://res.cloudinary.com/diarrmhtt/image/upload/v1672916094/Cafe%20Hopping/v6bxjznkeoqune2vf6oo.jpg',
//                     filename: 'Cafe Hopping/v6bxjznkeoqune2vf6oo',
//                   },
//                   {
//                     url: 'https://res.cloudinary.com/diarrmhtt/image/upload/v1672916105/Cafe%20Hopping/jsw9wt1ngisxi836tbwd.jpg',
//                     filename: 'Cafe Hopping/jsw9wt1ngisxi836tbwd',
//                   },
//                   {
//                     url: 'https://res.cloudinary.com/diarrmhtt/image/upload/v1672916108/Cafe%20Hopping/wbjumx9wjevar0kmybqa.jpg',
//                     filename: 'Cafe Hopping/wbjumx9wjevar0kmybqa',
//                   }
              
//             ]
//         })
//         await cafe.save();
//     }
// }


// seedDB().then(() =>{
//     mongoose.connection.close();
// })
