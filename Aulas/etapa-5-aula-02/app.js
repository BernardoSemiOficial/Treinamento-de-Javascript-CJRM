// innerText
const paragrafo = document.querySelector('p');

// visualizando o conteúdo do elemento HTML
console.log(paragrafo.innerText); // Hello world

// Incrementando o conteúdo já existente
paragrafo.innerText += ' Texto inserido';
console.log(paragrafo); // Hello world Texto inserido

// Sobreescrevendo o conteúdo existente
paragrafo.innerText = 'Texto inserido';
console.log(paragrafo); // Texto inserido


const paragrafos = document.querySelectorAll('p');

console.log(paragrafos);

paragrafos.forEach((paragrafo, index) => {
    paragrafo.innerText += ` Novo texto ${index + 1}`;
})


// innerHTML

const div = document.querySelector('.content');

// visualizando o conteúdo do elemento HTML,
// espaços em branco e as tags HTML
console.log(div.innerHTML);

// Incrementando o conteúdo já existente
div.innerHTML += `
    <h2>Novo h2</h2>
`

// Criar multiplos templates HTML para inserir na página
const people = ['Jonatan', 'Vinicius', 'Diego'];

people.forEach(person => {
    div.innerHTML += `<p>${person}</p>`
})

// Link
const link = document.querySelector('a');

// Acessando o valor do atributo href do link
console.log(link.getAttribute("href")); // https://google.com

// Alterando o texto do link
link.innerText = 'Github | Bernardo';

// Alterando o atributo href do link
link.setAttribute("href", 'https://github.com/BernardoOficial')


// Parágrafo
const p = document.querySelector('p');

// Acessando o valor do atributo class do p
console.log(p.getAttribute('class'));

// Alterando o valor do atributo class do p
p.setAttribute('class', 'sucess');

// Criando um novo atributo para o p
p.setAttribute('style', 'color: red;');

