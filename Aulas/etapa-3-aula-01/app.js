
// Function declaration
// function mensagem() {
//     console.log('Hello, world!');
// }

// mensagem() // Hello, world!

// // Não vai dar erro se chamar a função antes da declaração
// meuNome() // Bernardo 

// function meuNome() {
//     console.log('Bernardo');
// }


// Funtion expression
// const mensagem = function() {
//     console.log('Hello, world!');
// }

// mensagem() // Hello, world!

// // Vai dar erro se chamar a função antes da declaração
// meuNome() // Bernardo

// const meuNome = function() {
//     console.log('Bernardo');
// }

// Argumentos e parâmetros

// const myName = function (parametro) {
//     // Os valores recebidos na função
//     // são chamados de Parâmetros.

//     const nome = parametro;
//     console.log(`Oi, ${nome}!`);
// }

// const argumento = 'Bernardo';
// // Ao inserir valores na execução da função
// // esses valores são chamados de argumentos da função.
// myName(argumento);

// Parâmetros Padrões

// const myName = function (nome, idade = 'desconhecidos') {
//     // Os valores recebidos na função
//     // são chamados de Parâmetros.

//     // Existem também os parâmetros padrões,
//     // que são valores que são atribuidos a variável
//     // caso não seja passado o argumento na chamada 
//     // da função.

//     console.log(`Oi, ${nome}! Você tem ${idade} anos?`);
// }

// const argumento = 'Bernardo';
// // Ao inserir valores na execução da função
// // esses valores são chamados de argumentos da função.
// myName(argumento, 19);

// Utilizando return na função

// const double = function (number) {
//     const multiplicaPor2 = number * 2;

//     // A variável multiplicaPor2 não é visivel fora
//     // do escopo da função.
//     // Retornando o resultado para quem chamou a função
//     return multiplicaPor2;
// }

// const resultado = double(8);

// const mensagem = function (number) {
//     return `O resultado foi: ${number}`
// }

// console.log(mensagem(resultado));


