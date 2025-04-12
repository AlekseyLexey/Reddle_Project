const route = require("express").Router();
const { getAll } = require("../../controllers/ingredients.controller");

route.get("/", getAll);

module.exports = route;
