const form = document.querySelector(".signup-form");
// const usernameInput = document.querySelector("#username");

form.addEventListener('submit', e => {
    e.preventDefault();

    // const username = usernameInput.value;

    const username = form.username;
    console.log("Enviado!!", username);
})


const username = "bernar"
const pattern = /^[a-z]{6,}$/g;

const regex = new RegExp(pattern);

const isAMatch = regex.test(username);

if(isAMatch) {
    console.log("O teste da regex passou =)");
}
else {
    console.log("O teste da reges não passou =(");
}