// importar a dependecia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// iniciar o objeto de bd
const db = new sqlite3.Database("./src/database/databse.db")

module.exports = db

// utilizar o objeto da banco de dados para nossas operacoes
// db.serialize(() => {
//     // criando comandos com SQL

// //     // criar uma tabela 
// //     db.run(`
// //         CREATE TABLE IF NOT EXISTS places (
// //             id  INTEGER PRIMARY KEY AUTOINCREMENT,
// //             image TEXT,
// //             name TEXT,
// //             address TEXT,
// //             address2 TEXT,
// //             state TEXT,
// //             city TEXT,
// //             items TEXT
// //         );
// //     `)

// //     // inserir dados na tabela
// //    const query = `
// //             INSERT INTO places (
// //                 image,
// //                 name,
// //                 address,
// //                 address2,
// //                 state,
// //                 city,
// //                 items
// //             ) VALUES (?,?,?,?,?,?,?);
// //     `

// //     const values = [
// //         "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
// //         "Papersider",
// //         "Guilherme Gemballa, Jardim América",
// //         "Nº 260",
// //         "Santa Catarina",
// //         "Rio do Sul",
// //         "Resíduos Eletrônicos, Lâmpadas"
// //     ]

// //     function afterInsertData(err){
// //          if(err){
// //              return console.log(err)
// //          }

// //          console.log("Cadastrado com sucesso")
// //          console.log(this)
// //     }

// //     db.run(query, values, afterInsertData)
    
//     // consultar dados na tabela
//     // db.all(`SELECT name FROM places`, function(err, rows) {
//     //     if(err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Aqui estão seus registros: ")
//     //     console.log(rows)
//     // })
    
//     // deletar um dado na tabela
//     // db.run(`DELETE FROM places WHERE id= ?`, [1], function(err) {
//     //     if(err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Registro deletado com sucesso!")
//     // })

    
// }) 