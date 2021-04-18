const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
    popup.style.display = 'block';
})

popup.addEventListener('click', event => {
    const clickedElement = event.target;
    const classElement = [...clickedElement.classList];
    const classNameToClose = ['popup-wrapper', 'popup-close', 'popup-link']

    for(let i = 0; i < classNameToClose.length; i++) {
        
        const temAClasse = classElement.some(classe => classe === classNameToClose[i]);
        if(temAClasse) {
            popup.style.display = 'none'
            break;
        };
    }
})