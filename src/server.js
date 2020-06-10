//chama o express
const express = require("express")

//cria o servidor
const server = express()

// pega banco de dados
const db = require("./database/db.js")

//configura pasta publica, este comando server.use é para fazer configurções no servidor
server.use(express.static("public"))

//habilita o uso do req.body
server.use(express.urlencoded({extended: true}))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noChache: true
})

// configura caminhos da minha aplicação
// página inicial
// req: Requisição
// res: Resposta
server.get("/", function(req, res) {
    return res.render("index.html", {title: "Um título"})
})

server.get("/create-point", function(req, res) {
    // pega as Query Strings da nossa url
    console.log(req.query)
    return res.render("create-point.html")
})
// com o verbo post as query strigns não aparecem na url
server.post("/savepoint", (req, res) => {
    //req.body: corpo do formulário(form)

    // inserir dados no banco de dados
    const query = `
        INSERT INTO placess (
            image,
            name,
            address,
            address2,
            state,
            city,
            items,
            contact
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?);
    `
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items,
        req.body.contact
    ]
    function afterInsertData(err) {
        if(err) {
            console.log(err)
            return res.send("Erro no cadastro!")
       }
        console.log("Cadastrado com sucesso!")
        console.log(this) // dá uma resposta com referência à resposta do run 
        return res.render("create-point.html", {saved: true})
    }    
    db.run(query, values, afterInsertData)
})
server.get("/search-results", function(req, res) {
    const searchUf = req.query.state
    const searchCity = req.query.city
    if(searchUf == "" || searchCity == "") {
        // pesquisa vazia
        return res.render("search-results.html", {total: 0})
    }
    
    //pega banco de dados
    db.all(`SELECT * FROM placess WHERE state LIKE '%${searchUf}%' AND city LIKE '%${searchCity}%'`, function(err, rows) {
        if(err) {
            return console.log(err)   
        }
        const total = rows.length
        // mostrar página com os dados do banco de dados
        return res.render("search-results.html", {placess: rows, total: total})
    })
    
})
//liga o servidor
server.listen(3000)