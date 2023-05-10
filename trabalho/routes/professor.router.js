const express = require("express");
const professorController = require("../controller/professor.controller");

const routes = new express.Router();

routes.get("/:id([0-9])+", professorController.buscaPorId);
routes.post("/", professorController.inserir);
routes.delete("/:id([0-9])+", professorController.deletar);
routes.put("/:id([0-9])+", professorController.atualizar);
routes.get("/", professorController.buscaTodos);
/*routes.post("/dependentes", professorController.buscaTodosDepFunc);
routes.post("/dependentes/:id([0-9]+)", professorController.buscaTodosDepFunc);*/


module.exports = routes;