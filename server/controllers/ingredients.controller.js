const { Ingredient } = require("../db/models");

const getAll = async (req, res) => {
  try {
    const data = await Ingredient.findAll();

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAll };
