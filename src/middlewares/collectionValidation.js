const {Content} = require('../models');

const collectionValidation = async (req, res, next) => {
  const content = await Content.findByPk(req.params.contentId);
  const fields = content.fields;
  const reqFields = req.body.values;
  for(let key in reqFields){
    if(!fields[key]){
      return res.status(400).json({message: `Fields should be ${Object.keys(fields)}}`});
    }
  }
  for(let key in fields){
    if(!reqFields[key]){
      return res.status(400).json({message: `Fields should be ${Object.keys(fields)}}`});
    }
  }
  next();
};

module.exports = { collectionValidation };
