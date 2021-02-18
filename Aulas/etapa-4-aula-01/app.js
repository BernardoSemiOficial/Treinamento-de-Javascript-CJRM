
// Objetos 

// Eles são estruturas de dados no Javascript representam um elemento
// na nossa aplicação. Então, traçando uma analógia com o mundo real,
// se pensarmos que um celular tem propriedade
// como cor, modelo e preco, e além disso que possui
// funcionalidades como fazer ligações e enviar mensagens. 
// No mundo do Javascript, esse celular poderia ter essas
// propriedades e métodos para representa-lo.


// Criando um objetos literal
const celular = {
  cor: "preto",
  modelo: "Sansung A50",
  preco: 1249.0,
  anosDeUso: [2020, 2021],

  fazerLigacao: function (numero) {
    return `Chamando ${numero}...`;
  },

  enviarMensagens: function (numero) {
    return `Mensagem sendo enviada para o ${numero}...`;
  },
};

// // Acessando uma propriedade com "."

// console.log(celular.cor); // preto

// // Alterando o valor de uma propriedade com "."

// console.log(celular.cor); // preto
// celular.cor = 'rosa'
// console.log(celular.cor); // rosa

// // Acessando uma propriedade com []

// console.log(celular['cor']) // preto

// // Alterando o valor de uma propriedade com []

// console.log(celular['cor']) // preto
// celular['cor'] = "rosa";
// console.log(celular['cor']) // preto

// // Acessando uma propriedade com variável
// const key = 'cor';

// console.log(celular[key]) // preto

// console.log(celular.key) // undefined


const mensagem = celular.enviarMensagens("(11) 960156432");

const ligacao = celular.fazerLigacao("(11) 960156432");

console.log(mensagem); // Mensagem sendo enviada para o (11) 960156432...

console.log(ligacao); // Chamando (11) 960156432...