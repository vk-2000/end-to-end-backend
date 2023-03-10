const joi = require('joi');

const getAllCollectionsSchema = joi.object({
  contentId: joi.number().integer().required()
});

const getCollectionByIdSchema = joi.object({
  contentId: joi.number().integer().required(),
  collectionId: joi.number().integer().required()
});

const deleteCollectionSchema = joi.object({
  contentId: joi.number().integer().required(),
  collectionId: joi.number().integer().required()
});

module.exports = { getAllCollectionsSchema, getCollectionByIdSchema, deleteCollectionSchema };