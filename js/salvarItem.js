import { criarItem } from "./criarItem.js";
import { verificarListaVazia } from "./verificarListaVazia.js";
import {itensSalvos, cancelar} from "./script.js";
import { progresso } from "./barraProgresso.js";

const listaDeItens = document.querySelector("#lista-de-itens-pendentes");
const nomeInput = document.querySelector("#formulario-item-nome");
const descricaoInput = document.querySelector("#formulario-item-descricao");


export function salvarItem(evento){
    evento.preventDefault();
    
    if(nomeInput.value !== "" && nomeInput.value.trim() !== ""){
        const item = criarItem(nomeInput.value, descricaoInput.value);
        listaDeItens.appendChild(item);
        itensSalvos.push(item);
        verificarListaVazia(listaDeItens);
        nomeInput.value = "";
        descricaoInput.value = "";
        progresso();  
    } else {
        alert("Item vazio. Insira o nome do item para continuar.");
    }
    cancelar(evento);        
}