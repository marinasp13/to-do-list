import {itensSalvos, itensFinalizados} from "./script.js";

const listaFinalizados = document.querySelector("#lista-de-itens-finalizados");
const barraConcluido = document.querySelector("#percentural-concluido");
const percentualTexto = document.querySelector("#percentual-texto");

export function progresso(){
    const percentualConcluido = (itensFinalizados.length / itensSalvos.length)*100;
    const larguraPercentual = parseInt(percentualConcluido);
    

    if(listaFinalizados.childElementCount !== 0 ){
        barraConcluido.style.display= "block";
        barraConcluido.style.width = `${larguraPercentual}%`;
        percentualTexto.style.display= "block";
        percentualTexto.innerHTML= `${larguraPercentual}%`;  
    }else{
        barraConcluido.style.display= "none";
        percentualTexto.style.display= "none";
    }
}