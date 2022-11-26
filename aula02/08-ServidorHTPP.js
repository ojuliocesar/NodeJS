const http = require('http');

// Cria o servidor
const servidor = http.createServer((req, res) => {

  // Seta como será o retorno
  res.setHeader('Content-Type', 'text/html');

  res.end(`
    <!DOCTYPE html>
    <html lang="pt-br">
      <head>
        <meta charset="utf-8">
      </head>

      <body>
        <h1>Olá Mundo</h1>
      </body>
    </html>
  `);
});

servidor.listen('3000', () => {
  console.log(`Servidor: http://localhost:3000`)
});