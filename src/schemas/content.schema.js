const joi = require('joi');

const contentIdSchema = joi.number().integer().required();

const createContentSchema = joi.object({
  name: joi.string().required()
});

const updateContentNameSchema = joi.object({
  name: joi.string().required()
});

module.exports = {contentIdSchema, createContentSchema, updateContentNameSchema };