const express = require("express");
const routes = require("./routes/index.js");
const app = express();

app.use(express.json());

app.use(routes);

app.listen(8080, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("O servidor esta na porta 8080!");
});