// // Objetos em Arrays

// const filmes = {
//     acao: [
//         { title: 'Rambo', visualizacoes: 25 },
//         { title: '007', visualizacoes: 55 }
//     ],
//     logFilmesAcao () {
//         console.log('Esses são os filmes de ação mais assistidos: ');
        
//         this.acao.forEach(filme => 
//             console.log(`${filme.title} tem ${filme.visualizacoes} visualizações.`))
//     }
// }

// console.log(filmes.acao);

// // 0: {title: "Rambo", visualizacoes: 25}
// // 1: {title: "007", visualizacoes: 55}

// filmes.logFilmesAcao();

// // Esses são os filmes de ação mais assistidos: 
// // Rambo tem 25 visualizações.
// // 007 tem 55 visualizações.

// Tipos primitivos

// Apesar de "pontoDois" estar atribuindo o valor
// da variável "pontoUm" para ele, nesse momento está
// sendo feito uma copia do valor, mas com um novo lugar na memória.
// let pontoUm = 50;
// let pontoDois = pontoUm;

// console.log(`pontoUm: ${pontoUm} | pontoDois: ${pontoDois}`);
// // pontoUm: 50 | pontoDois: 50

// // Vai ser alterado somente o valor de "pontoUm"
// pontoUm = 100;

// console.log(`pontoUm: ${pontoUm} | pontoDois: ${pontoDois}`);
// // pontoUm: 100 | pontoDois: 50


// Tipos de referência

// Apesar de "pontoDois" aparentemente receber um valor,
// na verdade, ele está recebendo o mesmo ponteiro para
// o objeto, ou seja, é o mesmo objeto na memória. Sendo assim,
// Se eu alterar uma das propriedades do objeto em uma das variáveis.
// Eu estaria alterando para as duas variáveis.
let pontoUm = { nome: "Bernardo", idade: 19 };
let pontoDois = pontoUm;

console.log(pontoUm, pontoDois);
// {nome: "Bernardo", idade: 19} {nome: "Bernardo", idade: 19}

pontoUm.idade = 20;

console.log(pontoUm, pontoDois);
// {nome: "Bernardo", idade: 20} {nome: "Bernardo", idade: 20}

