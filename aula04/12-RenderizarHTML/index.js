const express = require('express');

const app = express();

const porta = 3000;

app.use(express.static('views/public'));

// middleware
// Rota que toda requisição passa por ela
// Rota padrão

// Decodifica os parâmetros enviados para a rota
app.use(express.urlencoded({extended: true}));

// Coverte os valores para formato JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200);
  res.send('<h1>Index</h1>')
})

app.get('/cadastro', (req, res) => {
  res.status(200);
  res.sendFile(__dirname+'/views/cadastro.html');
})

app.post('/cadastro/login', (req, res) => {
  // res.send(req.body);

  // Desestruturação de dados

  // Desestruturação básica campo a campo:
  // let nome = req.body.nome

  // Desestruturação de vários campos
  let {name, email, password, confirmPassword} = req.body;

  res.send(`Nome:${name}`);
})

app.get('/consultar', (req, res) => {
  res.status(200);
  res.send('<h1>Consultar</h1>')
})

// Retorno da página com erro. Super importante ficar no final das rotas
app.use((req, res) => {
  res.status(404);
  res.send('<h1>Página não encontrada</h1>');
})

app.listen(porta, () => {
  console.log(`Servidor rodando: http://localhost:${porta}`)
})