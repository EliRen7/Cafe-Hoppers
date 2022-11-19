const Joi = require('joi');

module.exports.cafeSchema = Joi.object({
cafe: Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    location: Joi.string().required()
}).required()
});
