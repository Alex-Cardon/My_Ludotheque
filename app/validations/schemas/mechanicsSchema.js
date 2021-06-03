const Joi = require('joi');

const insertSchema = Joi.object({
    label: Joi.string().required().min(2)
}).required();

const updateSchema = Joi.object({
    label: Joi.string().min(2)
}).required();

module.exports = { insertSchema, updateSchema };