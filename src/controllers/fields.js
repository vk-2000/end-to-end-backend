const fieldService = require('../services/fields');

const addField = async (req, res) => {
  const { id } = req.params;
  const field = req.body;
  try{
    const content = await fieldService.addField(id, field);
    res.status(200).json(content);
  }
  catch(err){
    res.status(err.code).json({message: err.message});
  }
};

const updateField = async (req, res) => {
  const { id, oldName } = req.params;
  const data = req.body;
  try{
    const content = await fieldService.updateField(id, oldName, data);
    res.status(200).json(content);
  }
  catch(err){
    res.status(err.code).json({message: err.message});
  }
};

module.exports = { addField, updateField };