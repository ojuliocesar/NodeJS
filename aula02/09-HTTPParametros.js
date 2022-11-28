const http = require('http');

const url = require('url');

const servidor = http.createServer((req, res) => {
  // Captura os parâmetros enviados via GET

  let parametros = url.parse(req.url, true);

  let nome = parametros.query.nome;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  res.end(`
  
    <form>
      <label for="nome">Digite Seu nome</label>
      <input type="text" name='nome' id='nome'>
      <input type="submit" value="Enviar">
    </form>

    <h1>Olá ${nome ? nome : 'Random'}</h1>

  `);
})

servidor.listen(8888, () => {
  console.log('Servidor: http://localhost:8888');
})