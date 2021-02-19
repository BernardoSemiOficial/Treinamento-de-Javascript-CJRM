

// Variáveis e escopo de bloco

// Variável declarada no escopo global.
// Todos tem acesso a ela.
const age = 19;

if (true) {
  // Variável declarada no escopo de bloco do if.
  // Somente quem está nesse bloco ou em um mais profundo
  // tem acesso a ela.
  const age = 20;
  console.log(`1º bloco de código: ${age}`); // 20

  if (true) {
    // Esse escopo vai acessar a variável "age" mais próxima.
    console.log(`2º bloco de código: ${age}`); // 20
  }
}

// Esse local não tem acesso a variável "age" que 
// tem valor 20.
console.log(`Bloco de fora código: ${age}`); // 19

// This

// O this em objetos nos auxilia a acessar propriedade e
// métodos do objeto sem precisar inserir o nome do objeto.

// O this tem um comportamento diferente em function declarations
// e arrow functions.

// O this em functions declarations sempre será objeto que o
// método está sendo executado.

// O this em arrow function sempre será em relação onde o objeto
// está declarado.

const user = {
  name: "Bernardo",
  age: 19,
  city: "São Paulo",
  email: "bernardo.258@hotmail.com",
  blogPosts: ["Javascript Moderno", "React a biblioteca famosa"],

  login () {
    console.log("Usuário logado");
  },

  logout () {
    console.log("Usuário deslogado");
  },

  logBlogPosts () {
    // Esse é um caso que podemos utilizar o this,
    // sem precisar colocar user.blogPosts.
    return this.blogPosts;
  },

  logName: () => {
    return this; // Window
  },

};

console.log(user);
console.log(user.logBlogPosts());
console.log(user.logName());


