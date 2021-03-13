// // innerText
// const paragrafo = document.querySelector('p');

// // visualizando o conteúdo do elemento HTML
// console.log(paragrafo.innerText); // Hello world

// // Incrementando o conteúdo já existente
// paragrafo.innerText += ' Texto inserido';
// console.log(paragrafo); // Hello world Texto inserido

// // Sobreescrevendo o conteúdo existente
// paragrafo.innerText = 'Texto inserido';
// console.log(paragrafo); // Texto inserido


// const paragrafos = document.querySelectorAll('p');

// console.log(paragrafos);

// paragrafos.forEach((paragrafo, index) => {
//     paragrafo.innerText += ` Novo texto ${index + 1}`;
// })


// // innerHTML

// const div = document.querySelector('.content');

// // visualizando o conteúdo do elemento HTML,
// // espaços em branco e as tags HTML
// console.log(div.innerHTML);

// // Incrementando o conteúdo já existente
// div.innerHTML += `
//     <h2>Novo h2</h2>
// `

// // Criar multiplos templates HTML para inserir na página
// const people = ['Jonatan', 'Vinicius', 'Diego'];

// people.forEach(person => {
//     div.innerHTML += `<p>${person}</p>`
// })

// // Link
// const link = document.querySelector('a');

// // Acessando o valor do atributo href do link
// console.log(link.getAttribute("href")); // https://google.com

// // Alterando o texto do link
// link.innerText = 'Github | Bernardo';

// // Alterando o atributo href do link
// link.setAttribute("href", 'https://github.com/BernardoOficial')


// // Parágrafo
// const p = document.querySelector('content p');

// // Acessando o valor do atributo class do p
// console.log(p.getAttribute('class'));

// // Alterando o valor do atributo class do p
// p.setAttribute('class', 'sucess');

// // Criando um novo atributo para o p
// p.setAttribute('style', 'color: red;');


// Modificando estilos CSS (inline)

// Conseguimos aplicar css inline através da propriedade
// style e nome do estilo e valor que queremos aplicar ao 
// elemento no HTML

// const paragrafo = document.querySelector('.container p');

// paragrafo.style.color = 'blue';
// paragrafo.style.margin = '50px';
// paragrafo.style.fontSize = '50px';
// paragrafo.style.textShadow = '2px 2px 5px #999';


// ClassList - add, remove e toggle
const paragrafos = document.querySelectorAll('p');

// O método "add" adicionar uma classe ao elemento
// O método "remove" remove uma classe em um elemento

paragrafos.forEach(paragrafo => {
    
    const paragrafoPossuiSuccess = paragrafo.innerText.includes('success');
    const paragrafoPossuiError = paragrafo.innerText.includes('error');

    if(paragrafoPossuiSuccess) {
        paragrafo.classList.add('success');
    }
    else if (paragrafoPossuiError) {
      paragrafo.classList.add("error");
    }
})

const title = document.querySelector('h1');

// Adicionamos o show, pois o elemento não tinha 
// inicialmente a classe
title.classList.toggle('show');

title.classList.toggle('show');
// Removemos o show, pois o elemento já tinha a classe
// Ao passar pelo linha 103