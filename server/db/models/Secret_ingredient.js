'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Secret_Ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Secret_Ingredient.belongsTo(models.Secret,{
        foreignKey: 'secret_id'
      })
      Secret_Ingredient.belongsTo(models.Ingredient,{
        foreignKey: 'ingredient_id'
      })
    }
  }
  Secret_Ingredient.init({
    secret_id: DataTypes.INTEGER,
    ingredient_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Secret_Ingredient',
  });
  return Secret_Ingredient;
};