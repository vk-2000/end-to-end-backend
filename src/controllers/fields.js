const fieldService = require('../services/fields');

const addField = async (req, res) => {
  const { contentId } = req.params;
  const field = req.body;
  try{
    const content = await fieldService.addField(contentId, field);
    res.status(200).json(content);
  }
  catch(err){
    res.status(err.code).json({message: err.message});
  }
};

const updateField = async (req, res) => {
  const { contentId, oldName } = req.params;
  const data = req.body;
  try{
    const content = await fieldService.updateField(contentId, oldName, data);
    res.status(200).json(content);
  }
  catch(err){
    res.status(err.code).json({message: err.message});
  }
};

const deleteField = async (req, res) => {
  const { contentId, fieldName } = req.params;
  try{
    const content = await fieldService.deleteField(contentId, fieldName);
    res.status(200).json(content);
  }
  catch(err){
    console.log(err);
    res.status(err.code).json({message: err.message});
  }
};

module.exports = { addField, updateField, deleteField };