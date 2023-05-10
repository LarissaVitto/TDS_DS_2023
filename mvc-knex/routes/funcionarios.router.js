const express = require("express");
const funcionariosController = require("../controller/funcionarios.controller");
const { buscaPorId } = require("../repository/funcionarios.repository");

const routes = new express.Router();

routes.get("/", funcionariosController.buscaTodos);
routes.get("/:id([0-9])", funcionariosController.buscaTodos);
routes.get("/:id[0-9]", buscaPorId);
routes.post("/", funcionariosController.inserir);
routes.delete("/:id([0-9])+", funcionariosController.deletar);
routes.put("/:id([0-9])+", funcionariosController.atualizar);
routes.post("/dependentes", funcionariosController.buscaTodosDepFunc);
routes.post("/dependentes/:id([0-9]+)", funcionariosController.buscaTodosDepFunc);

module.exports = routes;
