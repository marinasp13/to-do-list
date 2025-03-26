
import { salvarItem } from "./salvarItem.js";
import { adicionarItem } from "./adicionarItem.js";
import { pink, cozy, darkMode, lightMode } from "./temas.js";
import { progresso } from "./barraProgresso.js";

const btnSalvar = document.querySelector("#fomulario-btn-salvar");
const formContainer = document.querySelector("#formulario-container");
const adicionarBtn = document.querySelector("#menu-lateral-btn-adc-item");
const cancelarBtn = document.querySelector("#fomulario-btn-cancelar");
export const itensSalvos = [];
export const itensFinalizados = [];

adicionarBtn.addEventListener("click", adicionarItem);
btnSalvar.addEventListener("click", salvarItem);
cancelarBtn.addEventListener("click", cancelar);

export function cancelar(evento){
    evento.preventDefault();
    formContainer.style.display= "none"; 
}

document.addEventListener("change", function(){
    console.log("lista:", itensSalvos);
    console.log("finalizados:", itensFinalizados);
});

const teste = document.querySelector(".temas-label-texto");

teste.addEventListener("click", function(){
    console.log("lista:", itensSalvos);
    console.log("finalizados:", itensFinalizados);
});










