import { progresso } from "./barraProgresso.js";
import { verificarListaVazia } from "./verificarListaVazia.js";
import {itensSalvos} from "./script.js";
const listaDeItens = document.querySelector("#lista-de-itens-pendentes");

export function deletar(evento){
    let confirmacao = confirm("Tem certeza que deseja excluir esse item?");
    
    if(confirmacao){
        evento.target.closest("li").remove(); 
        verificarListaVazia(listaDeItens);
        itensSalvos.splice(evento.target.closest("li"), 1);
        progresso();
    }
}