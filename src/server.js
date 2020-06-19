const express = require("express")
const server = express()

// Pegar o Banco de Dados
const db = require("./database/db")

// Configura a pasta Publica
server.use(express.static("public"))

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})


server.get("/", (req, res) => {
  //res.sendFile(__dirname + "/views/index.html");
  return res.render("index.html")
})

server.get("/create-point", (req, res) => {
  return res.render("create-point.html")
})

server.get("/search", (req, res) => {
  db.all(`SELECT * FROM places`, function (err, rows) {
    if (err) {
      return console.log(err)
    }
    const total = rows.length

    return res.render("search-results.html", { places: rows, total: total })
    //return res.render("search-results.html", { places: rows, total })
  })
})
// Ligar o Servidor
server.listen(3000);