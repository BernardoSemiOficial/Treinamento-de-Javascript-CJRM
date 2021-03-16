

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

const list = document.querySelector("ul");

const deleteItem = (evento) => {
    const isChildren = evento.target.nodeName === "LI";
    
    isChildren ? evento.target.remove() : null;
};

list.addEventListener('click', deleteItem)
// Array.from(list.children).forEach((item) =>
//   item.addEventListener("click", deleteItem)
// );

const button = document.querySelector('button');

const handleClick = () => {
    const createItem = document.createElement('li');
    createItem.textContent = 'Novo item';
    list.prepend(createItem);
}

button.addEventListener('click', handleClick);