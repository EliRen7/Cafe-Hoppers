const express = require('express');
const router = express.Router({mergeParams: true});
const catchAsync = require('../utils/catchAsync')
const {cafeSchema} = require('../schemas.js')
const ExpressError = require('../utils/ExpressError')
const CoffeeShop = require("../models/cafe");
const Review = require('../models/review')
const {reviewSchema} = require('../schemas.js')


const validateReview = (req,res,next) =>{
    const {error} = reviewSchema.validate(req.body);
    if(error){
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    }else{
        next();
    }
}

router.post('/', validateReview, catchAsync(async (req,res) => {
    const cafe = await CoffeeShop.findById(req.params.id);
    const review = new Review(req.body.review);
    cafe.reviews.push(review)
    await review.save();
    await cafe.save();
    req.flash('success', 'Created new review!');
    res.redirect(`/cafes/${cafe._id}`);
}))


router.delete('/:reviewId', catchAsync(async(req,res) => {
    const {id, reviewId } = req.params
    await CoffeeShop.findByIdAndUpdate(id, {$pull: {reviews: reviewId}})
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', 'Successfully deleted review!');
    res.redirect(`/cafes/${id}`);
}))


module.exports = router;