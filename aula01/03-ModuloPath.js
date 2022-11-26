const path = require('path');

let arquivo = 'cup-of-coffee-gb2275dc5a_1920.jpg';

console.log('Extensão:', path.extname(arquivo));

console.log('Nome completo:', path.basename(arquivo));

console.log('Nome do Diretório:', path.dirname(arquivo));

console.log('Nome absoluto:', path.resolve(arquivo));