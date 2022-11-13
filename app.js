const express = require('express');
const path = require('path')
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override')
const CoffeeShop = require("./models/cafe");
const cafe = require('./models/cafe');

mongoose.connect('mongodb://localhost:27017/cafe-hopping', {
    useNewURLParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express() 

app.engine('ejs', ejsMate )
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'));

app.get('/', (req, res)=>{
    res.render('home')
})

app.get('/cafes', async(req, res)=>{
    const cafes = await CoffeeShop.find({});
    res.render('cafes/index', {cafes})
})

app.get('/cafes/new', (req,res) => {
    res.render('cafes/new');
})

app.post('/cafes', async(req,res, next) => {
    try{
    const cafe = new CoffeeShop(req.body.cafe)
    await cafe.save();
    res.redirect(`/cafes/${cafe._id}`)
    } catch(e){
        next(e);
    }
});

app.get('/cafes/:id', async(req, res,) => {
    const cafe = await CoffeeShop.findById(req.params.id)
    res.render('cafes/show', {cafe});
});

app.get('/cafes/:id/edit', async(req,res) => {
    const cafe = await CoffeeShop.findById(req.params.id)
    res.render('cafes/edit', {cafe});
});

app.put('/cafes/:id', async(req,res) => {
    const { id } = req.params;
    const cafe = await CoffeeShop.findByIdAndUpdate(id,{...req.body.cafe})
    res.redirect(`/cafes/${cafe._id}`)
});

app.delete('/cafes/:id', async(req,res) =>{
    const {id} = req.params;
    await CoffeeShop.findByIdAndDelete(id);
    res.redirect('/cafes');
});

app.use((err,req,res,next) =>{
    res.send('Oh Boy, something went wrong!')
})


app.listen(3000, () => {
    console.log('Serving on port 3000')
})