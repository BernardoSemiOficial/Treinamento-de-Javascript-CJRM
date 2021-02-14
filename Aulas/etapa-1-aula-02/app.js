// Template string
const postTitle = 'Biscoito ou Bolacha?';
const postAutor = 'Bernardo Pereira';
const comentarios = '15';

// Utilizando concatenação no ES5

// usando aspas simples na abertura e fechamento
// para inserir literalmente aspas em uma string, temos que utilizar
// o sinal oposto da abertura e fechamento que declara a string, ou
// seja, utilizar, nesse caso, aspas duplas.
const concatenacaoES5Forma1 = 'O post "' + postTitle + '", do ' + postAutor + ', recebeu ' + comentarios + ' comentários'
// app.js: 13 O post "Biscoito ou Bolacha?", do Bernardo Pereira, recebeu 15 comentários

// usando aspas dublas na abertura e fechamento
// para inserir literalmente aspas em uma string, temos que utilizar
// o sinal oposto da abertura e fechamento que declara a string, ou
// seja, utilizar, nesse caso, aspas simples.
const concatenacaoES5Forma2 = "O post '" + postTitle + "', do " + postAutor + ", recebeu " + comentarios + " comentários"
// app.js: 20 O post 'Biscoito ou Bolacha?', do Bernardo Pereira, recebeu 15 comentários

// Utilizando template string

// para declarar uma template string utilizamos crase
// podemos quebrar linhas, sem quebrar o código.
// podemos utilizar aspas simples ou dublas sem problemas no decorrer da string
const templateString1 = `O post "${postTitle}", do ${postAutor}, recebeu ${comentarios} comentários`;
// app.js:28 O post "Biscoito ou Bolacha?", do Bernardo Pereira, recebeu 15 comentários

const templateString2 = `O post '${postTitle}', do ${postAutor}, recebeu ${comentarios} comentários`;
// app.js:31 O post 'Biscoito ou Bolacha?', do Bernardo Pereira, recebeu 15 comentários

const templateString3 = `
    <h1>${postTitle}</h1>
    <p>Autor: ${postAutor}</p>
    <span>Recebeu ${comentarios} comentários</span>
`;
// console.log(templateString3);
/*
    <h1>Biscoito ou Bolacha?</h1>
    <p>Autor: Bernardo Pereira</p>
    <span>Recebeu 15 comentários</span>
*/


