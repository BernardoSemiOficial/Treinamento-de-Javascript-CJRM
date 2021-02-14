

// Operador Lógico ! (not)

// const usuarioLogado = false;

// // O if só funciona com resultado true.
// // E para executar um código para usuarioLogado = false,
// // precisamos inverter seu valor para true com o operador not (!)
// // Lembrando o operador não reatribui um novo valor para a variável.

// if (!usuarioLogado) {
//     console.log("você precisa realizar o login no sistema para continuar");
// }

// console.log(!true); // false
// console.log(!false); // true


// Break

// O break irá parar uma estrutura de repetição.

// const scores = [25, 50, 0, 75, 85, 100, 80, 20];

// for (let i = 0; i < scores.length; i++) {

//     console.log(`sua pontuação: ${scores[i]}`);

//     if (scores[i] === 100) {
//         console.log('Você atingiu a pontuação máxima, parabéns!');
//         // A estrutura de repetição irá parar com o break abaixo, então
//         // os números 80 e 20 não serão exibidos no console
//         // por causa do break.
//         break
//     }
// }


// Continue

// O continue irá pular uma determinada execução para próxima.

// const scores = [25, 50, 0, 75, 85, 100, 80, 20];

// for (let i = 0; i < scores.length; i++) {

//     if(scores[i] === 0) {
//         // Irá pular para a próxima iteração e não irá executar o 
//         // código abaixo do continue.
//         continue
//     }

//     console.log(`sua pontuação: ${scores[i]}`);

//     if (scores[i] === 100) {
//         console.log('Você atingiu a pontuação máxima, parabéns!');
//         // A estrutura de repetição irá parar com o break abaixo, então
//         // os números 80 e 20 não serão exibidos no console
//         // por causa do break.
//         break
//     }
// }


// Switch

// Switch é uma alternativa ao IF quando temos muitos casos.

const nota = 'B';

switch (nota) {

    case 'A': 
        console.log('Você tirou nota A');
        break
    case 'B': 
        console.log('Você tirou nota B');
        break
    case 'C': 
        console.log('Você tirou nota C');
        break
    case 'D': 
        console.log('Você tirou nota D');
        break
    case 'E': 
        console.log('Você tirou nota E');
        break
    case 'F': 
        console.log('Você tirou nota F');
        break
    default: 
        console.log("nota inválida");
}