
// Primeira Parte da Aula
// Parent, children, siblings
// const article = document.querySelector('article');

// Array.from(article.children)
//     .forEach(element => {
//         element.classList.add('article-element')
//     })

// // Procurar por filhos de um elemento
// console.log(article.children);

// const title = document.querySelector('h2');

// // Procurar pelo pai
// console.log(title.parentElement.parentElement);

// // Procurar pelo próximo irmão
// console.log(title.nextElementSibling);

// // Procurar pelo irmão anterior
// console.log(title.previousElementSibling);

// Segunda Parte da Aula
// const list = document.querySelector("ul");
// const button = document.querySelector('button');

// const handleClick = () => {
//   const createItem = document.createElement("li");
//   createItem.textContent = "Novo item";
//   list.prepend(createItem);
// };

// button.addEventListener("click", handleClick);

// const deleteItem = (evento) => {
//     const isChildren = evento.target.nodeName === "LI";
    
//     isChildren ? evento.target.remove() : null;
// };

// list.addEventListener('click', deleteItem)

// Terceira Parte da Aula

const paragraph = document.querySelector('.copy-me');

paragraph.addEventListener('copy', (evento) => {
  console.log('Copiou', evento);
  evento.returnValue = true
  
})

const div = document.querySelector('.box');

div.addEventListener('mousemove', event => {
  div.textContent = `X ${event.offsetX} | Y ${event.offsetY}`
})

document.addEventListener('wheel', event => {
  console.log(event.pageX, event.pageY);
})