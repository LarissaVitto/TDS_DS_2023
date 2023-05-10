const express = require("express");
const turmaController = require("../controller/turma.controller");

const routes = new express.Router();

routes.get("/:id([0-9])+", turmaController.buscaPorId);
routes.post("/", turmaController.inserir);
routes.delete("/:id([0-9])+", turmaController.deletar);
routes.put("/:id([0-9])+", turmaController.atualizar);
routes.get("/", turmaController.buscaTodos);
/*routes.post("/dependentes", turmaController.buscaTodosDepFunc);
routes.post("/dependentes/:id([0-9]+)", turmaController.buscaTodosDepFunc);*/


module.exports = routes;