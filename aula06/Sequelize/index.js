// Importação do Módulo Express
const express = require('express');

// Inicia o express
const app = express();

const porta = 4200;

app.get('/', (req, res) => {

  res.json({
    rota: 'index'
  })
})

app.get('/cadastro/login', (req, res) => {
  res.json({
    rota: 'Cadastrar Login'
  })
})

app.listen(porta, () => {

  console.log(`Servidor rodando: http://localhost:${porta}`);
})