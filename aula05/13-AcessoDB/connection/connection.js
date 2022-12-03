const mysql2 = require('mysql2');

// Importante que no futuro não fiquem esses dados em formato de texto
// Pesquisar e usar arquivos .env
module.exports = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_nodejs'
})