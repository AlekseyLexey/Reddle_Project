const route = require("express").Router();
const { getAll, getById } = require("../../controllers/secret.controller");

route.get("/", getAll);
route.get("/:id", getById);

module.exports = route;
