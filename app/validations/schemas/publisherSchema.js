const Joi = require('joi');

const insertSchema = Joi.object({
    name: Joi.string().required().min(2),
    country_iso_2: Joi.string().required().length(2)
}).required();

const updateSchema = Joi.object({
    name: Joi.string().min(2),
    country_iso_2: Joi.string().length(2)
}).required();

module.exports = { insertSchema, updateSchema };