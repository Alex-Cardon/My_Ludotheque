const Joi = require('joi');

const insertSchema = Joi.object({
    firstname: Joi.string().required().min(2),
    lastname: Joi.string().required().min(2),
}).required();

const updateSchema = Joi.object({
    firstname: Joi.string().min(2),
    lastname: Joi.string().min(2)
}).required();

module.exports = { insertSchema, updateSchema };