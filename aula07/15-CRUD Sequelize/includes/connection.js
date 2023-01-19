const Sequelize = require('sequelize');

const conn = new Sequelize('db_petshop', 'root', '', {
  host: 'localhost',
  dialet: 'mysql',
  charset: 'utf8mb4',
  collate: 'utf8mb4_general_ci',
  timezone: '-03:00'
});

try {

  conn.authenticate();
  console.log('Conectado ao Banco de Dados com Sucesso!');

} catch (error) {
  console.log(`Erro ao se conectar ao Banco de Dados: ${error}`);
}

module.exports = conn;