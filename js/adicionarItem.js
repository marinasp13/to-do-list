
const formContainer = document.querySelector("#formulario-container");
const nomeInput = document.querySelector("#formulario-item-nome");

export function adicionarItem (){
    formContainer.style.display= "Flex";
    nomeInput.focus()
}