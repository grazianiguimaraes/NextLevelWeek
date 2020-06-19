const sqlite3 = require("sqlite3").verbose()

//Cria o objeto que irá fazer operações no Banco de Dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

/*
db.serialize(() => {


  //1 Cria a Tabela
  db.run(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      name TEXT,
      address TEXT,
      address2 TEXT,
      state TEXT,
      city TEXT,
      items TEXT
    );
  `)

  //2 Inserir dados na Tabela
  const query = `
      INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
      ) VALUES (?,?,?,?,?,?,?);
   `
  const values = [
    "https://blog.sulprint.com.br/wp-content/uploads/2017/10/entenda-como-funciona-a-reciclagem-de-embalagens-780x450.jpeg",
    "Coletoria",
    "XXXX X XXXXXXXXXX DDDDDDD ajkjdshdkjahdh dhsadhkasjd kasj hdkjahda",
    "Numero",
    "Goiás",
    "Rio Verde",
    "Residuos, Eletronica, Lampâdas"
  ]

  function afterInsertData(err) {
    if (err) {
      return console.log(err)
    }

    console.log("Cadastrado com Sucesso!")
    console.log(this)
  }
  //  db.run(query, values, afterInsertData)
  db.all(`SELECT name FROM places`, function (err, rows) {
    if (err) {
      return console.log(err)
    }

    console.log("Aqui estão seus registros: ")
    console.log(rows)
  })
  

  db.run(`DELETE FROM places WHERE id = ?`, [1], function (err) {
    if (err) {
      return console.log(err)
    }

    console.log("Registro deletado com Sucesso !")

  })
  
})

*/