const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)
const sqlCreateTable = `CREATE TABLE IF NOT EXISTS people(
    id INT AUTO_INCREMENT PRIMARY KEY, 
    name varchar(255)
)`
connection.query(sqlCreateTable)
connection.end()

app.get('/', (req, res) => {
    
    const connection = mysql.createConnection(config)
    const sqlInsert = "INSERT INTO people(name) values ('Person')"
    const sqlSelect = "SELECT * FROM people ORDER BY id"

    connection.query(sqlInsert)

    connection.query(sqlSelect, function (err, result) {
        if (err) throw err;
        let strResp = `<h1>Full Cycle Rocks!</h1>`
        strResp += `<ul>`
        result.forEach(element => {
            strResp += `<li>${element.name} ${element.id}</li>`
        })
        strResp += `</ul>`
        res.send(strResp)
    })

    connection.end()
})

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`)
})
