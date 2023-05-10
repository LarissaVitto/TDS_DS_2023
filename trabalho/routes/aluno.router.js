const express = require("express");
const alunoController = require("../controller/aluno.controller");

const routes = new express.Router();

routes.get("/:id([0-9])+", alunoController.buscaPorId);
routes.post("/", alunoController.inserir);
routes.delete("/:id([0-9])+", alunoController.deletar);
routes.put("/:id([0-9])+", alunoController.atualizar);
routes.get("/", alunoController.buscaTodos);
/*routes.post("/dependentes", alunoController.buscaTodosDepFunc);
routes.post("/dependentes/:id([0-9]+)", alunoController.buscaTodosDepFunc);*/

module.exports = routes;
