"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Secret_Ingredients", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      secret_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Secrets",
          key: "id"
        }
      },
      ingredient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Ingredients",
          key: "id"
        }
      },
      createdAt: {
        defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Secret_Ingredients");
  }
};
