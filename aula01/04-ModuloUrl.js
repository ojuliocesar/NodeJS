const url = require('url');

let pagina = 'http://localhost/flashfood/dashboard/index.php?page=products';

let partUrl = new url.URL(pagina);

console.log('Domínio:', partUrl.host);

console.log('Caminho ou Rota:', partUrl.pathname);

console.log('Query String:', partUrl.search);

console.log('Paramêtros:', partUrl.searchParams.get('page'));