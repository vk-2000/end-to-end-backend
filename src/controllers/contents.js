const contentService = require('../services/contents');

const getAllContents = async (req, res) => {
  const contents = await contentService.getAllContents();
  res.status(200).json(contents);
};

const getContentById = async (req, res) => {
  const { id } = req.params;
  try{
    const content = await contentService.getContentById(id);
    res.status(200).json(content);
  }
  catch(err){
    res.status(err.code).json({message: err.message});
  }
};

const createContent = async (req, res) => {
  const { name } = req.body;
  const content = await contentService.createContent({name});
  res.status(201).json(content);
};

const updateContentName = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try{
    const content = await contentService.updateContentName(id, {name});
    res.status(200).json(content);
  }
  catch(err){
    res.status(err.code).json({message: err.message});
  }
};

module.exports = { getAllContents, getContentById, createContent, updateContentName };