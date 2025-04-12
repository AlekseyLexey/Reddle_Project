const { Secret, Secret_Ingredient, Ingredient } = require("../db/models");

const getAll = async (req, res) => {
  try {
    const data = await Secret.findAll();

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Нет такого ID" });
  }

  try {
    const [data] = await Secret.findAll({
      where: { id: Number(id) },
      include: [
        {
          model: Ingredient,
          as: "ingredients",
          attributes: ["name"],
          through: {
            attributes: []
          }
        }
      ]
    });

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAll, getById };
