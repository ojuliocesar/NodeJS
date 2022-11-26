// Cria e exporta o módulo Calculadora
module.exports = {
  soma: (a, b) => parseFloat(a) + parseFloat(b),
  sub: (a, b) => parseFloat(a) - parseFloat(b),
  mult: (a, b) => parseFloat(a) * parseFloat(b),
  div: (a, b) => parseFloat(a) / parseFloat(b)
}