const Joi = require('joi');

const insertSchema = Joi.object({
    title: Joi.string().required().min(1),
    year: Joi.number(),
    game_id: Joi.number().required()
}).required();

const updateSchema = Joi.object({
    title: Joi.string().min(1),
    year: Joi.number(),
    game_id: Joi.number(),
}).required();

module.exports = { insertSchema, updateSchema };
