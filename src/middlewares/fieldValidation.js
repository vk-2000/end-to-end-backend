/* eslint-disable no-unused-vars */
const fieldSchema = require('../schemas/field.schema');
const HTTPError = require('../utils/errors/HTTPError');

const addFieldValidation  = (req, res, next) => {
  try{
    const field = req.body;
    const {value, error} = fieldSchema.addFieldSchema.validate(field);
    if(error){
      throw new HTTPError(error.message, 400);
    }
    next();
  }
  catch(err){
    if(err instanceof HTTPError){
      res.status(err.code).json({message: err.message});
    }
    else{
      res.status(500).json({message: err.message});
    }
  }
};

const updateFieldValidation = (req, res, next) => {
  try{
    const data = req.body;
    const {value, error} = fieldSchema.updateFieldSchema.validate(data);
    if(error){
      throw new HTTPError(error.message, 400);
    }
    next();
  }
  catch(err){
    if(err instanceof HTTPError){
      res.status(err.code).json({message: err.message});
    }
    else{
      res.status(500).json({message: err.message});
    }
  }
};

const deleteFieldValidation = (req, res, next) => {
  try{
    const fieldName = req.params.fieldName;
    const {value, error} = fieldSchema.fieldName.validate(fieldName);
    if(error){
      throw new HTTPError(error.message, 400);
    }
    next();
  }
  catch(err){
    if(err instanceof HTTPError){
      res.status(err.code).json({message: err.message});
    }
    else{
      res.status(500).json({message: err.message});
    }
  }

};

module.exports = { addFieldValidation, updateFieldValidation, deleteFieldValidation };