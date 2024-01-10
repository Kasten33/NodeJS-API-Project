const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/", myController.getAllStudents);

routes.get("/ttech", myController.tooeleTech);

routes.get("/students", myController.getAllStudents);

module.exports = routes;
