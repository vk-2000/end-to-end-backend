const {Collection, Content} = require('../models');
const HTTPError = require('../utils/errors/HTTPError');

const getAllCollections = async (contentId) => {
  const collections = await Collection.findAll({where: {contentId}});
  return collections;
};

const getCollectionById = async (contentId, collectionId) => {
  const collection = await Collection.findOne({where: {id: collectionId, contentId}});
  if(!collection) throw new HTTPError('Collection not found', 404);
  return collection;
};

const createCollection = async (contentId, data) => {
  const content = await Content.findByPk(contentId);
  const collection = await Collection.create(data);
  if(!content) throw new HTTPError('Content not found', 404);
  await content.addCollection(collection);
  return collection;
};
const updateCollection = async (contentId, collectionId, data) => {
  const collection = await Collection.update(data, {where: {id: collectionId, contentId}, returning: true});
  if(collection[0] === 0) throw new HTTPError('Collection not found', 404);
  return collection;
};
const deleteCollection = async (contentId, collectionId) => {
  const collection = await Collection.destroy({where: {id: collectionId, contentId}});
  if(collection === 0) throw new HTTPError('Collection not found', 404);
  return collection;
};

module.exports = { getAllCollections, getCollectionById, createCollection, updateCollection, deleteCollection };