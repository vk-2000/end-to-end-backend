'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Content.hasMany(models.Collection, {foreignKey: 'contentId'});
    }
  }
  Content.init({
    name: DataTypes.STRING,
    fields: DataTypes.JSONB
  }, {
    sequelize,
    modelName: 'Content',
  });
  return Content;
};