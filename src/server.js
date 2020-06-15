const express = require("express");
const server = express();

// Configura a pasta Publica
server.use(express.static("public"));

const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true
});


server.get("/", (req, res) => {
   //res.sendFile(__dirname + "/views/index.html");
   return res.render("index.html");
});

server.get("/create-point", (req, res) => {
  //res.sendFile(__dirname + "/views/create-point.html");
  return res.render("create-point.html");
});

// Ligar o Servidor
server.listen(3000);