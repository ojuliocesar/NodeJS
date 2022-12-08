const express = require('express');

const conn = require("./includes/connection");

const validateEmpty = require('./functions/validateEmpty');

// Inicializa o express
const app = express();

const porta = 3000;

// Define a pasta public com o conteudo static (CSS,JS,IMG)
app.use(express.static('views/public'));

// Decodifica os parametros enviados para a rota
app.use(express.urlencoded({extended: true}));

// Converte os valores para formato JSON
app.use(express.json());

// Criar as rotas
app.get('/', (req,res) => {
    res.status(200);
    res.send('<h1>Index - Rotas</h1>');
})

// Cria a rota cadastrar
app.get('/cadastrar',(req,res) => {
    res.status(200);
    res.sendFile(__dirname+'/views/cadastrar.html');
})

// cria a rota consultar
app.get('/consultar/:id?',(req,res)=>{
    res.status(200);

    try {
        // captura o id enviado ou nao via url
        let id = req.params.id
        
        if(!id){
            var sql = `SELECT name, email, status, created_at FROM tb_login`

        } else {
            var sql = `SELECT name, email, status, created_at FROM tb_login WHERE id = ${id}`
        }        

        conn.query(sql,(error,result)=>{
            if(error){

                res.send(`Não foi possível listar os registros: ${error}`)
            }

            res.send(result)
        })

    } catch (error) {
        res.send(`Não foi possível listar os registros: ${error}`)
    }
})

// cria a rota para cadastrar login
app.post('/cadastrar/login', (req,res) => {

    let {nome, email, senha, confirmar} = req.body;

    // Valida os campos vazios
    // validateEmpty(nome, 'Nome');

    if (!nome || !email || !senha || !confirmar) {

        return res.json({
            "retorno": "erro",
            "message": "Preencha os Campos obrigatórios"
        });
        
    }

    if(senha != confirmar){
        return res.json({
            "retorno":"erro",
            "mensagem":"Senhas não conferem!"
        }); 
    }

    try {
        let sql = `INSERT INTO tb_login(name, email, password)
                   VALUES('${nome}','${email}','${senha}')`
        // executa o comando SQL no banco de dados
        // executa um callback quando o comando é executado
        conn.query(sql,(error,result)=>{
            if(error){
                return res.json({
                    "retorno": "erro",
                    "mensagem": `Erro ao Cadastrar: ${error}`
                })
            }
            
            return res.json({
                "retorno": "ok",
                "mensagem": "Usuário cadastrado com Sucesso!"
            })
        })
        
        
    } catch (error) {
        return res.json({
            "retorno": "erro",
            "mensagem": `Erro ao Cadastrar: ${error}`
        })
        
    }
    




    // res.json({ retorno: 'ok',mensagem:'Usuário add com sucesso!' })    


})


// rota para atualizacao de registros
app.patch('/atualizar/login',(req,res)=>{
    // cria a var nome e email e atribui os valores enviados via param
    let {id,nome,email} = req.body

    try {
        let sql = ` UPDATE tb_login 
                    SET nome='${nome}', email='${email}' 
                    WHERE id = ${id}`;

        con.query(sql,(error,result)=>{
            if(error){
                return res.send(`Não foi possível atualizar os dados ${error}`)
            }

            res.send(`Dados atualizados com sucesso!`)
        })


    } catch (error) {
        return res.send(`Não foi possível atualizar os dados ${error}`)
        
    }

})

// rota para remover registros(deletar)
app.delete('/deletar/login',(req,res)=>{
    // captura o id
    let id = req.body.id

    try {
        // comando sql que sera executado
        let sql = `DELETE FROM tb_login WHERE id = ${id}`

        con.query(sql,(error,result)=>{
            if(error){
                return res.send(`Não foi possível deletar o registro! ${error}`)
            }
            res.send(`Registro deletado com sucesso!`)
        })

    } catch (error) {
        return res.send(`Não foi possível deletar o registro! ${error}`)        
    }
})



// rota para retorno da pagina de erro
// super mega importante -> ficar no final das rotas
app.use((req,res)=>{
    res.status(404)
    res.send('<h1>Página não encontrada!</h1>')
})

// lista o servidor.. final do arquivo
app.listen(porta, () => {
    console.log(`Servidor rodando: http://localhost:${porta}`)
})