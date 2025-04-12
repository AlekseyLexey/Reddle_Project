"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Secret extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Ingredient, {
        through: "Secret_Ingredient",
        foreignKey: "secret_id",
        as: "ingredients"
      });
    }
  }
  Secret.init(
    {
      image: DataTypes.STRING,
      author: DataTypes.STRING,
      riddle: DataTypes.TEXT,
      danger_level: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Secret"
    }
  );
  return Secret;
};
