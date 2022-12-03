const express = require('express');
const connection = require('./connection/connection');

const conn = require('./connection/connection');

const app = express();

const porta = 3000;

app.use(express.static('./views/public'));

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

// Create
app.post('/cadastro/login', (req, res) => {
  // res.send(req.body);

  // Desestruturação de vários campos
  let {name, email, password, confirmPassword} = req.body;

  if (password !== confirmPassword) {
    res.send('<h1>As senhas não conferem! Verifique e tente novamente.</h1>');
  }

  try {
    
    // Monta o comando SQL que será executado no banco de dados
    let sql = `INSERT INTO tb_login (name, email, password) VALUES ('${name}', '${email}', '${password}')`;

    // Execute o comando SQL no Banco de Dados
    conn.query(sql, (err, res) => {
      if (err) {
        return res.send(`Erro ao Cadastrar: ${err}`);

      } else {
        res.send('Cadastro realizado com sucesso!');

      }  
    })

  } catch (error) {
    res.send(`Error: ${error}`)
  }

})

// Read
app.get('/consultar', (req, res) => {
  res.status(200);
  
  try {
    let sql = "SELECT name, email, status, created_at FROM tb_login";

    conn.query(sql, (err, result) => {
      if (err) {
        return res.send(`Não foi possível listar os Usuários: ${err}`);
      }

      res.send(result);  

    })
  } catch (error) {
    res.send(`Error: ${error}`);
  }

})

// Update
app.patch('/atualizar/login', (req, res) => {
  
  let {id, name, email} = req.body;

  try {
    
    let sql = `UPDATE tb_login SET name = '${name}', email = '${email} ' WHERE id = ${id}`;

    conn.query(sql, (err, result) => {
      if (err) {
        return res.send(`Não foi possível atualizar os dados: ${err}`);
      }

      res.send('Conta atualizada com Sucesso');
    })

  } catch (error) {
    return res.send(`Erro: ${error}`)
  }

})

// Retorno da página com erro. Super importante ficar no final das rotas
app.use((req, res) => {
  res.status(404);
  res.send('<h1>Página não encontrada</h1>');
})

app.listen(porta, () => {
  console.log(`Servidor rodando: http://localhost:${porta}`)
})