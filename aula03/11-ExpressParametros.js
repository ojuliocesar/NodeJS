const express = require('express');

const app = express();

const porta = 3300;

app.get('/cadastro/:pagina', (req, res) => {
  let pagina = req.params.pagina

  let url;

  let statusCode = 200;

  if (pagina == 'usuarios') {
    url = '/cadastrarUsuarios.html'
  } else if (pagina == 'produtos') {
    url = '/cadastrarProduto.html'
  } else {
    statusCode = 404;
    url = '/404.html'
  }

  res.sendFile(__dirname+url);
  res.status(statusCode);
})

app.listen(porta, () => {
  console.log(`Servidor: http://localhost:${porta}`);
})