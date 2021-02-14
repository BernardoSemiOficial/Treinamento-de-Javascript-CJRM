// // Booleans

// const randomArray = [true, false, "true", 'false'];

// console.log(randomArray); [true, false, "true", "false"]

// // Métodos de booleans

// // Includes
// const email = 'bernardo.258@hotmail.com'
// const frutas = ['Abacaxi', 'Maçã', 'Banana'];

// const includesEmail = email.includes('258');

// // Includes direto na string retorna true 
// // se alguma parte da string der match
// // do item solicitado.
// console.log(includesEmail) // true

// const includesFrutas = frutas.includes('Abacaxi')

// // Includes em array só retornará true se
// // a palavra inteira der match
// console.log(includesFrutas); // true


// // Some

// const novasFrutas = ['Limão', 'Uva', 'Cajú'];

// const someNovasFrutas = novasFrutas.some((fruta) => fruta == 'Uva');

// // O método some retorna true se ao menos
// // um item passar na verificação
// console.log(someNovasFrutas); // true


// // Every

// const everyNovasFrutas = novasFrutas.every((fruta) => typeof fruta == "string")

// // O método every são dá true quando todos os item
// // retornam true para a verificação
// console.log(everyNovasFrutas); // true


// // Comparações numéricas

// console.log(30 == 30)  // true
// console.log(31 != 30)  // true
// console.log(30 > 30);  // false
// console.log(31 > 30);  // true
// console.log(30 < 30);  // false
// console.log(29 < 30);  // true
// console.log(30 >= 30); // true
// console.log(30 <= 32); // true

// // Comparações em string

// // As letras minúsculas tem peso maior na tabela unicode
// // por isso que são consideradas maiores que as maiúsculas

// console.log('banana' == 'limão'); // false
// console.log('banana' == 'banana'); // true
// console.log('banana' == 'Banana'); // false
// console.log('banana' > 'Banana'); // true
// console.log('banana' < 'Banana'); // false
// console.log('banana' <= 'Banana'); // false
// console.log('banana' >= 'Banana'); // true


// // Comparação estrita

// // === ou !== Verifica o valor e o tipo na comparação 
// const age = 30;

// console.log(age === 30); // true
// console.log(age === "30"); // false
// console.log(age !== 30); // false
// console.log(age !== "30"); // true


// Aula 4-04

// Conversões de tipo

let numString = '120';

console.log(numString + 1); // "1201"

// Converter para número com o construtor Number
numString = Number(numString);

console.log(numString + 1); // 121


// Converter para string com o construtor String
let numberOne = 1;

numberOne = String(numberOne)

console.log(numberOne); // "1"


// Converter para boleano com o construtor Boolean
let numberTen = 10;

numberTen = Boolean(numberTen); 

console.log(numberTen); // true


/* Valores falsy 
    - false,
    - "", '', ``,
    - 0,
    - NaN,
    - undefined,
    - null
*/


/* Valores truthy
    - Qualquer valores que não é um falsy
*/

