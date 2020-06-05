// importa  dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose() // método que diz ao sqlite3 para dar mensagens o terminal

// criar objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db") // cria o objeto neste constructor que vai fazer um banco de dados neste caminho

module.exports = db
// utilizar o objeto de banco de dados para operações
//db.serialize(() => { // roda uma sequênica de códigos
    // usa comandos SQL para:

    // criar uma tabela 
//    db.run(`
//        CREATE TABLE IF NOT EXISTS places (
//           id INTEGER PRIMARY KEY AUTOINCREMENT,
//            image TEXT, 
//            name TEXT,
//            address TEXT,
//            address2 TEXT,
//            state TEXT,
//            city TEXT,
//            items TEXT
//        );
//    `)

    // inserir dados na tabela
//    const query = `
//        INSERT INTO places (
//            image,
//            name,
//            address,
//            address2,
//           state,
//            city,
//            items
//        ) VALUES (?, ?, ?, ?, ?, ?, ?);
//    `
//    const values = [
//        "https://images.pexels.com/photos/3850588/pexels-photo-3850588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//        "Colectoria",
//        "Guilherme Gemballa, Jardim América",
//        "Número 260",
//        "Santa Catarina",
//        "Rio do Sul",
//       "Resíduos Eletrônicos, Lâmpadas"
//    ]
//    function afterInsertData(err) {
//        if(err) {
//            return console.log(err)
//       }
//        console.log("Cadastrado com sucesso!")
//       console.log(this) // dá uma resposta com referência à resposta do run 
//    }
    
//    db.run(query, values, afterInsertData)  // ela só será executada depois que as antecessoras executem, já que é uma função callback
    
    //consultar dados da tabela
    //db.all(`SELECT * FROM places`, function(err, rows) {
    //    if(err) {
    //        return console.log(err)   
    //    }
    //    console.log("Aqui estão seus registros:")
    //    console.log(rows)
    //})

    //deletar dados da tabela
//    db.run(`DELETE FROM places WHERE id = ?`, [5], function(err) {
//        if (err) {
//            return console.log(err)
//        }
//        console.log("Registro deletado com sucesso!")
//    })
//})