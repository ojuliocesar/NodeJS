// Importa o Módulo do Express (facilitador na criação de servidores)
const express = require('express');

// Inicializa o Express
const app = express();

const user = new require('./models/user');

app.use(express.static('views/public'));

const porta = 5000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/views/login.html');
})

app.get('/cadastro', (req, res) => {
  res.sendFile(__dirname + '/views/cadastro.html')
})

app.listen(porta, () => {
  console.log(`Servidor rodando em: http://localhost:${porta}`);
})