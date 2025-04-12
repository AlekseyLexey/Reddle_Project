"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Secret, {
        through: "Secret_Ingredient",
        foreignKey: "ingredient_id",
        otherKey: "secret_id"
      });
    }
  }
  Ingredient.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      danger_level: DataTypes.STRING,
      image: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Ingredient"
    }
  );
  return Ingredient;
};
