// Importando o express
const express = require('express');

// Inicializando o express
const app = express();

// Define a porta de funcionamento do servidor
const porta = 3300;

// Criar as Rotas
app.get('/', (req, res) => {
  res.send('Index - Aplicação Express!');
})

app.get('/login', (req, res) => {
  res.send('Login - Aplicação Express!');
})

app.get('/cadastro', (req, res) => {
  res.send(`<h1>Cadastro - Usuários Express</h1> <a href="login">Login</a>`)
})

app.listen(porta, () => {
  console.log(`Servidor: http://localhost:${porta}`);
})