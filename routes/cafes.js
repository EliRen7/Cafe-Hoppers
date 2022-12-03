const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync')
const {cafeSchema} = require('../schemas.js')
const ExpressError = require('../utils/ExpressError')
const CoffeeShop = require("../models/cafe");
const { off } = require('../models/review');




const validateCafe = (req,res,next) =>{
    const {error} = cafeSchema.validate(req.body);
    if(error){
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    }else{
        next();
    }
}

router.get('/', catchAsync(async(req, res)=>{
    const cafes = await CoffeeShop.find({});
    res.render('cafes/index', {cafes})
}))

router.get('/new', (req,res) => {
    res.render('cafes/new');
});

router.post('/', validateCafe, catchAsync(async(req,res, next) => {
    // if(!req.body.cafe) throw new ExpressError('Invalid Cafe Data', 400)
    const cafe = new CoffeeShop(req.body.cafe)
    await cafe.save();
    req.flash('success', 'Successfully made a new cafe!');
    res.redirect(`/cafes/${cafe._id}`)
}));

router.get('/:id', catchAsync(async(req, res,) => {
    const cafe = await CoffeeShop.findById(req.params.id).populate('reviews');
    if(!cafe){
    req.flash('error', 'Cafe not found!')
    return res.redirect('/cafes')
    }
    res.render('cafes/show', {cafe});
}));

router.get('/:id/edit', catchAsync(async(req,res) => {
    const cafe = await CoffeeShop.findById(req.params.id)
    if(!cafe){
        req.flash('error', 'Cafe not found!')
        return res.redirect('/cafes')
        }
    res.render('cafes/edit', {cafe});
}));

router.put('/:id', validateCafe, catchAsync(async(req,res) => {
    const { id } = req.params;
    const cafe = await CoffeeShop.findByIdAndUpdate(id,{...req.body.cafe})
    req.flash('success', 'Successfully updated cafe!');
    res.redirect(`/cafes/${cafe._id}`)
}));

router.delete('/:id', catchAsync(async(req,res) =>{
    const {id} = req.params;
    await CoffeeShop.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted cafe!');
    res.redirect('/cafes');
}));

module.exports = router
