

// Função tradicional (expression ou declaration)
// function double(number) {
//     return number * 2
// }

// // Arrow functions
// const double = number => number * 2

// // As arrow functions tem retorno implicito
// // Não precisam de parênteses quando recebe somente
// // um parãmetro.

// const result = double(2);

// console.log(result);

// Funções VS Métodos

// Função
// const nome = 'Bernardo';

// const myName = () => `Meu nome é ${nome}`;

// console.log(myName());

// // Métodos
// const nomeEmMaiusculo = nome.toUpperCase();

// console.log(nomeEmMaiusculo);

// Callback

// const myName = (callback) => {
//     const nome = 'Meu nome é Bernardo';

//     callback(nome);
// }

// myName((string) => console.log(string));

// ForEach

// const redesSociais = ['facebook', 'twitter', 'instagram', 'linkedin'];

// const logItemArray = (redeSocial, index, arrayIterado) => {
//   console.log(index, redeSocial, arrayIterado);
// };

// redesSociais.forEach(logItemArray)

const ul = document.querySelector('[data-js="ul"]');

const redesSociais = ["facebook", "twitter", "instagram", "linkedin"];

let templateHTML = '';

const gerarItensLi = redeSocial => {
    templateHTML += `<li style="color: red;">${redeSocial}</li>`;
}

redesSociais.forEach(gerarItensLi);

ul.innerHTML = templateHTML
