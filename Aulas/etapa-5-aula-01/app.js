

// DOM - Document Object Model

// O DOM é uma cópia do HTML da página em que podemos manipula-la
// e assim afetar o HTML em página.

// console.log(document);

/* 
    <!DOCTYPE html>
    <html lang=​"pt-br">
        ​<head>​…​</head>
        ​<body>​…​</body>​
    </html>​
*/

// Através do document podemos ter acesso a árvore de elementos da página.
// Como o body, head, html etc.
// É chamado de árvore pois qualquer elemento em tela é descende de um elemento pai.
// Dando uma visão de vários galhos de uma árvore.

// Uma forma de pegarmos um elemento é com querySelector('seletor');

// console.log(document.querySelector('body'));


// querySelector e querySelectorAll

// const paragrafo = document.querySelector('p');

// const paragrafos = document.querySelectorAll('p');

// const erroDiv = document.querySelector('div.error');

// const erros = document.querySelectorAll('.error');


// console.log(paragrafo, paragrafos);
// // <p>​Hello world!​</p>​ NodeList(3) [p, p, p.error]

// console.log(erroDiv, erros);
// // <div class=​"error">​Outra mensagem de erro​</div>​ NodeList(2) [p.error, div.error]


// Obter um elemento através do ID
const title = document.getElementById('title');

console.log(title);
// <h1 id=​"title">​Query selector & query selector all​</h1>​

const erros = document.getElementsByClassName('error');

console.log(erros);
// HTMLCollection(2) [p.error, div.error]

const paragrafos = document.getElementsByTagName('p');

console.log(paragrafos);
// HTMLCollection(3) [p, p, p.error]