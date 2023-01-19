// importa o modulo do express
const express = require('express');

// inicializa o express
const app = express();

// importa o modulo do usuario
const usuario = new require("./model/usuario")

const produto = new require("./model/produto")

const porta = 5000;

// define a pasta publica que armazena o conteudo estatico(CSS,JS,IMG)
app.use(express.static('views/public'))

// -------------------------MIDLEWARE----------------------
// decodifica os parametros enviados para a rota
app.use(express.urlencoded({extended: true}))

// converte os valores para formato JSON
app.use(express.json())

// -------------------------FINAL MIDLEWARE-----------------


// Cria a rota padrao /
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html')
})

app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/views/login.html')
})

// rota para cadastro de usuario
app.get('/cadastrar',(req,res)=>{
    res.sendFile(__dirname+'/views/cadastrar-usuarios.html')
})

app.post('/cadastrar/usuarios',(req,res)=>{
    let dados = req.body

    usuario.create(dados)
    .then(resBD => {
        res.json({
            response: true,
            message: 'Usuário cadastrado com Sucesso!'
        })
    })
    .catch(resBD => {
        res.json({
            response: false,
            message: `Erro ao Cadastrar! ${resBD}`
        })
    })
})

// Função que Lista todos os Usuários
app.get("/listar/usuarios", (req, res) => {
    usuario.findAll()
    .then(resBD => {
        res.json(resBD);
    })
    .catch(resBD => {
        res.json({
            response: false,
            message: `Erro ao Listar: ${resBD}`
        })
    })
})

// Função que Lista Usuários pelo ID
app.get("/listar/usuarios/:id", (req, res) => {
    let id = req.params.id;

    usuario.findOne({where: {id: id}})
    .then(resBD => {
        res.json(resBD);
    })
    .catch(resBD => {
        res.json({
            response: false,
            message: `Erro ao Listar: ${resBD}`
        })
    })
})

app.delete("/deletar/usuarios/:id", (req, res) => {

    let id = req.params.id;

    usuario.destroy({where: {id: id}})
    .then(resBD => {

        res.json({
            response: true,
            message: 'Usuário deletado com Sucesso!'
        })

    })
    .catch(resBD => {

        res.json({
            response: false,
            message: `Erro ao Deletar: ${resBD}`
        })

    })

})

app.listen(porta,()=>{
    console.log(`Servidor rodando em: http://localhost:${porta}`)
})