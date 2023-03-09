const {Content, Collection} = require('../models');
const HTTPError = require('../utils/errors/HTTPError');

const addField = async (id, field) => {
  const content = await Content.findByPk(id);
  const fields = content.fields;
  if(fields[field.name]){
    throw new HTTPError('Feild already exists', 400);
  }
  fields[field.name] = field.type;
  const updatedContent = await Content.update({fields}, {where: {id}});

  const collections = await content.getCollections();
  collections.forEach(async collection => {
    await Collection.update({values: {...collection.values, [field.name]: ''}}, {where: {id: collection.id}});
  });
  return updatedContent;
};

const updateField = async (id, oldName, data) => {
  const {newName, type} = data;
  const content = await Content.findByPk(id);
  const fields = content.fields;
  if(!fields[oldName]){
    throw new HTTPError('Field does not exist', 400);
  }
  if(fields[newName]){
    throw new HTTPError('Field already exists', 400);
  }
  fields[newName] = type;
  delete fields[oldName];
  const updatedContent = await Content.update({fields}, {where: {id}});

  const collections = await content.getCollections();
  collections.forEach(async collection => {
    const values = collection.values;
    values[newName] = values[oldName];
    delete values[oldName];
    await Collection.update({values}, {where: {id: collection.id}});
  });
  return updatedContent;
};

const deleteField = async (id, name) => {
  const content = await Content.findByPk(id);
  const fields = content.fields;
  if(!fields[name]){
    throw new HTTPError('Field does not exist', 400);
  }
  delete fields[name];
  const updatedContent = await Content.update({fields}, {where: {id}});

  const collections = await content.getCollections();
  collections.forEach(async collection => {
    const values = collection.values;
    delete values[name];
    await Collection.update({values}, {where: {id: collection.id}});
  });
  return updatedContent;
};

module.exports = { addField, updateField, deleteField};

