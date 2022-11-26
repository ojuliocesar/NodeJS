// Importação do Módulo Readline
const readline = require('readline');

const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout

});

rl.question("Qual seu nome?\n \r", (nome) => {
  console.log(`Olá ${nome}`);

  rl.question("Qual sua idade? \n \r", (idade) => {

    if (idade => 18) {
      console.log("Você não pode tirar carta...")

    } else {
      console.log("Você já pode tirar carta...")
      
    }

    rl.close();
  })
});