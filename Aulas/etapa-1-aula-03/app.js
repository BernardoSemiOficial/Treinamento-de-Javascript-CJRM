// Array

// Array com valores em string
const heroes = ['Batman', 'Homem-aranha', 'Homem-de-ferro'];
// console.log(heroes); // ["Batman", "Homem-aranha", "Homem-de-ferro"]

// Array com valores numéricos
const ages = [19, 20, 25, 19, 30];
// console.log(ages); // [19, 20, 25, 19, 30]

// Array com valores diversos
const randomArray = ['Batman', 'Bernardo', 20, 19];
// console.log(randomArray);

// Métodos de Array

const arrayJoin = heroes.join(", ");
// console.log(arrayJoin); // "Batman, Homem-aranha, Homem-de-ferro"

const arrayPush = heroes.push('Jaguar', 'Pantera negra');
// console.log(arrayPush, heroes);
// 5, ["Batman", "Homem-aranha", "Homem-de-ferro", "Jaguar", "Pantera negra"]

const arrayPop = heroes.pop();
// console.log(arrayPop, heroes);
// Pantera negra, ["Batman", "Homem-aranha", "Homem-de-ferro", "Jaguar"]

const arrayConcat = heroes.concat(['Bruno', 'Breno']);
console.log(arrayConcat);
// ["Batman", "Homem-aranha", "Homem-de-ferro", "Jaguar", "Bruno", "Breno"]
