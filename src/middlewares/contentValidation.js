/* eslint-disable no-unused-vars */
const contentSchema = require('../schemas/content.schema');
const HTTPError = require('../utils/errors/HTTPError');

const getContentByIdValidation = (req, res, next) => {
  try{
    const contentId = req.params.contentId;
    const {value, error} = contentSchema.contentIdSchema.validate(contentId);
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

const createContentValidation = (req, res, next) => {
  try{
    const {name} = req.body;
    const {value, error} = contentSchema.createContentSchema.validate({name});
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

const updateContentNameValidation = (req, res, next) => {
  try{
    const {name} = req.body;
    const {value, error} = contentSchema.updateContentNameSchema.validate({name});
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

module.exports = { getContentByIdValidation, createContentValidation, updateContentNameValidation };
