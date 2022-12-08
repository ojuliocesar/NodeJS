// npm i mysql2 --save
const mysql2 = require('mysql2')

// Usar .env ao invés de texto! Mas vamos ignorar por enquanto
module.exports = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_nodejs"
})
