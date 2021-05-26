const Joi = require('joi');

const insertSchema = Joi.object({
    firstname: Joi.string().required().min(2),
    lastname: Joi.string().required().min(2),
    country_iso_2: Joi.string().required().length(2),
    birthdate: Joi.date().required().max('now'),
    deathdate: Joi.date().max('now')
}).required();

const updateSchema = Joi.object({
    firstname: Joi.string().min(2),
    lastname: Joi.string().min(2),
    country_iso_2: Joi.string().length(2),
    birthdate: Joi.date().max('now'),
    deathdate: Joi.date().max('now')
}).required();

module.exports = { insertSchema, updateSchema };