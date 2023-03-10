const {Content} = require('../models');
const HTTPError = require('../utils/errors/HTTPError');

const getAllContents = async () => {
  // get all contents from database with the count of collections associated with each content
  const contents = await Content.findAll({
    attributes: ['id', 'name', 'fields', [Content.sequelize.fn('COUNT', Content.sequelize.col('Collections.id')), 'collectionsCount']],
    include: [{
      model: Content.associations.Collections.target,
      attributes: []
    }],
    group: ['Content.id']
  });
  return contents;
};
const getContentById = async (id) => {
  const content = await Content.findByPk(id);
  if(!content){
    throw new HTTPError('Content not found', 404);
  }
  return content;
};
const createContent = async (content) => {
  const data = {
    name: content.name,
    fields: {}
  };
  const newContent = await Content.create(data);
  return newContent;
};
const updateContentName = async (id, content) => {
  const data = {
    name: content.name
  };
  const updatedContent = await Content.update(data, {where: {id}});
  if(updatedContent[0] === 0){
    throw new HTTPError('Content not found', 404);
  }
  return updatedContent;
};

module.exports = { getAllContents, getContentById, createContent, updateContentName };