const express = require("express");
const petsController = require("../controller/pets.controller");

const routes = new express.Router();

routes.get("/", petsController.find);
routes.post("/pets", petsController.inserirpets);
routes.post("/donos", petsController.inserirdono);
routes.get("/inicial",(req, res)=>{
    res.render("inicial")
} );
routes.get("/cadastropets",(req, res)=>{
    res.render("cadastropets")
} );
routes.get("/calculadora",(req, res)=>{
    res.render("calculadora")
} );
routes.get("/cadastrodono",(req, res)=>{
    res.render("cadastrodono")
} );
routes.get("/inicial1",(req, res)=>{
    res.render("inicial1")
} );



module.exports = routes;
