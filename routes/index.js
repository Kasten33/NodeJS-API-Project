const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/", myController.awesomeFunction);
routes.get("/ttech", myController.getAllStudents);

routes.use("/students", require("./students"));

module.exports = routes;
