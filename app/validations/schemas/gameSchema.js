const Joi = require('joi');

const insertSchema = Joi.object({
    title: Joi.string().required().min(1),
    locale: Joi.string().required(),
    year: Joi.number(),
    age_min: Joi.number(),
    duration: Joi.number(),
    player_num_min: Joi.number(),
    player_num_max: Joi.number(),
    cover: Joi.string(),
    publisher_id: Joi.number().required(),
    author_id: Joi.number().required(),
    theme_id: Joi.number().required(),
    mechanics_id: Joi.number().required()
}).required();

const updateSchema = Joi.object({
    title: Joi.string().min(1),
    locale: Joi.string(),
    year: Joi.number(),
    age_min: Joi.number(),
    duration: Joi.number(),
    player_num_min: Joi.number(),
    player_num_max: Joi.number(),
    cover: Joi.string(),
    publisher_id: Joi.number(),
    author_id: Joi.number(),
    theme_id: Joi.number(),
    mechanics_id: Joi.number()
}).required();

module.exports = { insertSchema, updateSchema };
