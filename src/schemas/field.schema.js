const joi = require('joi');

const fieldName = joi.string().required();

const addFieldSchema = joi.object({
  name: joi.string().required(),
  type: joi.string().required(),
});

const updateFieldSchema = joi.object({
  newName: joi.string().required(),
  type: joi.string().required(),
});

module.exports = { fieldName, addFieldSchema, updateFieldSchema };

