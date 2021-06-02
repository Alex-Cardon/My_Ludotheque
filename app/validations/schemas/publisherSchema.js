const Joi = require('joi');

const insertSchema = Joi.object({
    name: Joi.string().required().min(2)
}).required();

const updateSchema = Joi.object({
    name: Joi.string().min(2)
}).required();

module.exports = { insertSchema, updateSchema };