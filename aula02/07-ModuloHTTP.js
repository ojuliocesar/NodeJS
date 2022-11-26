const http = require('http');

// Cria o servidor
http.createServer((req, res) => {
  res.write('Owolá');
  res.end();
}).listen(3000);