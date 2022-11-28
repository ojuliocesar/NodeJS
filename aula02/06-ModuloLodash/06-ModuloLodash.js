// Exemplo de uso da Biblioteca Lodash
// Inicializar o npm: npm init / npm i -g npm
// Instalação: npm i --save lodash

const _ = require('lodash');

const numeros = [5, 20, 25];

const numeros2 = [10, 15, 20];

console.log('Soma dos Números:', _.sumBy(numeros));

console.log('Primeiro Número:', _.first(numeros));

console.log('Último Número:', _.last(numeros));

console.log('Maior Número:', _.max(numeros))

console.log('Menor Número:', _.min(numeros));

console.log('Média dos Número:', _.mean(numeros));

console.log('União de Arrays:', _.union(numeros, numeros2));

const numerosMegaSena = () => {
  return Math.trunc(Math.random() *60)
}

const jogoCompleto = _.times(6, numerosMegaSena)

console.log('Números da Mega Sena:', jogoCompleto);
