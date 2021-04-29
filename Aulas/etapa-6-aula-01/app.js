const form = document.querySelector(".signup-form");

const clearInput = () => {
    input.value = "";
    input.focus();
}

const logMensage = mensage => {
    console.log(mensage);
}

const isUsernameValid = username => /^[a-zA-Z]{6,12}$/.test(username);

const handleSubmit = (e) => {
    e.preventDefault();

    const input = e.target.username;
    const username = input.value;

    const isAMatch = isUsernameValid(username);

    console.log(isAMatch);

    if (isAMatch) {
      logMensage("O teste da regex passou =)");
      return
    }

    logMensage("O teste da reges não passou =(");
}

form.addEventListener('submit', handleSubmit);

const handleKeyUp = (event) => {
  const isAMatch = isUsernameValid(event.target.value);

  if (isAMatch) {
    event.target.setAttribute("class", "success");
    return;
  }

  event.target.setAttribute("class", "error");
};

form.username.addEventListener('keyup', handleKeyUp)