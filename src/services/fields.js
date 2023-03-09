const {Content} = require('../models');

const addField = async (id, field) => {
  const content = await Content.findByPk(id);
  const fields = content.fields;
  if(fields[field.name]){
    throw new Error('Feild already exists');
  }
  fields[field.name] = field.type;
  const updatedContent = await Content.update({fields}, {where: {id}});
  return updatedContent;
};

const updateField = async (id, oldName, data) => {
  const {newName, type} = data;
  const content = await Content.findByPk(id);
  const fields = content.fields;
  if(!fields[oldName]){
    throw new Error('Field does not exist');
  }
  if(fields[newName]){
    throw new Error('Field already exists');
  }
  fields[newName] = type;
  delete fields[oldName];
  const updatedContent = await Content.update({fields}, {where: {id}});
  return updatedContent;
};

module.exports = { addField, updateField};

