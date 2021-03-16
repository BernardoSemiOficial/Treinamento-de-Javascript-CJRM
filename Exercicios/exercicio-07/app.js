/*
  01

  - Inverta o valor dos booleans do console.log() abaixo;
  - O resultado exibido no console deve ser: false true.
*/

// console.log(!true, !false)
console.log(!true, !false);

/*
  02

  - Abaixo do array "animals", verifique se o animal "leão" **não** existe no  
    array. Se não existir, exiba no console a mensagem "Leão não existe no array  
    animals.";
  - Se existir, exiba no console a mensagem "Existe um leão no array animals.".
*/

const animals = ['macaco', 'tucano', 'elefante', "leão",'pavão', 'hipopótamo'];
// const naoExisteItemLeao = !animals.includes("leão");

// if(naoExisteItemLeao) {
//   console.log('Leão não existe no array animals');
// }
// else {
//   console.log('Existe um leão no array animals');
// }

const existeLeaoNoArray = !animals.includes('leão');

if(existeLeaoNoArray) {
  console.log(`Leão não existe no array animals.`);
} else {
  console.log(`Existe um leão no array animals.`);
}

/*
  03

  - Some os números do array abaixo;
  - Se durante a soma, o resultado ultrapassar 400, pare a operação e exiba  
    a frase abaixo no console, substituindo "RESULTADO_DA_SOMA" pelo valor  
    correto.
  
  "A soma ultrapassou 400. Até aqui, o valor atual é RESULTADO_DA_SOMA."
*/

const randomNumbers = [59, 61, 73, 57, 35, 73, 21, 87, 43];
// let somRandomNumbers = 0;
// const numLimit = 400;

// for(let i = 0; i < randomNumbers.length; i++) {

//   console.log(somRandomNumbers);
//   somRandomNumbers += randomNumbers[i];
  
//   somMaiorQueLimit = somRandomNumbers > numLimit;

//   if (somMaiorQueLimit) {
//     console.log(
//       `A soma ultrapassou 400. Até aqui, o valor atual é ${somRandomNumbers}`
//     );
//     break;
//   }

// }

let somaNumbers = null;

for(let i = 0; i < randomNumbers.length; i++) {

  const somaEMaiorQue400 = (somaNumbers + randomNumbers[i]) >= 400;

  if(somaEMaiorQue400) {
    console.log(
      `A soma ultrapassou 400. Até aqui, o valor atual é ${somaNumbers}.`
    );
    break
  }

  somaNumbers += randomNumbers[i];
}


/*
  04

  - Concatene as strings do array abaixo, formando uma frase;
  - Se durante a concatenação a palavra "certeza" existir, ela não deve ser  
    concatenada;
  - Exiba a frase no console.
*/

const sentence = ['A', 'certeza', 'dúvida', 'é', 'o', 'princípio', 'da', 'sabedoria.']
// let frase = '';

// for(let i = 0; i < sentence.length; i++) {
//   const palavraAtual = sentence[i];

//   if(palavraAtual === 'certeza')
//     continue

//   frase += ' ' + palavraAtual;
// }

// console.log(frase);

let frase = '';

for(let i = 0; i < sentence.length; i++) {

  const palavraDiferenteDeCerteza = sentence[i] !== 'certeza';

  if(palavraDiferenteDeCerteza) {
    frase += ` ${sentence[i]}`;
  }
}

console.log(frase);

/*
  05

  - Itere sobre o array "randomValues" apenas até a 4ª string dele;
  - Exiba a string abaixo no console, mantendo a formatação de lista e inserindo  
    as informações corretas:

  "
    3 informações sobre o array randomValues:
      - As primeiras 4 strings são XX, XX, XX e XX;
      - Até que as primeiras 4 strings fossem iteradas, XX booleans foram iterados;
      - O array foi iterado por XX vezes.
  "
*/

const randomValues = [57, false, 'JS', [], true, 'HTML', 31, null, false, 'CSS', 97, true, 'Git', 11, 'sticker', false, 'GitHub', true, null]

// let somIteracoesNoArray = 0;
// let somBooleansIterados = 0;
// let somStringsIterados = 0;
// let stringIteradas = '';

// for(let i = 0; i < randomValues.length; i++) {

//   somIteracoesNoArray++;
//   const valorAtual = randomValues[i];
//   const typeofDoValorAtual = typeof valorAtual;

//   const typeofIgualAString = typeofDoValorAtual === 'string';
//   const typeofIgualABoolean = typeofDoValorAtual === 'boolean';

//   if(typeofIgualAString) {
//     somStringsIterados++;
//     stringIteradas += valorAtual + ", ";

//     if(somStringsIterados === 4) break
//   }
//   else if (typeofIgualABoolean) {
//     somBooleansIterados++;
//   } 

// }

// const stringFormatada = stringIteradas.replace(', Git,', ' e Git;');

// console.log(`As primeiras 4 strings são: ${stringFormatada}`);
// console.log(`Até que as primeiras 4 strings fossem iteradas, ${somBooleansIterados} booleans foram iterados;`);
// console.log(`O array foi iterado por ${somIteracoesNoArray} vezes.`);

let totalDeIteracoes = null;
let totalDeStringIterados = null;
let totalDeBooleanIterados = null;
let stringIteradas = '';

for(let i = 0; i < randomValues.length; i++) {
  
  const currentItem = randomValues[i];
  const isString = typeof currentItem === 'string';
  const isBoolean = typeof currentItem === 'boolean';
  
  if (isString) {
    stringIteradas += `${currentItem}, `;
    totalDeStringIterados++;

    if(totalDeStringIterados === 4) {
      break
    }
  }
  else if(isBoolean) {
    totalDeBooleanIterados++;
  }
  totalDeIteracoes++;
}

const stringFormatada = stringIteradas.replace(', Git, ', ' e Git');

console.log(`
3 informações sobre o array randomValues:
- As primeiras 4 strings são ${stringFormatada};
- Até que as primeiras 4 strings fossem iteradas, ${totalDeBooleanIterados} booleans foram iterados;
- O array foi iterado por ${totalDeIteracoes} vezes.
`);


/*
  06

  - Descomente a constante abaixo atribua a ela algum tipo de bebida. Exemplo:  
    água, refrigerante ou suco;
  - Utilize um switch statement com cases para essas 3 possibilidades de bebida;
  - Se o tipo da bebida é água, atribua à uma variável a mensagem "Substância 
    química cujas moléculas são formadas por dois átomos de hidrogênio e um de 
    oxigênio.";
  - Se o tipo da bebida é refrigerante, a mensagem "Bebida não alcoólica e não 
    fermentada, fabricada industrialmente, à base de água mineral e açúcar." 
    deve ser armazenada;
  - Se é suco, atribua a mensagem "Bebida produzida do líquido extraído de 
    frutos.";
  - Se nenhum desses 3 tipos de bebida der match, a variável deve armazenar 
    "Bebida desconhecida.";
  - Exiba a mensagem no console. Teste também as outras possibilidades de tipo  
    da bebida além da que você escolheu.
*/

const drinkType = 'água';

// let mensagem = '';

// switch(drinkType) {
//   case 'água':
//     mensagem = 'Substância química cujas moléculas são formadas por dois átomos de hidrogênio e um de oxigênio.'
//     break
//   case 'refrigerante':
//     mensagem = 'Bebida não alcoólica e não fermentada, fabricada industrialmente, à base de água mineral e açúcar.'
//     break
//   case 'suco':
//     mensagem = 'Bebida produzida do líquido extraído de frutos.';
//     break
//   default:
//     mensagem = 'Bebida desconhecida';
// }

// console.log(mensagem);

let mensagem = '';

switch(drinkType) {
  case 'água':
    mensagem = "Substância química cujas moléculas são formadas por dois átomos de hidrogênio e um de oxigênio.";
    break
  case 'refrigerante':
    mensagem = "Bebida não alcoólica e não fermentada, fabricada industrialmente, à base de água mineral e açúcar.";
    break
  case 'suco':
    mensagem = "Bebida produzida do líquido extraído de frutos.";
    break
  default: 
    mensagem = 'Bebida desconhecida.'
}

console.log(mensagem);

/*
  07

  - Reescreva o código comentado abaixo, utilizando um switch statement;
  - Depois de escrever o switch, modifique o valor da declaração da const "a"  
    para testar o switch que você escreveu.
*/

const number = 1;

// if (a === 0) {
//   console.log(`O valor de "a" é ${a}`)
// } else if (a === 1) {
//   console.log(`O valor de "a" é ${a}`)
// } else {
//   console.log('O valor de "a" é qualquer número, exceto 0 e 1')
// }

// switch(number) {
//   case 0:
//     console.log(`O valor de number é ${number}`);
//     break
//   case 1:
//     console.log(`O valor de number é ${number}`);
//     break
//   default:
//     console.log(`O valor de number é qualquer número, exceto 0 e 1`);
//     break
// }

const textDeA = 'O valor de "a" é';

switch(number) {
  case 0:
    console.log(`${textDeA} ${number}`);
    break
  case 1:
    console.log(`${textDeA} ${number}`);
    break
  case 2:
    console.log(`${textDeA} qualquer número, exceto 0 e 1`);
    break
}