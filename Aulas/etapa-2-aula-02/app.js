
// Estrutura condicional - IF

// let age = 18;

// // Não vai ser executado
// if (age > 18) {
//     console.log("Você tem mais de 18 anos");
// }

// // Deu condição verdadeira, então executa
// if (age === 18) {
//     console.log("Você tem 18 anos");
// }

// let age = 18;

// if(age > 18) {
//     console.log('Você tem mais de 18 anos');
// }
// else {
//     console.log('Você tem 18 anos ou menos');
// }

// let age = 17;

// if (age >= 18) {
//     console.log('Você tem mais de 18 anos');
// }
// else if (age > 16) {
//     console.log('Você tem mais de 16 anos');
// }
// else {
//     console.log('Você tem 16 anos ou menos');
// }

// const temVulnerabilidadeEconomica = false;
// const eEstudante = true;

// // Operadores Lógicos 

// // Operador && (e)

// const eCrianca = false;
// const eIdoso = true;
// const temDinheiro = false;

// if (temDinheiro && (eCrianca || eIdoso)) {
    
//   // Não foi exercutado
//   console.log("Meia entrada liberada");
//   // Agora tem que ter dinheiro e ser uma criança ou idoso.
//   // Como tem &&, precisamos que a sentença da esquerda e direita dê true
// }

// Operadores Lógicos 

// Operador && (e)

const maiorDeIdade = true;
const temDinheiro = true;

if (temDinheiro && maiorDeIdade) {

  // Foi executado
  console.log("Meia entrada liberada");
  // Agora tem que ter dinheiro e ser maior de idade
  // Como tem &&, precisamos que a sentença da esquerda e direita dê true
}