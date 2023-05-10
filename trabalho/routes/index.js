const express = require("express");

const routes = new express.Router();

const alunosRouter = require("./aluno.router");
const turmaRouter = require("./turma.router");
const professorRouter = require("./professor.router");

routes.use("/aluno", alunosRouter)
routes.use("/turma", turmaRouter)
routes.use("/professor", professorRouter)




module.exports = routes;