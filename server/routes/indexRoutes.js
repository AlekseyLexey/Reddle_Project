const indexRoute = require("express").Router();

const secretRoute = require("./api/secretRoute");
const ingredientRoute = require("./api/ingredientRoute");

indexRoute.use("/secrets", secretRoute);
indexRoute.use("/ingredients", ingredientRoute);

module.exports = indexRoute;
