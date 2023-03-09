const collectionService = require('../services/collections');

const getAllCollections = async (req, res) => {
  const { contentId } = req.params;
  const collections = await collectionService.getAllCollections(contentId);
  res.status(200).json(collections);
};

const getCollectionById = async (req, res) => {
  const { contentId, collectionId } = req.params;
  try{
    const collection = await collectionService.getCollectionById(contentId, collectionId);
    res.status(200).json(collection);
  }
  catch(err){
    res.status(err.code).json({message: err.message});
  }
};

const createCollection = async (req, res) => {
  const { contentId } = req.params;
  const data = req.body;
  try{
    const collection = await collectionService.createCollection(contentId, data);
    res.status(201).json(collection);
  }
  catch(err){
    res.status(err.code).json({message: err.message});
  }
};
const updateCollection = async (req, res) => {
  const { contentId, collectionId } = req.params;
  const data = req.body;
  try{
    const collection = await collectionService.updateCollection(contentId, collectionId, data);
    res.status(200).json(collection);
  }
  catch(err){
    res.status(err.code).json({message: err.message});
  }
};
const deleteCollection = async (req, res) => {
  const { contentId, collectionId } = req.params;
  try{
    const collection = await collectionService.deleteCollection(contentId, collectionId);
    res.status(200).json(collection);
  }
  catch(err){
    res.status(err.code).json({message: err.message});
  }
};
module.exports = { getAllCollections, getCollectionById, createCollection, updateCollection, deleteCollection };